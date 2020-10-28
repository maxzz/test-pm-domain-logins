<template>
    <div class="login-view">
        <div class="page-title" :class="{
            'login-a': formName === 'a',
            'login-b': formName === 'b'}">
            <span>{{currentForm.disp}}</span>
        </div>

        <div v-if="isClogin">
            <form class="form" :class="formClass()">
                <div class="svg-bkg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path class="b" d="M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z" />
                        <path class="b" d="M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z" />
                    </svg>
                </div>

                <div class="fields">
                    <input area-hidden="true" type="email" name="username" autocomplete="username" value="maxzz" style="display: none">
    
                    <label for="pass">Current</label>
                    <input id="cpass1" :type="passwordType" v-model="passwords.p1" placeholder="Current password" autocomplete="old-password">
    
                    <label for="pass">New</label>
                    <input id="cpass2" :type="passwordType" v-model="passwords.p2" placeholder="New password" autocomplete="current-password">
    
                    <label for="pass">Confirm</label>
                    <input id="cpass3" :type="passwordType" v-model="passwords.p3" placeholder="Confirm new password" autocomplete="confirm-password">
    
                    <label class="reveal"><input type="checkbox" v-model="revealPasswords"> Reveal passwords</label>
                    <button @click.prevent="onSubmit">Change</button>
                </div>
            </form>
        </div>
        <div v-else>
            <form class="form" :class="formClass()">
                <div class="svg-bkg">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path class="a" d="M9.543,5.728h3.392a.565.565,0,0,1,.565.565V9.12A1.979,1.979,0,0,1,10.469,10.8"/><path class="a" d="M5.966,3.468a1.7,1.7,0,1,1,1.32,1.107"/><path class="a" d="M4.508,10.25a3.109,3.109,0,0,0,6.166-.565V6.293a.565.565,0,0,0-.565-.565H7.283"/><rect class="a" x="0.5" y="3.467" width="6.783" height="6.783" rx="1"/><line class="a" x1="2.196" y1="5.163" x2="5.587" y2="5.163"/><line class="a" x1="3.891" y1="5.163" x2="3.891" y2="8.554"/><circle class="a" cx="11.522" cy="3.467" r="1.13"/></svg> -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 145 145">
  <!-- GI: 'user svg' https://www.svgrepo.com/svg/91079/avatar -->
  <circle cx="72.4" cy="72.4" r="72.4" fill="#f5c002"/>
  <defs>
    <circle id="a" cx="72.4" cy="72.4" r="72.4"/>
  </defs>
  <clipPath id="b">
    <use xlink:href="#a" overflow="visible"/>
  </clipPath>
  <g clip-path="url(#b)">
    <path d="M107 117c-5-9-35-14-35-14s-30 5-34 14l-7 28h82s-2-17-6-28z" fill="#f1c9a5"/>
    <path d="M72 103s30 5 35 14c4 11 6 28 6 28H72v-42z" fill="#e4b692"/>
    <path fill="#f1c9a5" d="M64 85h16v27H64z"/>
    <path fill="#e4b692" d="M72 85h8v27h-8z"/>
    <path d="M64 97c2 4 8 7 12 7l5-1V85H64v12z" opacity=".1" fill="#ddac8c"/>
    <path d="M93 67c0-17-9-26-21-26-11 0-21 9-21 26 0 23 10 31 21 31 12 0 21-9 21-31z" fill="#f1c9a5"/>
    <path d="M90 79c-4 0-6-4-6-9 1-5 5-8 9-8 3 1 6 5 5 9 0 5-4 9-8 8z" fill="#e4b692"/>
    <path d="M47 71c-1-4 2-8 5-9 4 0 8 3 8 8 1 5-1 9-5 9-4 1-8-3-8-8z" fill="#f1c9a5"/>
    <path d="M93 67c0-17-9-26-21-26v57c12 0 21-9 21-31z" fill="#e4b692"/>
    <path d="M91 82c-1 3-3 7-6 7-5 0-8-4-13-4s-8 4-12 4c-3 0-5-4-7-7v-6 7s1 8 4 11c3 2 11 6 15 6 5 0 13-4 15-6 4-3 5-11 5-11v-7l-1 6zM62 44s4 16 26 24l-3-8 10 7c3-7 7-16-2-21-8-6-28-15-31-2z" fill="#303030"/>
    <path d="M55 66s2-18 8-22c-5-2-14 5-13 10l5 12z" fill="#303030"/>
    <path d="M107 117c-3-5-14-9-23-12a12 12 0 01-23 0c-9 3-21 7-23 12l-7 28h82s-2-17-6-28z" fill="#fb621e"/>
    <path d="M60 108c0 6 6 11 12 11 7 0 12-5 13-11 8 2 18 6 22 10v-1c-3-5-14-9-23-12a12 12 0 01-23 0c-9 3-21 7-23 12l-1 1c5-4 15-8 23-10z" opacity=".2" fill="#e53d0c"/>
    <path d="M57 106a15 15 0 0030 0l-3-1a12 12 0 01-23 0l-4 1z" fill="#e53d0c"/>
    <path d="M76 91s-1-3-4-3c-2 0-3 3-3 3h7z" fill="#fff"/>
  </g>
</svg>
                </div>

                <div class="fields">
                    <label for="user">Username</label>
                    <input id="user" type="text" v-model="thisUser" placeholder="Username" autocomplete="username">
    
                    <label for="pass">Password</label>
                    <input id="pass" :type="passwordType" v-model="thisPass" placeholder="Password" autocomplete="current-password">
    
                    <label class="reveal"><input type="checkbox" v-model="revealPasswords"> Reveal password</label>
                    <button @click.prevent="onSubmit">Login</button>
                </div>
            </form>
        </div>

        <!-- <br>
        {{currentForm}} -->

    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, reactive, ref } from 'vue';
    import { mapState, useStore } from 'vuex';
    import { PayloadLoggedIn, PayloadLoginCredentials, IStore } from '@/store';


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
        methods: {
            onSubmit(e: MouseEvent) {
                if (this.isClogin) {
                    // TODO: check if logged in; check is new password is different from the current password.

                    const isUserCorrect = this.passwords.p1 === this.thisPass;
                    if (!isUserCorrect) {
                        alert('Current password is incorrect');
                        return;
                    }

                    const isPswMatched = this.passwords.p2 === this.passwords.p3 && this.passwords.p2.trim(); // not empty
                    if (!isPswMatched) {
                        alert('New password not confirmed');
                        return;
                    }

                    this.setLoginCredentials(this.formName, this.thisUser, this.passwords.p2);
                } else {
                    this.setLoginCredentials(this.formName, this.thisUser, this.thisPass);
                    this.setLogged(this.formName, true);
                }
                this.$router.push({name: 'Home'});
            }
        },
        setup(props) {
            const store = useStore<IStore>();
            const currentForm = computed(() => store.state.logins[props.formName]);
            const formClass = () => props.formName === 'a' ? 'login-a' : 'login-b';

            const thisUser = ref(currentForm.value.user);
            const thisPass = ref(currentForm.value.pass);

            const passwords = reactive({
                p1: currentForm.value.pass,
                p2: currentForm.value.pass + '1',
                p3: currentForm.value.pass + '1',
            });

            const revealPasswords = ref(false);
            const passwordType = computed(() => revealPasswords.value ? 'text' : 'password');

            const setLogged = (form: string, val: boolean) => store.dispatch('loggedIn', {form: form, val} as PayloadLoggedIn);
            const setLoginCredentials = (form: string, user: string, pass: string) => store.dispatch('loginCredentials', {form, user, pass} as PayloadLoginCredentials);

            return {
                currentForm,
                formClass,
                thisUser,
                thisPass,
                passwords,
                revealPasswords,
                passwordType,
                setLogged,
                setLoginCredentials,
            };
        }
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

    .form {
        padding: 2em;
        margin: 0 auto;
        max-width: 22em;
        row-gap: 1em;

        display: grid;

        border-radius: 3px;
        box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);

        .svg-bkg {
            display: inline-block;
            padding: 0 .6em;
            border: .6em solid white;
            background-color: moccasin;
            //background-color: lighten(darkolivegreen, 20%);
            //background-color: var(--main-color);
            
            box-shadow: 2px 2px 2px 0px inset rgba(0,0,0,.7);
        }

        svg {
            width: 70px;
            //grid-column: 1 / -1;
            //margin-left: -.4em;

            .a {
                fill: none;
                stroke: darken(rebeccapurple, 20%);
                stroke-linecap: round;
                stroke-linejoin: round;
            }
            .b {
                fill: darken(rebeccapurple, 20%);
                stroke: none;
            }
        }
    }

    .fields {
        display: grid;
        gap: 1em .4em;
        grid-template-columns: minmax(5em, auto) 1fr;
        align-items: center;

        font-size: .9rem;

        input[type=text],
        input[type=password] {
            padding: .4em;
            min-width: 10em;
            border-radius: 3px;
            border: 1px solid #eee;
            font-size: inherit;

            &:focus {
                outline: 1px solid red;
            }
        }

        $btn: #efefef;

        .reveal {
            user-select: none;
            white-space: nowrap;
            color: #bbb;
            
            input:focus {
                outline: none;
            }
        }

        button {
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
        --main-color: rebeccapurple;
        
        background-color: var(--main-color);
        color: #eee;
        //border: 1px solid #eee;
    }

    .login-b {
        --main-color: darkolivegreen;

        background-color: darkolivegreen;
        color: #eee;
        //border: 1px solid red;
    }
</style>
