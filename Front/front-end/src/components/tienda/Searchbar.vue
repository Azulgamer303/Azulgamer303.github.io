<template>
    <div class="search-container">
        <div class="search-bar">
            <input type="text" v-model="input" placeholder="Buscar juego..." @focus="MostrarDropdown = true"
                @blur="ocultarDropdown" />
            <button @click="toggleDropdownFiltro" class="filtro-button"></button>
        </div>

        <div class="dropdown" v-if="MostrarDropdown">
            <RouterLink to="/juego" class="button">
                <div class="item juego flex" v-for="juego in listaFiltrada()" :key="juego.id">
                    <img :src="juego.img" alt="" class="h-10 w-10 rounded-lg mr-2">
                    <button>{{ juego.nombre }}</button>
                </div>
            </RouterLink>
            <div class="item" v-if="input && !listaFiltrada().length">
                <p>No hay resultados</p>
            </div>
        </div>
        <div class="filtro-dropdown" v-if="MostrarDropdownFiltros">
            <div class="filtro-item" v-for="filtro in filtros" :key="filtro" @click="aplicarFiltro(filtro)">
                <p>{{ filtro }}</p>
            </div>
        </div>
    </div>

</template>
<script>

import { ref } from "vue";
import { useTiendaStore } from "@/stores/tienda";



export default {
    setup() {
        const tiendaStore = useTiendaStore();
        const juegos = tiendaStore.getJuegos();
        const input = ref("");
        const MostrarDropdown = ref(false);
        const MostrarDropdownFiltros = ref(false);
        const filtros = ref(["Por desarrollador", "Por categoría", "Por popularidad", "Por precio"]);

        function listaFiltrada() {
            return juegos.filter((juego) =>
                juego.nombre.toLowerCase().includes(input.value.toLowerCase())
            );
        }

        function ocultarDropdown() {
            setTimeout(() => {
                MostrarDropdown.value = false;
            }, 200);
        }

        function toggleDropdownFiltro() {
            MostrarDropdownFiltros.value = !MostrarDropdownFiltros.value;
        }

        function aplicarFiltro(filtro) {
            console.log(`Applied filter: ${filtro}`);
            //método filtro
            MostrarDropdownFiltros.value = false;
        }

        return {
            input,
            MostrarDropdown,
            MostrarDropdownFiltros,
            filtros,
            listaFiltrada,
            ocultarDropdown,
            toggleDropdownFiltro,
            aplicarFiltro,
            juegos
        };
    },
};
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-size: medium;
}

input {
    flex: 1;
    color: black;
    height: 40px;
    width: 570px;
    padding: 10px 50px;
    background: white url("/src/assets/magnifying-glass-solid.svg") no-repeat 15px center;
    background-size: 15px 15px;
    font-size: 14px;
    border-radius: 5px 0 0 5px;
}

.item {
    background-color: white;
    width: 570px;
    padding: 10px;
    color: black;
}

.item:hover {
    background-color: var(--text-white);
    cursor: pointer;
}

.search-container {
    position: relative;
    width: auto;
    margin: 20px auto;
}

.search-bar {
    display: flex;
    align-items: center;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 570px;
    max-height: 177px;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    z-index: 10;
}

.filtro-button {
    width: 40px;
    height: 40px;
    background: white url("/src/assets/bars-solid.svg") no-repeat 13px center;
    background-size: 15px 15px;
    color: black;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

.filtro-button:hover {
    background-color: var(--primary);
}

.filtro-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    width: 150px;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    z-index: 10;
}

.filtro-item {
    padding: 10px;
    color: black;
    cursor: pointer;
}

.filtro-item:hover {
    background-color: var(--text-white);
}
</style>