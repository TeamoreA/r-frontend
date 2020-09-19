import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import Toasted from "vue-toasted";
import store from "./store";

Vue.config.productionTip = false;

const baseUrl = axios.create({
  baseUrl: "http://127.0.0.1:8000/api"
});

Vue.prototype.$http = baseUrl;

const token = localStorage.getItem("access");

if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

Vue.use(Toasted, { duration: 1000 });
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
