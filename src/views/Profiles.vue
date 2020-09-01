<template>
  <div class="profiles">
    <v-container grid-list-md>
      <v-row wrap>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="profile in profiles"
          :key="profile.name"
        >
          <v-card class="mx-auto" max-width="344" flat>
            <v-responsive>
              <v-avatar size="164" color="grey lighten-2">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  height="200px"
                ></v-img>
              </v-avatar>
            </v-responsive>

            <v-card-title>
              {{ profile.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ profile.role }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn class="primary" rounded x-small>update</v-btn>

              <v-btn color="error" rounded x-small>
                Delete
              </v-btn>

              <v-btn icon @click="show = !show" class="ml-4">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ profile.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Profiles",
  data() {
    return {
      show: false,
      profiles: [
        {
          name: "Rael Oburu",
          role: "Fashion Designer",
          description:
            "I'm a thing. But, like most politicians, he promised more "
        },
        {
          name: "John Anderson",
          role: "Interior Designer",
          description:
            "than he could deliver. You won't have time for sleeping,"
        },
        {
          name: "Maina Anderson",
          role: "Software Engineer",
          description:
            "soldier, not with all the bed making you'll be doing. Then we'll ."
        },
        {
          name: "Timothy Anderson",
          role: "Poultry Farmer",
          description:
            "go with that data file! Hey, you add a one and two zeros to that "
        },
        {
          name: "Joe Hoe",
          role: "Deliveries guru",
          description:
            "or we walk! You're going to do his laundry? I've got to find a way to escape"
        }
      ]
    };
  }
};
</script>
