<template>
  <!-- Contenedor principal -->
  <div class="flex flex-col md:flex-row">
    <section class="w-full md:w-1/2 h-screen overflow-hidden hidden md:block">
      <img
        src="/src/assets/IMG_DESARROLLADOR/background-editar-videojuego.png"
        alt="Background"
        class="w-full h-full object-cover shadow-lg"
      />
    </section>
    <!-- Sección de formulario -->
    <div class="w-full md:w-1/2 p-6 md:p-12">
      <!-- Botón para volver al inicio -->
      <button
        @click="goBack"
        class="absolute top-4 md:top-2 right-4 md:right-2 text-gray-500 hover:text-gray-700 focus:outline-none mx-2 md:mx-10 my-2 md:my-8"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <!-- Formulario de actualización -->
      <form class="max-w-xl mx-auto mt-16" @submit.prevent="handleSubmit">
        <!-- Título del formulario -->
        <h1 class="text-3xl font-bold mb-5 text-center md:text-center -m-8">
          Actualizar Videojuego
        </h1>

        <!-- Sección de carga de medios visuales -->
        <div
          v-for="(tipo, index) in tiposArchivos"
          :key="index"
          class="relative z-0 mt-5"
        >
          <div
            class="flex justify-center px-3 pt-1 pb-1 border-2 border-gray-300 border-dashed rounded-md"
          >
            <div class="space-y-1 text-center">
              <!-- Mostrar el texto plano del path y el botón para eliminar archivo -->
              <div
                v-if="preloadedArchivos[tipo] || archivos[tipo].length > 0"
                class="flex items-center justify-center"
              >
                <p class="text-sm text-gray-700">
                  {{ preloadedArchivos[tipo] || archivos[tipo][0].name }}
                </p>
                <button
                  @click="eliminarArchivo(tipo)"
                  class="ml-2 px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Eliminar
                </button>
              </div>
              <!-- Sección para cargar archivo nuevo -->
              <div
                v-else
                class="flex items-center justify-center text-sm text-gray-600"
              >
                <label
                  :for="`${tipo}-upload`"
                  class="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-gray-500"
                >
                  <span v-if="tipo === 'portada'"
                    >Sube tu imagen de portada</span
                  >
                  <span v-if="tipo === 'banner'">Sube tu imagen de banner</span>
                  <span v-if="tipo === 'video'">Sube tu video</span>
                  <input
                    :id="`${tipo}-upload`"
                    :name="tipo"
                    type="file"
                    class="sr-only"
                    @change="
                      tipo === 'portada'
                        ? handlePortadaUpload($event)
                        : tipo === 'banner'
                        ? handleBannerUpload($event)
                        : handleVideoUpload($event)
                    "
                  />
                </label>
              </div>
              <p
                v-if="!preloadedArchivos[tipo] && archivos[tipo].length === 0"
                class="text-xs text-gray-500"
              >
                Archivos hasta 100MB
              </p>
            </div>
          </div>
        </div>

        <!-- Campos de información del videojuego -->
        <div class="-my-2">
          <div class="mb-4 mt-16 relative z-0">
            <input
              type="text"
              name="url"
              id="url"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              v-model="url"
              required
            />
            <!-- Etiqueta y animación para el campo de URL -->
            <label
              for="url"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >URL de videojuego</label
            >
          </div>
          <!-- Campos de nombre del videojuego -->
          <div class="mb-4 mt-4 relative z-0">
            <input
              type="text"
              name="nombre"
              id="nombre"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              v-model="nombre"
              required
            />
            <!-- Etiqueta y animación para el campo de URL -->
            <label
              for="nombre"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Nombre del videojuego</label
            >
          </div>
          <!-- Campo de descripción del videojuego -->
          <div class="mb-4 relative z-0">
            <input
              type="text"
              name="descripcion"
              id="descripcion"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              v-model="descripcion"
              required
            />
            <!-- Etiqueta y animación para el campo de descripción -->
            <label
              for="descripcion"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Descripción</label
            >
          </div>

          <!-- Campo de género del videojuego -->
          <div class="mb-4 relative z-0">
            <select
              name="genero"
              id="genero"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              v-model="genero"
              required
            >
              <!-- Opción por defecto -->
              <option
                :value="generoSeleccionado"
                :disabled="!generoSeleccionado"
              >
                {{ generoSeleccionado }}
              </option>
              <!-- Bucle para opciones -->
              <option
                v-for="option in generos"
                :key="option"
                :value="option"
                v-bind:selected="option === generoSeleccionado"
              >
                {{ option }}
              </option>
            </select>
            <label
              for="genero"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Género del videojuego</label
            >
          </div>

          <!-- Campo de grupo etario del videojuego -->
          <div class="mb-4 relative z-0">
            <select
              name="grupo_etario"
              id="grupo_etario"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              v-model="grupoEtareo"
              required
            >
              <!-- Opción por defecto -->
              <option
                :value="grupoEtareoSeleccionado"
                :disabled="!grupoEtareoSeleccionado"
              >
                {{ grupoEtareoSeleccionado }}
              </option>
              <!-- Bucle para opciones -->
              <option
                v-for="option in grupos_etareos"
                :key="option"
                :value="option"
                v-bind:selected="option === grupoEtareoSeleccionado"
              >
                {{ option }}
              </option>
            </select>
            <label
              for="grupo_etario"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Grupo etario del videojuego</label
            >
          </div>

          <!-- Campo de precio del videojuego -->
          <div class="mb-4 relative z-0">
            <input
              type="number"
              name="precio"
              id="precio"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              v-model="precio"
              required
            />
            <label
              for="precio"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Precio</label
            >
          </div>
        </div>

        <!-- Campo de fecha de lanzamiento del videojuego -->
        <div class="mb-4 relative z-0">
          <input
            type="date"
            name="fecha_lanzamiento"
            id="fecha_lanzamiento"
            :min="minDate"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            v-model="fecha_lanzamiento"
            required
          />
          <!-- Etiqueta y animación para el campo de fecha de lanzamiento -->
          <label
            for="fecha_lanzamiento"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Fecha de Lanzamiento</label
          >
        </div>
        <!-- Botón de enviar formulario -->
        <div class="flex justify-center mt-6">
          <button
            type="submit"
            class="px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Actualizar Videojuego
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

  <script>
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default {
  data() {
    return {
      props: ['id'], 
      nombre: "",
      url: "",
      descripcion: "",
      genero: "",
      grupoEtareo: "",
      precio: 0,
      fecha_lanzamiento: "",
      minDate: this.getFormattedDate(new Date()),
      tiposArchivos: ["portada", "banner", "video"],
      archivos: {
        portada: [],
        banner: [],
        video: [],
      },
      preloadedArchivos: {
        portada: "",
        banner: "",
        video: "",
      },
      generos: [],
      grupos_etareos: [],
    };
  },
  mounted() {
    this.fetchEnums(); // Llamada a la función fetchEnums
    this.fetchVideojuego();
  },
  methods: {
    getFormattedDate(date) {
      return date.toISOString().split("T")[0];
    },
    async fetchVideojuego() {
      try {
        console.log("ID del videojuego:", this.$route.params.id);
        const juegoId = this.$route.params.id; // Obtener la ID del videojuego desde la URL
        const response = await axios.get(`http://localhost:8080/detalle/${juegoId}`);
        const videojuego = response.data;

        this.nombre = videojuego.nombre;
        this.url = videojuego.url;
        this.descripcion = videojuego.descripcion;
        this.genero = videojuego.genero;
        this.grupoEtareo = videojuego.grupoEtareo;
        this.precio = videojuego.precio;
        this.preloadedArchivos.portada = videojuego.imagenPortada;
        this.preloadedArchivos.banner = videojuego.imagenBanner;
        this.preloadedArchivos.video = videojuego.video;
        this.fecha_lanzamiento = this.getFormattedDate(new Date(videojuego.fechaLanzamiento));
        console.log("Datos del videojuego:", videojuego);
      } catch (error) {
        console.error("Error al cargar el videojuego:", error);
      }
    },
    async fetchEnums() {
      try {
        const response = await axios.get("http://localhost:8080/desarrollador/enumeradores");
        const data = response.data;

        // Asignamos los datos de los enums
        this.generos = data.generos;
        this.grupos_etareos = data.grupos_etareos;

        // Comparamos y asignamos los valores seleccionados con los enums
        this.genero = this.generos.includes(this.genero) ? this.genero : "";
        this.grupoEtareo = this.grupos_etareos.includes(this.grupoEtareo) ? this.grupoEtareo : "";
      } catch (error) {
        console.error("Error al obtener los enums:", error);
      }
    },
    async handleSubmit() {
      // Validaciones
      if (!this.nombre) {
        this.showToast("El nombre es obligatorio");
        return;
      }
      if (!this.url) {
        this.showToast("La URL es obligatoria");
        return;
      }
      if (!this.descripcion) {
        this.showToast("La descripción es obligatoria");
        return;
      }
      if (!this.genero) {
        this.showToast("El género es obligatorio");
        return;
      }
      if (!this.grupoEtareo) {
        this.showToast("El grupo etáreo es obligatorio");
        return;
      }
      if (!this.precio || isNaN(this.precio)) {
        this.showToast("El precio debe ser un número válido");
        return;
      }
      if (!this.fecha_lanzamiento) {
        this.showToast("La fecha de lanzamiento es obligatoria");
        return;
      }

      // Verificar si los archivos pre-cargados han sido eliminados
      if (
        (!this.preloadedArchivos.portada && this.archivos.portada.length === 0) ||
        (!this.preloadedArchivos.banner && this.archivos.banner.length === 0) ||
        (!this.preloadedArchivos.video && this.archivos.video.length === 0)
      ) {
        this.showToast("Debe proporcionar un archivo para cada tipo que eliminó");
        return;
      }

      const formData = new FormData();
      formData.append("nombre", this.nombre);
      formData.append("url", this.url);
      formData.append("descripcion", this.descripcion);
      formData.append("genero", this.genero);
      formData.append("grupo_etareo", this.grupoEtareo);
      formData.append("precio", this.precio);
      const selectedDate = new Date(this.fecha_lanzamiento);
      const formattedDate = selectedDate.toISOString();
      formData.append("fecha_lanzamiento", formattedDate);

      if (this.archivos.portada.length > 0) {
        formData.append("portada", this.archivos.portada[0]);
      }

      if (this.archivos.banner.length > 0) {
        formData.append("banner", this.archivos.banner[0]);
      }

      if (this.archivos.video.length > 0) {
        formData.append("video", this.archivos.video[0]);
      }

      try {
        const desarrolladorId = 3; // ID del desarrollador por defecto
        const juegoId = this.$route.params.id; // Obtener la ID del videojuego desde la URL
        await axios.put(
          `http://localhost:8080/desarrollador/editar/${desarrolladorId}/${juegoId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.showToastVerify("Videojuego actualizado exitosamente");
        this.$router.push("/inicio");
      } catch (error) {
        console.error("Error al actualizar el videojuego:", error);
        this.showToast("Error al actualizar el videojuego");
      }
    },
    eliminarArchivo(tipo) {
      this.archivos[tipo] = []; // Vaciar el array de archivos del tipo especificado
      this.preloadedArchivos[tipo] = ""; // Limpiar el path del archivo pre-cargado
      // Restablecer el valor del input file
      const input = document.getElementById(`${tipo}-upload`);
      if (input) {
        input.value = ""; // Esto elimina el archivo seleccionado del input
      }
      this.showToast(`Archivo eliminado`);
    },
    handlePortadaUpload(event) {
      this.archivos.portada = Array.from(event.target.files);
    },
    handleBannerUpload(event) {
      this.archivos.banner = Array.from(event.target.files);
    },
    handleVideoUpload(event) {
      this.archivos.video = Array.from(event.target.files);
    },
    goBack() {
      this.$router.push("/inicio");
    },

    // Función para mostrar un mensaje de error con las alertas de Toastify
    showToast(message) {
      Toastify({
        text: message,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        backgroundColor: "linear-gradient(to right, #FF0000, #FF6347)",
      }).showToast();
    },

    showToastVerify(message) {
      Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "center",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      }).showToast();
    },
  },
};

  </script>
