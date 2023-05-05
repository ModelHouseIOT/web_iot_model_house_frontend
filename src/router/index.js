
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/pages/home.vue";
import Account from "@/views/account/pages/account.vue";
import signUp from "@/views/account/pages/sign-up.vue";
import project from "@/views/project/pages/project.vue";
import remodeler from "@/views/remodeler/pages/remodeler.vue";
import detail from "@/views/detail/pages/detail.vue";
import signIn from "@/views/account/pages/sign-in.vue";

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
            path: "/project",
            name: "project",
            component: project,
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
        {
            path: "/sign-in",
            name: "sign-in",
            component: signIn,
        },
        {
            path: "/remodeler",
            name: "remodeler",
            component: remodeler,
        },
        {
            path:"/detail",
            name:"detail",
            component:detail,
        }

    ],
});
export default router;