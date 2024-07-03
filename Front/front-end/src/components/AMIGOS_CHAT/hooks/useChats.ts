import { ref, onMounted } from "vue";
import axios from "axios";
import type { Chat } from "@/services/AMIGOS_CHAT/types";
import { fetchChats } from "@/services/AMIGOS_CHAT/chatService";

export function useChats() {
    const chats = ref<Chat[]>([]);
    const filteredChats = ref<Chat[]>([]);

    const handleFetchChats = async () => {
        try {
            const userId = sessionStorage.getItem('userId');
            chats.value = await fetchChats(userId ?? "1");
            filteredChats.value = [...chats.value];
        } catch (error) {
            console.error(error);
        }
    }

    onMounted(() => {
        handleFetchChats();
    });

    const handleSearch = (searchTerm: string) => {
        searchTerm = searchTerm.trim();
        if (searchTerm === '') {
            filteredChats.value = [...chats.value];
        } else {
            filteredChats.value = chats.value.filter(chat =>
                chat.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    };

    return {
        chats,
        filteredChats,
        handleSearch,
    };
}