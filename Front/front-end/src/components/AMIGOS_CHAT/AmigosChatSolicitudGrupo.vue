<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="text-text w-3/12 h-1/6 flex flex-col justify-between">
      <div class="h-1/2 w-full flex justify-center items-center bg-background-950 rounded-t-md">
        <p class="text-lg font-bold">{{ `${nombreRemitente} te invita al grupo ${props.nomGrupo} ` }}</p>
      </div>
      <div class="h-1/2 w-full flex justify-center items-center bg-background-900 rounded-b-md">
        <button @click="cerrarMenu"
          class="px-4 py-2 mx-2 bg-background-600 hover:bg-background-500 rounded-md flex justify-center">
          <p class="text-sm font-semibold">Rechazar</p>
        </button>
        <button @click="cerrarMenu" class="px-4 py-2 mx-2 bg-red-700 hover:bg-red-600 rounded-md flex justify-center">
          <p class="text-sm font-semibold">Aceptar</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { defineProps, defineEmits, onMounted } from 'vue';
import { usuariosFalsos } from '@/assets/AMIGOS_CHAT/Notificaciones';

const props = defineProps({
  idRemit: {
    type: Number,
    required: true
  },
  nomGrupo: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['cerrar']);
const cerrarMenu = () => {
  emit('cerrar');
};

const nombreRemitente = usuariosFalsos.find(usuario => usuario.id === props.idRemit)?.nombre;

onMounted(() => {
  console.log('Nombre del remitente:', nombreRemitente);
});

</script>