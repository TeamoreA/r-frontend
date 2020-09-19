import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

const state = {
  products: []
};

const getters = {
  allProducts: state => state.products
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get(`${baseUrl}/product/`);
    commit("setProducts", response.data);
  },
  async addProduct({ commit }, data) {
    const response = await axios.post(`${baseUrl}/product/`, data);
    commit("newProduct", response.data);
    console.log(response.data);
  },
  async deleteProduct({ commit }, id) {
    await axios.delete(`${baseUrl}/product/${id}`);
    commit("removeProduct", id);
  }
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  newProduct: (state, product) => state.products.unshift(product),
  removeProduct: (state, id) =>
    (state.products = state.products.filter(product => product.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
