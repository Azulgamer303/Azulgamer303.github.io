<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class=" text-text w-2/5 h-2/4 p-6">
            <div class=" bg-background-900 h-1/3 rounded-t-md">
                <div @click="closeModal"
                    class="p-2 m-2 w-9 h-9 flex justify-center items-center rounded-full transition-colors duration-200 cursor-pointer hover:bg-primary-800/50">
                    <FontAwesomeIcon :size="`xl`" :icon="faXmark" style="color: #F0EBD8;" />
                </div>
            </div>
            <div class="bg-background-950 h-2/3 rounded-b-md">
                <div class=" flex flex-col h-max px-12 ">
                    <div class=" flex justify-between items-center h-2/6 -mt-12">
                        <img class=" size-24 rounded-full" :src="props.picture" :alt="props.username">
                        <button v-if="isFriend" @click="onDeleteFriendClicked"
                            class="px-4 py-2 bg-red-700 hover:bg-red-600 rounded-md flex justify-center">
                            <p class="text-sm font-semibold">Eliminar
                                Amigo</p>
                        </button>
                        <button v-else @click="onSendRequestClicked"
                            class="px-4 py-2 bg-background-600 hover:bg-background-500 rounded-md flex justify-center">
                            <p class="text-sm font-semibold">Enviar Solicitud</p>
                        </button>
                    </div>
                    <div class=" flex flex-col justify-center h-1/6 my-3">
                        <p class=" text-lg font-bold">{{ props.username }}</p>
                        <UserStatusTile v-if="isFriend" :status="props.state" :on-click="() => { }" />
                    </div>
                    <div
                        class=" flex flex-col px-5 py-2 bg-background-900/50 h-3/6 min-h-32 mt-2 rounded-md overflow-y-auto">
                        <h6 class=" text-xs font-normal text-text/70">Descripción</h6>
                        <p class=" text-sm font-normal">{{ props.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ConfirmarEliminarAmigoModal v-if="isDeleteFriendModalEnabled" @is-friend-deleted="(b) => confirmDeleteFriend(b)" />
</template>

<script setup lang="ts">
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import UserStatusTile from './AmigosChatUserStatusTile.vue';
import { ref } from 'vue';
import ConfirmarEliminarAmigoModal from './ConfirmarEliminarAmigoModal.vue';

const emit = defineEmits(['isModalEnabled'])

const isDeleteFriendModalEnabled = ref(false)

const props = defineProps({
    username: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isFriend: {
        type: Boolean,
        required: true
    }
})

const onDeleteFriendClicked = () => {
    console.log("Delete friend: ", props.username)
    isDeleteFriendModalEnabled.value = true
}

const confirmDeleteFriend = (b: boolean) => {
    isDeleteFriendModalEnabled.value = false
    closeModal()
    if (b) {
        //Eliminar amigo
    }
}

const onSendRequestClicked = () => {
    console.log("Add friend: ", props.username)
}

const closeModal = () => {
    emit('isModalEnabled', false);
}
</script>