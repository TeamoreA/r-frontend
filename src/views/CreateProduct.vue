<template>
  <v-card class="mx-auto pa-6"
    ><v-card-title>
      Add product
    </v-card-title>

    <ValidationObserver ref="observer" v-slot="{}">
      <form>
        <ValidationProvider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:20"
        >
          <v-text-field
            v-model="name"
            :counter="20"
            :error-messages="errors"
            label="Name"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="category"
          rules="required"
        >
          <v-select
            v-model="category"
            :items="items"
            :error-messages="errors"
            label="Category"
            data-vv-name="select"
            required
          ></v-select>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required" name="image">
          <v-file-input
            v-model="files"
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
            v-model="description"
            :error-messages="errors"
            label="Description"
            required
          ></v-textarea>
        </ValidationProvider>

        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </ValidationObserver>
  </v-card>
</template>

<script>
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});

export default {
  name: "CreateProduct",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["clothes", "shoes", "hair"],
    checkbox: null
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.description = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    }
  }
};
</script>
