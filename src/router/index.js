
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/pages/home.vue";
import Account from "@/views/account/pages/account.vue";
import signUp from "@/views/account/pages/sign-up.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "home",
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/account",
            name: "account",
            component: Account,
        },
        {
            path: "/sign-up",
            name: "sign-up",
            component: signUp,
        },

    ],
});
export default router;