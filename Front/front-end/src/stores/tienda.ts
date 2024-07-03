import { ref } from 'vue'
import { defineStore } from 'pinia'


interface Juego {
    id:      number
    img:     string
    nombre:  string
    precio:  number
    oferta?: number
    categorias?: string
}

export const useTiendaStore = defineStore ('tienda', () => {

    const tienda = ref<Juego[]>([
        { id: 1, img: '../src/assets/juego-ritmico.png', nombre: 'Ritmo 3 Version Standar',   precio: 10000, categorias: 'Ritmo'},
        { id: 2, img: '../src/assets/logoOsu.jpg', nombre: 'Osu!',     precio: 5000, oferta: 50, categorias: 'Ritmo'},
        { id: 3, img: '../src/assets/Logo.png', nombre: 'Game 1',     precio: 5000, oferta: 50, categorias: 'Ritmo'},
        { id: 4, img: '../src/assets/Logo.png', nombre: 'Game 2', precio: 10000, oferta: 50, categorias: 'Aventura'},
        { id: 5, img: '../src/assets/Half-Life-1.jpg', nombre: 'Half-Life', precio: 10000, oferta: 50, categorias: 'Aventura'},
        { id: 6, img: '../src/assets/Half-Life-2.jpg', nombre: 'Half-Life 2', precio: 10000, oferta: 50, categorias: 'Aventura'},
        { id: 7, img: '../src/assets/blasphemous.png', nombre: 'Blasphemous', precio: 7000, oferta: 50, categorias: 'Accion'},
        { id: 8, img: '../src/assets/far_cry.png', nombre: 'Far Cry 3',  precio: 8000, oferta: 50, categorias: 'Aventura'},
    ])

    function getJuegos(){
        return tienda.value
    }

    function getJuegoPrecioConDescuento(id: number) {
        const juego = tienda.value.find(juego => juego.id === id)
        if (juego && juego.oferta !== undefined) {
            return juego.precio - (juego.precio * juego.oferta / 100)
        }
        return juego ? juego.precio : undefined
    }
    
    return { getJuegos, getJuegoPrecioConDescuento }
})