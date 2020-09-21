<template>
  <div class="create-product">
    <v-card class="mx-auto pa-6"
      ><v-card-title>
        Add Product
        <v-spacer></v-spacer>
        <span>
          <createCategory />
        </span>
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="onSubmit"
        >
          <v-text-field
            label="Name"
            :counter="20"
            :rules="nameRules"
            required
            v-model="product.name"
          />
          <v-text-field
            label="Size"
            :rules="nameRules"
            required
            v-model="product.size"
          />
          <v-text-field
            label="Color"
            type="text"
            :rules="nameRules"
            required
            v-model="product.color"
          />
          <v-select
            :items="allCategories"
            label="Category"
            v-model="product.category"
            item-text="name"
            item-value="id"
          ></v-select>
          <v-file-input
            :rules="imageRules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Image upload"
            prepend-icon="mdi-camera"
            label="Image"
            chips
            multiple
            v-model="product.product_images"
            @change="uploadFile"
          ></v-file-input>
          <v-textarea
            clearable
            auto-grow
            clear-icon="mdi-cancel"
            label="Description"
            v-model="product.description"
          ></v-textarea>
        </v-form>
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

import createCategory from "./createCategory";
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
      files: null,
      product: {
        name: "",
        product_images: null,
        size: "",
        color: "",
        category: null
      },
      valid: true,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 20) || "Name must be less than 20 characters"
      ]
      // imageRules: [
      //   value =>
      //     !value ||
      //     value.size < 2000000 ||
      //     "Image size should be less than 2 MB!"
      // ]
    };
  },

  methods: {
    uploadFile(event) {
      this.files = event.target.files;
    },
    onSubmit() {
      const formData = new FormData();
      for (const i of Object.keys(this.files)) {
        formData.append("product_images", this.files[i]);
      }
      this.$store
        .dispatch("addProduct", formData)
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
    createCategory
  },
  computed: mapGetters(["allCategories"]),
  created() {
    this.fetchCategories();
  }
};
</script>
