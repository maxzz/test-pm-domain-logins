import { createLogger, createStore } from "vuex";

export default createStore({
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
        setLoggedIn({ commit }, payload) {
            commit('setLoggedIn', payload);
        }
    },
    modules: {

    },
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
});
