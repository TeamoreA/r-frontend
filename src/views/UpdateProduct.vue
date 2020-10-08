<template>
  <!-- <v-row justify="center">
    <v-dialog v-model="dialog" max-width="800px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="ma-2"
          x-small
          rounded
          outlined
        >
          update
        </v-btn>
      </template>
      <v-card class="mx-auto pa-6"
        ><v-card-title>
          Update Product
          <v-spacer></v-spacer>
          <span>
            <CreateCategory />
          </span>
        </v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="onSubmit(itemId)"
              ><v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Name"
                    :counter="20"
                    :rules="nameRules"
                    dense
                    v-model="product.name"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Size"
                    :rules="numberRules"
                    type="number"
                    dense
                    v-model="product.size"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Color"
                    type="text"
                    :rules="colorRules"
                    dense
                    v-model="product.color"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                    :items="allCategories"
                    label="Category"
                    v-model="product.category"
                    item-text="name"
                    item-value="id"
                    dense
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Price (Ksh)"
                    :rules="priceRules"
                    type="number"
                    dense
                    v-model="product.price"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="No. of Items"
                    :rules="numberRules"
                    type="number"
                    dense
                    v-model="product.noOfItems"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-file-input
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Image upload"
                  prepend-icon="mdi-camera"
                  label="Image"
                  multiple
                  small-chips
                  dense
                  v-model="files"
                  ref="files"
                ></v-file-input>
              </v-row>
              <v-row>
                <v-textarea
                  clearable
                  auto-grow
                  dense
                  clear-icon="mdi-cancel"
                  label="Description"
                  v-model="product.description"
                ></v-textarea>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="!valid" color="primary" @click="onSubmit(itemId)"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card> -->
  <!-- <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump'
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card> -->
  <!-- </v-dialog>
  </v-row>
</template> -->

  <div class="update-product">
    <v-card class="mx-auto pa-6"
      ><v-card-title>
        Update Product
        <v-spacer></v-spacer>
        <span>
          <CreateCategory />
        </span>
      </v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="onSubmit"
            ><v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Name"
                  :counter="20"
                  :rules="nameRules"
                  dense
                  required
                  v-model="singleProduct.name"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Size"
                  :rules="numberRules"
                  type="number"
                  dense
                  required
                  v-model="singleProduct.size"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Color"
                  type="text"
                  :rules="colorRules"
                  dense
                  required
                  v-model="singleProduct.color"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  :items="allCategories"
                  label="Category"
                  v-model="singleProduct.category"
                  item-text="name"
                  item-value="id"
                  dense
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Price (Ksh)"
                  :rules="priceRules"
                  type="number"
                  dense
                  required
                  v-model="singleProduct.price"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="No. of Items"
                  :rules="numberRules"
                  type="number"
                  dense
                  required
                  v-model="singleProduct.no_of_items"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Image upload"
                prepend-icon="mdi-camera"
                label="Image"
                multiple
                small-chips
                dense
                v-model="files"
                ref="files"
              ></v-file-input>
            </v-row>
            <v-row>
              <v-textarea
                clearable
                auto-grow
                dense
                clear-icon="mdi-cancel"
                label="Description"
                v-model="singleProduct.description"
              ></v-textarea>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn :disabled="!valid" color="primary" @click="onSubmit()"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { required, max } from "vee-validate/dist/rules";
import { extend, setInteractionMode } from "vee-validate";

import CreateCategory from "./CreateCategory";
import { mapGetters, mapActions } from "vuex";
import ProductDataService from "../services/ProductDataService";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

export default {
  name: "UpdateProduct",
  props: {
    itemId: String
  },
  data() {
    return {
      // dialog: false,
      files: "",
      singleProduct: null,
      // product: {
      //   id: null,
      //   name: "",
      //   size: "",
      //   color: "",
      //   category: null,
      //   price: "",
      //   noOfItems: "",
      //   description: ""
      // },
      valid: true,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 20) || "Name must be less than 20 characters"
      ],
      colorRules: [v => !!v || "Color is required"],
      numberRules: [v => !!v || "Valid number is required"],
      priceRules: [v => !!v || "Price is required"]
    };
  },

  methods: {
    onSubmit() {
      // let formData = new FormData();
      // for (const i of this.files) {
      //   formData.append("product_images", i, i.name);
      // }
      // formData.append("name", this.product.name);
      // formData.append("size", this.product.size);
      // formData.append("color", this.product.color);
      // formData.append("category", this.product.category);
      // formData.append("price", this.product.price);
      // formData.append("no_of_items", this.product.noOfItems);
      var data = {
        name: this.singleProduct.name,
        size: this.singleProduct.size,
        color: this.singleProduct.color,
        category: this.singleProduct.category,
        // product_images: this.singleProduct.product_images,
        price: this.singleProduct.price,
        no_of_items: this.singleProduct.no_of_items
      };
      console.log("form data here");
      console.log(data);
      ProductDataService.update(this.singleProduct.id, data)
        .then(res => {
          console.log("res data here");
          console.log(res.data);
          this.$toasted
            .success("New product updated successfully")
            .goAway(2000);
          this.$router.push({ name: "dashboard" });
        })
        .catch(e => {
          console.log(e);
          this.$toasted
            .error("An error has occured please try again")
            .goAway(2000);
        });
    },
    viewPdct(id) {
      // var res = this.$store.dispatch("fetchProduct", id);
      // this.singleProduct = res.data;
      // console.log("res data here");
      // console.log(res.data);
      ProductDataService.get(id)
        .then(response => {
          this.singleProduct = response.data.data;
          console.log("response.data");
          console.log(this.singleProduct.name);
        })
        .catch(e => {
          console.log("viewPdct error");
          console.log(e);
        });
    },
    ...mapActions(["updateProduct", "fetchCategories", "fetchProduct"])
  },
  components: {
    CreateCategory
  },
  computed: mapGetters(["allCategories"]),
  created() {
    this.fetchCategories();
    // this.fetchProduct();
  },
  mounted() {
    this.viewPdct(this.$route.params.id);
  }
};
</script>
