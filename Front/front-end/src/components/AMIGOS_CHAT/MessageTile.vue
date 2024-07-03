<script setup lang="ts">
import type { Mensaje } from "@/services/AMIGOS_CHAT/types";
import type { User } from "@/assets/AMIGOS_CHAT/users";

import { findMessageSender, formatTimestampFromEpoch, getHoursAndMinutes } from "@/services/AMIGOS_CHAT/chatService";
import { onMounted, ref, watchEffect } from "vue";

const props = defineProps({
   message: {
      type: Object as () => Mensaje,
      required: true,
   },
   sentByCurrentUser: Boolean,
});

const messageSender = ref<User>();

onMounted(() => {
   watchEffect(() => {
      messageSender.value = findMessageSender(props.message);
   });

});


</script>

<template>
   <div class="flex w-full text-text" :class="sentByCurrentUser ? 'justify-end' : 'justify-start'">
      <div :class="sentByCurrentUser ? 'bg-background-800/50' : 'bg-background-950'"
         class="flex flex-col gap-2 p-4 rounded-md w-[80%]">
         <span class="flex gap-2 items-center">
            <img :src="messageSender?.picture" class="w-6 h-6 rounded-full object-cover" />
            <span class="text-text text-sm font-semibold">
               {{ messageSender?.name }}</span>
            <span class="text-xs text-text text-opacity-60"> {{ formatTimestampFromEpoch(
               message?.timestamp) }}</span>
         </span>
         <p class=" text-text">{{ message?.contenido ?? "" }}</p>
      </div>
   </div>
</template>
