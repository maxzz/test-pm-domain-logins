<template>
    <div class="login-view">
        <div class="overlay"></div>
        <div class="page-title" :class="{
            'login-a': formName === 'a',
            'login-b': formName === 'b'}">
            <span>{{currentForm.disp}}</span>
        </div>

        <div v-if="isClogin">
            <form class="form" :class="formClass()">
                <div class="svg-bkg">
                    <SvgChange />
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
                    <SvgLogin />
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

    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, reactive, ref } from 'vue';
    import { mapState, useStore } from 'vuex';
    import { PayloadLoggedIn, PayloadLoginCredentials, IStore } from '@/store';
    import SvgLogin from "@/components/SvgLogin.vue";
    import SvgChange from "@/components/SvgChange.vue";


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
        components: { SvgLogin, SvgChange},
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
    .login-view {
        //<div style="background-color: red"></div>
        position: relative;
        height: 100%;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        z-index: 1;
    }

    .page-title {
        text-align: left;
        height: 7em;
        margin-bottom: 2em;
        background-color: var(--main-color);

        position: relative;
        z-index: 2;

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

        position: relative;
        z-index: 2;

        display: grid;
        row-gap: 1em;

        border-radius: 3px;
        box-shadow: 2px 2px 2px 0px rgba(0,0,0,.3);

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
        --main-bkg-color: #f7f7f7;
        
        background-color: var(--main-bkg-color);
        border: 1px solid #eee;
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
