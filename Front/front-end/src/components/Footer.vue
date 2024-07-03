<script lang="ts">
export default {

};
</script>


<template>
<footer class="bg-gray-800 text-white py-8">
    <div class="flex row">
        <div>
            <img src="@/assets/logo-ufro.png" alt="Logo UFRO">
        </div>
        <div class="container flex flex-col items-center justify-center">
        <p class="font-bold"> UFRO GameLab - 2024</p>
            <div class="flex mt-4">
                <ul class="lista-links">
                    <a target="_blak" href="https://www.ufro.cl/" class="mr-4">Página UFRO</a>
                    <a target="_blak" href="https://fica.ufro.cl/" class="mr-4">Página FICA</a>
                    <a target="_blak" href="https://www.instagram.com/ufro.temuco/">Instagram UFRO</a>
                </ul>
            </div> 
        </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
img {
    width: 15rem;
    
}
.lista-links{
    color:rgb(226, 226, 224);
}
.lista-links > a {
    transition: all 0.3s;
}
.lista-links > a:hover {
    color:rgb(224, 196, 41);
    font-weight: bold;
}

</style>