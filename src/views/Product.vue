<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <v-card>
          <v-carousel hide-delimiter-background>
            <v-carousel-item
              v-for="(item, i) in singleProduct.images"
              :key="i"
              :src="item.image"
            >
            </v-carousel-item>
          </v-carousel>
          <v-card-subtitle class="pb-0"
            ><strong v-html="singleProduct.name"></strong>
          </v-card-subtitle>

          <v-card-text>
            <div>
              <v-icon>mdi-phone</v-icon><strong>Call or WhatsApp:</strong>
              <span class="green--text font-weight-black">+254788220011</span>
            </div>
            <div><strong>Color:</strong> {{ singleProduct.color }}</div>
            <div><strong>Size:</strong> {{ singleProduct.size }}</div>
            <div><strong>Description:</strong></div>

            <div class="grey--text">{{ singleProduct.description }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Product",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchProducts"]),
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
  computed: mapGetters(["singleProduct"]),
  created() {
    this.fetchProduct(this.$route.params.id);
  }
};
</script>
