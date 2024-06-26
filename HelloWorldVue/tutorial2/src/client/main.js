import { createApp } from 'vue';
import { router } from "./router/router.js";
import 'bootstrap/dist/css/bootstrap.css';
import { createPinia } from "pinia";
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
