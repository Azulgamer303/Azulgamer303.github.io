<template>
    <div class="w-100 h-screen bg-custom-gradient">
        <div class="w-[1280px] h-screen flex flex-col py-40 pl-80">
            <div class="x h-[480px] flex grow-[0.2] flex-col pl-10 justify-center">
                <div class="pb-4">
                    <Breadcrumbs />
                </div>
                <h2 class="text-text-main pb-8 text-3xl ">Detalles de la compra</h2>
                <div class="flex flex-col gap-7">
                    <div
                        class="w-[800px] h-[120px] bg-background-main rounded drop-shadow-md overflow-hidden flex flex-row justify-between">
                        <div class="flex">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Garry%27s_Mod_logo.svg/1200px-Garry%27s_Mod_logo.svg.png"
                                class="h-[120px] bg-[#0081FF]" alt="">
                            <div class="flex flex-col gap-1 pl-4 pt-2">
                                <h1 class="text-text-main text-xl">Garry's Mod</h1>
                                <div class="flex flex-row gap-2">
                                    <img class="w-[20px] invert-[52%] sepia-[10%] saturate-[460%] hue-rotate-[173deg] brightness-[93%] contrast-[86%]"
                                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/windows-icon.png">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row gap-2 pr-5 pt-8">
                            <div class="pt-2.5 pr-4">
                                <h1
                                    class="bg-success text-background-main h-[40px] w-[60px] text-center content-center rounded font-semibold">
                                    -50%</h1>
                            </div>
                            <div class="flex flex-col gap-2 font-medium">
                                <h1 class="line-through text-text-dim">CLP$10.500</h1>
                                <h1 class="text-success">CLP$5.250</h1>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-[800px] h-[120px] bg-background-main rounded drop-shadow-md overflow-hidden flex flex-row justify-between">
                        <div class="flex">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Garry%27s_Mod_logo.svg/1200px-Garry%27s_Mod_logo.svg.png"
                                class="h-[120px] bg-[#0081FF]" alt="">
                            <div class="flex flex-col gap-1 pl-4 pt-2">
                                <h1 class="text-text-main text-xl">Garry's Mod</h1>
                                <div class="flex flex-row gap-2">
                                    <img class="w-[20px] invert-[52%] sepia-[10%] saturate-[460%] hue-rotate-[173deg] brightness-[93%] contrast-[86%]"
                                        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/windows-icon.png">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row gap-2 pr-5 pt-8">
                            <div class="pt-2.5 pr-4">
                                <h1
                                    class="bg-success text-background-main h-[40px] w-[60px] text-center content-center rounded font-semibold">
                                    -50%</h1>
                            </div>
                            <div class="flex flex-col gap-2 font-medium">
                                <h1 class="line-through text-text-dim">CLP$10.500</h1>
                                <h1 class="text-success">CLP$5.250</h1>
                            </div>
                        </div>
                    </div>
                    <div class="bg-background-main w-[800px] h-[245px] rounded pt-[10px] pl-[20px]">
                        <div class="flex flex-row gap-5 pt-5">
                            <h3 class="text-text-main">
                                Total Estimado
                            </h3>
                            <h3 class="text-success">
                                CLP$10.500
                            </h3>
                        </div>
                        <div class="flex flex-col pt-5">
                            <h3 class="text-text-main">
                                El impuesto sobre las ventas se calculará durante el proceso de pago, si corresponde.
                            </h3>
                            <h3 class="text-text-dim">
                                Tiene la oportunidad de revisar su pedido antes de realizarlo.
                            </h3>
                        </div>
                        <div class="pt-[40px] pr-10 flex flex-row justify-between w-[800px]">
                            <div
                                class="w-[250px] h-[50px] rounded bg-background-highlight text-text-main flex justify-center items-center drop-shadow-md transition duration-300 ease-out hover:bg-[#242A31]">
                                <a class="" href="/">Continuar comprando</a>
                            </div>
                            <div
                                class="w-[250px] h-[50px] rounded bg-secondary text-text-main flex justify-center items-center drop-shadow-md transition duration-300 ease-out hover:bg-[#627ECA]">
                                <a class="" href="/">Continuar al pago</a>
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
</script>