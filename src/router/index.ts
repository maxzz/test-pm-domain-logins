import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import LoginPageA from "../views/LoginPageA.vue";
import LoginPageB from "../views/LoginPageB.vue";
import PagePasswordChangeA from "@/views/PagePasswordChangeA.vue";
import PagePasswordChangeB from "@/views/PagePasswordChangeB.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/apage",
        name: "LoginA",
        component: LoginPageA,
        meta: { transition: 'route' },
    },
    {
        path: "/bpage",
        name: "LoginB",
        component: LoginPageB,
        meta: { transition: 'route' },
    },
    {
        path: "/apage/changeA",
        name: "ChangeA",
        component: PagePasswordChangeA,
        meta: { transition: 'route' },
    },
    {
        path: "/apage/changeB",
        name: "ChangeB",
        component: PagePasswordChangeB,
        meta: { transition: 'route' },
    },

    // {
    //     path: "/about",
    //     name: "About",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
    
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
