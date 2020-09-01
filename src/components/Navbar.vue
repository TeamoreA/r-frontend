<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="grey--text text-lighten-1"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="grey--text text-lighten-1">the</span>
        <span class="gey--text"> r.o.</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn text>Home</v-btn>
      <v-btn text>Login</v-btn> -->
      <v-button flat color="grey">
        <v-avatar size="30" color="grey" class="ma-4">
          <img src="src" alt="alt" />
        </v-avatar>
        <span class="text-lighten-1">Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-button>
    </v-app-bar>

    <!-- side nav -->
    <v-navigation-drawer v-model="drawer" app dark class="primary lighten-1">
      <!-- <v-row align-center>
        <v-column class="ml-6 mt-5">
          <v-avatar size="50" color="grey">
            <img src="src" alt="alt" />
          </v-avatar>
        </v-column>
      </v-row> -->
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="link in links"
            :key="link.text"
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
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/products" },
        { icon: "mdi-account-multiple", text: "Team", route: "/profiles" }
      ]
    };
  }
};
</script>
