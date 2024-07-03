<script setup lang="ts">
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
    isOpen: Boolean,
    onClose: {
        type: Function,
        required: true,
    },
    title: String,
})

const handleCloseClick = () => {
    props?.onClose();
}

</script>

<template>
    <transition>
        <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
            @click="handleCloseClick">
            <div @click.stop
                class="bg-background-950 text-text min-w-[600px] max-h-[80vh] overflow-y-auto rounded-md flex flex-col gap-6 p-6 z-10">
                <h3 class="flex w-full items-center font-semibold">
                    <FontAwesomeIcon :icon="faXmark"
                        class="mr-3 cursor-pointer text-text text-opacity-70 hover:text-text hover:text-opacity-100 transition-all duration-200"
                        @click.stop="handleCloseClick" />
                    {{ title }}
                </h3>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>