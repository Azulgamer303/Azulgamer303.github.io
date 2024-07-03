<template>
    <div class="w-100 min-h-screen bg-custom-gradient">
        <div class="min-w-screen flex flex-col pl-80">
            <div class="x min-h-screen flex grow-[0.2] flex-col justify-center">
                <div class="pb-4">
                    <Breadcrumbs />
                </div>
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col pb-8">
                        <h2 class="text-text-main pb-2 text-3xl ">Historial de compras</h2>
                        <div v-if="filterStartDate !== '' && filterEndDate !== ''" class="flex flex-row gap-4">
                            <h2 class="text-text-dim">{{ filterStartDate }}</h2>
                            <h2 class="text-text-dim">{{ filterEndDate }}</h2>
                        </div>
                    </div>
                    <div class="flex flex-row gap-4 pb-8 pr-80">
                        <div class="flex flex-row justify-center items-center gap-2">
                            <h1 class="text-text-dim">Fecha inicial</h1>
                            <input class="text-text-main bg-transparent w-[20px] focus:outline-none" type="date"
                                v-model="filterStartDate" placeholder="Start Date" @change="updateFilteredPurchases" />
                        </div>
                        <div class="flex flex-row justify-center items-center gap-2">
                            <h1 class="text-text-dim">Fecha final</h1>
                            <input class="text-text-main bg-transparent w-[20px] focus:outline-none" type="date"
                                v-model="filterEndDate" placeholder="End Date" @change="updateFilteredPurchases" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div
                        class="w-[1280px] h-[60px] bg-background-secondary flex flex-row justify-between items-center px-20">
                        <div class="flex flex-row gap-60">
                            <h1 class="text-text-main">Fecha</h1>
                            <h1 class="text-text-main">Items</h1>
                        </div>
                        <div class="flex flex-row gap-60">
                            <h1 class="text-text-main">Estado</h1>
                            <h1 class="text-text-main">Total</h1>
                        </div>
                    </div>
                    <div class="w-[1280px] min-h-0 bg-background-main flex flex-col gap-6 pt-5 pb-10 pt-15">
                        <div v-for="purchase in updateFilteredPurchases()" :key="purchase.date" @click="goToDetails(purchase.id)">
                            <div class="flex flex-row justify-between items-center px-[60px]">
                                <div class="flex flex-row gap-[11.5rem]">
                                    <h1 class="text-text-dim">{{ purchase.date }}</h1>
                                    <h1 class="text-text-main">{{ purchase.items }}</h1>
                                </div>
                                <div class="flex flex-row gap-[11.8rem]">
                                    <h1 class="text-text-main">{{ purchase.state }}</h1>
                                    <h1 class="text-text-dim">{{ purchase.total }}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import Breadcrumbs from '@/components/pagos/Breadcrumbs.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let purchases = [
    {
        id: 1,
        date: '2024-05-07',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 2,
        date: '2024-05-07',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 3,
        date: '2024-05-06',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 4,
        date: '2024-05-05',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 5,
        date: '2024-05-04',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 6,
        date: '2024-05-04',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 7,
        date: '2024-05-03',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 8,
        date: '2024-05-03',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 9,
        date: '2024-05-02',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 10,
        date: '2024-05-02',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
    {
        id: 11,
        date: '2024-05-01',
        items: "Garry's Mod",
        state: "Completada",
        total: "CLP$ 3.980"
    },
]

const filterStartDate = ref("");
const filterEndDate = ref("");

function updateFilteredPurchases() {

    const startDate = filterStartDate.value;
    const endDate = filterEndDate.value;

    if (!startDate || !endDate) {
        return purchases;
    }

    return purchases.filter(purchase => {
        return purchase.date >= startDate && purchase.date <= endDate;
    });
}

const router = useRouter();
const goToDetails = (id: number) => {
  router.push({ name: 'detalles-compra', params: { id } });
};
</script>