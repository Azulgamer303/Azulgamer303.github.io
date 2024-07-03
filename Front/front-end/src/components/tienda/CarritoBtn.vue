<template>
    <aside>
        <RouterLink to="/carrito" class="button justify-end">
            <button>
                <font-awesome-icon icon="cart-shopping" size="xl"/>
            </button>
        </RouterLink>
    </aside>
</template>
<script>    
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { RouterLink } from 'vue-router';

library.add(faCartShopping);

export default defineComponent({
  components: {
    RouterLink,
    FontAwesomeIcon
  }
});
</script>
<style>
</style>