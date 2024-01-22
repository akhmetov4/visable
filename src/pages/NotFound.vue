<!-- NotFound.vue -->
<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col>
        <h1 class="text-center">404 - Not Found</h1>
        <p class="text-center">
          Sorry, the page you are looking for might be in another castle.
        </p>
        <div class="text-center mt-5">
          <v-btn class="" color="primary" :to="{ name: 'home' }">
            Go to Home
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>
