<template>
    <div class="flex w-full flex-row relative">
        <img class="mx-auto block w-8/12 h-200 rounded-lg justify-left relative" alt="art cover" loading="lazy"
            :src="juegoPrincipal.img" />

        <div class="flex">
            <div
                class="absolute inset-10 top-1/2 transform -translate-y-1/2 justify-left text-white font-bold text-shadow my-8 tituloJuego">
                {{ juegoPrincipal.nombre }}
                <p class="disponible text-shadow">Disponible Ahora</p>
                <p class="descripcionJuegoPrincipal text-shadow my-4">{{ juegoPrincipal.info }}</p>
            </div>
            <div
                class="absolute inset-x-10 bottom-20 flex justify-left text-white font-bold precio text-shadow tituloJuego mb-2">
                {{ juegoPrincipal.precio }} CLP
            </div>
            <div
                class="absolute inset-x-8 bottom-10 flex justify-left text-black font-light precio text-shadow tituloJuego">
                <RouterLink to="/juego" class="button">
                    <button class="bg-white comprarAhoraBtn">
                        <p class="mx-4 my-2">
                            Comprar Ahora
                        </p>
                    </button>
                </RouterLink>
            </div>
        </div>
        <div class="w-1/3 px-8 my-0">
            <div v-for="(juego, index) in nuevosLista" :key="index" class="flex my-14">
                <RouterLink to="/juego" class="button flex items-center nuevos">
                    <img :src="juego.img" alt="Game" class="w-20 h-20 object-cover rounded-lg">
                    <p class="font-semibold mx-8">{{ juego.nombre }}</p>
                    <p class="mx-8 descripcionJuego">{{ juego.info }}</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { useTiendaStore } from '@/stores/tienda';

export default {
    setup() {
        const tiendaStore = useTiendaStore();
        const juegos = tiendaStore.getJuegos();
        const juegoPrincipal = juegos[juegos.length - 1];
        const nuevosLista = juegos.slice(0,3);
        return {
            juegoPrincipal,
            nuevosLista,
        };
    },
};
</script>

<style scoped>
.tituloJuego {
    font-size: 28px;
}

.disponible {
    font-size: 16px;
    font-weight: 200;
}

.descripcionJuegoPrincipal {
    max-block-size: 200px;
    max-width: 300px;
    max-height: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    font-weight: 200;
    white-space: nowrap;
}

.descripcionJuego {
    max-width: 200px;
    max-height: 50px;
    overflow-x: hidden;
}

.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

.comprarAhoraBtn {
    border-radius: 5px 5px 5px 5px;
    cursor: pointer;
    justify-self: end;
    font-size: 14px;
}

.nuevos {
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
</style>