<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import IconLabel from './IconLabel.vue';

defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: Object,
        required: false
    },
    onIconClicked: {
        type: Function,
        required: false
    }
})

</script>


<template>
    <div class="[grid-area:header] flex w-full items-center px-6 justify-between text-text">

        <IconLabel v-if="icon != null" :label="title" :icon="icon"
            :class="onIconClicked ? 'cursor-pointer hover:bg-background-900/50 p-2 rounded-md transition-all duration-200' : 'cursor-default'"
            @click="onIconClicked ? onIconClicked() : null" />

        <slot></slot>

    </div>
</template>
