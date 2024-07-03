<template>
  <div class="login-div">
      <form v-if="!showConfirmationModal" @submit.prevent="submitForm" class="form-background px-36 py-24 rounded-xl shadow-md w-7/10">
          <div class="mb-8">
              <label for="email" class="block title-style font-bold mb-2 text-center">Confirmación de Cuenta</label>
          </div>
          <div class="mb-8">
            <label for="password" class="block text-style font-bold mb-2">Ingrese su contraseña:</label>
            <div class="flex items-center">
              <input :type="passwordFieldType" v-model="password" @blur="validatePassword" id="password" name="password" class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 mr-5 leading-tight focus:outline-none focus:shadow-outline">
              <button type="button" class="w-16 h-16 rounded-xl ml-auto button-color flex items-center justify-center active:bg-blue-900" @mousedown="showPassword()" @mouseup="hidePassword()" @mouseleave="hidePassword()">
                <i :class="[passwordIcon, 'text-white', 'text-xl']"></i>
              </button>
            </div>
            <span v-if="passwordError" class="text-red-500">{{ passwordError }}</span>
          </div>
          <div class="flex justify-center">
            <button type="submit" class="button-color hover:bg-blue-900 text-style font-bold py-8 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline">Registrar Cuenta</button>
          </div>
        </form>
        <div v-if="showConfirmationModal" class="modal">
          <div class="modal-content">
              <p>¡Se ha confirmado su cuenta!</p>
              <button @click="cuentas/Login.vue" type="submit" class="hover:bg-blue-900">Iniciar Sesión</button>
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
          password: '',
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
        validatePassword() {
          this.passwordError = this.password ? "" : "La contraseña es requerida.";
        },
        submitForm() {
          this.validatePassword();
    
          if (!this.passwordError) {
              alert("Formulario enviado correctamente");
              this.showConfirmationModal = true;
          } else{
              alert("Complete el formulario correctamente")
          }
        }
      }
    };
</script>
    
<style>
.login-div {
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
      font-size: 30px;
    }
    
    .text-style {
      color: var(--text-white);
      font: var(--font-text);
      font-size: 28px;
    }
    
    .text-question {
      color: var(--text-white);
      font: var(--font-text);
      font-size: 18px;
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
    background-color: var(--secondary);
    padding: 20px;
    border-radius: 8px;
  }
  
  .modal-content button {
    padding: 8px 16px;
    background-color: var(--primary); /* Color del botón */
    color: var(--secondary);
    border-radius: 4px;
    margin-top: 20px;
    margin-left:40%;
  }
  </style>  