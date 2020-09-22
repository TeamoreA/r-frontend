import axios from "axios";
// import { reject, resolve } from "core-js/fn/promise";

const baseUrl = "http://127.0.0.1:8000/api";

const state = {
  responseData: "",
  status: "",
  token: localStorage.getItem("token") || "",
  username: ""
};

const getters = {
  username: state => state.username,
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  async registerUser({ commit }, data) {
    const response = await axios.post(`${baseUrl}/auth/register`, data);
    commit("setUser", response.data);
    console.log(response.data);
  },
  // async loginUser({ commit }, data) {
  //   const response = await axios
  //     .post(`${baseUrl}/auth/login`, data)
  //     .catch(e => {
  //       console.log("e.message");
  //       console.log(e.message);
  //     });

  //   if (response.status === 200) {
  //     commit("setUser", response.data);
  //   } else {
  //     commit("setResponse", response.data);
  //     console.log("response.data");
  //   }

  //   console.log("response.data");
  //   console.log(response.status);
  // }
  loginUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("authRequest");
      axios
        .post(`${baseUrl}/auth/login`, user)
        .then(resp => {
          const token = resp.data.data.token;
          const username = resp.data.data.username;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          commit("authSuccess", token, username);
          resolve(resp);
        })
        .catch(err => {
          commit("authError");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit("logout");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  }
};

const mutations = {
  setUser: (state, user) => (state.loggedInUser = user),
  setResponse: (state, res) => (state.responseData = res),
  authRequest(state) {
    state.status = "loading";
  },
  authSuccess(state, token, username) {
    state.status = "success";
    (state.token = token), (state.username = username);
  },
  authError(state) {
    state.status = "error";
  },
  logout(state) {
    (state.status = ""), (state.token = "");
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
