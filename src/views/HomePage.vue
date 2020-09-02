<template>
  <div class="homepage">
    <v-container>
      <!-- Slider goes here -->
      <v-row align="center" justify="center">
        <v-col cols="8">
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
        <v-col cols="8">
          <v-card>
            <v-card-title primary-title>
              Products
            </v-card-title>
            <v-container fluid>
              <v-row wrap>
                <v-col
                  v-for="product in products"
                  :key="product.name"
                  class="d-flex child-flex"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card flat tile hover href="#">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      aspect-ratio="1"
                      class="white--text align-end grey lighten-2"
                    >
                      <v-card-title>Product name</v-card-title>
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
                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                      <div>Whitehaven Beach</div>

                      <div>Whitsunday Island, Whitsunday Islands</div>
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
export default {
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
      ],
      products: [
        {
          name: "Frozen Yogurt",
          size: 159,
          color: "white",
          number: 24,
          price: 4.0,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: "Ice cream sandwich",
          size: 237,
          color: "orange",
          number: 37,
          price: 4.3,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: "Eclair",
          size: 262,
          color: "cyan",
          number: 23,
          price: 6.0,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: "Cupcake",
          size: 305,
          color: "deep blue",
          number: 67,
          price: 4.3,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: "Gingerbread",
          size: 356,
          color: "cyan",
          number: 49,
          price: 3.9,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: "Jelly bean",
          size: 375,
          color: "yellow",
          number: 94,
          price: 0.0,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: "Lollipop",
          size: 392,
          color: "red",
          number: 98,
          price: 0,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: "Honeycomb",
          size: 408,
          color: "cyan",
          number: 87,
          price: 6.5,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: "Donut",
          size: 452,
          color: "cyan",
          number: 51,
          price: 4.9,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          name: "KitKat",
          size: 518,
          color: "cyan",
          number: 65,
          price: 7,
          description:
            "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus."
        }
      ]
    };
  }
};
</script>

<style scoped>
.products-cards {
  margin: 0px;
}
</style>
