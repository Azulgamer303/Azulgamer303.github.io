<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 text-text" @click.self="cerrarMenu">
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="flex flex-col gap-6 fixed top-0 right-0 h-full w-2/3 bg-custom-gray max-w-md p-6 rounded-lg shadow-lg">

      <div class="flex w-full items-center justify-between">

        <div class="flex items-center ">
          <FontAwesomeIcon :icon="faBell" class="text-lg mr-4" />

          <h2 class="text-xl font-semibold text-text">Notificaciones</h2>
        </div>
        <FontAwesomeIcon :icon="faChevronRight" class="text-xl cursor-pointer" @click="cerrarMenu" />
      </div>
      <div v-if="notificacionesMostradas.length === 0" class="text-text mt-4">No hay notificaciones</div>
      <div v-else class="mt-4 w-full">
        <div v-for="notificacion in notificacionesMostradas" :key="notificacion.id"
          class="mb-2 rounded-lg bg-custom-gray-dark p-4 cursor-pointer w-full"
          @click="manejarNotificacion(notificacion)">
          <button v-if="notificacion.tipo === 1" class="text-text text-center">
            {{ nombreRemitente(notificacion.remitenteId) }} te ha enviado una solicitud de amistad.
          </button>
          <button v-else-if="notificacion.tipo === 2" class="text-text text-center">
            {{ nombreRemitente(notificacion.remitenteId) }} te ha invitado al grupo {{ notificacion.nombreGrupo }}.
          </button>
        </div>
      </div>
    </div>
  </div>
  <AmigosChatSolicitudAmistad v-if="mostrarSolicitudAmistad" :idRemit="idRemit" @cerrar="toggleAmistad" />
  <AmigosChatSolicitudGrupo v-if="mostrarSolicitudGrupo" :idRemit="idRemit" :nomGrupo="nomGrupo"
    @cerrar="toggleGrupo" />

</template>

<script setup lang="ts">
import { defineProps, ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { notificacionesFalsas, usuariosFalsos } from '@/assets/AMIGOS_CHAT/Notificaciones';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBell, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AmigosChatSolicitudAmistad from './AmigosChatSolicitudAmistad.vue';
import AmigosChatSolicitudGrupo from './AmigosChatSolicitudGrupo.vue';

const mostrarSolicitudAmistad = ref(false);
const mostrarSolicitudGrupo = ref(false);

const toggleAmistad = () => {
  mostrarSolicitudAmistad.value = !mostrarSolicitudAmistad.value;
};

const toggleGrupo = () => {
  mostrarSolicitudGrupo.value = !mostrarSolicitudGrupo.value;
};

const emit = defineEmits(['solicitudAmistad', 'solicitudGrupo', 'cerrar']);

const cerrarMenu = () => {
  emit('cerrar');
};

const router = useRouter();
const idUsuario = 1;
var idRemit = 0;
var nomGrupo = "";
const notificacionesMostradas = ref<any>([]);

const obtenerNotificacionesMostradas = () => {
  notificacionesMostradas.value = notificacionesFalsas.filter((notificacion: any) => notificacion.destinatarioId === idUsuario || notificacion.remitenteId === idUsuario || notificacion.invitadoId === idUsuario);
};

const manejarNotificacion = (notificacion: any) => {

  if (notificacion.tipo === 1) {

    idRemit = notificacion.remitenteId;
    emit('solicitudAmistad', { idRemit });
    eliminarNotificacion(notificacion.id);
    mostrarSolicitudAmistad.value = !mostrarSolicitudAmistad.value;

  } else if (notificacion.tipo === 2) {

    idRemit = notificacion.remitenteId;
    nomGrupo = notificacion.nombreGrupo;
    emit('solicitudGrupo', { idRemit, nomGrupo });
    eliminarNotificacion(notificacion.id);
    mostrarSolicitudGrupo.value = !mostrarSolicitudGrupo.value;

  }
};

const eliminarNotificacion = (idNotificacion: any) => {
  const indice = notificacionesFalsas.findIndex(notificacion => notificacion.id === idNotificacion);
  if (indice !== -1) {
    notificacionesFalsas.splice(indice, 1);
    obtenerNotificacionesMostradas();
  }
};

const nombreRemitente = (remitenteId: any) => {
  const remitente = usuariosFalsos.find(usuario => usuario.id === remitenteId);
  return remitente ? remitente.nombre : 'Usuario desconocido';
};

obtenerNotificacionesMostradas();
</script>

<style scoped>
.bg-custom-gray {
  background: rgba(13, 19, 33, 1);
}

.bg-custom-gray-dark {
  background: rgba(34, 52, 88, 1);
}
</style>