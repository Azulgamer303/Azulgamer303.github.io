<script lang="ts">
import { defineComponent, type DefineComponent } from 'vue';
import Searchbar from '../../components/tienda/Searchbar.vue';
import ImagenJuego from '@/components/tienda/ImagenJuego.vue';
import InfoJuego from '@/components/tienda/InfoJuego.vue';
import Carrusel from '@/components/tienda/CarruselImagenesJuego.vue';
import Resennas from '@/components/tienda/Resenna.vue'
import ResennaCrearBtn from '@/components/tienda/ResennaCrearBtn.vue';
import CarritoBtn from '../../components/tienda/CarritoBtn.vue';
import ResennaList from '@/components/tienda/ResennaList.vue';

export default defineComponent({
    components: {
        Searchbar,
        ImagenJuego,
        InfoJuego,
        Carrusel,
        Resennas,
        ResennaCrearBtn,
        CarritoBtn,
        ResennaList
    }
});
</script>

<template>
    <div class="juego">
        <div class="flex w-full mx-4">
            <div class="flex w-full justify-center">
                <div class="seachbar">
                    <Searchbar />
                </div>
            </div>
            <div class="flex flex-1 pr-14 items-center justify-end">
                <div>
                    <CarritoBtn />
                </div>
            </div>

        </div>


        <div class="juego-detalle mx-4 pt-5">
            <div class="flex">
                <div class="juego-media-contenedor h-full justify-center w-full ">
                    <div class="justify-center pb-6 scroll-container">
                        <Carrusel />
                    </div>
                </div>
                <div class="juego-info w-full justify-center text-center">
                    <InfoJuego />
                </div>
            </div>
            <section class="flex">

            </section>
        </div>
        <h1 class=" ml-4 py-6 text-3xl font-extrabold">Reseñas</h1>
        <div class="resennas mx-4 ">
            <ResennaCrearBtn/>
            <ResennaList/>
        </div>
    </div>
</template>



<style scoped>

.juego {
    background-color: var(--background);
    color: var(--text-white);
    padding: 30px;
}

.juego-media-contenedor {
    background-color: var(--primary-darker);
}

.juego-info {
    padding-left: 120px;
    padding-right: 120px;
    background: linear-gradient(to bottom, #3C425C, #282C3C);
}
</style>
