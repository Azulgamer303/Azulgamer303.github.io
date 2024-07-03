<script setup lang="ts">
import { onMounted } from 'vue'

import Card from '@/components/tienda/Card.vue';
import { useCarritoStore } from '../../stores/carrito';
import { RouterLink } from 'vue-router';

const carritoStore = useCarritoStore();
onMounted(() => {
    carritoStore.getJuegos();
})
</script>

<template>
    <div class="flex flex-col gap-8">
        <Card 
            v-for="juego in carritoStore.carrito"
            :id="juego.id" 
            :title="juego.nombre" 
            :price="juego.precio"
            :offert="juego.oferta"
            :image="juego.img"
            :key="juego.id" 
            description=""   
        />
        <div v-if="carritoStore.carrito.length === 0" class="flex flex-col justify-start items-start gap-4">
            <span class="font-extrabold">Tu carrito está vacío.</span> 
            ¡Explora nuestra tienda y descubre increíbles juegos para agregar a tu colección!
            <RouterLink to="/">
                <button class="px-6 py-4 hover:text-red-600 font-semibold bg-[#282C3C] rounded-xl">
                    Ir a Tienda
                </button>
            </RouterLink>
        </div>
    </div>
</template>