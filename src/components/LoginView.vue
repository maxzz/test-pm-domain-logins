<template>
    <div class="login-view" :class="formClass()">
        <div class="overlay"></div>

        <transition name="transitionview">
        <div v-if="isClogin">
            <!-- Change password form template -->
            <form class="form">
                <div class="form-name">{{currentForm.disp}}</div>
                <div class="form-logo">
                    <SvgChange />
                </div>
                <div class="fields">
                    <input area-hidden="true" type="email" name="username" autocomplete="username" value="maxzz" style="display: none">

                    <!-- Current password -->
                    <label for="pass">Current password</label>
                    <div>
                        <input id="cpass1" :type="passwordType" v-model="passwords.p1" placeholder="Current password" autocomplete="old-password">
                    </div>

                    <!-- New password -->
                    <label for="pass">New password</label>
                    <div>
                        <input id="cpass2" :type="passwordType" v-model="passwords.p2" placeholder="New password" autocomplete="current-password">
                    </div>

                    <!-- Confirm new password -->
                    <label for="pass">Confirm new password</label>
                    <div>
                        <input id="cpass3" :type="passwordType" v-model="passwords.p3" placeholder="Confirm new password" autocomplete="confirm-password">
                    </div>

                    <!-- Actions -->
                    <label class="reveal">
                        <input type="checkbox" v-model="revealPasswords">
                        <span class="reveal__label">Reveal password</span>
                    </label>

                    <button @click.prevent="onSubmit($event, formClass(), isClogin)" class="g-btn">Change</button>
                </div>
            </form>
        </div>
        <div v-else>
            <!-- Login form template -->
            <form class="form">
                <div class="form-name">{{currentForm.disp}}</div>

                <div class="form-logo">
                    <SvgLogin />
                </div>

                <div v-if="intervalUse" class="">Reload in {{intervalCountdown}}</div>

                <div class="fields">
                    <!-- Username -->
                    <label for="user">Username</label>
                    <div>
                        <input id="user" type="text" v-model="thisUser" placeholder="Username" autocomplete="username">
                    </div>
    
                    <!-- Password -->
                    <label for="pass">Password</label>
                    <div>
                        <input id="pass" :type="passwordType" v-model="thisPass" placeholder="Password" autocomplete="current-password">
                    </div>
    
                    <label class="reveal">
                        <input type="checkbox" v-model="revealPasswords">
                        <span class="reveal__label">Reveal password</span>
                    </label>

                    <!-- Actions -->
                    <div class="actions-group">
                        <div class="timer-group" title="Page auto-refresh interval in seconds. Valid range is [1...900].">

                            <!-- <input class="timer-group__check" type="checkbox" id="intervalUse" :disabled="!intervalEnabled" :checked="intervalUse" @input="intervalUseSet">
                            <label class="timer-group__label" for="intervalUse">Interval</label> -->

                            <label class="timer-group__label" for="intervalUse">
                                <input class="timer-group__check" type="checkbox" id="intervalUse" :disabled="!intervalEnabled" :checked="intervalUse" @input="intervalUseSet">
                                <span class="timer-group__text">Interval</span>
                            </label>

                            <input v-if="!intervalUse" class="timer-value" type="text" :value="intervalVal" @input="intervalValSet">
                            <div v-if="!intervalUse" class="">sec</div>
                        </div>

                        <button class="g-btn" @click.prevent="onSubmit($event, formClass(), isClogin)">Login</button>
                    </div>
                </div>
            </form>
        </div>
        </transition>

    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
    import { mapState, useStore } from 'vuex';
    import { POSITION, TYPE, useToast } from 'vue-toastification';
    import { PayloadLoggedIn, PayloadLoginCredentials, IStore } from '../store';
    import SvgLogin from "../components/SvgLogin.vue";
    import SvgChange from "../components/SvgChange.vue";

    const toastedError = { position: POSITION.BOTTOM_RIGHT, type: TYPE.ERROR };

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
            onSubmit(e: MouseEvent, currentFormClass: string, isClogin: boolean) {
                if (this.isClogin) {
                    // TODO: check if logged in; check is new password is different from the current password.

                    const isUserCorrect = this.passwords.p1 === this.thisPass;
                    if (!isUserCorrect) {
                        this.toast('Current password is incorrect', toastedError);
                        return;
                    }

                    const isPswMatched = this.passwords.p2 === this.passwords.p3 && this.passwords.p2.trim(); // not empty
                    if (!isPswMatched) {
                        this.toast('New password not confirmed', toastedError);
                        return;
                    }

                    this.setLoginCredentials(this.formName, this.thisUser, this.passwords.p2);
                } else {
                    this.setLoginCredentials(this.formName, this.thisUser, this.thisPass);
                    this.setLogged(this.formName, true);
                }
                this.$router.push({name: 'Home', query: {from: currentFormClass, form: isClogin ? 'passwordchange' : 'login'}});
            }
        },
        setup(props) {
            const store = useStore<IStore>();
            const currentForm = computed(() => store.state.logins[props.formName]);
            const formClass = () => props.formName === 'a' ? 'website-a' : 'website-b';

            const thisUser = ref(currentForm.value.user);
            const thisPass = ref(currentForm.value.pass);

            const passwords = reactive({
                p1: currentForm.value.pass,
                p2: currentForm.value.pass + '1',
                p3: currentForm.value.pass + '1',
            });

            const revealPasswords = ref(false);
            const passwordType = computed(() => revealPasswords.value ? 'text' : 'password');

            const intervalUse = computed(() => store.state.settings.intervalUse);
            const intervalUseSet = (payload: Event) => {
                const isEnabled = (payload.target as HTMLInputElement).checked;
                startInterval(isEnabled);
                store.dispatch('setIntervalUse', isEnabled);
            };
            const intervalVal = computed(() => store.state.settings.intervalVal);
            const intervalValSet = (payload: Event) => {
                let num = +(payload.target as HTMLInputElement).value;
                intervalEnabled.value = intervalIsValid(num);
                if (!intervalEnabled.value) {
                    num = intervalVal.value;
                }
                store.dispatch('setIntervalVal', num);
            };
            const intervalEnabled = ref(true);
            const intervalIsValid = (v: number) => !isNaN(v) && v > 0 && v <= 900;
            const intervalCountdown = ref(0);

            let reloadTimeoutID = 0;
            let countdownID = 0;
            function startInterval(runNow: boolean) {
                if (runNow) {
                    clearTimeout(reloadTimeoutID);
                    reloadTimeoutID = setTimeout(() => {
                        reloadTimeoutID = 0;
                        window.open(window.location.href, '_self');
                        console.log('timeout', window.location);
                    }, intervalVal.value * 1000);

                    clearInterval(countdownID);
                    countdownID = 0;
                    intervalCountdown.value = intervalVal.value;
                    countdownID = setInterval(() => {
                        intervalCountdown.value--;
                    }, 1000);
                } else {
                    clearTimeout(reloadTimeoutID);
                    reloadTimeoutID = 0;

                    clearInterval(countdownID);
                    countdownID = 0;
                }
            }

            const setLogged = (form: string, val: boolean) => {
                store.dispatch('loggedIn', {form: form, val} as PayloadLoggedIn);
            };

            const setLoginCredentials = (form: string, user: string, pass: string) => {
                store.dispatch('loginCredentials', {form, user, pass} as PayloadLoginCredentials);
            };

            onMounted(() => {
                console.log('onMounted, intervalUse', intervalUse.value);
                intervalUse.value && startInterval(true);
            })

            const toast = useToast();

            return {
                currentForm,
                formClass,
                thisUser,
                thisPass,
                passwords,
                revealPasswords,
                passwordType,

                intervalUse,
                intervalUseSet,
                intervalVal,
                intervalValSet,
                intervalEnabled,
                intervalCountdown,

                setLogged,
                setLoginCredentials,
                toast,
            };
        }
    });
</script>

<style lang="scss" scoped>
    .actions-group {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .timer-group {
            display: flex;
            align-items: center;

            .timer-group__label {
                display: flex;
                align-items: center;

                .timer-group__check {
                    user-select: none;
                }
                .timer-group__text {
                    user-select: none;
                    font-size: .75rem;
                }
            }
            input[type=text] {
                padding-top: .4rem;
                margin-bottom: .3rem;
                text-align: center;
                width: 1.5rem;
                min-width: 1.5rem;
                height: 1.3rem;
                line-height: 1.3rem;
                font-size: .7rem;
                margin-left: .2rem;
            }
            :last-child {
                margin-left: .2rem;
                font-size: .75rem;
            }
        }
    }
</style>

<style lang="scss" scoped>
    @use "sass:math";

    .transitionview-enter-from {
        transform: translateY(200px) scaleY(.5);
    }    

    .transitionview-enter-active {
        transition: all 14s ease;
    }    

    /* .transitionview-enter-to {

    }     */

    $form-lowtext-color: darken(#f00, 30%);

    .login-view {
        position: relative;
        height: 100%;
        padding-top: 4em;

        --main-bkg-color: #c3c3c3;
        --form-text-color: black;
        //--form-lowtext-color: $lowtext-color; // SASS does not like SASS functions inside CSS custom properties.
    }

    .website-a {
        --main-logo-color: rebeccapurple;
    }

    .website-b {
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
    }

    .form-name {
        $form-label-font: 3em;
        $form-label-height: 56px;

        position: absolute;
        top: - math.div($form-label-height, 2);
        right: .6em;
        width: $form-label-height;
        height: $form-label-height;
        
        display: grid;
        place-items: center;

        font-size: $form-label-font;
        color: white;
        background-color: var(--main-logo-color);
        box-shadow: 0 0 0px 4px white;
        border-radius: 7px;
    }

    .form-logo {
        $logo-height: 120px;
        $svg-height: 100px;

        justify-self: center;
        height: $logo-height;

        display: grid;
        place-items: center;
        
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
            width: 100%;
            border-radius: 3px;
            border: 1px solid #aaa;
            font: inherit;

            &:focus {
                outline: 1px solid red;
            }
        }

        .reveal {
            display: flex;
            
            user-select: none;
            white-space: nowrap;
            color: $form-lowtext-color;
            
            input:focus {
                outline: none;
            }
        }
        .reveal__label {
            margin-left: .2rem;
        }

        button {
            justify-self: right;
        }
    }
</style>
