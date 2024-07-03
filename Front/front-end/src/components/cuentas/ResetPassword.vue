<template>
  <div class="login-div">
    <form @submit.prevent="submitForm" class="form-background px-36 py-14 rounded-xl shadow-md w-7/10">
      <p class="block title-style font-bold mb-16 text-center title-size">Cambiar contraseña</p>
      <div class="mb-8">
        <label for="password1" class="block text-style font-bold mb-2">Ingrese su nueva contraseña:</label>
        <div class="flex items-center">
          <input :type="passwordFieldType1" v-model="password1" @blur="validatePassword1" id="password1"
            name="password1"
            class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 mr-5 leading-tight focus:outline-none focus:shadow-outline">
          <button type="button"
            class="w-16 h-16 rounded-xl ml-auto button-color flex items-center justify-center active:bg-blue-900"
            @mousedown="showPassword1" @mouseup="hidePassword1" @mouseleave="hidePassword1">
            <i :class="[passwordIcon1, 'text-white', 'text-xl']"></i>
          </button>
        </div>
        <span v-if="password1Error" class="text-red-500">{{ password1Error }}</span>
      </div>
      <div class="mb-20">
        <label for="password2" class="block text-style font-bold mb-2">Repita su contraseña:</label>
        <div class="flex items-center">
          <input :type="passwordFieldType2" v-model="password2" @blur="validatePassword2" id="password2"
            name="password2"
            class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 mr-5 leading-tight focus:outline-none focus:shadow-outline">
          <button type="button"
            class="w-16 h-16 rounded-xl ml-auto button-color flex items-center justify-center active:bg-blue-900"
            @mousedown="showPassword2" @mouseup="hidePassword2" @mouseleave="hidePassword2">
            <i :class="[passwordIcon2, 'text-white', 'text-xl']"></i>
          </button>
        </div>
        <span v-if="password2Error" class="text-red-500">{{ password2Error }}</span>
      </div>
      <div class="flex justify-center">
        <button type="submit"
          class="button-color hover:bg-blue-900 text-style font-bold py-8 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline">Cambiar
          contraseña</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      password1Visible: false,
      password2Visible: false,
      password1: '',
      password2: '',
      password1Error: '',
      password2Error: ''
    };
  },
  computed: {
    passwordFieldType1() {
      return this.password1Visible ? 'text' : 'password';
    },
    passwordIcon1() {
      return this.password1Visible ? 'fas fa-eye-slash' : 'fas fa-eye';
    },
    passwordFieldType2() {
      return this.password2Visible ? 'text' : 'password';
    },
    passwordIcon2() {
      return this.password2Visible ? 'fas fa-eye-slash' : 'fas fa-eye';
    }
  },
  methods: {
    showPassword1() {
      this.password1Visible = true;
    },
    hidePassword1() {
      this.password1Visible = false;
    },
    showPassword2() {
      this.password2Visible = true;
    },
    hidePassword2() {
      this.password2Visible = false;
    },
    validatePassword1() {
      this.password1Error = this.password1 ? '' : 'La contraseña es requerida.';
    },
    validatePassword2() {
      if (!this.password2) {
        this.password2Error = 'La confirmación de la contraseña es requerida.';
      } else if (this.password1 !== this.password2) {
        this.password2Error = 'Las contraseñas no coinciden.';
      } else {
        this.password2Error = '';
      }
    },
    submitForm() {
      this.validatePassword1();
      this.validatePassword2();

      if (!this.password1Error && !this.password2Error) {
        alert("Contraseña cambiada correctamente");
      } else {
        alert("Complete el formulario correctamente");
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
}
</style>