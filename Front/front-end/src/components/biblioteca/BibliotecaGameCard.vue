<script setup lang="ts">
import type {PropType} from "vue";

interface NombreJuego {
  nombre: string;
  categoria: string;
  id: number;
}
defineProps({
  nombreJuego: {
    type: Object as PropType<NombreJuego>,
    
  },
  imageGameBiblioteca: {
    type: String,
    default: "https://via.placeholder.com/300x200",
  },

})
</script>

<template >
  <div class="gamecard">
    <img  class="imgGameCardBiblioteca rounded" :src="imageGameBiblioteca" alt="Imagen del Juego {{nombreJuego}}">
  <p class="nombreGameCard rounded-tl-xl rounded-br-xl">{{ nombreJuego }}</p>
  </div>
 
</template>

<style scoped>
.nombreGameCard{
  width: 20ch;
  padding: 5px;
  top: -50px;
  left: -20px;
  background-color: green;
  position: relative;
  color: white;


}

.gamecard:hover{
  transform: scale(1.1);
  transition: transform 0.5s;
}

</style>