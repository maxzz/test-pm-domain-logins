import { createStore } from "vuex";

export default createStore({
    state: {
        logins: {
            a: {
                name: "username 1",
                pass: "password 1"
            },
            b: {
                name: "username 2",
                pass: "password 2"
            }
        }
    },
    mutations: {},
    actions: {},
    modules: {}
});
