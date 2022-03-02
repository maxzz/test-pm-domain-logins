import * as VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPageA from "../views/LoginPageA.vue";
import LoginPageB from "../views/LoginPageB.vue";
import PagePasswordChangeA from "../views/PagePasswordChangeA.vue";
import PagePasswordChangeB from "../views/PagePasswordChangeB.vue";

const routes: Array<VueRouter.RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {transition: 'transithome' },
    },
    {
        path: "/apage",
        name: "LoginA",
        component: LoginPageA,
        meta: { transition: 'route', mode: "out-in" },
    },
    {
        path: "/bpage",
        name: "LoginB",
        component: LoginPageB,
        meta: { transition: 'route', mode: "out-in" },
    },
    {
        path: "/apage/changeA",
        name: "ChangeA",
        component: PagePasswordChangeA,
        meta: { transition: 'route', mode: "out-in" },
    },
    {
        path: "/apage/changeB",
        name: "ChangeB",
        component: PagePasswordChangeB,
        meta: { transition: 'route', mode: "out-in" },
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

const router = VueRouter.createRouter({
    //history: VueRouter.createWebHistory(import.meta.env.BASE_URL),
    history: VueRouter.createWebHashHistory(),
    routes
});

export default router;
