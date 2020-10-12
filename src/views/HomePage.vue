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
              <div
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="busy"
                infinite-scroll-distance="limit"
              >
                <v-row wrap>
                  <v-col
                    v-for="(product, i) in products"
                    :key="i"
                    class="d-flex child-flex"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                  >
                    <v-card flat hover @click="viewProduct(product.id)">
                      <v-img
                        :src="
                          product.images.length > 0
                            ? product.images[0].image
                            : defaultImage
                        "
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
                      <v-card-subtitle
                        class="grey--text font-weight-bold pb-0"
                        >{{ product.name }}</v-card-subtitle
                      >
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
              </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductDataService from "../services/ProductDataService";

export default {
  name: "HomePage",
  data() {
    return {
      defaultImage:
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png",
      limit: 10,
      busy: false,
      products: []
    };
  },
  methods: {
    ...mapActions(["fetchImages"]),
    loadMore() {
      this.busy = true;
      ProductDataService.all()
        .then(response => {
          console.log("response goes here");
          console.log(response.data);
          const append = response.data.data.slice(
            this.products.length,
            this.products.length + this.limit
          );
          this.products = this.products.concat(append);
          console.log(this.products);
          this.busy = false;
        })
        .catch(e => {
          console.log("Error goes here");
          console.log(e);
          this.$toasted
            .error("An error has occured please try again")
            .goAway(2000);
        });
    },
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
  computed: mapGetters(["allImages"]),
  created() {
    this.loadMore();
    this.fetchImages();
  }
};
</script>
