<!-- src/views/BibliotecaJuegoView.vue -->
<template>

    <div class="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4  bg-custom-gradient">
        <div class="w-full md:w-auto m-4 md:m-20 margin">
            <!-- Contenido de la tarjeta -->
            <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <!-- Imagen y título -->
                <div class="relative">
                    <img src="https://via.placeholder.com/600x300" alt="Silksong" class="w-full h-64 object-cover">
                    <div class="absolute top-0 left-0 p-4">
                        <button class="bg-blue-700 text-white p-2 rounded-full primary" @click="volverAtras()">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="absolute top-0 right-0 p-4 primary text-white rounded-bl-lg">
                        <span class="text-lg font-bold">{{ nombreJuego }}</span>
                    </div>
                </div>

                <!-- Detalles de la tarjeta -->

                <div class="p-4">
                    <div class="flex flex-col space-y-2 items-start md:flex-row md:space-y-0 md:space-x-4">
                        <div class="p-4">
                            <div class="flex flex-col space-y-2 text-gray-300 md:flex-row md:space-y-0 md:space-x-4">
                                <div class="flex items-center space-x-2 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span class="font-bold whitespace-nowrap">Tiempo de juego</span>
                                    <span class="whitespace-nowrap">10 horas</span>
                                </div>
                                <div class="flex items-center space-x-2 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    <span class="font-bold whitespace-nowrap">Grupo etareo</span>
                                    <span class="whitespace-nowrap">sin restricción</span>
                                </div>
                                <div class="flex items-center space-x-2 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                                    </svg>
                                    <span class="font-bold whitespace-nowrap">Género</span>
                                    <span class="whitespace-nowrap">ritmo</span>
                                </div>
                                <div class="mt-4 flex items-center space-x-2 flex-shrink-0">
                                    <div class="flex items-center space-x-2 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                        <span class="font-bold whitespace-nowrap">Desarrollador</span>
                                        <span class="whitespace-nowrap">Aberama Gold</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <!-- Botón de reproducción -->
            <div class="mt-4">
                <button
                    class="w-full secundary ter text-gray-900 text-3xl font-semibold py-3 rounded-lg shadow-lg flex items-center justify-center">
                    Jugar →
                </button>
            </div>

            <!-- Sección de reseña -->
            <div class="mt-8">
                <h2 class="text-2xl font-bold mb-2">Descripción</h2>
                <p class="text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ex, hendrerit eget velit ac,
                    dapibus posuere urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia curae; Integer turpis est, fringilla non ipsum id, bibendum viverra eros. Integer bibendum
                    nec tortor in rutrum. Nulla id massa tellus. Proin vitae quam est. Duis quis tincidunt risus.
                    Quisque placerat felis quis suscipit porta. In feugiat pellentesque nibh, non auctor lectus iaculis
                    in. Donec sed felis quis velit gravida accumsan eget in lorem. In congue nisl nec nunc condimentum
                    blandit.
                </p>
            </div>
        </div>
    </div>


</template>



<script>
export default {
    created() {
    
    const datosJuego = JSON.parse(this.$route.params.datosJuego);
    this.nombreJuego = datosJuego.nombre;
    console.log(datosJuego);
    
  },
  data(){
    return{
        nombreJuego: ""
    }
  },
  methods: {
    volverAtras() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.secundary {
    background-color: #748CAB;
}

.primary {
    background-color: #3E5C76;
}

.ter {
    background-color: #F0EBD8;
}

.margin {
    margin-left: 25%;
    margin-right: 25%;
}
</style>