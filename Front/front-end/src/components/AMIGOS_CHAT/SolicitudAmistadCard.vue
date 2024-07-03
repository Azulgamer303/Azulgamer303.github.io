<template>
    <div
        class=" w-full h-24 mb-5 rounded-lg transition-colors duration-200 bg-background-950 hover:bg-background-950/60">
        <div class=" px-6 py-5 flex justify-between items-center h-full w-full">
            <div @click="onUserClicked(props.friendRequestUsername)"
                class="flex p-3 mx-2 rounded-lg transition-colors duration-200 cursor-pointer ">
                <img class=" size-16 rounded-full" :src="props.friendRequestPicture" :alt="props.friendRequestUsername">
                <div class="flex flex-col justify-center">
                    <p class=" text-base font-bold ml-4">{{ props.friendRequestUsername }}</p>
                    <p class=" text-sm font-normal ml-4">Hoy a las 21:40</p>
                </div>
            </div>
            <div class="flex">
                <div @click="onAcceptFriendRequestClicked" id="CardButton"
                    class="p-3 mx-2 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-primary-800/50">
                    <FontAwesomeIcon :size="`xl`" :icon="faCheck" style="color: #00FF00; opacity: 0.9;" />
                </div>
                <div @click="onDeclineFriendRequestClicked" id="CardButton"
                    class="p-3 mx-2 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-primary-800/50">
                    <FontAwesomeIcon :size="`xl`" :icon="faXmark" style="color: #FF0000; opacity: 0.9;" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    friendRequestUsername: {
        type: String,
        required: true
    },
    friendRequestPicture: {
        type: String,
        required: true
    }
});

const onUserClicked = (username: string) => {
    console.log("Solicitud Amistad clicked: ", username)
}

const onAcceptFriendRequestClicked = () => {
    console.log("Accept Friend Request: ", props.friendRequestUsername)
}

const onDeclineFriendRequestClicked = () => {
    console.log("Decline Friend Request: ", props.friendRequestUsername)
}

onMounted(() => {
    console.log('Solicitud Amistad Card: ', props.friendRequestUsername);
})
</script>
