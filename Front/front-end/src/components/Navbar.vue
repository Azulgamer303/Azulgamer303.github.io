<script lang="ts">
export default {
   data() {
      return {
         isOpen: false,
      };
   },
};
</script>

<template>
   <nav class="flex w-full mx-7 int-navbar">
      <div class="flex flex-1 items-center justify-start">
         <RouterLink to="/" class="mx-3">
            <img src="/src/assets/LogoWGameLab.png" alt="gamelab-logo" id="navbar-logo" />
         </RouterLink>
         <RouterLink to="/" class="mx-3">Tienda</RouterLink>
         <RouterLink to="/biblioteca" class="mx-3">Biblioteca</RouterLink>
         <RouterLink to="/social" class="mx-3">Social</RouterLink>
      </div>
      <div class="flex flex-1 pr-14 items-center justify-end mr-5">
         <button>
            <p>&#128276;</p>
         </button>
         <div class="mx-5">UserName</div>
         <div class="relative flex flex-col">
            <button
               @click="isOpen = !isOpen"
               class="relative h-10 w-10 pb-2 rounded-full border-2 border-black"
            >
               <img src="#" alt="" />
            </button>
            <button
               v-if="isOpen"
               @click="isOpen = false"
               class="fixed top-0 right-0 left-0 bottom-0 bg-black opacity-20 cursor-default"
            ></button>
            <div v-if="isOpen" id="user-dropdown" class="w-48 right-0 top-12 shadow-xl">
               <RouterLink @click="isOpen = false" to="/cuenta" class="block px-2 link-hover"
                  >Perfil</RouterLink
               >
               <a href="#" class="block link-hover px-2">DEV ZONEEEE</a>
               <a @click="isOpen = false" href="/cuenta" class="block px-2 link-hover">LogOut</a>
            </div>
         </div>
      </div>
   </nav>
</template>

<style scoped>
.int-navbar {
   background-color: var(--primary);
   height: 5rem;
}

#navbar-logo {
   width: 5rem;
}

#user-dropdown {
   position: absolute;
   background-color: var(--text-white);
   border-radius: 10px;
   width: 10rem;
   padding: 7px 0px;
}

.link-hover:hover {
   background-color: var(--secondary);
   color: var(--text-white);
}

nav {
    color:rgb(226, 226, 224);
}
</style>
