import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "@/assets/style/reset.css";
import "@/assets/js/icon.js";
import "styles/border.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import FastClick from "fastclick";

Vue.use(VueAwesomeSwiper);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
