import Vue from "vue-functional-api";
import App from "./App";

Vue.config.productionTip = false;

new Vue({ render: h => h(App) }).$mount("#app");
