<template>
  <v-app class="grey lighten-4">
    <!-- Navbar here -->
    <Navbar />
    <!-- Page content here -->
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
    <!-- Footer here -->
    <Footer v-if="loggedIn === false" />
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
  })
};
</script>
