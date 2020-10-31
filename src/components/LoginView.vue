<template>
    <div class="login-view">
        <div class="overlay"></div>

        <!-- <div class="page-title" :class="{ 'login-a': formName === 'a', 'login-b': formName === 'b'}">
            <span>{{currentForm.disp}}</span>
        </div> -->

        <div v-if="isClogin">
            <form class="form" :class="formClass()">
                <div class="svg-bkg">
                    <SvgChange />
                    <div class="page-title" :class="{ 'login-a': formName === 'a', 'login-b': formName === 'b'}">
                        <span>{{currentForm.disp}}</span>
                    </div>
                </div>

                <div class="fields">
                    <input area-hidden="true" type="email" name="username" autocomplete="username" value="maxzz" style="display: none">
    
                    <label for="pass">Current password</label>
                    <input id="cpass1" :type="passwordType" v-model="passwords.p1" placeholder="Current password" autocomplete="old-password">
    
                    <label for="pass">New password</label>
                    <input id="cpass2" :type="passwordType" v-model="passwords.p2" placeholder="New password" autocomplete="current-password">
    
                    <label for="pass">Confirm new password</label>
                    <input id="cpass3" :type="passwordType" v-model="passwords.p3" placeholder="Confirm new password" autocomplete="confirm-password">
    
                    <label class="reveal"><input type="checkbox" v-model="revealPasswords">&nbsp;&nbsp;Reveal passwords</label>
                    <button @click.prevent="onSubmit" class="g-btn">Change</button>
                </div>
            </form>
        </div>
        <div v-else>
            <form class="form" :class="formClass()">
                <div class="svg-bkg">
                    <SvgLogin />
                    <div class="page-title" :class="{ 'login-a': formName === 'a', 'login-b': formName === 'b'}">
                        <span>{{currentForm.disp}}</span>
                    </div>
                </div>

                <div class="fields">
                    <label for="user">Username</label>
                    <input id="user" type="text" v-model="thisUser" placeholder="Username" autocomplete="username">
    
                    <label for="pass">Password</label>
                    <input id="pass" :type="passwordType" v-model="thisPass" placeholder="Password" autocomplete="current-password">
    
                    <label class="reveal"><input type="checkbox" v-model="revealPasswords">&nbsp;&nbsp;Reveal password</label>
                    <button @click.prevent="onSubmit" class="g-btn">Login</button>
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

    $form-lowtext-color: darken(#f00, 30%);

    .login-view {
        position: relative;
        height: 100%;
        padding-top: 4em;

        --main-bkg-color: #c3c3c3;
        --form-text-color: black;
        //--form-lowtext-color: $lowtext-color; // SASS does not like SASS functions inside CSS custom properties.
    }

    .login-a {
        --main-logo-color: rebeccapurple;
    }

    .login-b {
        --main-logo-color: darkolivegreen;
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

    $form-label-height: 3em;

    .page-title {
        position: absolute;
        top: -$form-label-height / 2;
        right: 1.8em;
        
        display: grid;
        place-items: center;

        span {
            font-size: $form-label-height;
            padding: .2em .5em;

            border-radius: 7px;
            border: 1px dotted maroon;
            box-shadow: 0 0 0px 5px white;
            color: white;
            background-color: var(--main-logo-color);
        }
    }

    .form {
        padding: 1.4em;
        margin: 0 auto;
        max-width: 20em;

        position: relative;
        z-index: 2;

        display: grid;
        row-gap: 1em;

        background-color: var(--main-bkg-color);
        border-radius: 3px;
        box-shadow: 2px 2px 2px 0px rgba(0,0,0,.2);

        $logo-height: 120px;
        $svg-height: 100px;

        .svg-bkg {
            justify-self: center;

            height: $logo-height;

            display: grid;
            place-items: center;
        }

        svg {
            width: $svg-height;
            height: $svg-height;

            border: 10px solid #f7f7f7;
            border-radius: 50%;
            box-shadow: 0px 0px 10px #c0c0c0d1;

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
        color: var(--form-text-color);

        input[type=text],
        input[type=password] {
            padding: .4em;
            min-width: 10em;
            border-radius: 3px;
            border: 1px solid #aaa;
            font: inherit;

            &:focus {
                outline: 1px solid red;
            }
        }

        .reveal {
            user-select: none;
            white-space: nowrap;
            color: $form-lowtext-color;
            
            input:focus {
                outline: none;
            }
        }

        button {
            justify-self: right;
        }
    }
</style>
