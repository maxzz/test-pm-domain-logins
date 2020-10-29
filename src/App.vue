<template>
    <div class="nav">
        <div class="nav-logo">
            Dm
        </div>
        <div class="nav-links">
            <router-link to="/">Home</router-link>
            <router-link :to="{name: 'LoginA'}">Login {{logins.a.disp}}</router-link>
            <router-link :to="{name: 'LoginB'}">Login {{logins.b.disp}}</router-link>
            <router-link :to="{name: 'ChangeA'}">Change {{logins.a.disp}}</router-link>
            <router-link :to="{name: 'ChangeB'}">Change {{logins.b.disp}}</router-link>
            <!-- <router-link to="/about">About</router-link> -->
        </div>
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
import { mapState } from 'vuex';

export default defineComponent({
    // methods: {
    //     print(component: any) {
    //         console.log(component ? { file: component.type.__file, props: component.type.__props, type: component.type, comp: component } : 'undefined component');
    //     }
    // },
    computed: {
        ...mapState(['logins'])
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
        background-color: #fffaf6;

        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .nav {
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 0 1em;
        background-color: #f7f7f7;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, .2);

        .nav-logo {
            display: grid;
            place-items: center;
            background-color: rgb(250, 220, 220);
            border: 1px dotted red;
            border-radius: 3px;
            font-weight: bold;
            width: 2em;
            height: 2em;
        }

        .nav-links {
            display: flex;
            flex-direction: row;
            margin-left: auto;

            a {
                padding: 1em .4em;
                margin-left: .4em;
                font-weight: bold;
                text-decoration: none;
                color: #5c6064;

                &.router-link-exact-active {
                    color: #42b983;
                }
            }
        }
    }

    .top-container {
        height: 100%;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='1920' preserveAspectRatio='none' viewBox='0 0 1440 1920'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1210%26quot%3b)' fill='none'%3e%3crect width='1440' height='1920' x='0' y='0' fill='url(%23SvgjsLinearGradient1211)'%3e%3c/rect%3e%3cpath d='M812 1739L1447 1104' stroke-width='10' stroke='url(%23SvgjsLinearGradient1212)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M456 1795L1297 954' stroke-width='10' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M301 494L-64 859' stroke-width='6' stroke='url(%23SvgjsLinearGradient1214)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M590 720L174 1136' stroke-width='8' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M295 1855L-431 2581' stroke-width='8' stroke='url(%23SvgjsLinearGradient1215)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1167 98L2154 -889' stroke-width='8' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1322 803L2248 -123' stroke-width='6' stroke='url(%23SvgjsLinearGradient1217)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M351 1720L-459 2530' stroke-width='10' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M891 1901L425 2367' stroke-width='8' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M854 1789L-187 2830' stroke-width='10' stroke='url(%23SvgjsLinearGradient1217)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M542 1273L-189 2004' stroke-width='8' stroke='url(%23SvgjsLinearGradient1215)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M265 173L-281 719' stroke-width='10' stroke='url(%23SvgjsLinearGradient1217)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1298 1520L2203 615' stroke-width='10' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M829 595L186 1238' stroke-width='10' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M473 13L-253 739' stroke-width='10' stroke='url(%23SvgjsLinearGradient1215)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M903 59L1287 -325' stroke-width='10' stroke='url(%23SvgjsLinearGradient1212)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M336 343L-523 1202' stroke-width='10' stroke='url(%23SvgjsLinearGradient1212)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M547 1765L1509 803' stroke-width='6' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M356 1786L779 1363' stroke-width='6' stroke='url(%23SvgjsLinearGradient1214)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M35 1877L-882 2794' stroke-width='10' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1348 1206L647 1907' stroke-width='6' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1203 761L149 1815' stroke-width='8' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1418 1569L747 2240' stroke-width='8' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M487 1646L-397 2530' stroke-width='8' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M704 997L-92 1793' stroke-width='6' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M862 1199L135 1926' stroke-width='8' stroke='url(%23SvgjsLinearGradient1212)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1284 1260L264 2280' stroke-width='8' stroke='url(%23SvgjsLinearGradient1215)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M228 376L-226 830' stroke-width='6' stroke='url(%23SvgjsLinearGradient1212)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M979 374L2010 -657' stroke-width='10' stroke='url(%23SvgjsLinearGradient1215)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M308 95L918 -515' stroke-width='10' stroke='url(%23SvgjsLinearGradient1214)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M32 385L666 -249' stroke-width='6' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1033 390L1960 -537' stroke-width='10' stroke='url(%23SvgjsLinearGradient1215)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M282 1310L-598 2190' stroke-width='10' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M893 307L1516 -316' stroke-width='6' stroke='url(%23SvgjsLinearGradient1217)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M664 1389L1648 405' stroke-width='10' stroke='url(%23SvgjsLinearGradient1217)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M397 1434L894 937' stroke-width='8' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M986 1601L2016 571' stroke-width='10' stroke='url(%23SvgjsLinearGradient1212)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M501 1634L1531 604' stroke-width='6' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1144 1719L2180 683' stroke-width='8' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M770 774L1353 191' stroke-width='10' stroke='url(%23SvgjsLinearGradient1217)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M222 1735L-297 2254' stroke-width='10' stroke='url(%23SvgjsLinearGradient1212)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M616 1814L1661 769' stroke-width='10' stroke='url(%23SvgjsLinearGradient1217)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M255 1762L-118 2135' stroke-width='10' stroke='url(%23SvgjsLinearGradient1212)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M380 439L-64 883' stroke-width='8' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M135 946L-384 1465' stroke-width='10' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M63 1347L481 929' stroke-width='8' stroke='url(%23SvgjsLinearGradient1217)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1258 984L1707 535' stroke-width='6' stroke='url(%23SvgjsLinearGradient1214)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M90 1082L977 195' stroke-width='6' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M663 1706L-122 2491' stroke-width='8' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M518 772L-124 1414' stroke-width='6' stroke='url(%23SvgjsLinearGradient1214)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1319 1917L698 2538' stroke-width='6' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M95 1826L716 1205' stroke-width='10' stroke='url(%23SvgjsLinearGradient1215)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M624 1069L-132 1825' stroke-width='6' stroke='url(%23SvgjsLinearGradient1214)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M821 1105L1624 302' stroke-width='10' stroke='url(%23SvgjsLinearGradient1215)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1412 1536L2066 882' stroke-width='6' stroke='url(%23SvgjsLinearGradient1217)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1386 1406L419 2373' stroke-width='8' stroke='url(%23SvgjsLinearGradient1216)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1196 371L633 934' stroke-width='10' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1345 704L632 1417' stroke-width='8' stroke='url(%23SvgjsLinearGradient1215)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M71 828L643 256' stroke-width='6' stroke='url(%23SvgjsLinearGradient1212)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1260 1413L1860 813' stroke-width='6' stroke='url(%23SvgjsLinearGradient1213)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1210'%3e%3crect width='1440' height='1920' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='-8.33%25' y1='6.25%25' x2='108.33%25' y2='93.75%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1211'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1212'%3e%3cstop stop-color='rgba(157%2c 181%2c 53%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(157%2c 181%2c 53%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1213'%3e%3cstop stop-color='rgba(157%2c 181%2c 53%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(157%2c 181%2c 53%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1214'%3e%3cstop stop-color='rgba(28%2c 83%2c 142%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='%231c538e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1215'%3e%3cstop stop-color='rgba(28%2c 83%2c 142%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='%231c538e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1216'%3e%3cstop stop-color='rgba(53%2c 63%2c 181%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(53%2c 63%2c 181%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1217'%3e%3cstop stop-color='rgba(53%2c 63%2c 181%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(53%2c 63%2c 181%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .route-enter-from    // , .route-leave-to
     {
        transform: scaleY(0.99);
    }

    .route-enter-active {
        transition: all .2s ease;
    }

    .route-enter-to    // , .route-leave-from
     {
        transform: scaleY(0.99);
    }


</style>
