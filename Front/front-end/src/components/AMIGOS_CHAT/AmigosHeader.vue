<script setup lang="ts">
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faArrowsDownToPeople } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import AmigosChatHeader from "@/components/AMIGOS_CHAT/AmigosChatHeader.vue";
import AmigosChatSearchbar from '@/components/AMIGOS_CHAT/AmigosChatSearchbar.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRouter } from "vue-router";

import { ref, watchEffect } from 'vue';
import AmigosChatCreaGrupo from '@/components/AMIGOS_CHAT/AmigosChatCreaGrupo.vue';
import AmigosChatNotificaciones from '@/components/AMIGOS_CHAT/AmigosChatNotificaciones.vue';

defineProps({
    searchbarPlaceholder: {
        type: String,
        required: false
    },
    onSearchCallback: {
        type: Function,
        required: true
    }
})

const router = useRouter();


const isRouteActive = (path: string) => {
    return router.currentRoute.value.path === path;
};

const navigateToFriends = () => {
    router.push('/social/');
}
const mostrarNotificaciones = ref(false);
const mostrarCrearGrupo = ref(false);


const toggleNotificaciones = () => {
    mostrarNotificaciones.value = !mostrarNotificaciones.value;
};


const toggleCrearGrupo = () => {
    mostrarCrearGrupo.value = !mostrarCrearGrupo.value;
};


</script>

<template>
    <AmigosChatHeader :icon="faUsers" title="Amigos" :onIconClicked="navigateToFriends">

        <div class="flex h-full justify-around items-center w-4/12">
            <RouterLink to="/social/solicitudes-amistad"
                :class="isRouteActive('/social/solicitudes-amistad') ? 'text-opacity-100' : 'text-white text-opacity-50'"
                class=" text-sm font-normal p-3 text-text rounded-lg transition-colors duration-200 cursor-pointer hover:text-opacity-100">
                Solicitudes de Amistad
            </RouterLink>
            <RouterLink to="/social/invitaciones-grupo"
                class="text-sm font-normal p-3 text-text rounded-lg transition-colors duration-200 cursor-pointer hover:text-opacity-100"
                :class="isRouteActive('/social/invitaciones-grupo') ? 'text-opacity-100' : 'text-white  text-opacity-50'">
                Invitaciones a Grupo
            </RouterLink>
        </div>



        <div class="flex h-full items-center gap-6 w-[50%] justify-end">
            <AmigosChatSearchbar :onSearch="onSearchCallback" />



            <div class="flex gap-2 items-center">

                <div>
                    <button @click="toggleCrearGrupo"
                        class="text-text p-3 rounded-lg transition-colors duration-200 cursor-pointer">
                        <FontAwesomeIcon :size="`xl`" :icon="faArrowsDownToPeople" />
                    </button>
                    <AmigosChatCreaGrupo :isOpen="mostrarCrearGrupo" :onClose="toggleCrearGrupo" />
                </div>
                <div>
                    <button @click="toggleNotificaciones"
                        class="text-text p-3 rounded-lg transition-colors duration-200 cursor-pointer">
                        <FontAwesomeIcon :size="`xl`" :icon="faBell" />
                    </button>

                    <!-- Componente de Notificaciones -->
                    <AmigosChatNotificaciones v-if="mostrarNotificaciones" @cerrar="toggleNotificaciones" />
                </div>


            </div>
        </div>

    </AmigosChatHeader>

</template>