<template>
  <div>
    <!-- admins app bar -->
    <nav v-if="isLoggedIn">
      <v-app-bar app>
        <v-app-bar-nav-icon
          class="grey--text text-lighten-1"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
          <span class="grey--text">freak</span>
          <span class="gey--text  text-lighten-1">an</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-avatar color="primary" size="30">
          <span class="white--text">RO</span>
        </v-avatar>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- side nav -->
      <v-navigation-drawer v-model="drawer" app dark class="primary lighten-1">
        <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="(link, i) in links"
              :key="i"
              router
              :to="link.route"
            >
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ link.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <!-- buyers app bar -->
    <v-app-bar app dense color="white" elevate-on-scroll v-else>
      <v-toolbar-title>
        <v-btn text to="/">
          <span class="grey--text">freak</span>
          <span class="gey--text text-lighten-1">an</span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-responsive max-width="300" class="mx-auto">
        <v-text-field
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-responsive>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item router to="/login">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      loggedIn: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "mdi-account", text: "Profile", route: "/profile" }
      ]
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => this.$router.push("/login"));
    }
  }
};
</script>
