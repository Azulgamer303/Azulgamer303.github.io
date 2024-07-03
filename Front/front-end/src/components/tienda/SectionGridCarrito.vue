<script setup lang="ts">
import ImgPrice from '@/components/tienda/ImgPrice.vue';

</script>

<template>
    <section class="sm:min-w-[34rem] sm:max-w-[45] lg:min-w-[59rem] lg:max-w-64 flex flex-col gap-4">
        <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            <ImgPrice />
            <ImgPrice />
            <ImgPrice />
        </div>
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
            <img src="../../assets/far_cry.png" alt="far cry" class="w-[19.69rem] sm:w-[30rem] md:w-full">
            <img src="../../assets/blasphemous.png" alt="blasphemous" class="w-[19.69rem] sm:w-[30rem] md:w-full">
        </div>
    </section>
</template>

<style >

</style>