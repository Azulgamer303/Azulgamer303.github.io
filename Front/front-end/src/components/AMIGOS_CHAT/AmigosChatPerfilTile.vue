<script setup lang="ts">
import type { User } from "@/assets/AMIGOS_CHAT/users";
import { users } from "@/assets/AMIGOS_CHAT/users";
import UserStatusTile from "./AmigosChatUserStatusTile.vue";

import { ref, onMounted, onUnmounted } from "vue";
const tooltipRef = ref<HTMLElement | null>(null);

const allStatuses = ["Activo", "Ocupado", "Inactivo"];
const showTooltip = ref(false);
const status = ref("Activo");
const userId = sessionStorage.getItem("userId");
const user = ref<User>(users.find((u) => u.id === parseInt(userId ?? "2"))!);

const toggleTooltip = () => {
   showTooltip.value = !showTooltip.value;
};

const closeTooltip = () => {
   showTooltip.value = false;
};

const setStatus = async (newStatus: string) => {
   try {
      await fetch(`http://localhost:8080/amigos/onlineStatus/${userId}/${newStatus.toUpperCase()}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      status.value = newStatus;
      showTooltip.value = false;
   } catch (error) {
      console.error(error);
   }

};

const handleClickOutside = (event: MouseEvent) => {
   if (tooltipRef.value && !tooltipRef.value.contains(event.target as Node)) {
      closeTooltip();
   }
}

onMounted(() => {
   document.addEventListener("mousedown", handleClickOutside);


});

onUnmounted(() => {
   document.removeEventListener("mousedown", handleClickOutside);
});

</script>

<template>
   <div class="flex h-20 gap-6 items-center w-full px-6">
      <img class="w-10 h-10 rounded-full" :src="user.picture" />
      <div class="flex flex-col gap-1 relative">


         <h3 class="font-semibold text-sm">{{ user.name }}</h3>

         <UserStatusTile :status="status" @click="toggleTooltip" />
         <div ref="tooltipRef" v-if="showTooltip" class="absolute bg-primary-950
            rounded-md w-40 flex flex-col bottom-4 left-0 z-10 text-sm">
            <UserStatusTile class="px-4 py-2 hover:bg-primary-900 
               rounded-md
               cursor-pointer hover:text-text transition-all duration-200"
               v-for="s in allStatuses.filter((s) => s !== status)" :key="s" :status="s" @click="setStatus(s)" />
         </div>
      </div>
   </div>
</template>
