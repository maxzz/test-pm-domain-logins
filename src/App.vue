<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/a">Login A</router-link>
        <router-link to="/b">Login B</router-link>
        <!-- <router-link to="/about">About</router-link> -->
    </div>

    <!-- <router-view id="router-view" /> -->

    <!-- <transition name="slide">
        <router-view id="router-view" />
    </transition> -->

    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

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

    #router-view {
        text-align: center;
        width: 100%;
        height: 100%;
    }
</style>
