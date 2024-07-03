<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
    class: {
        type: String,
        required: false
    },
    icon: {
        type: Object,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div :class="class" class="flex gap-4 items-center select-none">
        <FontAwesomeIcon size="xl" :icon="icon" />
        <span class="font-semibold">
            {{ label }}
        </span>
    </div>

</template>