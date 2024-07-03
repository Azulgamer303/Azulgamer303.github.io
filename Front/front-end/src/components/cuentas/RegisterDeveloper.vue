<template>
<div class="register-div">
    <form v-if="!showConfirmationModal" @submit.prevent="submitForm" class="form-background px-36 py-2 rounded-xl shadow-md w-7/10">
        <div class="mb-1">
            <label for="email" class="block title-style font-bold mb-2 text-center">Registrar Cuenta Desarrollador</label>
            <label for="email" class="block text-style font-bold mb-2">Ingrese su correo:</label>
            <input type="text" v-model="email" @blur="validateEmail" id="email" name="email" class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <span v-if="emailError" class="text-red-500">{{ emailError }}</span>
        </div>
        <div class="mb-1">
            <label for="username" class="block text-style font-bold mb-2">Ingrese su nombre de usuario:</label>
            <input type="text" v-model="username" @blur="validateUsername" id="username" name="username" class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <span v-if="usernameError" class="text-red-500">{{ usernameError }}</span>
        </div>
        <div class="mb-1">
            <label for="company" class="block text-style font-bold mb-2">Nombre de la empresa:</label>
            <input type="text" v-model="company" @blur="validateCompany" id="company" name="company" class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <span v-if="companyError" class="text-red-500">{{ companyError }}</span>
        </div>
        <div class="mb-1">
            <label for="password" class="block text-style font-bold mb-2">Ingrese su contraseña:</label>
        <div class="flex items-center">
          <input :type="passwordFieldType" v-model="password" @blur="validatePassword" id="password" name="password" class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 mr-5 leading-tight focus:outline-none focus:shadow-outline"/>
          <button type="button" class="w-16 h-16 rounded-xl ml-auto button-color flex items-center justify-center active:bg-blue-900" @mousedown="showPassword('password')" @mouseup="hidePassword('password')" @mouseleave="hidePassword('password')">
            <i :class="[passwordIcon, 'text-white', 'text-xl']"></i>
          </button>
        </div>
        <span v-if="passwordError" class="text-red-500">{{ passwordError }}</span>
      </div>
      <div class="mb-4">
        <label for="confirm-password" class="block text-style font-bold mb-2">Confirme su contraseña:</label>
        <div class="flex items-center">
          <input :type="confirmPasswordFieldType" v-model="confirmPassword" @blur="validateConfirmPassword" id="confirm-password" name="confirm-password"  class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 mr-5 leading-tight focus:outline-none focus:shadow-outline"/>
        <button
            type="button"
            class="w-16 h-16 rounded-xl ml-auto button-color flex items-center justify-center active:bg-blue-900"
            @mousedown="showPassword('confirmPassword')"
            @mouseup="hidePassword('confirmPassword')"
            @mouseleave="hidePassword('confirmPassword')"
          >
            <i :class="[confirmPasswordIcon, 'text-white', 'text-xl']"></i>
          </button>
        </div>
        <span v-if="confirmPasswordError" class="text-red-500">{{
          confirmPasswordError
        }}</span>
      </div>
      <div class="flex justify-center items-center">
        <button
          type="submit"
          class="button-color hover:bg-blue-900 text-style font-bold py-6 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline"
        >
          Registrar Cuenta
        </button>
      </div>
      <div class="flex justify-center items-center mt-2">
              <p class="text-question">¿Ya tiene cuenta?</p>
              <router-link to="/login" class="ml-2 text-indigo-900 text-lg hover:text-indigo-600">Inicie sesión aquí</router-link>
            </div>
    </form>
    <div v-if="showConfirmationModal" class="modal">
      <div class="modal-content">
        <p>
          Se ha enviado un correo de confirmación. ¡Revise su bandeja de
          entrada!
        </p>
        <button
          @click="cuentas / Login.vue"
          type="submit"
          class="hover:bg-blue-900"
        >
          Aceptar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showConfirmationModal: false,
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      emailError: "",
      usernameError: "",
      passwordError: "",
      confirmPasswordError: "",
      company: "",
      companyError: "",
    };
  },
  computed: {
    passwordFieldType() {
      return this.isPasswordVisible ? "text" : "password";
    },
    confirmPasswordFieldType() {
      return this.isConfirmPasswordVisible ? "text" : "password";
    },
    passwordIcon() {
      return this.isPasswordVisible ? "fas fa-eye-slash" : "fas fa-eye";
    },
    confirmPasswordIcon() {
      return this.isConfirmPasswordVisible ? "fas fa-eye-slash" : "fas fa-eye";
    },
  },
  methods: {
    showPassword(field) {
      if (field === "password") {
        this.isPasswordVisible = true;
      } else if (field === "confirmPassword") {
        this.isConfirmPasswordVisible = true;
      }
    },
    hidePassword(field) {
      if (field === "password") {
        this.isPasswordVisible = false;
      } else if (field === "confirmPassword") {
        this.isConfirmPasswordVisible = false;
      }
    },
    validateEmail() {
      if (!this.email) {
        this.emailError = "El correo electrónico es requerido.";
      } else if (!this.isValidEmail(this.email)) {
        this.emailError = "Por favor, ingrese un correo electrónico válido.";
      } else {
        this.emailError = "";
      }
    },
    validateUsername() {
      this.usernameError = this.username
        ? ""
        : "El nombre de usuario es requerido.";
    },
    validatePassword() {
      this.passwordError = this.password ? "" : "La contraseña es requerida.";
    },
    validateConfirmPassword() {
      if (!this.confirmPassword) {
        this.confirmPasswordError =
          "La confirmación de la contraseña es requerida.";
      } else if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = "Las contraseñas no coinciden.";
      } else {
        this.confirmPasswordError = "";
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    validateCompany() {
      this.companyError = this.company
        ? ""
        : "El nombre de la empresa es requerido.";
    },
    submitForm() {
      this.validateEmail();
      this.validateUsername();
      this.validateCompany(); // Nueva validación para el campo de la empresa
      this.validatePassword();
      this.validateConfirmPassword();
      if (
        !this.emailError &&
        !this.usernameError &&
        !this.companyError &&
        !this.passwordError &&
        !this.confirmPasswordError
      ) {
        alert("Formulario enviado correctamente");
        this.showConfirmationModal = true;
      } else {
        alert("Complete el formulario correctamente");
      }
    },
  },
};
</script>

<style>
.register-div {
    height: calc(100vh - 5rem); /* Resta la altura del navbar de la altura total de la pantalla */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
}

.form-background {
    background-color: var(--secondary);
}
.title-style {
  color: var(--text-white);
  font: var(--font-text);
  font-size: 24px !important;
}

.text-style {
  color: var(--text-white);
  font: var(--font-text);
  font-size: 24px !important;
}

.text-question {
  color: var(--text-white);
  font: var(--font-text);
  font-size: 20px;
}

.button-color {
  background-color: var(--primary);
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.modal-content button {
  padding: 8px 16px;
  background-color: var(--primary); /* Color del botón */
  color: white;
  border-radius: 4px;
  margin-top: 20px;
  margin-left: 40%;
}
</style>
