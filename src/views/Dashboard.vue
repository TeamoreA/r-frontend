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
      <v-data-table :headers="headers" :items="products" :search="search">
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
              v-model="item.action"
              >delete</v-btn
            ></span
          >
        </template>
      </v-data-table>
    </v-card>
    <!-- <h3 class="subheading grey--text text-lighten-4">Dashboard</h3>

    <v-container class="my-5">
      <v-row no-gutters wrap>
        <v-col cols="12" md="6">
          <v-card class="pa-2" tile>
            Col1
          </v-card>
        </v-col>
        <v-col cols="4" md="2">
          <v-card class="pa-2" tile>
            Col2
          </v-card>
        </v-col>
        <v-col cols="4" md="2">
          <v-card class="pa-2" tile>
            Col2
          </v-card>
        </v-col>
        <v-col cols="4" md="2">
          <v-card class="pa-2" tile>
            Col2
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
// @ is an alias to /src

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
        { text: "Number of Items", value: "number" },
        { text: "Price (Ksh)", value: "price" },
        { text: "", value: "action" }
      ],
      products: [
        {
          name: "Frozen Yogurt",
          size: 159,
          color: "white",
          number: 24,
          price: 4.0,
          action: "1%"
        },
        {
          name: "Ice cream sandwich",
          size: 237,
          color: "orange",
          number: 37,
          price: 4.3,
          action: "1%"
        },
        {
          name: "Eclair",
          size: 262,
          color: "cyan",
          number: 23,
          price: 6.0,
          action: "7%"
        },
        {
          name: "Cupcake",
          size: 305,
          color: "deep blue",
          number: 67,
          price: 4.3,
          action: "8%"
        },
        {
          name: "Gingerbread",
          size: 356,
          color: "cyan",
          number: 49,
          price: 3.9,
          action: "16%"
        },
        {
          name: "Jelly bean",
          size: 375,
          color: "yellow",
          number: 94,
          price: 0.0,
          action: "0%"
        },
        {
          name: "Lollipop",
          size: 392,
          color: "red",
          number: 98,
          price: 0,
          action: "2%"
        },
        {
          name: "Honeycomb",
          size: 408,
          color: "cyan",
          number: 87,
          price: 6.5,
          action: "45%"
        },
        {
          name: "Donut",
          size: 452,
          color: "cyan",
          number: 51,
          price: 4.9,
          action: "22%"
        },
        {
          name: "KitKat",
          size: 518,
          color: "cyan",
          number: 65,
          price: 7,
          action: "6%"
        }
      ]
    };
  }
};
</script>
