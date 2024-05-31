<template>
  <div>
    <h3>{{ mensajePadre }}</h3>
    <button @click="resetearMensaje">Resetear Mensaje</button>
  </div>
</template>

<script>
export default {
  props: ['mensajePadre'],
  methods: {
    resetearMensaje() {
      this.$emit('resetear');
    }
  }
};
</script>
