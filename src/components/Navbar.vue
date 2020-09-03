<template>
  <div>
    <!-- admins app bar -->
    <nav v-if="loggedIn">
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
        <v-avatar color="primary" class="mr-2" size="30">
          <span class="white--text">RO</span>
        </v-avatar>
        <v-button flat color="grey">
          <span class="text-lighten-1">Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-button>
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
        <v-btn link text to="/">
          <span class="grey--text text-lighten-1 mr-1">the</span>
          <span class="gey--text"> r.o.</span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>

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
  }
};
</script>
