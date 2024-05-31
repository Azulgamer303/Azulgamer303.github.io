<template>
    <div class="d-flex justify-content-center mt-5">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center">Cambio de valor de pinia</h1>
          <h2 class="card-text text-center">{{ appStore.dato }}</h2>
          <div class="d-flex justify-content-between mt-5">
            <button class="btn btn-primary" @click="primero">Cambiar a la Primera</button>
            <button class="btn btn-primary" @click="segundo">Cambiar a la Segunda</button>
          </div>
          <div class="d-flex justify-content-center mt-4">
            <router-link to="/" class="btn btn-primary">Ir a Base</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useAppStore } from "../stores/index.js";
  const appStore = useAppStore();
  const primero = () => appStore.dato = 'Este es un ejemplo de cambio de texto en pinia';
  const segundo = () => appStore.dato = 'Este puede ser el segundo ejemplo de cambio';
  </script>
  