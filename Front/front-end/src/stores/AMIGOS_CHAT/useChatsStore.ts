import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Chat, Mensaje } from '@/services/AMIGOS_CHAT/types';
import { handlePlayNotificationSound } from '@/services/AMIGOS_CHAT/utils';

export const useChatStore = defineStore('chat', () => {
    const chats = ref<Chat[]>([]);
    const filteredChats = ref<Chat[]>([]);

    const setChats = (newChats: Chat[]) => {
        chats.value = newChats;
        filteredChats.value = newChats;
    };

    const addMessageToChat = (chatId: number, message: Mensaje) => {
        const chatIndex = chats.value.findIndex(chat => chat.chatId === chatId);
        if (chatIndex !== -1) {
            const updatedChats = [...chats.value];
            const chatToUpdate = updatedChats[chatIndex];
            chatToUpdate.mensajesSinLeer = (chatToUpdate.mensajesSinLeer || 0) + 1;
            chatToUpdate.mensajes.push(message);

            // update chat position in the list
            updatedChats.splice(chatIndex, 1);
            updatedChats.unshift(chatToUpdate);

            chats.value = updatedChats;
            filteredChats.value = updatedChats;
        }
    };

    const handleNotification = (notificationData: any) => {
        const chatIndex = filteredChats.value.findIndex(chat =>
            (notificationData.chatGrupal && chat.tipo === 'grupal' && chat.chatId === notificationData.chatGrupalId) ||
            (!notificationData.chatGrupal && chat.tipo === 'individual' && chat.chatId === notificationData.chatId)
        );

        if (chatIndex !== -1) {
            const updatedChats = [...filteredChats.value];
            if (notificationData.leida) {
                updatedChats[chatIndex].mensajesSinLeer = 0;
            } else {
                updatedChats[chatIndex] = {
                    ...updatedChats[chatIndex],
                    mensajesSinLeer: (updatedChats[chatIndex].mensajesSinLeer || 0) + 1
                };
                handlePlayNotificationSound();
            }

            // update chat position in the list
            const chatToMove = updatedChats.splice(chatIndex, 1)[0];
            updatedChats.unshift(chatToMove);

            filteredChats.value = updatedChats;
        }
    };

    return {
        chats,
        filteredChats,
        setChats,
        addMessageToChat,
        handleNotification,
    };
});