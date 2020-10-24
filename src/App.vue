<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link :to="{name: 'LoginA'}">Login A</router-link>
        <router-link :to="{name: 'LoginB'}">Login B</router-link>
        <!-- <router-link to="/about">About</router-link> -->
    </div>

    <!-- <router-view id="router-view" /> -->

    <!-- <router-view v-slot="{ Component }">
        {{print(Component)}}
        <transition name="route">
            <component :is="Component" />
        </transition>
    </router-view> -->

    <router-view v-slot="{ Component }">
        {{print(Component)}}
        <transition
            enter-active-class="animated bounce"
            leave-active-class="animated pulse"
        >
            <component :is="Component" />
        </transition>
    </router-view>

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
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    // .top-container {
    //     text-align: center;
    //     width: 100%;
    //     height: 100%;
    // }



    .route-enter-from,
    .route-leave-to {
        //opacity: 0;
        transform: translate3d(30px, 0, 0);
    }

    .route-enter-active {
        transition: all .2s ease-out;
        //color: red;
    }
    // .route-leave-active {
    //     //transition: transform 2s ease-out 2s;
    //     color: red;
    // }

    .route-enter-to,
    .route-leave-from {
        //opacity: 1;
        transform: translateX(0);

        //transition: all .3s ease;
    }



// .container {
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
//   max-width: 40rem;
//   margin: 3rem auto;
//   padding: 1rem;
//   border-radius: 12px;
// }

// .route-enter-from,
// .route-leave-to {
//   opacity: 0;
//   transform: translateY(-30px);
// }

// .route-enter-active,
// .route-leave-active {
//   transition: all 0.3s ease;
// }

// .route-enter-to,
// .route-leave-from {
//   opacity: 1;
//   transform: translateY(0);
// }

</style>
