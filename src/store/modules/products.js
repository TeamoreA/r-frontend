import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

const state = {
  products: [],
  categories: [],
  images: [],
  product: null
};

const getters = {
  allProducts: state => state.products,
  allImages: state => state.images,
  singleProduct: state => state.product,
  allCategories: state => state.categories
};

const actions = {
  async fetchProducts({ commit }) {
    const response = await axios.get(`${baseUrl}/product/`);
    commit("setProducts", response.data);
  },
  async fetchProduct({ commit }, id) {
    const response = await axios.get(`${baseUrl}/product/${id}`);
    commit("setProduct", response.data.data);
  },
  addProduct({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseUrl}/product/`, data)
        .then(resp => {
          const product = resp.data.data;
          commit("newProduct", product);
          resolve(resp);
        })
        .catch(err => {
          console.log(err);
          commit("productError", err);
          reject(err);
        });
    });
  },
  deleteProduct({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${baseUrl}/product/${id}`)
        .then(resp => {
          commit("removeProduct", id);
          resolve(resp);
        })
        .catch(err => {
          console.log(err);
          commit("productError", err);
          reject(err);
        });
    });
  },
  deleteCategory({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${baseUrl}/category/${id}`)
        .then(resp => {
          commit("removeCategory", id);
          resolve(resp);
        })
        .catch(err => {
          console.log(err);
          commit("categoryError", err);
          reject(err);
        });
    });
  },
  updateProduct({ commit }, id, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${baseUrl}/product/${id}`, data)
        .then(resp => {
          const product = resp.data.data;
          commit("removeProduct", id);
          commit("newProduct", product);
          resolve(resp);
        })
        .catch(err => {
          console.log(err);
          commit("categoryError", err);
          reject(err);
        });
    });
  },
  addCategory({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${baseUrl}/category/`, data)
        .then(resp => {
          const cat = resp.data.data;
          commit("newCategory", cat);
          resolve(resp);
        })
        .catch(err => {
          console.log(err);
          commit("categoryError", err);
          reject(err);
        });
    });
  },
  async fetchCategories({ commit }) {
    const response = await axios.get(`${baseUrl}/category/`);
    commit("setCategories", response.data.data);
  },
  async fetchImages({ commit }) {
    const response = await axios.get(`${baseUrl}/image/`);
    commit("setImages", response.data.data);
  }
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  setProduct: (state, product) => (state.product = product),
  newProduct: (state, product) => state.products.push(product),
  removeProduct: (state, id) =>
    (state.products = state.products.data.filter(product => product.id !== id)),
  removeCategory: (state, id) =>
    (state.categories = state.categories.data.filter(
      category => category.id !== id
    )),
  newCategory: (state, category) => state.categories.push(category),
  categoryError(state, err) {
    state.status = err;
  },
  productError(state, err) {
    state.status = err;
  },
  setCategories: (state, cats) => (state.categories = cats),
  setImages: (state, images) => (state.images = images)
};

export default {
  state,
  getters,
  actions,
  mutations
};
