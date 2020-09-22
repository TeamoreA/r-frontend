<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          add category
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">New Category</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form @submit.prevent="save">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Category name*"
                    required
                    v-model="cate.name"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "CreateCategory",
  data() {
    return {
      dialog: false,
      cate: {
        name: ""
      }
    };
  },
  methods: {
    save() {
      this.$store
        .dispatch("addCategory", this.cate)
        .then(() => {
          this.$toasted
            .success("New category has been added successfully")
            .goAway(2000);
          // this.$router.push("dashboard");
        })
        .catch(e => {
          console.log(e);
          this.$toasted
            .error("An error has occured please try again")
            .goAway(2000);
        });
      this.dialog = false;
    }
  }
};
</script>
