<template>
    <div class="page-home">
        <div v-for="(login, idx) of logins" :key="idx" class="website" :class="{loggedin: login.logged}">
            <div class="form-title">
                Website login {{login.disp}}
            </div>

            <div class="log-state" :class="{'logged-state': login.logged}">
                {{login.logged ? 'Logged in.' : 'Not logged in.'}}
            </div>

            <div class="fields">
                <div class="lbl">Username</div>
                <input class="inp" type="text" v-model="login.user" />

                <div class="lbl">Password</div>
                <input class="inp" type="text" v-model="login.pass" />
            </div>

            <button class="g-btn btn-logout" @click="onLogout(idx)" :dissabled="!login.logged">{{login.logged ? 'Log out' : 'Log in'}}</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from "vue";
    import { useStore } from "vuex";
    import { IStore } from '../store';

    export default defineComponent({
        setup() {
            let store = useStore<IStore>();
            let logins = computed(() => store.state.logins);

            const onLogout = (form: string | number) => {
                store.dispatch('loggedIn', {
                    form,
                    val: !logins.value[form].logged,
                });
            };

            return {
                logins,
                onLogout,
            };
        }
    });
</script>

<style lang="scss" scoped>

    .page-home {
        padding: 4em;

        display: grid;
        place-items: center;
        gap: 1em;
        //align-content: start;
        //height: 100%;

        //background-color: tomato;
    }

    .website {
        padding: 2em .4em .4em;
        //max-width: 400px;

        border-radius: 3px;

        background-color: lavenderblush;
        border: 1px dotted red;

        &.loggedin {
            background-color: beige;
            border: 1px dotted green;
        }

        .form-title {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 1.2em;
        }

        .log-state {
            margin-bottom: 2em;
            font-size: .8em;
            color: red;
        }
        .log-state.logged-state {
            color: green;
        }

        .fields {
            display: flex;
            place-items: center;
            //margin-bottom: 1em;

            & > * {
                margin: 0.2em;
            }

            .lbl {
                font-size: .9em;
            }

            .inp {
                padding: 0.4em;
                max-width: 8em;
                border-radius: 3px;
                border: 1px solid #ddd;
                font: inherit;
            }
        }

        .btn-logout {
            margin-top: 1.2em;
        }
    }
</style>
