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
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path class="b" d="M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z" />
                        <path class="b" d="M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z" />
                    </svg> -->

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148 148">
                        <g class="psw-chg-svg">
                            <circle cx="74" cy="74" r="74" fill="#3581ff"/>
                            <g>
                                <path d="M76 38a18 18 0 00-18 18v9a25 25 0 016-4v-5a11 11 0 1123 0v5a25 25 0 016 4v-9a18 18 0 00-17-18z" fill="#3268c0"/>
                                <path d="M100 83a26 26 0 11-45-18l1-1a25 25 0 017-4 26 26 0 0122 0 25 25 0 017 4l1 1a26 26 0 017 18z" fill="#fad553"/>
                                <path d="M98 73a26 26 0 00-5-8l-1-1a26 26 0 01-38 36 26 26 0 0044-27z" fill="#fab941"/>
                                <path d="M76 85a1 1 0 000 1l1 5a1 1 0 01-1 0h-4a1 1 0 01-1 0l1-5a1 1 0 000-1c-5-2-2-7 2-7s6 5 2 7z" fill="#2f4867"/>
                                <path class="cls-6" d="M76 85a1 1 0 00-1 0l1 5a1 1 0 010 1h-5a1 1 0 010-1l1-5a1 1 0 00-1 0c-4-2-2-8 3-8s6 6 2 8zM74 35a18 18 0 00-18 18v10a25 25 0 017-5v-5a11 11 0 1122 0v5a25 25 0 017 5V53a18 18 0 00-18-18z"/>
                                <path d="M84 38a18 18 0 016 14v9l2 2V53a18 18 0 00-8-15z" fill="#2f5079"/>
                                <path class="cls-8" d="M68 39a20 20 0 017-2M59 49a17 17 0 017-9"/>
                            </g>
                            <g>
                                <path class="cls-9" d="M125 43l-10-22a2 2 0 00-4-1l-3 5a55 55 0 00-34-11c-32 0-57 27-57 60a63 63 0 002 18c1 2 7-11 7-18 1-28 22-50 48-50a45 45 0 0128 9l-5 7a2 2 0 002 4l14 2 10 1a2 2 0 002-1 2 2 0 000-3z"/>
                                <path d="M21 90a36 36 0 004-8 40 40 0 002-13c1-13 7-22 8-24a48 48 0 0118-16 44 44 0 0123-5 52 52 0 0115 3l-3-2c-11-6-24-2-26-1s-12 4-17 8-12 13-14 17a103 103 0 00-5 17c-1 8 0 11-2 17a41 41 0 01-3 7z" fill="#ccc"/>
                                <path class="cls-11" d="M34 32a54 54 0 017-7 57 57 0 0116-8 68 68 0 019-2l-1 3a59 59 0 00-11 3 62 62 0 00-8 3 78 78 0 00-12 8zM68 14a29 29 0 0111 1l-1 2a58 58 0 00-10 0zM19 62a85 85 0 012-9 84 84 0 016-12v2a62 62 0 00-7 19zM102 33l-6 8a2 2 0 001 1c2 0 5-4 7-8a4 4 0 01-2-1zM112 20l-3 3-1 2 1 1c0-1 2-6 4-6a1 1 0 011 1v-1a2 2 0 000-1 3 3 0 00-2 1z"/>
                                <path class="cls-12" d="M98 44l23 3c4 1 6-2 3-6 1 6-1 4-10 3l-15-1z"/>
                                <path class="cls-13" d="M21 90c-1-7-2-21 5-36 8-17 27-35 50-33 13 1 22 9 26 12-3-2-17-10-35-6-19 4-30 19-33 27a84 84 0 00-4 13l-2 11a32 32 0 01-7 12z"/>
                            </g>
                            <g>
                                <path class="cls-9" d="M132 73c0 34-26 61-57 61a55 55 0 01-34-12l-4 5a2 2 0 01-4 0l-10-23a2 2 0 011-3 2 2 0 012 0l9 1 15 1a2 2 0 012 4l-5 7c4 4 13 11 26 12 22 3 42-16 50-33 7-14 6-28 5-36l2-2a63 63 0 012 18z"/>
                                <path class="cls-13" d="M47 126a59 59 0 0045 5c18-6 28-20 31-24a63 63 0 008-49c7 20 1 46-16 63a56 56 0 01-19 12 51 51 0 01-31 2 49 49 0 01-18-9z"/>
                                <path class="cls-11" d="M65 125c9 3 20 2 28-1 7-3 8-5 13-8a10 10 0 001 2 65 65 0 01-13 8c-5 2-11 3-17 3a29 29 0 01-12-4zM108 114a64 64 0 008-9 71 71 0 009-17c1 3 0 6-1 9a37 37 0 01-5 8l-10 10-1-1z"/>
                                <path class="cls-12" d="M47 114l2-3a48 48 0 003-4l1-1a1 1 0 00-1-1l-1 1a70 70 0 00-6 7 13 13 0 012 1zM37 127l3-3 1-2-1-1c0 1-2 6-4 6a1 1 0 01-1-1v2a3 3 0 002-1z"/>
                                <path class="cls-11" d="M51 103l-15-2-8-1c-1-1-3 0-4 1a2 2 0 00-1 1l1 2 1 2v-3c2-2 7-1 9-1l16 2a2 2 0 001-1zM129 56a8 8 0 00-1 1 1 1 0 000 1 7 7 0 011-2l1-1a5 5 0 00-1 1z"/>
                            </g>
                        </g>
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
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 144.8 144.8" xml:space="preserve">
                        <defs>
                            <circle id="SVGID_1_" cx="72.4" cy="72.4" r="72.4"/>
                        </defs>
                        <clipPath id="SVGID_2_">
                            <use xlink:href="#SVGID_1_" overflow="visible"/>
                        </clipPath>
                        <circle cx="72.4" cy="72.4" r="72.4" fill="#F5C002"/>
                        <g clip-path="url(#SVGID_2_)">
                            <path d="M72.4 40.6v104.2h-41s2.9-15.6 6.3-27.8c3.1-5.9 17.3-10.3 26.5-12.6v-7.7c-5.6-2.5-10-8-11.9-17.7-6.8-1.6-7.9-15-.7-16.5 1.7-14.1 10.3-21.9 20.8-21.9z" fill="#F1C9A5"/>
                            <path d="M113.4 144.8h-41V40.6c11.8-.3 19.9 10.9 20.7 21.8 7.5 1.4 6.3 15.2-.8 16.6-1.6 7.7-4.9 14.2-11.8 17.5v7.9c33.9 7.6 28.2 18.4 32.9 40.4z" fill="#E4B692"/>
                            <path d="M91.3 81.7c-1.1 3.2-3 7-6.5 7-4.3 0-7.4-3.5-12.4-3.5-4.9 0-8 3.5-12.4 3.5-3.5 0-5.4-3.8-6.5-7l-1-6.1v7.3s1.6 8.6 4.8 10.7c2.6 2.3 10.9 6.2 15 6.2s12.5-3.9 15-6.2c3.1-2.1 4.8-10.7 4.8-10.7v-7.3l-.8 6.1zM62.2 43.8s3.9 15.8 25.6 23.8c-2-3.5-2.4-7.8-2.4-7.8s3.5 3.7 9.3 6.7c3.2-6.3 6.9-15.8-1.5-21-8.3-5.2-28.2-14.5-31-1.7z" fill="#303030"/>
                            <path d="M55 66.3s2-18.7 8.7-22.7c-5.2-2.9-14.9 5.8-13.9 10.4.9 4.7 5.2 12.3 5.2 12.3z" fill="#303030"/>
                            <path d="M113.4 144.8h-82s3.3-19.7 6.3-27.8c2.7-5.2 14.1-9.2 23.1-11.7a11.63 11.63 0 0023.2 0c9.2 1.8 20.3 6.5 23.1 11.7 5.1 9.2 6.3 27.8 6.3 27.8z" fill="#FB621E"/>
                            <path d="M60.1 108.3c.4 6.1 5.7 11 12.3 11 6.6 0 11.9-4.8 12.3-11 8.2 2.1 18.3 5.4 22.8 9.7-.1-.3-.3-.7-.4-1-2.7-5.2-14.1-9.2-23.1-11.7-.4 6.1-5.4 11-11.6 11-6.2 0-11.2-4.8-11.6-11-9 2.5-20.3 6.5-23.1 11.7-.1.3-.2.6-.2.9 4.5-4.2 14.5-7.5 22.6-9.6z" opacity=".2" fill="#E53D0C"/>
                            <path d="M57.4 106.3a15.18 15.18 0 0030 0c-1.2-.4-2.3-.7-3.4-1-.4 6.1-5.4 11-11.6 11-6.2 0-11.2-4.8-11.6-11-1.1.3-2.3.6-3.4 1z" fill="#E53D0C"/>
                            <path d="M75.8 90.7s-.5-2.2-3.4-2.2c-2.7 0-3.4 2.2-3.4 2.2h6.8z" fill="#FFF"/>
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

            .psw-chg-svg {
                .cls-6{fill:#386384}.cls-8{fill:none;stroke:#49739a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:1.5px}.cls-9{fill:#e6e6e6}.cls-11{fill:#fafafa}.cls-12{fill:#c9c9c9}.cls-13{fill:#2d6cd6}
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
