import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Dashboard from "../views/Dashboard.vue";
import Product from "../views/Product.vue";
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import CreateProduct from "../views/CreateProduct.vue";
import UpdateProduct from "../views/UpdateProduct.vue";
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
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
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
  // update product router
  {
    path: "/update-product",
    name: "UpdateProducts",
    component: UpdateProduct
  },
  // login router
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  // Register router
  {
    path: "/register",
    name: "Register",
    component: Register
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});
export default router;
