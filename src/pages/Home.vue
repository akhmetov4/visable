<template>
  <v-container class="welcome-container">
    <v-row align="center">
      <v-col cols="12" class="text-center">
        <v-img
          class="welcome-image"
          src="@/assets/nasa-logo.png"
          alt="NASA Logo"
        />
        <h1 class="mb-4">Welcome to NASA Projects</h1>
        <p class="mb-6">
          Explore the fascinating projects conducted by NASA to advance our
          understanding of the universe.
        </p>
        <v-btn color="primary" :to="{ name: 'projects' }">
          Explore Projects
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup></script>

<style scoped>
.welcome-container {
  height: 100vh;
  display: flex;
  align-items: center;
}

.welcome-image {
  max-width: 200px;
  margin: 0 auto 16px auto;
}
</style>
