<template>
  <div class="w-100 h-screen bg-custom-gradient flex flex-col justify-start items-center gap-[50px]">
    <div class="flex flex-col justify-center items-center gap-[50px]"></div>
      <div class="flex flex-col justify-center items-start gap-[30px]">
        <!-- Breadcrumbs y titulo -->
        <div class="flex flex-col justify-center items-start gap-[26px]">
            <div class="pb-4"><Breadcrumbs /></div>
            <div class="text-center text-pink-50 text-4xl font-normal font-'Poppins'">El pago no se pudo realizar</div>
        </div>
        <!-- Cuadro con informacion -->
        <div class="w-[820px] h-[450px] bg-background-main rounded-[5px] shadow">
          <div class="flex items-center justify-center"> 
            <div class="text-center flex flex-col items-center"> 
              <div class="mt-3">
                <img src="https://media.tenor.com/G-Cyjpzpr08AAAAi/huh-steam.gif" alt="">
              </div>
              <h1 class="mb-2 text-xl text-text-main">Algo salió mal</h1>
              <p class="mb-2 text-text-main">No pudimos procesar su pago</p>
              <p class="text-text-dim">Error# E502 I3</p>
              <br/>
              <button onclick="window.location.href = '/tienda/carrito/detalles-pago'"
               class="px-[54px] py-[13px] bg-blue-800 text-white text-base font-normal font-['Poppins'] 
               rounded-[5px] shadow backdrop-blur-sm flex justify-center items-center gap-2.5 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Volver
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumbs from '@/components/pagos/Breadcrumbs.vue'
</script>
  