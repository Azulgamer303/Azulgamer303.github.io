<template>
    <div>
      <h2 v-if="mensaje">{{ mensaje }}</h2>
      <div v-for="(tarea, index) in tareas" :key="index" class="form-check">
        <input type="checkbox" v-model="tarea.completada" :id="'tarea' + index" class="form-check-input" @change="actualizarTarea(index)">
        <label :for="'tarea' + index" class="form-check-label">{{ tarea.nombre }}</label>
        <p v-if="tarea.completada" class="text-success">¡Tarea completada!</p>
      </div>
      <router-link to="/pinia" class="btn btn-primary mt-3">Ir a Pinia</router-link>
      <router-link to="/admin" class="btn btn-primary mt-3 mx-4">Ir a Admin</router-link>
    </div>
  </template>
  
  <script>
  import { useAppStore } from "../stores/index.js";
  import Hijo from './Hijo.vue';
  
  export default {
    components: { Hijo },
    name: 'Base',
    data() {
      return {
        mensajePadre: 'Hola desde el padre',
        tareas: [],
        mensaje: ''
      };
    },
    methods: {
      obtenerMensaje() {
        fetch('http://localhost:3000/hello')
          .then(response => response.text())
          .then(data => {
            this.mensaje = data;
          });
      },
      fetchTareas() {
        fetch('http://localhost:3000/tareas')
          .then(response => response.json())
          .then(data => {
            this.tareas = data;
          });
      },
      actualizarTarea(index) {
        fetch('http://localhost:3000/tareas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            index: index,
            completada: this.tareas[index].completada
          })
        })
          .then(response => response.json())
          .then(data => {
            console.log(`Tarea ${index} actualizada: ${data.completada}`);
          });
      }
    },
    created() {
      this.obtenerMensaje();
      this.fetchTareas();
    },
    setup() {
      const appStore = useAppStore();
      return { appStore };
    }
  };
  </script>
  