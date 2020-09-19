<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Register</h1>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save">
        <v-text-field
          label="Username"
          prepend-icon="mdi-account-circle"
          :counter="20"
          :rules="nameRules"
          required
          v-model="user.username"
        />
        <v-text-field
          label="Email"
          prepend-icon="mdi-email"
          :rules="emailRules"
          required
          v-model="user.email"
        />
        <v-text-field
          label="password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          prepend-icon="mdi-lock"
          @click:append="showPassword = !showPassword"
          :rules="passwordRules"
          required
          v-model="user.password"
        />
        <v-text-field
          label="confirm password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          prepend-icon="mdi-lock"
          @click:append="showPassword = !showPassword"
          required
          v-model="user.confirmPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn :disabled="!valid" color="primary" @click="save">Resgister</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        text
        color="secondary"
        size="small"
        class="text-lighten-1"
        router
        to="/login"
        >Already have an account?</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      showPassword: false,
      user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      valid: true,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 20) || "Name must be less than 20 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 7) || "Password must be more than 7 characters"
      ],
      confirmPasswordRules: [
        v => (v && v === this.password) || "Doesn't match your password"
      ]
    };
  },
  methods: {
    save() {
      // this.$http
      //   .post(`http://127.0.0.1:8000/api/auth/register/`, this.user)
      //   .then(response => {
      //     console.log(response.data);
      //     this.$toasted
      //       .success("You have been registerd successfully")
      //       .goAway(2000);
      //     this.$router.push("login");
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     this.$toasted
      //       .error("Something went wrong, Please try again")
      //       .goAway(2000);
      //   });
      this.registerUser(this.user);
      this.$toasted
        .success("You have been registerd successfully")
        .goAway(2000);
      this.$router.push("login");
    },
    ...mapActions(["registerUser"])
  }
};
</script>
