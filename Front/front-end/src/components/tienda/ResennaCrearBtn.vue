<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useUserAuthStore } from '../../stores/userStore';
// components
import ResennaCrear from './ResennaCrear.vue';

const userStore = useUserAuthStore();
const isLoggedIn = ref(false);
const ShowResennaCrear = ref(false);

onMounted(async () => {
    userStore.getLogin();
    isLoggedIn.value = userStore.userauth.login;
});

const handleClick = () => {
    ShowResennaCrear.value = true;
}

</script>

<template>
    <div v-if="isLoggedIn" class="pb-4">
        <button v-if="!ShowResennaCrear" @click="handleClick" class="buttonAgregarResenna bg-gray-800 text-white px-4 py-2 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd" />
            </svg>
            crear reseña...
        </button>
        <ResennaCrear v-if="ShowResennaCrear" />
    </div>
</template>


<style scoped>
.buttonAgregarResenna {
    margin: 0 !important;
    transition: background-color 0.3s;
    padding: 0.5rem;
}

.buttonAgregarResenna:hover {
    background-color: #4a5568;
    /* Hover color */
}
</style>