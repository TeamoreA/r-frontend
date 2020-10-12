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
        <template v-slot:[`item.actions`]="{ item }">
          <!-- <v-icon small class="mr-2" @click="viewPdct(item.id)">
            mdi-pencil
          </v-icon>
          <DeleteProduct :productId="item.id" /> -->
          <span>
            <v-btn
              class="ma-2"
              x-small
              rounded
              outlined
              color="primary"
              v-model="item.action"
              @click="viewPdct(item.id)"
              >view</v-btn
            >
          </span>
          <!-- <span>
            <DeleteProduct :productId="item.id" /> -->
          <!-- <v-btn
              class="ma-2"
              x-small
              rounded
              outlined
              color="error"
              @click.stop="dialog = true"
              >delete</v-btn
            > -->
          <!-- </span> -->
          <!-- <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="headline">
                Delete
              </v-card-title>

              <v-card-text>
                This item will be permernently deleted from the database
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="green darken-1" text @click="dialog = false">
                  cancel
                </v-btn>

                <v-btn color="error" text @click="deletePdct(item.id)">
                  Delete
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
// import DeleteProduct from "./DeleteProduct";
// import UpdateProduct from "./UpdateProduct";
export default {
  name: "Dashboard",
  components: {
    // DeleteProduct
    // UpdateProduct
  },
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
        { text: "", value: "actions", sortable: false }
      ],
      products: []
    };
  },
  computed: mapGetters(["allProducts"]),
  mounted() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    // setActiveItem(item, index) {
    //   this.currentItem = item;
    //   this.currentIndex = index;
    //   this.$router.push("update-product");
    // },
    // deletePdct(id) {
    //   this.$store
    //     .dispatch("deleteProduct", id)
    //     .then(() => {
    //       this.dialog = false;
    //       this.$toasted
    //         .success("Product has been deleted successfully")
    //         .goAway(2000);
    //       // this.$router.push("dashboard");
    //     })
    //     .catch(e => {
    //       console.log(e);
    //       this.$toasted
    //         .error("An error has occured please try again")
    //         .goAway(2000);
    //     });
    // },
    viewPdct(id) {
      this.$store
        .dispatch("fetchProduct", id)
        .then(res => {
          console.log("dshboard res here");
          console.log(res);
          this.$router.push({ name: "updateProduct", params: { id } });
        })
        .catch(e => {
          console.log(e);
          this.$toasted
            .error("An error has occured please try again")
            .goAway(2000);
        });
    }
  }
};
</script>
