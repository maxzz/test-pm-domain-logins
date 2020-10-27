import { createLogger, createStore } from "vuex";

export interface Store {
    logins: {
        [key: string]: {
            user: string,
            pass: string,
            disp: string,
            logged: boolean,
        }
    }
}

export type PayloadLoggedIn = {
    form: 'a' | 'b';
    val: boolean;
}

export type PayloadLoginCredentials = {
    form: 'a' | 'b';
    user: string;
    pass: string;
}

function defaultStore() {
    return {
        logins: {
            a: {
                user: "username 1",
                pass: "password 1",
                disp: 'A',
                logged: false,
            },
            b: {
                user: "username 2",
                pass: "password 2",
                disp: 'B',
                logged: false,
            }
        }
    };
}

export default createStore<Store>({
    state: defaultStore(),
    mutations: {
        setLoggedIn(state, payload: PayloadLoggedIn) {
            state.logins[payload.form].logged = payload.val;
        },
        setLoginCredentials(state, payload: PayloadLoginCredentials) {
            let login = state.logins[payload.form];
            login.user = payload.user;
            login.pass = payload.pass;
        }
    },
    actions: {
        loggedIn({ commit }, payload: PayloadLoggedIn) {
            commit('setLoggedIn', payload);
        },
        loginCredentials({ commit }, payload: PayloadLoginCredentials) {
            commit('setLoginCredentials', payload);
        }
    },
    modules: {
    },
    plugins: process.env.NODE_ENV === 'production' ? [] : [createLogger()]
});
