import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/pages/home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home,
        }
    ],
});

export default router;