import Vuex from "vuex";
import Vue from "vue";
import products from "./modules/products";
import users from "./modules/users";

// Load vuex

Vue.use(Vuex);

// create store

export default new Vuex.Store({
  modules: {
    products,
    users
  }
});
