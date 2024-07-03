<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <header class="w-full">
    <Navbar />
  </header>
  <RouterView />
  <!-- <Footer /> -->
</template>

<style>
:root {
   --background: #0d1321;
   --primary: #3e5d75;
   --secondary: #738bab;
   --text-white: #eff1f6;
}

header {
   background-color: var(--primary);
}
</style>
