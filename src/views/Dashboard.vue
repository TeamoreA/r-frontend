<template>
  <div class="dashboard">
    <v-card>
      <v-card-title>
        Dashboard
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-btn class="ma-2" color="primary" router to="/create-product"
          >add item</v-btn
        >
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="allProducts.data"
        :search="search"
      >
        <template v-slot:[`item.action`]="{ item }">
          <span
            ><v-btn
              class="ma-2"
              x-small
              rounded
              outlined
              color="normal"
              v-model="item.action"
              >view</v-btn
            ></span
          >
          <span
            ><v-btn
              class="ma-2"
              x-small
              rounded
              outlined
              color="primary"
              v-model="item.action"
              >update</v-btn
            ></span
          >
          <span
            ><v-btn
              class="ma-2"
              x-small
              rounded
              outlined
              color="error"
              @click="deletePdct(item.id)"
              >delete</v-btn
            ></span
          >
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Product Name",
          align: "start",
          sortable: true,
          value: "name"
        },
        { text: "Size", value: "size" },
        { text: "Color", value: "color" },
        { text: "Number of Items", value: "no_of_items" },
        { text: "Price (Ksh)", value: "price" },
        { text: "", value: "action" }
      ],
      products: []
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "deleteProduct"]),
    deletePdct(id) {
      this.$store
        .dispatch("deleteProduct", id)
        .then(() => {
          this.$toasted
            .success("Product has been deleted successfully")
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
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  }
};
</script>
