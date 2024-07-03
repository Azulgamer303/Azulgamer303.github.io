<template>
  <div class="change-photo-div" @drop="handleDrop" @dragover.prevent>
    <div class="mb-8">
      <img v-if="photo" :src="photo" />
      <img v-else src="@/assets/cuentas/change-photo.png" />
    </div>
    <div v-if="!photo" class="mb-8 text-style">
      Arrastra una Foto
    </div>

    <div class="buttons-container flex justify-center">
      <button @click="emitPhoto" type="submit"
        class="button-color hover:bg-blue-900 text-style font-bold py-6 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline mb-4">Seleccionar</button>

      <router-link to="/edit-profile">
        <button @click="cerrarComponente" type="reset"
        class="button-sec-color hover:bg-blue-900 text-style font-bold py-6 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline">Cancelar</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photo: null
    };
  },
  methods: {
    cerrarComponente() {
      this.$emit('cerrar');
    },
    handleDrop(event) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.photo = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    emitPhoto() {
      if (this.photo) {
        this.$emit('photo-selected', this.photo);
        this.cerrarComponente();
      }
    }
  }
};
</script>

<style>
.change-photo-div {
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
}

.text-style {
  color: var(--text-white);
  font: var(--font-text);
  font-size: 28px;
}

.button-color {
  background-color: #3E5D76;
}

.button-sec-color {
  background-color: #738BAB;
}

.buttons-container {
  align-items: center;
  margin-top: 30px;
}

button {
  margin: 10px;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
