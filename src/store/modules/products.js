import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

const state = {
  products: [],
  categories: []
};

const getters = {
  allProducts: state => state.products,
  allCategories: state => state.categories
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get(`${baseUrl}/product/`);
    commit("setProducts", response.data);
  },
  // async addProduct({ commit }, data) {
  //   const response = await axios.post(`${baseUrl}/product/`, data);
  //   commit("newProduct", response.data);
  //   console.log(response.data);
  // },
  addProduct({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseUrl}/product/`, data)
        .then(resp => {
          const product = resp.data.data;
          console.log("data here**");
          console.log(resp.data.data);
          commit("newProduct", product);
          resolve(resp);
        })
        .catch(err => {
          console.log("err here**");
          console.log(err);
          commit("categoryError", err);
          reject(err);
        });
    });
  },
  async deleteProduct({ commit }, id) {
    await axios.delete(`${baseUrl}/product/${id}`);
    commit("removeProduct", id);
  },
  // async addCategory({ commit }, data) {
  //   const response = await axios.post(`${baseUrl}/category/`, data);
  //   commit("newCategory", response.data);
  //   console.log(response.data);
  // }
  addCategory({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseUrl}/category/`, data)
        .then(resp => {
          console.log("data here**");
          console.log(resp.data.data);
          const cat = resp.data.data;
          commit("newCategory", cat);
          resolve(resp);
        })
        .catch(err => {
          console.log("err here**");
          console.log(err);
          commit("categoryError", err);
          reject(err);
        });
    });
  },
  async fetchCategories({ commit }) {
    const response = await axios.get(`${baseUrl}/category/`);
    console.log("cates");
    console.log(response.data.data);
    commit("setCategories", response.data.data);
  }
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  newProduct: (state, product) => state.products.unshift(product),
  removeProduct: (state, id) =>
    (state.products = state.products.filter(product => product.id !== id)),
  newCategory: (state, category) => state.categories.unshift(category),
  categoryError(state, err) {
    state.status = err;
  },
  setCategories: (state, cats) => (state.categories = cats)
};

export default {
  state,
  getters,
  actions,
  mutations
};
