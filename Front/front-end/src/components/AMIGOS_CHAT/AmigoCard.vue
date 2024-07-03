<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import AmigoModal from './AmigoModal.vue';

const isAmigoModalEnabled = ref(false);

const handleOpenModal = () => {
    isAmigoModalEnabled.value = true;
}

const props = defineProps({
    friendUsername: {
        type: String,
        required: true
    },
    friendPicture: {
        type: String,
        required: true
    },
    isFriend: {
        type: Boolean,
        required: true
    }
});

const changeIsModalEnabled = (b: boolean) => {
    if (b) {
        isAmigoModalEnabled.value = true
    } else {
        isAmigoModalEnabled.value = b
    }
}

</script>


<template>
    <div @click="handleOpenModal"
        class=" w-full h-24 mb-5 rounded-lg transition-colors duration-200 cursor-pointer bg-background-950 hover:bg-background-950/60">
        <div class=" px-6 py-5 flex items-center h-full w-full">
            <img class=" size-16 rounded-full" :src="props.friendPicture" :alt="props.friendUsername">
            <p class=" text-base font-bold ml-4">{{ props.friendUsername }}</p>
        </div>
    </div>

    <div v-if="isAmigoModalEnabled">
        <AmigoModal :isFriend="isFriend" @is-modal-enabled="(b) => changeIsModalEnabled(b)" :username="friendUsername"
            :picture="friendPicture" :state="`Activo`" :description="`Descripcion de prueba`" :view="`AmigosView`" />
    </div>
</template>
