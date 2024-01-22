<template>
  <div>
    <v-container>
      <h1 class="mb-3">NASA projects</h1>
      <v-card class="elevation-0 pa-4" color="grey-lighten-5">
        <ProjectsListFilters />
        <v-skeleton-loader type="card" :loading="loading">
          <v-data-table
            :headers="headers"
            :items="projects"
            class="elevation-1"
          >
            <template #item.actions="{ item }">
              <v-btn
                density="compact"
                color="indigo"
                flat
                :to="{
                  name: 'project-details',
                  params: { id: item.projectId },
                }"
                >details</v-btn
              >
            </template>
          </v-data-table>
        </v-skeleton-loader>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProjects } from "@/composables/useProjects";
import ProjectsListFilters from "@/components/ProjectsListFilters.vue";

const { projects, loading, loadAllProjects } = useProjects();

const headers = [
  { title: "Name", value: "title", align: "start" },
  { title: "Project ID", value: "projectId", align: "start" },
  { title: "Acronym", value: "acronym", align: "start" },
  { title: "Last updated", value: "lastUpdated", align: "start" },
  { title: "Actions", value: "actions", align: "end" },
];

onMounted(() => {
  loadAllProjects();
});
</script>
