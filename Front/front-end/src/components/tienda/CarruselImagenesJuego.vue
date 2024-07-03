<template>
    <div class="flex items-center justify-center px-32 pt-6 pb-6 w-full h-full">
      <ImagenJuego :imagen="imagenSeleccionada" />
    </div>
    <div class="carousel">
      <div class="carousel-inner flex gap-6 justify-center items-center">
        <div class="boton-mover" id="boton-izquierda">
          <button @click="moveLeft">
            <img src="../../assets/teenyicons_left-solid.png" alt="Left Button">
          </button>
        </div>
        <div v-for="(item, i) in carouselImg.slice(index, index + 4)" :key="i">
          <div class="flex">
            <img :src="item.image" alt="Carousel Image" class="carousel-image cursor-pointer"
              @click="updateImagen(item.image)">
          </div>
        </div>
        <div class="boton-mover" id="boton-derecha">
          <button @click="moveRight">
            <img src="../../assets/teenyicons_right-solid.png" alt="Right Button">
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ImagenJuego from '../../components/tienda/ImagenJuego.vue';
  
  export default {
    components: {
      ImagenJuego
    },
    props: {
      imagenInicial: String
    },
    data() {
      return {
        index: 0,
        imagenSeleccionada: this.imagenInicial, // Establece el valor inicial aquí
        carouselImg: [
          { image: 'https://picsum.photos/seed/11/350/350' },
          { image: 'https://picsum.photos/seed/12/350/350' },
          { image: 'https://picsum.photos/seed/13/350/350' },
          { image: 'https://picsum.photos/seed/15/350/350' },
          { image: 'https://picsum.photos/seed/14/350/350' }
        ]
      };
    },
    methods: {
      moveLeft() {
        if (this.index > 0) {
          this.index--;
        }
      },
      moveRight() {
        if (this.index < this.carouselImg.length - 4) {
          this.index++;
        }
      },
      updateImagen(nuevaImagen) {
        console.log('Imagen actualizada a:', nuevaImagen);
        this.imagenSeleccionada = nuevaImagen;
        this.$emit('imagenSeleccionada', nuevaImagen);
      }
    }
  };
  </script>
  
  <style scoped>
  .scroll-container {
    display: flex;
    overflow-x: auto;
    width: 100%;
    max-width: calc(4 * 200px); /* Asume que cada elemento tiene un ancho de 100px */
  }
  .carousel-image {
    width: 100px;
    /* Ajusta este valor según tus necesidades */
    height: auto;
  }

  .boton-mover:hover {
    transition: 50ms;
    transform: scale(0.95);
  }
  </style>