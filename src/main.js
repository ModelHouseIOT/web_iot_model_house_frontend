import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from "./App.vue";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import Image from 'primevue/image';
import router from "@/router";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Password from "primevue/password";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.component('Button', Button);
app.component('pv-image', Image);
app.component('InputText', InputText);
app.component('Toast', Toast);
app.component('Password', Password);
app.mount('#app');
