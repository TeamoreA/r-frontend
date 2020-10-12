import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Axios from "axios";
import Toasted from "vue-toasted";
import store from "./store";
import infiniteScroll from "vue-infinite-scroll";

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;

const token = localStorage.getItem("token");

if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

Vue.use(Toasted, { duration: 1000 });
Vue.use(infiniteScroll);
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
