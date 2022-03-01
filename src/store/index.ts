import { createLogger, createStore, Store } from "vuex";

//#region localStore

export interface IStore {
    logins: {
        [key: string]: {
            user: string,
            pass: string,
            disp: string,
            logged: boolean,
        }
    },
    settings: {
        reveal: boolean;
    }
}

export const STORAGE_KEY = 'test-domain-logins.vue';

function defaultStore(): IStore {
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
        },
        settings: {
            reveal: false,
        }
    };
}

function initialStoreData() {
    let str = localStorage.getItem(STORAGE_KEY);
    let st;
    try {
        st = str && JSON.parse(str); //TODO: this is weak data structure validation.
    } catch (error) {
    }
    !st && (st = defaultStore());
    return st;
}

function localStoragePlugin(store: Store<IStore>) {
    store.subscribe((mutation, state) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    })
}

//#endregion localStore

export type PayloadLoggedIn = {
    form: 'a' | 'b';
    val: boolean;
}

export type PayloadLoginCredentials = {
    form: 'a' | 'b';
    user: string;
    pass: string;
}

export default createStore<IStore>({
    state: initialStoreData(),
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
    plugins: import.meta.env.PROD 
        ? [localStoragePlugin] 
        : [localStoragePlugin, createLogger()]
});
