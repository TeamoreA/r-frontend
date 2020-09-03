import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Product from "../views/Product.vue";
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";
import CreateProduct from "../views/CreateProduct.vue";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  // homepage router for products viewing
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  // dashboard router for adin
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  // view single product router
  {
    path: "/product",
    name: "Product",
    component: Product
  },
  // create product router
  {
    path: "/create-product",
    name: "CreateProducts",
    component: CreateProduct
  },
  // login router
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  // view profile router
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes
});

export default router;
