<template>
    <img v-if="imageLoaded" :src="imagen" @load="handleLoad" @error="handleError" alt="">
    <img v-else src="../../assets/juego-ritmico.png" alt="">
  </template>
  
  <script>
  export default {
    props: ['imagen'],
    data() {
      return {
        imageLoaded: false
      };
    },
    watch: {
      imagen() {
        this.imageLoaded = true; // Reset the imageLoaded state when the image changes
      }
    },
    methods: {
      handleLoad() {
        this.imageLoaded = true;
      },
      handleError() {
        this.imageLoaded = false;
      }
    }
  };
  </script>