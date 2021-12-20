import fontAwesome from "@/libs/font-awesome.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

fontAwesome.register(Vue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
