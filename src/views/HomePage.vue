<template>
  <div class="homepage">
    <v-container>
      <!-- Slider goes here -->
      <v-row align="center" justify="center">
        <v-col cols="12" lg="8">
          <v-carousel hide-delimiter-background cycle show-arrows-on-hover>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
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
                  <v-card flat hover router to="/product">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
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
  name: "Homepage",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["fetchProducts"])
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  }
};
</script>
