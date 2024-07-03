<template>
    <div class="request-div">
        <form @submit.prevent="submitForm" class="form-background px-36 py-20 rounded-xl shadow-md w-7/10">
            <p class="block title-style font-bold mb-20 text-center">Solicitud de cambio de contraseña</p>
            <div class="mb-36">
                <label for="email" class="block text-style font-bold mb-2">Ingrese su correo o username:</label>
                <input type="text" v-model="email" @blur="validateEmail" id="email" name="email"
                    class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <span v-if="emailError" class="text-red-500">{{ emailError }}</span>
            </div>
            <div class="flex justify-center">
                <button type="submit"
                    class="button-color hover:bg-blue-900 text-style font-bold py-8 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline">Solicitar
                    cambio</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            emailError: ''
        };
    },
    methods: {
        validateEmail() {
            if (!this.email) {
                this.emailError = "El correo o username es requerido.";
            } else {
                this.emailError = "";
            }
        },
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        submitForm() {
            this.validateEmail();

            if (!this.emailError) {
                // Navegar a reset-password después de la validación exitosa
                this.$router.push('/reset-password');
            } else {
                alert("Complete el formulario correctamente");
            }
        }
    }
};
</script>

<style>
.request-div {
    height: calc(100vh - 5rem);
    /* Resta la altura del navbar de la altura total de la pantalla */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
}

.form-background {
    background-color: var(--secondary);
}

.title-size {
    font-size: 30px !important;
    font-weight: 500 !important;
}

.text-style {
    color: var(--text-white);
    font: var(--font-text);
    font-size: 28px;
}

.button-color {
    background-color: #3E5D76;
}

.text-red-500 {
    color: #f56565;
    /* Color rojo para mensajes de error */
}
</style>