<template>
  <div class="bg-[#0d1321] text-white w-full">
    <div class="flex flex-row justify-between pl-10 pt-12">
      <h1 class="text-4xl font-semibold">Estadísticas de pago del videojuego</h1>
      <button class="order-last pr-10 pb-10" @click="detalleVideojuego">
        <img src="@/assets/IMG_DESARROLLADOR/CloseButton.png" alt="Close Button"/>
      </button>
    </div>
    <div class="pl-10 pt-5 pr-10">
      <canvas id="myChart" width="5" height="2" class="bg-[#3e5d75] rounded"></canvas>
    </div>
    <div class="flex flex-row pl-10 pt-20 pb-10">
      <h1 class="text-4xl font-semibold">Detalle</h1>
    </div>
    <div class="flex flex-row space-x-80 pl-32 pb-20">
      <section class="p-4 bg-[#3e5d75] rounded">
        <p class="text-xl pb-4">
          Cantidad total de juegos vendidos: <span class="font-bold text-2xl">{{ detalles.totalJuegosVendidos }}</span>
        </p>
        <p class="text-xl pb-4">
          Monto del juego(c/u): <span class="font-bold text-2xl">{{ detalles.montoJuego }}</span>
        </p>
        <p class="text-xl pb-4">
          Monto total de ventas: <span class="font-bold text-2xl">{{ detalles.montoTotalVentas }}</span>
        </p>
        <p class="text-xl pb-4">
          Mes de mayor cantidad de ventas: <span class="font-bold text-2xl">{{ detalles.mesMayorVentas }}</span>
        </p>
        <p class="text-xl">
          Mes de menor cantidad de ventas: <span class="font-bold text-2xl">{{ detalles.mesMenorVentas }}</span>
        </p>
      </section>
      <section class="p-4 bg-[#3e5d75] rounded">
        <p class="text-xl pb-4">
          Método de pago más usado: <span class="font-bold text-2xl">{{ detalles.metodoPagoMasUsado }}</span>
        </p>
        <p class="text-xl pb-4">
          Método de pago menos usado: <span class="font-bold text-2xl">{{ detalles.metodoPagoMenosUsado }}</span>
        </p>
        <p class="text-xl pb-4">
          Cantidad de pagos(Tarjeta Débito): <span class="font-bold text-2xl">{{ detalles.pagosTarjetaDebito }}</span>
        </p>
        <p class="text-xl pb-4">
          Cantidad de pagos(Tarjeta Crédito): <span class="font-bold text-2xl">{{ detalles.pagosTarjetaCredito }}</span>
        </p>
        <p class="text-xl">
          Cantidad de pagos(Transferencia): <span class="font-bold text-2xl">{{ detalles.pagosTransferencia }}</span>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const chartData = ref({
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      data: [12, 30, 35, 40, 55, 70, 68, 50, 38, 50, 55, 90]
    });

    const detalles = ref({
      totalJuegosVendidos: 530,
      montoJuego: "$15.000",
      montoTotalVentas: "$7.950.000",
      mesMayorVentas: "Diciembre",
      mesMenorVentas: "Enero",
      metodoPagoMasUsado: "Tarjeta Débito",
      metodoPagoMenosUsado: "Transferencia",
      pagosTarjetaDebito: 350,
      pagosTarjetaCredito: 170,
      pagosTransferencia: 10,
    });

    /* 
    const obtenerDatos = async () => {
      try {
        const response = await axios.get(`/api/ruta-a-tu-endpoint/${props.id}`);
        const data = response.data;
        chartData.value.labels = data.meses;
        chartData.value.data = data.ventas;

        detalles.value = {
          totalJuegosVendidos: data.totalJuegosVendidos,
          montoJuego: data.montoJuego,
          montoTotalVentas: data.montoTotalVentas,
          mesMayorVentas: data.mesMayorVentas,
          mesMenorVentas: data.mesMenorVentas,
          metodoPagoMasUsado: data.metodoPagoMasUsado,
          metodoPagoMenosUsado: data.metodoPagoMenosUsado,
          pagosTarjetaDebito: data.pagosTarjetaDebito,
          pagosTarjetaCredito: data.pagosTarjetaCredito,
          pagosTransferencia: data.pagosTransferencia,
        };
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    */

    onMounted(() => {
      const ctx = document.getElementById("myChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: chartData.value.labels,
          datasets: [{
            label: "N° Ventas",
            data: chartData.value.data,
            backgroundColor: "#EFF1F6",
            borderColor: "#EFF1F6",
          }],
        },
        options: {
          scales: {
            x: {
              ticks: { color: "#EFF1F6" },
            },
            y: {
              ticks: { color: "#EFF1F6" },
              beginAtZero: false,
              min: 10,
              max: 100,
            },
          },
        },
      });

      // obtenerDatos();
    });

    return { detalles, chartData, detalleVideojuego };
  },
  methods: {
    detalleVideojuego() {
      window.location.href = "/desarrollador/gestionar-videojuegos/videojuego/1";
    },
  },
};
</script>
