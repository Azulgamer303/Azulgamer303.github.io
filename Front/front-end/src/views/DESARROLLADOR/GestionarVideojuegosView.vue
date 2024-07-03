<template>
  <body class="bg-[#0D1321] h-screen">
    <div class="mx-auto pt-32 px-4 md:px-8 lg:px-16 xl:px-24">
      <!-- Formulario de búsqueda -->
      <form class="pb-5">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >Buscar videojuegos</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-black"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            v-model="searchTerm"
            type="search"
            id="default-search"
            class="block w-full py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Buscar videojuegos..."
            required
          />
        </div>
      </form>

      <!-- Tabla de videojuegos filtrada -->
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Nombre de videojuego</th>
              <th scope="col" class="px-6 py-3">Género</th>
              <th scope="col" class="px-6 py-3">Grupo Etareo</th>
              <th scope="col" class="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="videojuego in paginatedVideojuegos" :key="videojuego.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ videojuego.juegoId }}</td>
              <td class="px-6 py-4">{{ videojuego.nombre }}</td>
              <td class="px-6 py-4">{{ videojuego.genero }}</td>
              <td class="px-6 py-4">{{ videojuego.grupoEtareo }}</td>
              <td class="px-6 py-4 text-right">
                <!-- Icono de ojo SVG -->
                <a :href="`/desarrollador/gestionar-videojuegos/videojuego/${videojuego.juegoId}`" class="flex items-center space-x-2 font-medium text-gray-600 focus:outline-none">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                  <span class="hidden md:inline">Ver detalles</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Paginador -->
      <nav class="mt-4 text-center">
        <ul class="inline-flex -space-x-px text-sm">
          <li>
            <a @click.prevent="currentPage > 1 ? currentPage-- : null" href="#" :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">Página anterior</a>
          </li>
          <li v-for="page in totalPages" :key="page">
            <a @click.prevent="currentPage = page" href="#" :class="{ 'bg-blue-50 text-black': page === currentPage, 'hover:bg-blue-100 hover:text-black': page !== currentPage }" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300">{{ page }}</a>
          </li>
          <li>
            <a @click.prevent="currentPage < totalPages ? currentPage++ : null" href="#" :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">Siguiente página</a>
          </li>
        </ul>
      </nav>
    </div>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GestionarVideojuegosView',
  data() {
    return {
      videojuegos: [],
      searchTerm: '',
      currentPage: 1,
      itemsPerPage: 8,
      desarrolladorId: 3, // Se asigna el 3 de forma estática debido a que no se ha implementado la autenticación de desarrollador,
                          // Para probarlo primero se debe tener un desarrollador con id 3 en la base de datos y con juegos asociados
    };
  },
  created() {
    this.getVideojuegos();
  },
  methods: {
    async getVideojuegos() {
      try {
        const response = await axios.get('http://localhost:8080/desarrollador/videojuegos');
        this.videojuegos = response.data;
      } catch (error) {
        console.error('Error al obtener los videojuegos:', error);
      }
    },
  },
  computed: {
    filteredVideojuegos() {
      if (!this.searchTerm) {
        return this.videojuegos.filter(videojuego => videojuego.desarrolladorId === this.desarrolladorId);
      }
      return this.videojuegos.filter(videojuego =>
        videojuego.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        videojuego.desarrolladorId === this.desarrolladorId
      );
    },
    totalPages() {
      return Math.ceil(this.filteredVideojuegos.length / this.itemsPerPage);
    },
    paginatedVideojuegos() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredVideojuegos.slice(startIndex, endIndex);
    }
  }
};
</script>
