<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          add category
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Categories</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-list dense>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item v-for="(item, i) in allCategories" :key="i">
                  <v-list-item-icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-icon @click="deleteCat(item.id)">mdi-delete</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-item-group>
            </v-list>
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
import { mapGetters, mapActions } from "vuex";
import CategoryDataService from "../services/CategoryDataService";
export default {
  name: "CreateCategory",
  data() {
    return {
      item: 1,
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
        })
        .catch(e => {
          console.log(e);
          this.$toasted
            .error("An error has occured please try again")
            .goAway(2000);
        });
      this.dialog = false;
    },
    deleteCat(id) {
      CategoryDataService.delete(id)
        .then(() => {
          this.dialog = false;
          this.$toasted
            .success("Category has been deleted successfully")
            .goAway(2000);
          this.$router.push({ name: "dashboard" });
        })
        .catch(e => {
          console.log(e);
          this.$toasted
            .error("An error has occured please try again")
            .goAway(2000);
        });
    },
    ...mapActions(["fetchCategories"])
  },
  computed: mapGetters(["allCategories"]),
  created() {
    this.fetchCategories();
  }
};
</script>
