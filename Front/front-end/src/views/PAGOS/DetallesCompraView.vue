<template>
    <div class="w-100 h-screen bg-custom-gradient flex flex-col justify-start items-center gap-[50px]">
        <div class="flex flex-col justify-center items-center gap-[50px]"></div>
    <div class="flex flex-col justify-end items-start gap-[30px]">
        <!-- Breadcrumbs y titulo-->
        <div class="flex flex-col justify-center items-start gap-[26px]">
            <div class="pb-4"><Breadcrumbs /></div>
            <div class="text-center text-pink-50 text-4xl font-normal font-'Poppins'">Detalles de la compra</div>
        </div>
        <!-- Cuadro con informacion del detalle -->
        <div class="w-[820px] h-[340px] pl-5 pr-[510px] py-[21px] bg-background-main rounded-[5px] shadow flex justify-start items-center">
            <div class="flex flex-col justify-start items-start gap-10">
                <div class="flex flex-col justify-start items-start gap-[18px]">
                    <div class="text-center text-zinc-400 text-base font-normal font-['Poppins']">Transacción: {{ TransactionId }}</div>
                    <div class="text-center text-zinc-400 text-base font-normal font-['Poppins']">Fecha de emisión: {{ data.purchaseDetail.PurchasedAt }}</div>
                    <div v-for="(item, index) in data.game" :key="index" class="justify-start items-start gap-3.5 flex">
                        <div class="text-center text-blue-500 text-base font-normal font-['Poppins']">{{ item.name }}</div>
                        <div class="text-center text-white text-base font-normal font-['Poppins']">-</div>
                        <div class="text-center text-blue-500 text-base font-normal font-['Poppins']">{{ item.price }}</div>
                    </div>
                </div>
                <div class="w-[252px] h-[150px] flex-col gap-[13px] inline-flex font-['Poppins']">
                    <!-- Primera parte de los detalles del pago -->
                    <template v-for="(value, label, index) in data.paymentDetail" :key="label">
                        <div class="w-full flex justify-between items-end gap-[29px]">
                            <div class="text-center text-slate-400 text-xs font-normal">{{ label }}</div>
                            <div class="text-blue-500 text-base text-sm font-normal">{{ value }}</div>
                        </div>
                        <!-- Insert <hr> between the penultimate and the last element -->
                        <hr v-if="index === Object.keys(data.paymentDetail).length - 2" class="w-full border-t border-gray-300">
                    </template>          
                </div>
            </div>
        </div>
        <button onclick="window.location.href = '/cuenta/historial-de-compras'" class="px-[54px] py-[13px] bg-blue-800 text-white text-base font-normal font-['Poppins'] rounded-[5px] shadow backdrop-blur-sm flex justify-center items-center gap-2.5 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Volver
        </button>
    </div>
</div>
</template>

<script setup lang="ts">
import Breadcrumbs from '@/components/pagos/Breadcrumbs.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
//Obtención de id para posterior extracción de data desde backend
const TransactionId = route.params.id;

// Data destinada a desarrollo de front
const data = {
    purchaseDetail: 
        {
            TransactionID: "406964120653147828",
            PurchasedAt: "Apr 28 @ 4:55pm"
        }
    ,
    game: [
        { 
            name: "Rayman Legends", 
            price: "CLP$ 3.980" 
        }
    ],
    paymentDetail: 
        {
            Subtotal: "CLP$ 3.345",
            Descuento: "CLP$ -15.920 (-82%)",
            IVA: "CLP$ 635",
            Total: "CLP$ 3.980"
        }
};
// Formato JSON a recibir
/*{
    "purchaseDetail": {
        "TransactionID": "406964120653147828",
        "PurchasedAt": "Apr 28 @ 4:55pm"
    },
    "game": [
        {
            "name": "Rayman Legends",
            "price": "CLP$ 3.980"
        }
    ],
    "paymentDetail": {
        "Subtotal": "CLP$ 3.345",
        "Discount": "CLP$ -15.920 (-82%)",
        "Tax": "CLP$ 635",
        "Total": "CLP$ 3.980"
    }
}*/

</script>