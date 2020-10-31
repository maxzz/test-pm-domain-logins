import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"; // Import the CSS or use your own!
const optionsToast = {}; // You can set your default options here

const app = createApp(App);
app
    .use(store)
    .use(router)
    .use(Toast, optionsToast)
    .mount("#app");
