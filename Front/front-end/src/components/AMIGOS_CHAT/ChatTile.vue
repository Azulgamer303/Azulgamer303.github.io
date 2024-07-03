<script setup lang="ts">
import { defineProps } from "vue";
import { useRoute } from "vue-router";
import { watchEffect, ref } from "vue";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { Chat } from "@/services/AMIGOS_CHAT/types";

const route = useRoute();
const isChatSelected = ref(false);
const props = defineProps({
   chat: {
      type: Object as () => Chat,
      required: true,
   },
});


const formatTimestampToTime = (timestamp: number) => {
   const date = new Date(timestamp);

   const hours = date.getHours().toString().padStart(2, '0');
   const minutes = date.getMinutes().toString().padStart(2, '0');

   return `${hours}:${minutes}`;
};


watchEffect(() => {
   const newId = route.params.id as string;
   const isGroupChat = route.query.isGroupChat as string;
   if (typeof newId === 'string') {
      isChatSelected.value =
         (parseInt(newId) === props.chat.chatId)
         &&
         (isGroupChat === (props.chat.tipo === 'grupal' ? 'true' : 'false'));
   } else {

   }
});

</script>

<template>
   <RouterLink :to="{
      path: `/social/chat/${chat.chatId}`, query: {
         isGroupChat: chat.tipo === 'grupal' ? 'true' : 'false',
      }
   }" :class="isChatSelected ? 'bg-primary-800/50' : ''"
      class="relative flex w-full h-full items-center hover:bg-primary-800/50 transition-all duration-200">
      <div class="flex w-full justify-between h-full items-center space-x-4 p-6 text-text">
         <div class="flex w-full space-x-4 items-center">
            <picture class="relative w-10 h-10">
               <div :class="{ 'opacity-60': !isChatSelected }"
                  class="flex items-center justify-center w-10 h-10 rounded-full bg-background-700">
                  <FontAwesomeIcon :icon="faUser" class="text-text" />
               </div>
               <span v-if="chat.mensajesSinLeer > 0" class="absolute top-7 right-0 h-5 w-5 rounded-full bg-red-600 text-xs
                  flex items-center justify-center">
                  {{ chat.mensajesSinLeer }}
               </span>

            </picture>
            <div>
               <h3 :class="{ 'opacity-60': !isChatSelected }" class="font-semibold">
                  {{ chat.nombre }}
               </h3>
            </div>
         </div>
         <span :class="{ 'opacity-60': !isChatSelected }" class="text-text/50 text-sm transition-all duration-200">
            {{ formatTimestampToTime(chat.ultimoMensajeTimestamp) }}
         </span>
      </div>
      <div v-if="!isChatSelected && chat.mensajesSinLeer > 0" class="absolute left-0 w-2 h-4 rounded-r-full bg-text">
      </div>
   </RouterLink>
</template>
