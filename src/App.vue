<template>
  <v-app>
    <v-app-bar color="indigo">
      <v-container class="header-container">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img src="@/assets/nasa-logo.png" alt="Logo" max-height="64"></v-img>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer temporary v-model="drawer">
      <v-list>
        <v-list-item link to="/">
          <template v-slot:prepend>
            <v-icon> mdi-home </v-icon>
          </template>
          <v-list-item-title class="nav-link">Home</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/projects">
          <template v-slot:prepend>
            <v-icon> mdi-format-list-bulleted </v-icon>
          </template>
          <v-list-item-title class="nav-link">Projects</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container class="content-container">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="indigo">
      <v-container>
        <v-row justify="center">
          <v-col>
            <div class="footer-text">&copy;{{ currentYear }} {{ author }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);
const author = "Akhmetov Alibek";
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-container {
  margin-top: 20px;
}

.footer-text {
  color: white;
}
</style>
