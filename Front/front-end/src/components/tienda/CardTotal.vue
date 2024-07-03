<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useCarritoStore } from '../../stores/carrito';
defineProps<{
    price: number
}>()
const carrito = useCarritoStore()
const precioTotal = computed(() => carrito.getPrecioTotal())
</script>

<template>
    <div class=''>
        <div class="py-6 px-8 w-[22rem] sm:w-[29rem] rounded-xl bg-[#D9D9D9] shadow-xl hover:rounded-2xl">
            <div class="">
                <div class="">
                    <div class="flex justify-between items-center">
                        <h2 class="text-2xl font-semibold text-gray-800">Total Estimado: </h2>
                        <h2 class="text-2xl font-bold text-black">CLP$ {{ precioTotal }}</h2>
                    </div>

                    <div class="space-y-4">
                        <h4 class="text-sm font-bold text-gray-700 text-justify">
                            Los impuestos de venta se aplicaran al momento de la compra.
                        </h4>
                    </div>

                    <div class="flex flex-col w-full mt-8 gap-2">
                        <RouterLink to="/" class="button">
                            <button
                                class="w-full text-center px-5 py-4 rounded-xl bg-[#3E5D75] font-bold text-white">Continuar
                                con la compra</button>
                        </RouterLink>

                        <button
                            class="w-full text-center px-5 py-4 rounded-xl bg-[#2D67F8] font-extrabold text-white">Pagar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
