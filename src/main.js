import { createApp } from "vue";

import { router } from "./router/router.js";
import App from "./App.vue";
import "./assets/tailwind.css";

createApp(App).use(router).mount("#app");
