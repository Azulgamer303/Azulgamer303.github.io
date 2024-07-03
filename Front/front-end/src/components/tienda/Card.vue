<script setup lang="ts">
import { useCarritoStore } from '../../stores/carrito';
    const props = defineProps<{
        id:          number
        title:       string
        price:       number
        image?:      string
        offert?:     number
    }>()
    console.log(props.image)
    const carrito = useCarritoStore()
    const newPrice = carrito.getjuegoPrecioConDescuento(props.id);
    const haveSameValue = () => {
        return props.price === newPrice;
    }
</script>

<template>
    <div class='flex items-center'>
        <div class="p-4 items-center justify-start sm:w-[34rem] md:w-[35rem] lg:w-[40rem] rounded-xl group sm:flex space-x-6 bg-[#282C3C] shadow-xl hover:rounded-2xl">
            <img 
                class="mx-auto block w-4/12 h-40 rounded-lg" 
                alt="art cover" 
                loading="lazy" 
                src="../../assets/fallout_4.png" 
            />
            <div class="sm:w-8/12 pl-0 p-5">
                <div class="space-y-2">
                    <div class="flex justify-end">
                        <button 
                            class="opacity-50 hover:text-red-500 hover:opacity-100"
                            @click="carrito.eliminarJuego(id)"
                            >
                            Eliminar
                        </button> 
                    </div>
                   
                    <div class="space-y-4">
                        <h4 class="text-md font-bold text-justify">
                            {{ title }}
                        </h4>
                    </div>
                   
                    <div class="flex items-center space-x-4 justify-end">
                        <div class="flex flex-row space-x-1">
                            <div
                                v-if="offert"
                                class="bg-[#7CC335] 
                                text-white px-6 py-2 
                                text-center justify-center items-center  
                                flex space-x-2 flex-row"
                                >
                                <span>-{{offert}}%</span>
                            </div>
                            <div
                                class=" px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-col">
                                <span 
                                    :class="{ 
                                            'line-through text-gray-500 text-sm': !haveSameValue(), 
                                            'text-lg': haveSameValue() 
                                        }"
                                    >
                                    CLP ${{ price }}
                                </span>
                                <span v-if="!haveSameValue()" class="text-lg">CLP ${{ newPrice }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
