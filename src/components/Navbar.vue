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
      <v-btn text>Home</v-btn>
      <v-btn text>Login</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark class="primary lighten-1">
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
