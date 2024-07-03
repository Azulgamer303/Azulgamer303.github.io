<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class=" text-text w-3/12 h-1/6 flex flex-col justify-between">
            <div class="h-1/2 w-full flex justify-center items-center bg-background-950 rounded-t-md">
                <p class=" text-lg font-bold">¿Seguro que deseas eliminar amigo?</p>
            </div>
            <div class="h-1/2 w-full flex justify-center items-center bg-background-900 rounded-b-md">
                <button @click="deleteFriend(false)"
                    class="px-4 py-2 mx-2 bg-background-600 hover:bg-background-500 rounded-md flex justify-center">
                    <p class="text-sm font-semibold">Cancelar</p>
                </button>
                <button @click="deleteFriend(true)"
                    class="px-4 py-2 mx-2 bg-red-700 hover:bg-red-600 rounded-md flex justify-center">
                    <p class="text-sm font-semibold">Confirmar</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['isFriendDeleted'])


const deleteFriend = (b: boolean) => {
    emit('isFriendDeleted', b);
}
</script>