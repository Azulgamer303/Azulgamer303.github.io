<script lang="ts">

import { defineComponent, ref, computed } from "vue";
import BibliotecaGameCard from "@/components/biblioteca/BibliotecaGameCard.vue";
import 'tailwindcss/tailwind.css';
import { match } from "assert";
import { c, s } from "node_modules/vite/dist/node/types.d-aGj9QkWt";


export default defineComponent({
  components: { BibliotecaGameCard },
  data() {
    return {
      //placeholder de los juegos, tambien debe incluir la dirección de la imagen y pasarse como props

      // aplicar el tolowercase en la busqueda para el nombre y el imput *************************************** 
      searchTerm: "",
      searchCategorias: ""as string,
      juegosDelUsuario: [
      { nombre: "The Legend of Zelda: Breath of the Wild", categoria: "Aventura"},
      { nombre: "Super Mario Odyssey", categoria: "Aventura" },
      { nombre: "Red Dead Redemption 2", categoria: "Accion" },
      { nombre: "God of War", categoria: "Accion" },
      { nombre: "FIFA 21", categoria: "Deportes" },
      { nombre: "NBA 2K21", categoria: "Deportes" },
      { nombre: "Assassin's Creed Valhalla", categoria: "Accion" },
      { nombre: "Cyberpunk 2077", categoria: "Accion" },
      { nombre: "The Witcher 3: Wild Hunt", categoria: "Aventura" },
      { nombre: "Minecraft", categoria: "Aventura" },
      { nombre: "Fortnite", categoria: "Accion" },
      { nombre: "Rocket League", categoria: "Deportes" },
      { nombre: "Horizon Zero Dawn", categoria: "Aventura" },
      { nombre: "Grand Theft Auto V", categoria: "Accion" },
      { nombre: "Call of Duty: Modern Warfare", categoria: "Accion" },
      { nombre: "Animal Crossing: New Horizons", categoria: "Aventura" },
      { nombre: "Madden NFL 21", categoria: "Deportes" },
      { nombre: "Pro Evolution Soccer 2021", categoria: "Deportes" },
      { nombre: "Shadow of the Tomb Raider", categoria: "Aventura" },
      { nombre: "Apex Legends", categoria: "Accion" }
        
      ],
      isOpen: false,
    }
  },
  computed: {
    filteredGames() {
      return this.juegosDelUsuario.find(juego =>
        juego.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  },
  methods: {
    goToTarget(juego: { nombre: string; }) {
      const datosJuego = JSON.stringify(juego);
      this.$router.push({ name: 'BibliotecaJuegoView', params: { datosJuego: datosJuego} });
    },
    search() {

    },
    //especifica el tipo string para name
    matchName(name:string){
      return name.includes(this.searchTerm);
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    matchCategoria(categoria:string){
      return categoria.includes(this.searchCategorias);
    },
    asignarCategoria(categoria:string){
      this.searchCategorias = categoria;
    }
  }
});
</script>
<template>

  <div id="biblioteca" class = "bg-custom-gradient"  >
    <div class="flex justify-center py-4 ">
      <input v-model="searchTerm" placeholder="Buscar juego..." class="search-input" />
      <div class="relative">
        <div class="inline-block relative">
          <button @click="toggleDropdown" class="px-4 py-2 bg-gray-300 rounded-md shadow-md text-gray-800">
            Tipo de Juego
            <svg class="h-4 w-4 inline-block ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10 3.293l6.293 6.293a1 1 0 0 1-1.414 1.414L10 5.414 4.707 10.707a1 1 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="isOpen" @click="toggleDropdown" class="fixed inset-0 h-full w-full z-10"></div>
          <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-md z-20">

            <ul class="py-1">
              <li @click="asignarCategoria('Accion')"><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Acción</a></li>
              <li @click="asignarCategoria('Aventura')"><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Aventura</a></li>
              <li @click="asignarCategoria('Deportes')"><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Deportes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center ">
      <div class="grid grid-cols-2 gap-8">
        <div  v-for="juego in juegosDelUsuario" :key="juego.nombre" :class="{ oculto: !matchName(juego.nombre), visible:!matchCategoria(juego.categoria) }" @click="goToTarget(juego)">
          <BibliotecaGameCard :nombreJuego="juego.nombre"></BibliotecaGameCard>
        </div>
      </div>
    </div>


  </div>
   


</template>
<style scoped>

.selectable-card {
  cursor: pointer;
}

.bg-custom-gradient {
  height: 100%;
  background-position: 100% ;
  background-size: cover;
}

#biblioteca {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.botonjuego {
  background-color: var(--primary);
  color: var(--text);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
}

.search-button {
  background-color: var(--primary);
  color: var(--text);
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.oculto{
  display: none;
}
.visible{
  display: none;
}





</style>