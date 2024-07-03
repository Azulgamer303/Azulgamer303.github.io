<template>
    <main class="bg-customDarkBlue min-h-screen p-8">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Contenedor para el título y las imágenes -->
        <div class="flex-1 flex flex-col gap-4">
          <!-- Título del juego -->
          <div class="bg-gray-800 text-white text-center py-2 rounded-lg">
            <h1 class="text-2xl font-bold">{{ videojuego.nombre }}</h1>
          </div>
  
          <!-- Tarjeta de la imagen del juego -->
          <div
            class="bg-white rounded-lg shadow-md overflow-hidden max-h-102 flex justify-center items-center"
          >
            <img
              :src="`${baseUrl}${videojuego.id}/${videojuego.imagenPortada}`"
              :alt="'Imagen del juego ' + videojuego.nombre"
              class="max-w-full max-h-full object-contain"
            />
          </div>
  
          <!-- Botón Jugar ahora -->
          <div
            class="bg-gray-300 p-4 rounded-lg flex justify-between items-center"
          >
            <span class="text-xl font-bold">{{ videojuego.nombre }}</span>
            <button
              @click="jugarAhora"
              class="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md"
            >
              Jugar ahora
            </button>
          </div>
        </div>
  
        <!-- Tarjeta del logo, descripción, fecha y categorías -->
        <div class="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
          <!-- Logo -->
          <div class="flex justify-center mb-4 max-h-32">
            <img
              :src="`${baseUrl}${videojuego.id}/${videojuego.imagenBanner}`"
              alt="Logo de osu"
              class="max-w-full max-h-full object-contain"
            />
          </div>
  
          <!-- Descripción -->
          <div class="descripcion mb-4">
            <p class="text-gray-700">
              {{ videojuego.descripcion }}
            </p>
          </div>
  
          <!-- Fecha de lanzamiento -->
          <div class="mb-4">
            <p class="text-gray-700 font-semibold">
              Fecha de lanzamiento: {{ formattedDate }}
            </p>
          </div>
  
          <!-- Género -->
          <div class="mb-4">
            <p class="text-gray-700 font-semibold">
              Género: {{ videojuego.genero }}
            </p>
          </div>
  
          <!-- Grupo Etario -->
          <div class="mb-4">
            <p class="text-gray-700 font-semibold">
              Grupo Etario: {{ videojuego.grupoEtareo }}
            </p>
          </div>
  
          <!-- Video -->
          <div class="mb-4">
            <p class="text-gray-700 font-semibold">
              Video:
              <a
                :href="`${baseUrl}${videojuego.id}/${videojuego.video}`"
                target="_blank"
                rel="noopener noreferrer"
                >{{ videojuego.video }}</a
              >
            </p>
          </div>
  
          <!-- Contenedor para los botones de opciones -->
          <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
            <button
              @click="actualizarInformacion"
              class="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md flex items-center w-full"
            >
              Actualizar información
              <i class="fas fa-edit ml-2"></i>
            </button>
            <button
              @click="estadisticasDeVenta"
              class="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md flex items-center w-full"
            >
              Estadísticas de venta
              <i class="fas fa-chart-bar ml-2"></i>
            </button>
            <button
              @click="comentariosDeUsuarios"
              class="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md flex items-center w-full"
            >
              Comentarios de usuarios
              <i class="fas fa-comments ml-2"></i>
            </button>
            <button
              @click="confirmarEliminarVideojuego"
              class="bg-red-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center w-full"
            >
              Eliminar videojuego
              <i class="fas fa-trash ml-2"></i>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Modal de confirmación -->
      <div
        v-if="mostrarModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-bold mb-4">Eliminar</h2>
          <p class="mb-4">
            ¿Estás seguro de querer eliminar el juego {{ videojuego.nombre }} del
            sistema?
          </p>
          <button
            @click="eliminarVideojuego"
            class="bg-red-700 text-white px-4 py-2 rounded-lg mr-4"
          >
            Eliminar
          </button>
          <button
            @click="cancelarEliminar"
            class="bg-gray-300 px-4 py-2 rounded-lg"
          >
            Cancelar
          </button>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        mostrarModal: false,
        videojuego: {
          id: null,
          nombre: "",
          descripcion: "",
          fechaLanzamiento: "",
          genero: "",
          grupoEtareo: "",
          imagenPortada: "",
          imagenBanner: "",
          video: "",
        },
        formattedDate: "",
        baseUrl: "http://localhost:8080/media/", // URL base para las imágenes y vídeos
      };
    },
    mounted() {
      this.obtenerIdVideojuego();
    },
    methods: {
      jugarAhora() {
        window.location.href = "/jugar";
      },
      obtenerIdVideojuego() {
        const path = window.location.pathname;
        const match = path.match(/\/videojuego\/(\d+)/);
        if (match) {
          const videojuegoId = parseInt(match[1], 10);
          this.cargarDatosVideojuego(videojuegoId);
        }
      },
      async cargarDatosVideojuego(id) {
        try {
          const response = await axios.get(`http://localhost:8080/detalle/${id}`);
          const data = response.data;
          console.log("Datos del videojuego:", data);
          this.videojuego = {
            id: data.juegoId,
            nombre: data.nombre,
            descripcion: data.descripcion,
            fechaLanzamiento: new Date(
              data.fechaLanzamiento
            ).toLocaleDateString(),
            genero: data.genero,
            grupoEtareo: data.grupoEtareo,
            imagenPortada: data.imagenPortada,
            imagenBanner: data.imagenBanner,
            video: data.video,
          };
          this.formattedDate = this.formatDate(data.fechaLanzamiento);
        } catch (error) {
          console.error("Error al cargar datos del videojuego:", error);
        }
      },
      formatDate(dateString) {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      },
      actualizarInformacion() {
        if (this.videojuego.id) {
          window.location.href = `/desarrollador/actualizar-videojuego/${this.videojuego.id}`;
        }
      },
      estadisticasDeVenta() {
        if (this.videojuego.id) {
          window.location.href = `/desarrollador/estadisticas-venta/${this.videojuego.id}`;
        }
      },
      comentariosDeUsuarios() {
        if (this.videojuego.id) {
          window.location.href = `/desarrollador/comentarios-videojuego/${this.videojuego.id}`;
        }
      },
      confirmarEliminarVideojuego() {
        this.mostrarModal = true;
      },
      cancelarEliminar() {
        this.mostrarModal = false;
      },
      eliminarVideojuego() {
        const desarrolladorId = 3; // Se asigna el 3 de forma estática debido a que no se ha implementado la autenticación de desarrollador,
        // Para probarlo primero se debe tener un desarrollador con id 3 en la base de datos y con juegos asociados
        axios
          .delete(
            `http://localhost:8080/desarrollador/eliminar/${desarrolladorId}/${this.videojuego.id}`
          )
          .then(() => {
            this.mostrarModal = false;
            alert(`El juego ${this.videojuego.nombre} ha sido eliminado.`);
            window.location.href = "/inicio"; // Redirigir a la página de inicio después de eliminar
          })
          .catch((error) => {
            console.error("Error al eliminar el videojuego:", error);
            alert("Error al eliminar el videojuego.");
          });
      },
    },
  };
  </script>
  
  <style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
  
  .descripcion p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  </style>
  