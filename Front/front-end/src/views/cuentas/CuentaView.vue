<template>
    <div>
      <Profile v-if="currentComponent === 'Profile'" @changeComponent="changeComponent" />
      <EditProfile v-if="currentComponent === 'EditProfile'" @changeComponent="changeComponent" />
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useComponentStore } from '@/stores/cuentas/profileSets';
  import Profile from '@/components/cuentas/Profile.vue';
  import EditProfile from '@/components/cuentas/EditProfile.vue';
  
  export default {
    components: {
      Profile,
      EditProfile,
    },
    setup() {
      const componentStore = useComponentStore();
      const currentComponent = computed(() => componentStore.currentComponent);
  
      const changeComponent = (component) => {
        componentStore.setCurrentComponent(component);
      };
  
      return {
        currentComponent,
        changeComponent,
      };
    },
  };
  </script>
  