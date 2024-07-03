import { ref } from 'vue'
import { defineStore } from 'pinia'

    interface Juego {
        id:      number
        img:     string
        nombre:  string
        precio:  number
        oferta?: number
    }
  
    export const useCarritoStore = defineStore('carrito', () => {   
        const carrito = ref<Juego[]>([
            { id: 1, img: '../assets/blasphemous.png', nombre: 'Ritmo 3 Version Standar',   precio: 10000 },
            { id: 2, img: '../assets/fallout_4.png', nombre: 'Far cry',     precio: 5000, oferta: 50 },
            { id: 3, img: '../assets/far_cry.png', nombre: 'Blasphemous', precio: 7000, oferta: 50 },
            { id: 4, img: '', nombre: 'Producto 4',  precio: 8000, oferta: 50 },
        ])

        function getJuegos(){
            return carrito.value
        }

        function eliminarJuego(id: number) {
            carrito.value = carrito.value.filter(juego => juego.id !== id);
        }

        function getjuegoPrecioConDescuento(id: number) {
            const juego = carrito.value.find(juego => juego.id === id)
            if (juego && juego.oferta !== undefined) {
                return juego.precio - (juego.precio * juego.oferta / 100)
            }
            return juego ? juego.precio : undefined
        }

        
        function getPrecioTotal(){
            return carrito.value.reduce((acc, juego) => acc + getjuegoPrecioConDescuento(juego.id)!, 0)
        }
        
        return { carrito, getJuegos, eliminarJuego, getjuegoPrecioConDescuento, getPrecioTotal }
    })
  