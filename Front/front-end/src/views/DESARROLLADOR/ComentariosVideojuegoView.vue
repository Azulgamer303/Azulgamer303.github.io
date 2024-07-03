<template>
    <div class="comentarios-videojuego p-4">
      <h1 class="text-2xl font-bold mb-4">Comentarios de Usuarios</h1>
      
      <div class="bg-gray-100 p-4 mb-4">
        <p class="text-lg">Reseñas generales: 
          <span 
            :class="estadoResenas.clase"
          >{{ estadoResenas.texto }}</span> 
          ({{ comentarios.length }} reseñas)
        </p>
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h2 class="font-semibold mb-2">Comentarios más útiles en los últimos 30 días</h2>
          <ul>
            <li 
              v-for="comentario in comentariosUtiles" 
              :key="comentario.id" 
              class="mb-4 p-4 bg-white rounded-lg shadow-md"
            >
              <div class="flex items-start mb-2">
                <img 
                  :src="comentario.imagen" 
                  alt="Imagen de perfil" 
                  class="w-16 h-16 rounded-full mr-4 bg-gray-200"
                >
                <div>
                  <p class="font-semibold">{{ comentario.usuario }}</p>
                  <div class="estrellas flex">
                    <span 
                      v-for="star in 5" 
                      :key="star" 
                      class="estrella" 
                      :class="{ filled: star <= comentario.valoracion }"
                    >★</span>
                  </div>
                </div>
              </div>
              <p class="mb-2">{{ comentario.texto }}</p>
              <p class="text-gray-500 text-sm">Publicado el {{ formatDate(comentario.fecha) }}</p>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 class="font-semibold mb-2">Publicados recientemente</h2>
          <div class="overflow-y-auto h-64">
            <ul>
              <li 
                v-for="comentario in comentariosRecientes" 
                :key="comentario.id" 
                class="mb-4 p-4 bg-white rounded-lg shadow-md"
              >
                <div class="flex items-start mb-2">
                  <img 
                    :src="comentario.imagen" 
                    alt="Imagen de perfil" 
                    class="w-16 h-16 rounded-full mr-4 bg-gray-200"
                  >
                  <div>
                    <p class="font-semibold">{{ comentario.usuario }}</p>
                    <div class="estrellas flex">
                      <span 
                        v-for="star in 5" 
                        :key="star" 
                        class="estrella" 
                        :class="{ filled: star <= comentario.valoracion }"
                      >★</span>
                    </div>
                  </div>
                </div>
                <p class="mb-2">{{ comentario.texto }}</p>
                <p class="text-gray-500 text-sm">Publicado el {{ formatDate(comentario.fecha) }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ComentariosVideojuegoView',
    data() {
      return {
        comentarios: [
          { id: 1, usuario: 'Juan Perez', texto: '¡Excelente juego!', valoracion: 1, fecha: '2024-05-01', imagen: 'https://via.placeholder.com/150' },
          { id: 2, usuario: 'Maria Lopez', texto: 'Me gustó mucho la historia.', valoracion: 1, fecha: '2024-05-02', imagen: 'https://via.placeholder.com/150' },
          { id: 3, usuario: 'Carlos Sánchez', texto: 'Los gráficos son increíbles.', valoracion: 1, fecha: '2024-05-03', imagen: 'https://via.placeholder.com/150' },
          { id: 4, usuario: 'Ana Rodriguez', texto: 'El juego es bueno, pero tiene algunos bugs que deben solucionar.', valoracion: 3, fecha: '2024-05-04', imagen: 'https://via.placeholder.com/150' },
          { id: 5, usuario: 'Pedro Martinez', texto: 'No me gustó, esperaba más.', valoracion: 1, fecha: '2024-05-05', imagen: 'https://via.placeholder.com/150' },
          { id: 6, usuario: 'Luisa Fernanda', texto: 'Gran jugabilidad y buenos gráficos, pero la historia no me atrapó.', valoracion: 3, fecha: '2024-05-06', imagen: 'https://via.placeholder.com/150' }
        ]
      };
    },
    computed: {
      estadoResenas() {
        const totalValoracion = this.comentarios.reduce((acc, comentario) => acc + comentario.valoracion, 0);
        const promedioValoracion = totalValoracion / this.comentarios.length;
  
        if (promedioValoracion >= 4) {
          return { texto: 'Extremadamente positivas', clase: 'text-green-600' };
        } else if (promedioValoracion >= 3) {
          return { texto: 'Positivas', clase: 'text-yellow-500' };
        } else {
          return { texto: 'Negativas', clase: 'text-red-600' };
        }
      },
      comentariosUtiles() {
        return this.comentarios.sort((a, b) => b.texto.length - a.texto.length).slice(0, 2);
      },
      comentariosRecientes() {
        return this.comentarios.sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(2);
      }
    },
    mounted() {
      // Aquí es donde se haría la llamada a la API real en el futuro
      // this.fetchComentarios();
    },
    methods: {
      fetchComentarios() {
        // Ejemplo de cómo se haría una solicitud con axios
        axios.get('/api/comentarios')
          .then(response => {
            this.comentarios = response.data;
          })
          .catch(error => {
            console.error('Hubo un error al obtener los comentarios:', error);
          });
      },
      formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateStr);
        return date.toLocaleDateString('es-ES', options);
      }
    }
  };
  </script>
  
  <style scoped>
  .estrellas .estrella {
    font-size: 1.2em;
    color: #ddd;
  }
  
  .estrellas .estrella.filled {
    color: gold;
  }
  </style>
  