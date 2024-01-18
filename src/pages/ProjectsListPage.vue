<template>
  <v-container>
    <v-skeleton-loader type="card"></v-skeleton-loader>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { loadProjects } from "@/service";

onMounted(() => {
  loadProjects();
});
</script>
