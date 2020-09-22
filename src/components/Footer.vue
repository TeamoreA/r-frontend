<template>
  <v-footer>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="8">
          <v-card flat tile class="text-center grey lighten-4">
            <v-card-text>
              <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                <v-icon size="24px">{{ icon }}</v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="pt-0 grey--text">
              write your about here...
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
              ©{{ new Date().getFullYear() }} — <strong>RO</strong>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>
