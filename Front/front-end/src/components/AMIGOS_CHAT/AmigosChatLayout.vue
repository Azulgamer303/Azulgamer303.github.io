<script setup lang="ts">
import Sidebar from "@/components/AMIGOS_CHAT/AmigosChatSidebar.vue";
</script>

<template>
   <main class="amigos-chat__layout">
      <Sidebar />
      <slot></slot>
   </main>
</template>

<style scoped>
.amigos-chat__layout {
   display: grid;
   height: calc(100vh - 5rem);
   width: 100%;
   color: var(--text-white);
   background-color: var(--background);
   grid-template-areas:
      "sidebar header header"
      "sidebar main main"
      "sidebar main main";
   grid-template-columns: 400px 1fr 1fr;
   grid-template-rows: 90px 1fr auto;
   overflow: hidden;
}
</style>
