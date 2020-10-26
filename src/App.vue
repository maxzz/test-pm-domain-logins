<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link :to="{name: 'LoginA'}">Login A</router-link>
        <router-link :to="{name: 'LoginB'}">Login B</router-link>
        <!-- <router-link to="/about">About</router-link> -->
    </div>

    <!-- <router-view id="router-view" /> -->

    <router-view v-slot="{ Component, route }">
        <!-- {{print(Component)}} -->
        <transition :name="route.meta && route.meta.transition">
            <component :is="Component" />
        </transition>
    </router-view>

    <!-- <router-view v-slot="{ Component }">
        {{print(Component)}}
        <transition
            enter-active-class="animated bounce"
            leave-active-class="animated pulse"
        >
            <component :is="Component" />
        </transition>
    </router-view> -->

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        print(component: any) {
            console.log(component ? { file: component.type.__file, props: component.type.__props, type: component.type, comp: component } : 'undefined component');
        }
    }
});
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    #nav {
        display: grid;
        justify-content: start;
        grid-auto-flow: column;
        background-color: #eee;

        a {
            padding: 1em;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.2em;
            color: #80858a;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .route-enter-from,
    .route-leave-to {
        transform: scale(0.99);
    }

    .route-enter-active {
        transition: all .2s ease;
    }

    .route-enter-to,
    .route-leave-from {
        transform: scale(0.99);
    }


</style>
