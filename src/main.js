import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from "./App.vue";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import router from "@/router";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component('Button', Button);
app.mount('#app');