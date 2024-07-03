// hooks/useChatNotifications.ts
import { ref, watch, type Ref } from 'vue';
import type { Chat } from '@/services/AMIGOS_CHAT/types';
import { handlePlayNotificationSound } from '@/services/AMIGOS_CHAT/utils';

export function useChatNotifications(chats: Ref<Chat[]>, filteredChats: Ref<Chat[]>) {
    const socket = ref<WebSocket | null>(null);

    watch(chats, () => {
        const userId = sessionStorage.getItem("userId");
        socket.value = new WebSocket(`ws://localhost:8080/chats-notifications?userId=${userId}`
        );

        if (chats.value.length > 0) {
            socket.value.onopen = () => {
                console.log('Conexión a notificaciones abierta');
            };

            socket.value.onmessage = (event) => {
                const notificationData = JSON.parse(event.data);
                // console.log('Notificacion recibida', notificationData);
                if (notificationData.tipoNotificacion === 'MENSAJE_RECIBIDO') {
                    handleAddUnreadMessages(notificationData.chatId, notificationData);
                }
            };

            socket.value.onclose = () => {
                console.log('Conexión cerrada');
            };
        }
    });

    const handleAddUnreadMessages = (chatId: number, notificationData: any) => {
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
                    mensajesSinLeer: (updatedChats[chatIndex].mensajesSinLeer || 0) + 1,
                    ultimoMensajeTimestamp: parseInt(notificationData.timestamp),
                };
                handlePlayNotificationSound();
            }
            filteredChats.value = updatedChats;
        }
    }



    return {
        socket
    };
}
