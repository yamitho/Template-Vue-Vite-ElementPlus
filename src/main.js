import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import i18n from "./plugins/i18n.js";
import router from "./routes";

createApp(App).use(router).use(ElementPlus).use(i18n).mount("#app");