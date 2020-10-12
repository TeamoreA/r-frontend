<template>
  <div class="homepage">
    <v-container>
      <!-- Slider goes here -->
      <v-row align="center" justify="center">
        <v-col cols="12" lg="8">
          <v-carousel hide-delimiter-background cycle show-arrows-on-hover>
            <v-carousel-item
              v-for="(item, i) in allImages"
              :key="i"
              :src="item.image"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <!-- products cards goes here -->
      <v-row justify="center">
        <v-col cols="12" lg="8">
          <v-card>
            <v-card-title primary-title>
              Products
            </v-card-title>
            <v-container fluid>
              <v-row wrap>
                <v-col
                  v-for="(product, i) in allProducts.data"
                  :key="i"
                  class="d-flex child-flex"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card flat hover @click="viewProduct(product.id)">
                    <v-img
                      :src="product.images[0].image"
                      aspect-ratio="1"
                      class="white--text align-end grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-subtitle class="grey--text font-weight-bold pb-0">{{
                      product.name
                    }}</v-card-subtitle>
                    <v-card-text>
                      <div>
                        <v-icon>mdi-phone</v-icon>
                        <span class="green--text font-weight-black"
                          >+254788220011</span
                        >
                      </div>
                      <div><strong>Color:</strong> {{ product.color }}</div>
                      <div><strong>Size:</strong> {{ product.size }}</div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchImages"]),
    viewProduct(id) {
      this.$store
        .dispatch("fetchProduct", id)
        .then(res => {
          console.log("dshboard res here");
          console.log(res);
          this.$router.push({ name: "product", params: { id } });
        })
        .catch(e => {
          console.log(e);
          this.$toasted
            .error("An error has occured please try again")
            .goAway(2000);
        });
    }
  },
  computed: mapGetters(["allProducts", "allImages"]),
  created() {
    this.fetchProducts();
    this.fetchImages();
  }
};
</script>
