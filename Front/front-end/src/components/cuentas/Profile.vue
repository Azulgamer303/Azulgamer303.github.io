<template>
    <div class="profile-div">
        <div class="container-background px-36 py-24 rounded-xl shadow-md w-7/10">
            <div class="mb-8 image-container">
                <img class="Ellipse1" src="@/assets/cuentas/imagen.jpg" />
            </div>

            <div class="mb-8">
                <div class="Username-text text-sec-style">
                    Username
                </div>
                <div class="Username text-style">
                    USERNAME123
                </div>
            </div>

            <div class="mb-8">
                <div class="Correo-text text-sec-style">
                    Correo
                </div>
                <div class="Correo text-style">
                    Correo@example.com
                </div>
            </div>

            <div class="mb-8">
                <div class="FechaDeNacimiento-text text-sec-style">
                    Fecha de Nacimiento
                </div>
                <div class="FechaDeNacimiento text-style">
                    12-12-2000
                </div>
            </div>

            <div class="mb-8">
                <div class="Descripcion-text text-sec-style">
                    Descripcion
                </div>
                <div class="Descripcion text-style">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit erat, hendrerit suspendisse pellentesque
                    volutpat
                    habitasse faucibus dictumst aptent sagittis, laoreet aliquam ultricies quam potenti malesuada
                    ligula.
                    Lobortis enim rutrum congue morbi magna nam tincidunt...
                </div>
            </div>
        </div>
        <div class="button-container justify-center">
            <router-link to="/edit-profile">
                <button @click="changeComponent('EditProfile')" type="submit"
                class="button-color hover:bg-blue-900 text-style font-bold py-6 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline">Editar
                Perfil</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['changeComponent'],
    methods: {
        changeComponent(component) {
            this.$emit('changeComponent', component);
        },
    },
};
</script>

<style>
.profile-div {
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background);
}

.container-background {
    background-color: var(--secondary);
}

.image-container {
    width: 200px;
    height: 200px;
}

.Ellipse1 {
    border-radius: 9999px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-style {
    color: var(--text-white);
    font: var(--font-text);
    font-size: 28px;
}

.text-sec-style {
    color: var(--text-white);
    font: var(--font-text);
    font-size: 15px;
}

.button-color {
    background-color: #3E5D76;
}

.button-container {
    align-items: center;
    margin-top: 40px;
}
</style>
