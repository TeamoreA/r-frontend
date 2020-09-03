<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <v-card>
          <v-carousel hide-delimiter-background>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>
          <v-card-subtitle class="pb-0"
            ><strong v-html="productName"></strong>
          </v-card-subtitle>

          <v-card-text>
            <div>
              <v-icon>mdi-phone</v-icon><strong>Call or WhatsApp:</strong>
              <span class="green--text font-weight-black">+254788220011</span>
            </div>
            <div><strong>Color:</strong> {{ color }}</div>
            <div><strong>Size:</strong> {{ size }}</div>
            <div><strong>Description:</strong></div>

            <div class="grey--text">{{ description }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      productName: "Frozen Yogurt",
      size: 159,
      color: "white",
      number: 24,
      price: 4.0,
      description:
        "Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum\
            ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel\
            diam elementum tempor vel ut orci. Orci varius natoque penatibus et\
            magnis dis parturient montes, nascetur ridiculus mus.",

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
  }
};
</script>
