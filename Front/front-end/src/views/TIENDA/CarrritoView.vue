<script setup lang="ts">
import CardList           from '@/components/tienda/CardList.vue';
import CardTotal          from '@/components/tienda/CardTotal.vue';
import SectionGridCarrito from '@/components/tienda/SectionGridCarrito.vue';
</script>

<template>
    <div class="carritoBody">
        <div class="px-10 py-12">
            <p class="text-4xl font-bold mb-8">
                Carrito de compra
            </p>
            <div class="flex flex-col gap-8 sm:flex-col sm:gap-8 md:flex-col md:gap-8 lg:flex-row lg:justify-between items-start">
                <CardList />
                <CardTotal :price="2000" />
            </div>
            <div class="text-4xl font-bold mb-6 mt-14">
                Recomendaciones
            </div>
            <SectionGridCarrito />
        </div>
    </div>
</template>

<style>
.carritoBody{
    background-color: var(--background);
    color: var(--text-white);
    height: 100%;
    width: 100%;
}
</style>