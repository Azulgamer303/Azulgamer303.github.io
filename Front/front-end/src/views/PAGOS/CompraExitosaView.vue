<template>
    <div class=" text-white h-screen bg-custom-gradient" >  
      <div class="flex items-start justify-center flex-col ml-[15rem]"> 
        <div class="mt-9">
        <p class=" mb-2 "> 
          <div class="pb-4"><Breadcrumbs /></div></p> 
        <h1 class="text-3xl mb-4">Pago Exitoso</h1>
        <p class="mb-4">Ahora puedes descargar </p>

<!-- aqui comienza el cuadro-->
        <div class=" text-white p-4 w-[45rem] h-[15rem]" style="background-color: #1D2D44;">
        <div>
<p>transaction ID:40044004040404040</p>
<p>purchased Apr 28 @45 pm</p>
</div>
<div class="text-blue-400">
<p>Rayman legends - 25000</p>
</div>
<div>
  <p>subtotal <span class="text-blue-500">CLP$ 200000</span></p>
</div>

<p>discount <span class="text-blue-500">CLP$ 2000</span></p>

<p>Tax <span class="text-blue-500">CLP$ 635</span></p>

<p>Total <span class="text-blue-500"> CLP$ 3980</span></p>
        </div>
        <button onclick="window.location.href='/tienda'"class=" text-white py-4 px-12 mt-5 rounded"
          style="background-color:  #3E5D75;">
  Back
</button>
    </div>
      </div>
      
    </div>
  </template>
  

  <script setup lang="ts">
    import Breadcrumbs from '@/components/pagos/Breadcrumbs.vue'
/*import {getPaymentStatus, Payment} from '../services/PaymentService.js';
import {createPaymentOrder} from '../services/CreatePayment.js';
*/
/*
async function pagar(){
  // Ejemplo de uso:
const params = {
  apiKey: '1F90971E-8276-4715-97FF-2BLG5030EE3B',
  commerceOrder: '12345',
  subject: 'Descripción de la orden',
  currency: 'CLP',
  amount: 5000,
  email: 'o.millalonco05@gmail.com',
  paymentMethod: 9,
  urlConfirmation: 'http://localhost:5173/compraexitosa',
  urlReturn: 'http://localhost:5173/comprafallida'
};
const secretKey = '3eb0b01379dee9d3773e2948620df0bdb29c9aab';


  await createPaymentOrder(params,secretKey); 
}*/
</script>