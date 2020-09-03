<template>
  <div class="profiles">
    <v-container>
      <v-row>
        <v-header class="ma-4">View profile</v-header>
        <v-spacer></v-spacer>
        <v-btn class="ma-4" text small outlined color="primary text-lighten-1">
          <v-icon left>mdi-pencil</v-icon> Edit profile
        </v-btn>

        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(profile, i) in profiles"
            :key="i"
            hide-actions
          >
            <v-expansion-panel-header>
              <v-row align="center" class="spacer" no-gutters>
                <v-col cols="4" sm="2" md="1">
                  <v-avatar color="primary" class="mr-2" size="36">
                    <span class="white--text">RO</span>
                  </v-avatar>
                </v-col>

                <v-col class="hidden-xs-only" sm="5" md="3">
                  <strong v-html="profile.name"></strong>
                </v-col>

                <v-col class="text-no-wrap" cols="5" sm="3">
                  {{ profile.role }}
                </v-col>

                <v-col
                  v-if="profile.description"
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  &mdash;
                  {{ profile.description }}
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-card-text v-text="profile.description"></v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      show: false,
      profiles: [
        {
          name: "Rael Oburu",
          role: "Fashion Designer",
          description:
            "I'm a thing. But, like most politicians, he promised more "
        }
      ],
      messages: [
        {
          avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          name: "John Leider",
          title: "Welcome to Vuetify.js!",
          excerpt: "Thank you for joining our community..."
        },
        {
          color: "red",
          icon: "people",
          name: "Social",
          new: 1,
          total: 3,
          title: "Twitter"
        },
        {
          color: "teal",
          icon: "local_offer",
          name: "Promos",
          new: 2,
          total: 4,
          title: "Shop your way",
          exceprt: "New deals available, Join Today"
        }
      ],
      lorem:
        "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum."
    };
  }
};
</script>
