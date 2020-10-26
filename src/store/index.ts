import { createStore } from "vuex";

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
    mutations: {},
    actions: {},
    modules: {}
});
