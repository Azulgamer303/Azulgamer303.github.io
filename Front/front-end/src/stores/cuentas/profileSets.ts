import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useComponentStore = defineStore('componentStore', () => {
  const currentComponent = ref('Profile'); // Componente inicial

  function setCurrentComponent(component: string) {
    currentComponent.value = component;
  }

  return { currentComponent, setCurrentComponent };
  
});
