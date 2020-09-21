<template>
  <v-app class="grey lighten-4">
    <!-- Navbar here -->
    <Navbar />
    <!-- Page content here -->
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
    <!-- Footer here -->
    <Footer v-if="isLoggedIn === false" />
  </v-app>
</template>

<script>
// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    showPassword: false,
    loggedIn: false
  }),
  created() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>
