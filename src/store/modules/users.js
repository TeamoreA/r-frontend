import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

const state = {
  loggedInUser: []
};

const getters = {
  user: state => state.loggedInUser
};

const actions = {
  async registerUser({ commit }, data) {
    const response = await axios.post(`${baseUrl}/auth/register`, data);
    commit("setUser", response.data);
    console.log(response.data);
  },
  async loginUser({ commit }, data) {
    const response = await axios.post(`${baseUrl}/auth/login`, data);
    commit("setUser", response.data);
    console.log(response.data);
  }
};

const mutations = {
  setUser: (state, user) => (state.loggedInUser = user)
};

export default {
  state,
  getters,
  actions,
  mutations
};
