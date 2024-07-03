<template>
  <div>
    <div class="flex">
      <button @click="prev" class="bg-gray-700 text-white p-2 m-2 round-button flex items-center justify-center">
        <font-awesome-icon :icon="iconos.ChevronLeft" /></button>
      <button @click="next" class="bg-gray-700 text-white p-2 m-2 round-button flex items-center justify-center">
        <font-awesome-icon :icon="iconos.ChevronRight" />
      </button>
    </div>
    <div class="relative">
      <div class="overflow-hidden">
        <div class="flex" :style="{ transform: `translateX(-${currentIndex * 34}%)` }">
          <div v-for="(juego, index) in carrusel" :key="index">
            <div class="flex relative">
              <RouterLink to="/juego" class="button">
                <img :src="juego.img" alt="Featured Game" class="w-100 h-64 object-cover rounded-xl px-2">
                <div class="absolute bottom-3 left-7 text-white p-4">
                  <p class="text-xl font-semibold text-shadow">{{ juego.nombre }}</p>
                  <div class="flex">
                    <div v-for="(tag, index) in juego.categorias" :key="index" class="rounded-lg">
                      <p class="px-3 mr-2 tag rounded-lg bg-gray-700 bg-opacity-80">{{ tag }}</p>
                    </div>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from 'vue-router';
import { useTiendaStore } from '@/stores/tienda';

export default {
  components: {
    FontAwesomeIcon,
    RouterLink
  },
  setup() {
        const tiendaStore = useTiendaStore();
        const juegos = tiendaStore.getJuegos();
        const carrusel = juegos.slice(5,8);
        return {
            juegos,
            carrusel
        };
    },
  data() {
    return {
      currentIndex: 0,
      iconos: {
        ChevronRight: faChevronRight,
        ChevronLeft: faChevronLeft
      }
    };
  },
  methods: {
    prev() {
      if (this.currentIndex > 0) this.currentIndex--;
    },
    next() {
      if (this.currentIndex < this.juegos.length - 1) this.currentIndex++;
    }
  },
};
</script>

<style>
.round-button {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

.tag {
  font-size: 14px;
}
</style>
