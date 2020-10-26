<template>
    <div class="login-form">
        <div class="page-title" :class="{
            'login-a': formName === 'a',
            'login-b': formName === 'b'}">
            <span>{{login.disp}}</span>
        </div>
        
        <div v-if="isClogin">
            <form class="login" :class="[formName === 'a' ? 'login-a' : 'login-b']">
                <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path class="a" d="M5.225,2.251l.438-1.116A1,1,0,0,1,6.594.5h.812a1,1,0,0,1,.931.635l.438,1.116,1.45.838,1.185-.18a1,1,0,0,1,1.016.489l.406.7a1,1,0,0,1-.084,1.124L12,6.163V7.837l.748.937A1,1,0,0,1,12.832,9.9l-.406.7a1,1,0,0,1-1.016.489l-1.185-.18-1.45.838-.438,1.116a1,1,0,0,1-.931.635H6.594a1,1,0,0,1-.931-.635l-.438-1.116-1.45-.838-1.185.18A1,1,0,0,1,1.574,10.6l-.406-.7a1,1,0,0,1,.084-1.124L2,7.837V6.163l-.748-.937A1,1,0,0,1,1.168,4.1l.406-.7A1,1,0,0,1,2.59,2.909l1.185.18ZM5,7A2,2,0,1,0,7,5,2,2,0,0,0,5,7Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="sync"><rect width="24" height="24" opacity="0"/><path d="M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z"/><path d="M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z"/></g></g></svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path class="b" 
                        d="M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z" />
                    <path class="b" 
                        d="M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z" />
                </svg>

                <input area-hidden="true" type="email" name="username" autocomplete="username" value="maxzz" style="display: none">

                <label for="pass">Current</label>
                <input id="cpass1" type="password" placeholder="Current password" autocomplete="old-password">

                <label for="pass">New</label>
                <input id="cpass2" type="password" placeholder="New password" autocomplete="current-password">

                <label for="pass">Confirm</label>
                <input id="cpass3" type="password" placeholder="Confirm new password" autocomplete="confirm-password">

                <router-link to="/">Change</router-link>
            </form>
        </div>
        <div v-else>
            <form class="login" :class="[formName === 'a' ? 'login-a' : 'login-b']">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path class="a" d="M9.543,5.728h3.392a.565.565,0,0,1,.565.565V9.12A1.979,1.979,0,0,1,10.469,10.8"/><path class="a" d="M5.966,3.468a1.7,1.7,0,1,1,1.32,1.107"/><path class="a" d="M4.508,10.25a3.109,3.109,0,0,0,6.166-.565V6.293a.565.565,0,0,0-.565-.565H7.283"/><rect class="a" x="0.5" y="3.467" width="6.783" height="6.783" rx="1"/><line class="a" x1="2.196" y1="5.163" x2="5.587" y2="5.163"/><line class="a" x1="3.891" y1="5.163" x2="3.891" y2="8.554"/><circle class="a" cx="11.522" cy="3.467" r="1.13"/></svg>

                <label for="user">Username</label>
                <input id="user" type="text" placeholder="Username" autocomplete="username">

                <label for="pass">Password</label>
                <input id="pass" type="password" placeholder="Password" autocomplete="current-password">

                <router-link to="/">Login</router-link>
            </form>
        </div>

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { mapState } from 'vuex';

    export default defineComponent({
        props: {
            formName: {
                type: String,
                required: true
            },
            isClogin: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            ...mapState(['logins']),
            login(): any {
                return this.logins[this.formName];
            }
        },
    });
</script>

<style lang="scss" scoped>
    .page-title {
        text-align: left;
        height: 7em;
        margin-bottom: 2em;

        span {
            font-size: 3em;
            padding: .2em .5em;

            border: 2px solid gray;
            background-color: red;
            border-radius: 7px;
            border: 1px solid maroon;
        }
    }

    .login {
        padding: 2em;
        margin: 0 auto;
        max-width: 20em;

        border-radius: 3px;
        box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);

        display: grid;
        gap: 1em .4em;
        grid-template-columns: auto 1fr;
        align-items: center;

        svg {
            width: 50px;
            grid-column: 1 / -1;

            .a {
                fill: none;
                stroke: darken(rebeccapurple, 20%);
                stroke-linecap: round;
                stroke-linejoin: round;
            }
            .b {
                fill: none;
                stroke: darken(rebeccapurple, 20%);
                stroke-linecap: round;
                stroke-linejoin: round;
            }
        }

        input {
            padding: .4em;
            border-radius: 3px;
            border: 1px solid #eee;

            &:focus {
                outline: 1px solid red;
            }
        }

        $btn: #efefef;

        a {
            grid-column: 1 / -1;
            justify-self: right;

            font-size: .9em;
            text-decoration: none;
            text-transform: uppercase;
            padding: .4em 1em;

            border-radius: 3px;
            border: 1px solid #eee;

            background-color: $btn;
            outline: none;

            &:hover {
                background-color: darken($btn, 10%);
                outline: none;
                box-shadow: 1px 1px teal;
            }
        }
    }

    .login-a {
        background-color: rebeccapurple;
        color: #eee;
        //border: 1px solid #eee;
    }

    .login-b {
        background-color: darkolivegreen;
        color: #eee;
        //border: 1px solid red;
    }
</style>
