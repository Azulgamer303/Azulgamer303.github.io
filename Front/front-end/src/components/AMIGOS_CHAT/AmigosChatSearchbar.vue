<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

const props = defineProps({
    placeholder: {
        type: String,
        required: false,
        default: 'Buscar...'
    },
    onSearch: {
        type: Function,
        required: true
    }
});

const searchTerm = ref('');

const handleSearch = () => {
    props.onSearch(searchTerm.value);
};

</script>


<template>
    <div class="text-text flex w-full items-center bg-primary-800/50 rounded-md py-2 px-4 relative max-w-80">
        <div class="flex items-center pr-4">
            <FontAwesomeIcon :icon="faMagnifyingGlass" class="text-text/50" />
        </div>
        <input type="text" class="w-full focus:outline-none bg-transparent" :placeholder="placeholder"
            v-model="searchTerm" @input="handleSearch" />
    </div>

</template>