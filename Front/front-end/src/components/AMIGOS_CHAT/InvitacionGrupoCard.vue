<template>
    <div
        class="text-text w-full h-24 mb-5 rounded-lg bg-background-950 hover:bg-background-950/60 transition-colors duration-200">
        <div class=" px-6 py-5 flex justify-between items-center h-full w-full">
            <div class="flex p-3 mx-2">
                <img class=" size-16 rounded-full" :src="props.groupRequestPicture" :alt="props.groupRequestName">
                <div class="flex flex-col justify-center">
                    <div class="flex justify-start">
                        <p class=" text-base font-bold ml-4">{{ props.groupRequestName }}</p>
                        <div class="flex justify-center mx-4">
                            <FontAwesomeIcon :size="`lg`" :icon="faUserGroup" style="color: #F0EBD8; opacity: 0.62;" />
                            <p class=" text-base font-bold mx-2">{{ props.groupRequestParticipants }}</p>
                        </div>
                    </div>
                    <p class=" text-sm font-normal text-text/70 ml-4">
                        <span class="text-text/50">Por </span>
                        {{ props.groupRequestOwner }}
                    </p>
                </div>
            </div>
            <div class="flex">
                <div @click="onAcceptGroupRequestClicked" id="CardButton"
                    class="p-3 mx-2 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-primary-800/50">
                    <FontAwesomeIcon :size="`xl`" :icon="faCheck" style="color: #00FF00; opacity: 0.9;" />
                </div>
                <div @click="onDeclineGroupRequestClicked" id="CardButton"
                    class="p-3 mx-2 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-primary-800/50">
                    <FontAwesomeIcon :size="`xl`" :icon="faXmark" style="color: #FF0000; opacity: 0.9;" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    groupRequestName: {
        type: String,
        required: true
    },
    groupRequestPicture: {
        type: String,
        required: true
    },
    groupRequestOwner: {
        type: String,
        required: true
    },
    groupRequestParticipants: {
        type: Number,
        required: true
    }
});


const onAcceptGroupRequestClicked = () => {
    console.log("Accept Friend Request: ", props.groupRequestName)
}

const onDeclineGroupRequestClicked = () => {
    console.log("Decline Friend Request: ", props.groupRequestName)
}

onMounted(() => {

})
</script>
