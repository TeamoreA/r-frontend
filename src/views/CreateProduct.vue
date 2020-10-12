<template>
  <div class="create-product">
    <v-card class="mx-auto pa-6"
      ><v-card-title>
        Add Product
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
                  v-model="product.name"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Size"
                  :rules="numberRules"
                  type="number"
                  dense
                  required
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
                  required
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
                  required
                  v-model="product.price"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="No. of Items"
                  :rules="numberRules"
                  type="number"
                  dense
                  required
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
        <v-btn :disabled="!valid" color="primary" @click="onSubmit"
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
  name: "CreateProduct",
  data() {
    return {
      files: "",
      product: {
        name: "",
        size: "",
        color: "",
        category: null,
        price: "",
        noOfItems: "",
        description: ""
      },
      valid: true,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 50 characters"
      ],
      colorRules: [v => !!v || "Color is required"],
      numberRules: [v => !!v || "Valid number is required"],
      priceRules: [v => !!v || "Price is required"]
    };
  },

  methods: {
    onSubmit() {
      let formData = new FormData();
      for (const i of this.files) {
        formData.append("product_images", i, i.name);
      }
      formData.append("name", this.product.name);
      formData.append("size", this.product.size);
      formData.append("color", this.product.color);
      formData.append("category", this.product.category);
      formData.append("price", this.product.price);
      formData.append("no_of_items", this.product.noOfItems);
      formData.append("description", this.product.description);
      this.$store
        .dispatch("addProduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          this.$toasted.success("New product added successfully").goAway(2000);
          this.$router.push("dashboard");
        })
        .catch(e => {
          console.log(e);
          this.$toasted
            .error("An error has occured please try again")
            .goAway(2000);
        });
    },
    clear() {
      this.product.name = "";
      this.product.email = "";
      this.product.description = "";
      this.product.select = null;
      this.product.checkbox = null;
      this.$refs.observer.reset();
    },
    ...mapActions(["addProduct", "fetchCategories"])
  },
  components: {
    CreateCategory
  },
  computed: mapGetters(["allCategories"]),
  created() {
    this.fetchCategories();
  }
};
</script>
