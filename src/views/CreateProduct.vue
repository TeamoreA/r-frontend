<template>
  <v-card class="mx-auto pa-6"
    ><v-card-title>
      Add product
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
          :items="items"
          label="Category"
          v-model="product.category"
        ></v-select>
        <!-- <v-file-input
          v-model="product.files"
          color="primary accent-4"
          counter
          label="Image upload"
          multiple
          placeholder="Select your images"
          prepend-icon="mdi-camera"
          :show-size="1000"
          :error-messages="errors"
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="primary accent-4" dark label small>
              {{ text }}
            </v-chip>

            <span
              v-else-if="index === 2"
              class="overline grey--text text--darken-3 mx-2"
            >
              +{{ files.length - 2 }} File(s)
            </span>
          </template>
        </v-file-input> -->
        <v-file-input
          :rules="imageRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Image upload"
          prepend-icon="mdi-camera"
          label="Image"
          v-model="product.image"
        ></v-file-input>
        <v-textarea
          clearable
          auto-grow
          clear-icon="mdi-cancel"
          label="Description"
          value="Product description here."
          v-model="product.description"
        ></v-textarea>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn :disabled="!valid" color="primary" @click="onSubmit">Submit</v-btn>
    </v-card-actions>
    <!-- <ValidationObserver ref="observer" v-slot="{}">
      <v-form @submit.prevent="onSubmit">
        <ValidationProvider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:20"
        >
          <v-text-field
            v-model="product.name"
            :counter="20"
            :error-messages="errors"
            label="Name"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="size">
          <v-text-field
            v-model="product.size"
            :error-messages="errors"
            label="Size"
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="color">
          <v-text-field
            v-model="product.color"
            :error-messages="errors"
            label="Color"
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="category"
          rules="required"
        >
          <v-select
            v-model="product.category"
            :items="product.items"
            :error-messages="errors"
            label="Category"
            data-vv-name="select"
            required
          ></v-select>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required" name="image">
          <v-file-input
            v-model="product.files"
            color="primary accent-4"
            counter
            label="Image upload"
            multiple
            placeholder="Select your images"
            prepend-icon="mdi-camera"
            :show-size="1000"
            :error-messages="errors"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip
                v-if="index < 2"
                color="primary accent-4"
                dark
                label
                small
              >
                {{ text }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >
                +{{ files.length - 2 }} File(s)
              </span>
            </template>
          </v-file-input>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="Description"
          rules="required"
        >
          <v-textarea
            clearable
            clear-icon="mdi-cancel"
            value="Enter your the product description here"
            v-model="product.description"
            :error-messages="errors"
            label="Description"
            required
          ></v-textarea>
        </ValidationProvider>

        <v-btn class="mr-4" :disabled="!form.valid">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form> -->
    <!-- </ValidationObserver> -->
  </v-card>
</template>

<script>
import { required, max } from "vee-validate/dist/rules";
import {
  extend,
  // ValidationObserver,
  // ValidationProvider,
  setInteractionMode
} from "vee-validate";
import { mapActions } from "vuex";

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
  // components: {
  //   ValidationProvider,
  //   ValidationObserver
  // },
  data: () => ({
    product: {
      name: "",
      image: "",
      size: "",
      color: "",
      category: null
    },
    items: ["clothes", "shoes", "hair"],
    valid: true,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 20) || "Name must be less than 20 characters"
    ],
    imageRules: [
      value =>
        !value || value.size < 2000000 || "Image size should be less than 2 MB!"
    ]
  }),

  methods: {
    onSubmit() {
      // this.$refs.observer.validate();
      this.addProduct(this.product);
    },
    clear() {
      this.product.name = "";
      this.product.email = "";
      this.product.description = "";
      this.product.select = null;
      this.product.checkbox = null;
      this.$refs.observer.reset();
    },
    ...mapActions(["addProduct"])
  }
};
</script>
