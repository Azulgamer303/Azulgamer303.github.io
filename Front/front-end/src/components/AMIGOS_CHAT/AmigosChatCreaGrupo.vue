<template>

  <AmigosChatModal :isOpen="isOpen" :onClose="onClose" title="Crear Grupo">


    <article class="flex flex-col gap-6 w-[700px] z-20">
      <section class="flex flex-col gap-1">
        <h3 class="  text-text/80 font-medium mb-2 text-sm">Nombre del Grupo</h3>
        <input type="text" v-model="nombreGrupo" placeholder="Nombre del grupo"
          class="bg-primary-800/50 px-3 py-2 w-full mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
      </section>

      <section class="flex w-full gap-6">

        <!-- buscar amigos -->
        <div class="flex-1 flex flex-col gap-3">
          <h3 class="  text-text/80 text-sm font-semibold mb-2">Seleccionar Participantes</h3>
          <AmigosChatSearchbar class="max-w-full" :onSearch="filterUsers" placeholder="Buscar amigos..." />
          <div class="flex flex-col w-full bg-primary-800/50 rounded-md overflow-auto" style="height: 350px;">
            <div>
              <p v-if="filteredUsers.length === 0" class="text-sm text-gray-500 p-3">No hay usuarios disponibles.</p>
              <div v-for="user in filteredUsers" :key="user.id" class="
              p-2 hover:bg-background-950/50 transition-colors duration-200
              flex items-center mb-2 cursor-pointer" @click="toggleUsuario(user)">
                <img :src="user.picture" :alt="user.name" class="w-10 h-10 rounded-full">
                <span class="ml-2">{{ user.name }}</span>
              </div>
            </div>

          </div>

        </div>

        <!-- amigos seleccionados (resumen) -->
        <div class="flex flex-col gap-2 w-[40%]">
          <h3 class="text-text/80 font-medium mb-2 text-sm"> Resumen</h3>
          <div class="flex-1 bg-primary-800/50 rounded-md overflow-auto">
            <div>
              <p v-if="usuariosSeleccionados.length === 0" class="text-sm text-gray-500 p-3">No hay usuarios
                seleccionados.</p>
              <div v-for="user in usuariosSeleccionados" :key="user.id" class="flex w-full items-center cursor-pointer py-2 px-3
                  max-h-60 overflow-y-auto justify-between
                hover:bg-background-950/50 transition-colors duration-200">
                <picture class="flex gap-3 items-center">
                  <img :src="user.picture" :alt="user.name" class="w-10 h-10 rounded-full">
                  <span>{{ user.name }}</span>
                </picture>
                <FontAwesomeIcon @click="toggleUsuario(user)" :icon="faTrash" class="text-red-500 
                hover:text-red-800 cursor-pointer transition-all duration-200" />

              </div>
            </div>

          </div>

          <div class="flex justify-end items-center mt-2">
            <button @click="crearGrupo"
              class="px-4 py-2 bg-background-600 hover:bg-background-800 transition-all duration-200 rounded-md">
              <p class="text-sm font-semibold text-white">Crear Grupo</p>
            </button>
          </div>
        </div>

      </section>
    </article>


  </AmigosChatModal>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import AmigosChatModal from './AmigosChatModal.vue';
import AmigosChatSearchbar from './AmigosChatSearchbar.vue';
import { users, type User } from '@/assets/AMIGOS_CHAT/users';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { getCurrentInstance } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  onClose: {
    type: Function,
    required: true
  }
})


const nombreGrupo = ref('');
const usuariosSeleccionados = ref<User[]>([]);
const filteredUsers = ref(users);


const toggleUsuario = (user: User) => {
  if (filteredUsers.value.includes(user)) {
    filteredUsers.value = filteredUsers.value.filter(u => u !== user);
    usuariosSeleccionados.value.push(user);
  } else {
    usuariosSeleccionados.value = usuariosSeleccionados.value.filter(u => u !== user);
    filteredUsers.value.push(user);
  }
};

const crearGrupo = () => {
  console.log('Usuarios seleccionados:', usuariosSeleccionados.value);
  props.onClose();
};

const filterUsers = (searchTerm: string) => {
  // Filtrar usuarios que no están seleccionados y coinciden con el término de búsqueda
  filteredUsers.value = users.filter(user => {
    return (
      !usuariosSeleccionados.value.includes(user) &&
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
};
</script>
