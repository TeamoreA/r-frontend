<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-2" color="error" v-bind="attrs" v-on="on">delete</v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Are you sure you want to delete?
      </v-card-title>

      <v-card-text>
        This action is permanent and cannot be reversed.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="deletePdct(productId)">
          delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DeleteProduct",
  props: {
    productId: String
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "deleteProduct"]),
    deletePdct(id) {
      this.$store
        .dispatch("deleteProduct", id)
        .then(() => {
          this.dialog = false;
          this.$toasted
            .success("Product has been deleted successfully")
            .goAway(2000);
          this.$router.push({ name: "dashboard" });
        })
        .catch(e => {
          console.log(e);
          this.$toasted
            .error("An error has occured please try again")
            .goAway(2000);
        });
    }
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  }
};
</script>
