import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Products from "../views/Products.vue";
import Profiles from "../views/Profiles.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/profiles",
    name: "Profiles",
    component: Profiles
  }
];

const router = new VueRouter({
  routes
});

export default router;
