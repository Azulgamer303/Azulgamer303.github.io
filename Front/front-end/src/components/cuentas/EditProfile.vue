<template>
  <div class="edit-profile-div">
    <div class="container-background px-36 py-24 rounded-xl shadow-md w-7/10 mb-8">
      <div class="mb-8">
        <router-link to="/change-photo">
        <div class="photo-container" @click="mostrarComponente">
            <img class="photo" :src="photoUrl" />
          
        </div>
      </router-link>
        <div class="change-photo" v-if="mostrar">
          <ChangePhoto @cerrar="cerrarComponente" @photo-selected="updatePhoto" />
        </div>
      </div>

      <div class="mb-8" v-for="(item, index) in items" :key="index">
        <div class="Username-text text-sec-style">
          {{ item.label }}
        </div>
        <div class="info-container">
          <span class="info-text text-style" v-if="!item.isEditing">{{ item.value }}</span>
          <img class="edit-icon" src="@/assets/cuentas/edit.png" alt="Edit Icon" @click="startEditing(index)" v-if="!item.isEditing" />
          <input class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-if="item.isEditing && item.type === 'text'" v-model="item.newValue"
            @keyup.enter="stopEditing(index)" />
          <input class="shadow appearance-none border rounded-xl h-16 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-if="item.isEditing && item.type === 'date'" type="date" v-model="item.newValue"
            @keyup.enter="formatAndAssignDate(item)" />
        </div>
      </div>
    </div>

    <div class="buttons-container justify-center">
      <button @click="changeComponent('Profile')" type="submit"
        class="button-color hover:bg-blue-900 text-style font-bold py-6 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline mb-4">Guardar Cambios</button>

      <router-link to="/profile">
        <button @click="changeComponent('Profile')" type="reset"
        class="button-sec-color hover:bg-blue-900 text-style font-bold py-6 px-12 rounded-xl w-auto focus:outline-none focus:shadow-outline">Cancelar</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ChangePhoto from '@/components/cuentas/ChangePhoto.vue';

export default {
  emits: ['changeComponent'],
  name: 'YourComponent',
  components: {
    ChangePhoto,
  },
  data() {
    return {
      mostrar: false,
      photoUrl: '@/assets/cuentas/imagen.jpg',  // Usar require para importar la imagen
      items: [
        { label: 'Username', value: 'USERNAME123', newValue: '', isEditing: false, type: 'text' },
        { label: 'Correo', value: 'Correo@example.com', newValue: '', isEditing: false, type: 'text' },
        { label: 'Fecha de Nacimiento', value: '12-12-2000', newValue: '', isEditing: false, type: 'date' },
        { label: 'Descripcion', value: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat, hendrerit suspendisse pellentesque volutpat habitasse faucibus dictumst aptent sagittis, laoreet aliquam ultricies quam potenti malesuada ligula. Lobortis enim rutrum congue morbi magna nam tincidunt...', newValue: '', isEditing: false, type: 'text' }
      ]
    };
  },
  methods: {
    formatAndAssignDate(item) {
      if (item.newValue) {
        const parts = item.newValue.split('-');
        if (parts.length === 3) {
          const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
          item.newValue = formattedDate;
          item.value = item.newValue;
          item.isEditing = false; // Cerrar el campo de entrada
        }
      }
    },
    startEditing(index) {
      this.items[index].newValue = this.items[index].value;
      this.items[index].isEditing = true;
    },
    stopEditing(index) {
      this.items[index].isEditing = false;
      const newItem = this.items[index];
      if (newItem.newValue.trim() !== '') {
        newItem.value = newItem.newValue;
      }
    },
    changeComponent(component) {
      this.$emit('changeComponent', component, this.items);
    },
    mostrarComponente() {
      this.mostrar = true;
    },
    cerrarComponente() {
      this.mostrar = false;
    },
    updatePhoto(photo) {
      this.photoUrl = photo;
    }
  },
};
</script>


<style>
.edit-profile-div {
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

.info-container {
  display: flex;
  align-items: center;
}

.edit-icon {
  max-width: 2rem;
  max-height: 2rem;
  margin-left: 2rem;
}

.change-photo {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border: 1px solid #ccc;
  width: 75%;
}

.photo-container {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
