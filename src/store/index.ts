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

export default createStore<Store>({
    state: {
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
    },
    mutations: {
        setLoggedIn(state, payload: { form: 'a' | 'b'; val: boolean }) {
            state.logins[payload.form].logged = payload.val;
        }
    },
    actions: {
        loggedIn({ commit }, payload) {
            commit('setLoggedIn', payload);
        }
    },
    modules: {

    },
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
});
