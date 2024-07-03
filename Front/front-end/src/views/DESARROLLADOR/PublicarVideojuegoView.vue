<template>
  <!-- Contenedor principal -->
  <div class="flex flex-col md:flex-row">
    <section class="w-full md:w-1/2 h-screen overflow-hidden hidden md:block">
      <img
        src="/src/assets/IMG_DESARROLLADOR/background-publicar-videojuego.jpg"
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
      <!-- Formulario de publicación -->
      <form class="max-w-xl mx-auto mt-16" @submit.prevent="handleSubmit">
        <!-- Título del formulario -->
        <h1 class="text-3xl font-bold mb-5 text-center md:text-center -m-8">
          Publicar Videojuego
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
              <svg
                v-if="archivos[tipo].length === 0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mx-auto h-8 w-8 text-black icon icon-tabler icons-tabler-outline icon-tabler-folder"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
                />
              </svg>
              <div
                v-if="archivos[tipo].length === 0"
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
                v-if="archivos[tipo].length === 0"
                class="text-xs text-gray-500"
              >
                Archivos hasta 100MB
              </p>
              <!-- Lista de archivos subidos -->
              <ul v-if="archivos[tipo].length > 0" class="mt-3">
                <li
                  v-for="archivo in archivos[tipo]"
                  :key="archivo.nombre"
                  class="flex justify-between"
                >
                  <span>{{ archivo.nombre }}</span>
                  <!-- Botón para eliminar archivo -->
                  <button
                    @click="eliminarArchivo(tipo, archivo.nombre)"
                    class="ml-2 px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Campos de información del videojuego -->
        <div class="-my-2">
          <div class="mb-4 mt-4 relative z-0">
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
              <option v-for="g in generos" :key="g" :value="g">{{ g }}</option>
            </select>
            <!-- Etiqueta y animación para el campo de género -->
            <label
              for="genero"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Género</label
            >
          </div>

          <!-- Campo de precio del videojuego -->
          <div class="mb-4 relative z-0">
            <input
              type="text"
              step="0.01"
              name="precio"
              id="precio"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              v-model="precio"
              required
            />
            <!-- Etiqueta y animación para el campo de precio -->
            <label
              for="precio"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Precio</label
            >
          </div>

          <!-- Campo de grupo etario del videojuego -->
          <div class="mb-4 relative z-0">
            <select
              name="grupo_etareo"
              id="grupo_etareo"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              v-model="grupo_etareo"
              required
            >
              <option v-for="ge in grupos_etareos" :key="ge" :value="ge">
                {{ ge }}
              </option>
            </select>
            <!-- Etiqueta y animación para el campo de grupo etario -->
            <label
              for="grupo_etareo"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Grupo Etario</label
            >
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
        </div>
        <!-- Botón para enviar el formulario -->
        <button
          type="submit"
          class="w-full text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
          Publicar
        </button>
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
      tiposArchivos: ["portada", "banner", "video"], // Tipos de archivos
      archivos: { // esto lo hice para que se vea el archivo que se subio
        portada: [], 
        banner: [], 
        video: [], 
      },
      minDate: this.getFormattedDate(new Date()),
      portadaFile: null,
      bannerFile: null,
      videoFile: null,
      url: "",
      nombre: "",
      descripcion: "",
      genero: "",
      precio: "",
      grupo_etareo: "",
      fecha_lanzamiento: "",
      generos: [],
      grupos_etareos: [],
    };
  },
  methods: {
    getFormattedDate(date) {
      return date.toISOString().split("T")[0];
    },

    eliminarArchivo(tipo, nombreArchivo) {
      this.archivos[tipo] = this.archivos[tipo].filter(
        (archivo) =>
          !(archivo.nombre === nombreArchivo && archivo.file instanceof File)
      );

      switch (tipo) {
        case "portada":
          this.portadaFile = null;
          break;
        case "banner":
          this.bannerFile = null;
          break;
        case "video":
          this.videoFile = null;
          break;
        default:
          break;
      }
    },

    goBack() {
      this.$router.push("/desarrollador/inicio");
    },
    handlePortadaUpload(event) {
      const file = event.target.files[0];

      // Verificar si el archivo es una imagen
      if (!file.type.startsWith("image/")) {
        this.showToast("Por favor, selecciona un archivo de imagen para la portada.");
        return;
      }

      this.portadaFile = file;
      this.archivos.portada.push({
        nombre: this.portadaFile.name,
        file: this.portadaFile,
      });
    },

    handleBannerUpload(event) {
      const file = event.target.files[0];

      // Verificar si el archivo es una imagen
      if (!file.type.startsWith("image/")) {
        this.showToast("Por favor, selecciona un archivo de imagen para el banner.");
        return;
      }

      this.bannerFile = file;
      this.archivos.banner.push({
        nombre: this.bannerFile.name,
        file: this.bannerFile,
      });
    },

    handleVideoUpload(event) {
      const file = event.target.files[0];

      // Verificar si el archivo es de tipo video
      if (!file.type.startsWith("video/")) {
        this.showToast("Por favor, selecciona un archivo de video para el videojuego.");
        return;
      }

      this.videoFile = file;
      this.archivos.video.push({
        nombre: this.videoFile.name,
        file: this.videoFile,
      });
    },

    handleSubmit() {

      // Mostrar los datos del formulario en la consola para probarlo
      console.log("Portada File:", this.portadaFile);
      console.log("Banner File:", this.bannerFile);
      console.log("Video File:", this.videoFile);
      console.log("URL:", this.url);
      console.log("Nombre:", this.nombre);
      console.log("Descripción:", this.descripcion);
      console.log("Género:", this.genero);
      console.log("Precio:", this.precio);
      console.log("Grupo Etareo:", this.grupo_etareo);
      console.log("Fecha de Lanzamiento:", this.fecha_lanzamiento);

      // Validar los campos del formulario antes de enviar la solicitud con Toastify
      if (!this.portadaFile) {
        this.showToast("Por favor, selecciona una imagen de portada");
        return;
      }

      if (!this.bannerFile) {
        this.showToast("Por favor, selecciona un banner de tu videjuego");
        return;
      }
      if (!this.videoFile) {
        this.showToast("Por favor, selecciona un video de tu videjuego");
        return;
      }

      if (isNaN(this.precio)) {
        this.showToast("El precio debe ser un número sin puntos ni comas");
        return;
      }

      const formData = new FormData();
      formData.append("portada", this.portadaFile);
      formData.append("banner", this.bannerFile);
      formData.append("video", this.videoFile);
      formData.append("url", this.url);
      formData.append("nombre", this.nombre);
      formData.append("descripcion", this.descripcion);
      formData.append("genero", this.genero);
      formData.append("precio", this.precio);
      formData.append("grupo_etareo", this.grupo_etareo);

      const selectedDate = new Date(this.fecha_lanzamiento);
      const formattedDate = selectedDate.toISOString();
      formData.append("fecha_lanzamiento", formattedDate);

      axios
        .post("http://localhost:8080/desarrollador/publicar", formData)
        .then((response) => {
          console.log(response.data);
          this.showToastVerify("¡El videojuego se ha publicado correctamente!");
          this.$router.push("/desarrollador/inicio");
        })
        .catch((error) => {
          console.error("Error al publicar el videojuego:", error);
          this.showToast(
            "Hubo un error al publicar el videojuego. Por favor, inténtalo de nuevo más tarde."
          );
        });
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


    fetchEnums() {
      axios
        .get("http://localhost:8080/desarrollador/enumeradores")
        .then((response) => {
          const data = response.data;
          this.generos = data.generos;
          this.grupos_etareos = data.grupos_etareos;
        })
        .catch((error) => {
          console.error("Error al obtener los enums:", error);
        });
    },
  },
  mounted() {
    this.fetchEnums();
  },
};
</script>
