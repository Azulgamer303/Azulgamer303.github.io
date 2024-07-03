<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 ml-12">
    <div v-for="(juego, index) in descubrirJuegos" :key="index" class="relative">
      <img :src="juego.img" alt="Featured Game" class="juegoCover object-cover rounded-xl">
      <div class="absolute bottom-3 left-7 text-white p-4">
        <p class="text-xl font-semibold text-shadow">{{ juego.nombre }}</p>
        <p class="text-xl font-semibold text-shadow">{{ juego.precio }} CLP</p>
      </div>
      <div class="adquirir absolute right-20 bottom-8 text-white mr-6">
        <RouterLink to="/juego" class="button">
          <button class="bg-gray-700 bg-opacity-80 adquirirBtn">
            <p class="mx-3">
              Adquirir
            </p>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { useTiendaStore } from "@/stores/tienda";

export default {
  setup() {
        const tiendaStore = useTiendaStore();
        const juegos = tiendaStore.getJuegos();
        const descubrirJuegos = juegos.slice(0,4);
        return {
            descubrirJuegos
        };
    },
};
</script>

<style>
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

.juegoCover {
  height: 300px;
  width: 80%;
  /* Make width responsive */
}

.adquirirBtn {
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;
  justify-self: end;
  font-size: 16px;
}
</style>