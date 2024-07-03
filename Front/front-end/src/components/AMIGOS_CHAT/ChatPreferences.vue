<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
   faEllipsisVertical,
   faVolumeXmark,
   faVolumeHigh,
   faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { computed, onMounted, ref } from "vue";
import type { Chat } from "@/services/AMIGOS_CHAT/types";
import { muteChat } from "@/services/AMIGOS_CHAT/chatService";

const props = defineProps({
   chat: {
      type: Object as () => Chat,
      required: true,
   }
});

const isMuted = ref<boolean>();

const isGroupChat = computed(() => {
   return props.chat.tipo === 'grupal';
});

const isChatPreferencesOpen = ref<boolean>(false);

const toggleChatPreferences = () => {
   isChatPreferencesOpen.value = !isChatPreferencesOpen.value;
};

const handleMuteChat = async () => {
   try {
      const userId = sessionStorage.getItem("userId") ?? "1";
      const chatId = props.chat.chatId;
      const isChatGrupal = isGroupChat.value;
      const isMutedForUser = props.chat.participantesSilenciadosIds.includes(parseInt(userId));
      await muteChat(parseInt(userId), chatId, isChatGrupal, !isMutedForUser);
      isMuted.value = !isMuted.value;
      toggleChatPreferences();
   } catch (error) {
      console.error(error);
   }
};

const menuOptions = computed(() => {
   if (isGroupChat.value) {
      return [
         {
            color: isMuted.value ? "text-primary-500" : "text-text",
            icon: isMuted.value ? faVolumeHigh : faVolumeXmark,
            text: isMuted.value ? "Desilenciar grupo" : "Silenciar grupo",
            onClick: () => {
               handleMuteChat();
            },
         }
      ];
   } else {
      return [
         {
            color: isMuted.value ? "text-primary-500" : "text-text",
            icon: isMuted.value ? faVolumeHigh : faVolumeXmark,
            text: isMuted.value ? "Desilenciar" : "Silenciar",
            onClick: () => {
               handleMuteChat();
            },
         },
      ];
   }
});

onMounted(() => {
   isMuted.value = props.chat.participantesSilenciadosIds.includes(parseInt(sessionStorage.getItem("userId") ?? "1"));

})

</script>

<template>
   <div class="relative">
      <FontAwesomeIcon class="cursor-pointer" :size="`xl`" @click="toggleChatPreferences" :icon="faEllipsisVertical" />
      <div v-if="isChatPreferencesOpen"
         class="absolute text-text top-7 right-0 min-w-40 select-none py-2 px-2 text-xs rounded-md bg-background-950 ring-1 ring-primary-800">
         <div v-for="(option, index) in menuOptions" :key="index">
            <p @click="option.onClick"
               class="flex gap-2 rounded-md items-center cursor-pointer hover:bg-background-800/60 py-2 px-4 transition-all duration-200">
               <FontAwesomeIcon :icon="option.icon" :class="option.color" />
               {{ option.text }}
            </p>
         </div>
      </div>
   </div>
</template>
