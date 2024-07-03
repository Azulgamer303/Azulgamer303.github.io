<script setup lang="ts">
import { faMessage, faUsers } from "@fortawesome/free-solid-svg-icons";
import ChatTile from "@/components/AMIGOS_CHAT/ChatTile.vue";
import Divider from "@/components/AMIGOS_CHAT/AmigosChatDivider.vue";
import PerfilTile from "@/components/AMIGOS_CHAT/AmigosChatPerfilTile.vue";
import IconLabel from "./IconLabel.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect, watch } from "vue";
import AmigosChatSearchbar from "./AmigosChatSearchbar.vue";
import { useChats } from "./hooks/useChats";
import { handlePlayNotificationSound } from "@/services/AMIGOS_CHAT/utils";
import { useChatNotifications } from "./hooks/useChatNotifications";

const { chats, filteredChats, handleSearch } = useChats();
const { socket } = useChatNotifications(chats, filteredChats);

const router = useRouter();
const route = useRoute();

const isSocialChatRoute = ref(route.path.startsWith('/social/chats/'));


const onClick = () => {
   router.push('/social/');
};

watchEffect(() => {
   isSocialChatRoute.value = route.path.startsWith('/social/chat/');
});

</script>

<template>
   <audio id="notification-sound" src="/src/assets/AMIGOS_CHAT/notification-pop.mp3"></audio>
   <aside class="[grid-area:sidebar] flex flex-col justify-between h-full text-text overflow-hidden">
      <!-- title and friends tab -->
      <section class="flex flex-col gap-6 overflow-hidden">
         <section class="flex items-center justify-between p-6 h-[90px]">
            <IconLabel label="Chats" :icon="faMessage" />
            <router-link to="/social/" class="flex gap-2 items-center" v-if="isSocialChatRoute">
               <IconLabel label="Amigos" :icon="faUsers"
                  class="cursor-pointer hover:bg-background-900/50 p-2 rounded-md transition-all duration-200"
                  @click="onClick ? onClick() : null" />
            </router-link>
         </section>

         <!-- searchbar -->
         <section class="flex w-full px-4">
            <AmigosChatSearchbar :onSearch="handleSearch" placeholder="Buscar chats..." />
         </section>
         <section class="flex flex-col overflow-y-auto max-h-full">
            <ul class="flex flex-col">
               <p class="text-text/50 px-6 mt-2" v-if="filteredChats.length === 0">
                  No se encontraron chats
               </p>
               <li v-for=" chat in filteredChats " :key="chat.chatId">
                  <Divider />
                  <div class="flex w-full">
                     <ChatTile :chat="chat" />
                  </div>
               </li>
            </ul>
         </section>

      </section>


      <!-- user profile -->
      <section>
         <Divider />
         <PerfilTile />
      </section>
   </aside>
</template>
