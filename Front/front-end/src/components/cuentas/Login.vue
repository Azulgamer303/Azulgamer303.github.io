<template>
  <div class="login-div">
    <form @submit.prevent="submitForm" class="form-background px-36 py-16 rounded-xl shadow-md w-7/10">
      <p class="block title-size text-style font-bold mb-12 text-center">Iniciar sesión</p>
      <div class="mb-8">
        <label for="email" class="block text-style font-bold mb-2">Ingrese su correo o username:</label>
        <input type="text" v-model="usernameOrEmail" @blur="validateUsernameOrEmail" id="usernameOrEmail"
          name="usernameOrEmail"
          class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <span v-if="usernameOrEmailError" class="text-red-500">{{ usernameOrEmailError }}</span>
      </div>
      <div class="mb-24">
        <label for="password" class="block text-style font-bold mb-2">Ingrese su contraseña:</label>
        <div class="flex items-center">
          <input :type="passwordFieldType" v-model="password" @blur="validatePassword" id="password" name="password"
            class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 mr-5 leading-tight focus:outline-none focus:shadow-outline">
          <button type="button"
            class="w-16 h-16 rounded-xl ml-auto button-color flex items-center justify-center active:bg-blue-900"
            @mousedown="showPassword" @mouseup="hidePassword" @mouseleave="hidePassword">
            <i :class="[passwordIcon, 'text-white', 'text-xl']"></i>
          </button>
        </div>
        <span v-if="passwordError" class="text-red-500">{{ passwordError }}</span>
      </div>
      <div class="flex justify-center items-center">
        <button type="submit"
          class="button-color hover:bg-blue-900 text-style font-bold py-8 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline">Iniciar
          sesión</button>
        <router-link to="/request-reset">
          <button type="button"
            class="button-color hover:bg-blue-900 text-style font-bold ml-12 py-8 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline">Cambiar contraseña</button>
        </router-link>
      </div>
      <div class="flex justify-center items-center mt-4">
        <p class="text-question">¿No tiene cuenta?</p>
        <router-link to="/register-user" class="ml-2 text-indigo-900 text-lg hover:text-indigo-600">Regístrese
          aquí</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      isPasswordVisible: false,
      usernameOrEmail: '',
      password: '',
      usernameOrEmailError: '',
      passwordError: ''
    };
  },
  computed: {
    passwordFieldType() {
      return this.isPasswordVisible ? 'text' : 'password';
    },
    passwordIcon() {
      return this.isPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye';
    }
  },
  methods: {
    showPassword() {
      this.isPasswordVisible = true;
    },
    hidePassword() {
      this.isPasswordVisible = false;
    },
    validateUsernameOrEmail() {
      this.usernameOrEmailError = this.usernameOrEmail ? '' : 'El correo o nombre de usuario es requerido.';
    },
    validatePassword() {
      this.passwordError = this.password ? '' : 'La contraseña es requerida.';
    },
    submitForm() {
      this.validateUsernameOrEmail();
      this.validatePassword();

      if (this.usernameOrEmailError || this.passwordError) {
        alert("Complete el formulario correctamente");
      } else {
        this.$router.push("/profile");
      }
    }
  }
};
</script>

<style>
.login-div {
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
  font-size: 34px !important;
  font-weight: 500 !important;
}

.text-style {
  color: var(--text-white);
  font: var(--font-text);
  font-size: 30px;
}

.text-question {
  color: var(--text-white);
  font: var(--font-text);
  font-size: 18px;
}

.button-color {
  background-color: var(--primary);
}

.text-red-500 {
  color: #f56565;
}
</style>