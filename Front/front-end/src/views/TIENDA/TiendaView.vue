<template>
    <div class="tienda">
        <div class="flex w-full mx-4">
            <div class="flex items-center justify-start">
                <p class="font-bold">Selección Novedades</p>
                <div class="searchbar">
                    <Searchbar />
                </div>
            </div>
            <div class="flex flex-1 pr-14 items-center justify-end">
                <div>
                    <CarritoBtn />
                </div>
            </div>
        </div>
        <div class="flex w-full mx-4 my-4">
            <Novedades />
        </div>

        <div class="flex w-full mx-2 my-4">
            <Carrusel />
        </div>
        <div class="w-full mx-4 my-8">
            <p class="font-bold">Descubrir</p>
            <Descubrir />
        </div>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CarritoBtn from '@/components/tienda/CarritoBtn.vue';
import Searchbar from '@/components/tienda/Searchbar.vue';
import Carrusel from '@/components/tienda/Carrusel.vue';
import Descubrir from '@/components/tienda/Descubrir.vue';
import Novedades from '@/components/tienda/Novedades.vue';

export default defineComponent({
    components: {
        Searchbar,
        CarritoBtn,
        Carrusel,
        Descubrir,
        Novedades
    }
});
</script>

<style scoped>
* {
    font-size: 28px;
}

.tienda {
    background-color: var(--background);
    color: var(--text-white);
    padding: 30px;
}

.searchbar {
    padding-left: 86px;
}
</style>