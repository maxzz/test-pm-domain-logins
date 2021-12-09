<template>
    <div class="nav">
        <div class="nav-logo" @click="reloadPage" title="Return home with reloading the page">
            Dm
        </div>
        <router-link to="/" title="Return home without reloading the page">Home</router-link>

        <div class="nav-links">
            <!-- <router-link to="/">Home</router-link> -->
            <router-link :to="{name: 'LoginA', query: { from: 'homeToLoginA' }}">Login {{logins.a.disp}}</router-link>
            <router-link :to="{name: 'LoginB', query: { from: 'homeToLoginB' }}">Login {{logins.b.disp}}</router-link>
            <router-link :to="{name: 'ChangeA', query: { from: 'homeToChangeA' }}">Change {{logins.a.disp}}</router-link>
            <router-link :to="{name: 'ChangeB', query: { from: 'homeToChangeB' }}">Change {{logins.b.disp}}</router-link>
            <!-- <router-link to="/about">About</router-link> -->
        </div>
    </div>

    <router-view v-slot="{Component, route}">
        <!-- <div class="debug-transition-wrapper"> -->
            <transition :name="route.meta?.transition" :mode="route.meta?.mode">
                <component :is="Component" :key="route.path" />
            </transition>
            <!-- {{print(Component, route)}} -->
        <!-- </div> -->
    </router-view>
</template>

<!--
<router-view v-slot="{ Component }">
    {{print(Component)}}
    <transition enter-active-class="animated bounce" leave-active-class="animated pulse">
        <component :is="Component" />
    </transition>
</router-view>
-->

<script lang="ts">
    import { defineComponent } from 'vue';
    import { RouteLocation, RouteRecordNormalized } from 'vue-router';
    import { mapState } from 'vuex';
    //require('./assets/fonts/YanoneKaffeesatz-Regular.ttf');
    import "./App.scss";

    export default defineComponent({
        computed: {
            ...mapState(['logins'])
        },
        methods: {
            reloadPage: function() {
                window.open(import.meta.env.BASE_URL, '_self');
            },
            print(component: any, route: any) {
                console.log(component
                    ? {
                        file: component.type.__file,
                        props: component.type.__props,
                        type: component.type, comp: component
                    }
                    : 'undefined component',
                );
                console.log(route);
            },
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
        font-family: "Yanone", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: #2c3e50;
        //background-color: #fffaf6;
        background-color: #091e30;
        //background-color: red;
        //letter-spacing: .5px;

        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    @font-face {
        font-family: "Yanone";
        src: url("./assets/fonts/YanoneKaffeesatz-VariableFont_wght.ttf") format("truetype supports variations"),
            url("./assets/fonts/YanoneKaffeesatz-VariableFont_wght.ttf") format("truetype-variations");
        font-weight: 200 700;
    }

    .nav {
        height: 4rem;

        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 0 1em;

        background-color: #091e30;
        //background-color: red;
        //box-shadow: 2px 2px 2px rgba(0, 0, 0, .2);
        box-shadow: inset 0px 0px 12px 11px #020b13;

        font-family: "Yanone", sans-serif;
        font-weight: 300;
        font-size: 1.3em;

        $logo-bkg: rgb(250, 220, 220);

        .nav-logo {
            flex-shrink: 0;
            width: 2em;
            height: 2em;
            font-weight: bold;

            background-color: $logo-bkg;
            border: 1px dotted red;
            border-radius: 3px;

            transition: background-color .6s ease-in-out, color .6s ease;
            cursor: pointer;
            user-select: none;

            display: grid;
            place-items: center;

            &:hover {
                background: radial-gradient($logo-bkg, darken($logo-bkg, 30%));
                border: 2px solid #fe7f7f;
                border-radius: 6px;
                color: red; //lighten($logo-bkg, 5%);
            }
        }

        .nav-links {
            display: flex;
            flex-direction: row;
            margin-left: auto;

            // :nth-child(n) {
            //     border: 1px solid blue;
            // }
            // :nth-child(2n) {
            //     border: 1px solid red;
            // }
        }

        a {
            padding: .8em .2em;
            margin-left: .2em;
            font-weight: bold;
            text-decoration: none;
            color: #82868a;

            &:hover {
                color: #ececec;
            }

            &.router-link-exact-active {
                color: #42b983;
            }
        }

    }

    .top-container {
        height: 100%;
        background: center / contain repeat url("./assets/rain.svg"), linear-gradient(to bottom, #131e27, #3082d3);
        //background-image: url("./assets/rain.svg");
        //background-repeat: no-repeat;
        //background-size: cover;
    }

    // global classes

    $g-btn-bkg: #efefef;

    .g-btn {
        padding: .4em 1em;

        font: inherit;
        font-weight: 400;
        text-decoration: none;
        text-transform: uppercase;

        border-radius: 3px;
        border: 1px solid #eee;

        background-color: $g-btn-bkg;
        border: 1px solid #ccc;
        outline: none;

        &:hover {
            background-color: darken($g-btn-bkg, 5%);
            box-shadow: 1px 1px 1px hsla(0, 0%, 0%, 0.2);
        }
    }

</style>
