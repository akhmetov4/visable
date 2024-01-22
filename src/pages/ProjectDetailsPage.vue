<template>
  <div>
    <v-btn
      color="primary"
      prepend-icon="mdi-arrow-left"
      flat
      variant="text"
      class="mb-3"
      :to="{ name: 'projects' }"
    >
      Back to projects
    </v-btn>
    <v-skeleton-loader type="card" laoding v-if="!project"> </v-skeleton-loader>
    <v-container v-else>
      <v-row>
        <v-col>
          <h2 class="mb-4">{{ project.title || "—" }}</h2>
          <v-card elevation="0" color="grey-lighten-5">
            <v-card-text>
              <p class="mb-2">
                <strong>Acronym:</strong> {{ project.acronym || "—" }}
              </p>
              <p class="mb-2"><strong>Description:</strong></p>
              <div v-html="project.description" class="mb-1"></div>
              <p class="mb-2">
                <strong>Start Date:</strong>
                {{ project.startDateString || "—" }}
              </p>
              <p>
                <strong>End Date:</strong> {{ project.endDateString || "—" }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h3 class="mt-4">Lead Organization</h3>
          <v-card elevation="0" color="grey-lighten-5">
            <v-card-text>
              <p class="mb-2">
                <strong>Name:</strong>
                {{ project.leadOrganization?.organizationName }}
              </p>
              <p class="mb-2">
                <strong>City:</strong> {{ project.leadOrganization?.city }}
              </p>
              <p>
                <strong>Country:</strong>
                {{ project.leadOrganization?.country.name }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h3 class="mt-4">Supporting Organizations</h3>
          <v-list v-if="project.supportingOrganizations?.length">
            <v-list-item
              v-for="org in project.supportingOrganizations"
              :key="org.organizationId"
            >
              <v-list-item-title>
                {{ org.organizationName }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ org.city }}, {{ org.country.name }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
          <v-alert v-else class="mt-4" type="info">No available data</v-alert>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h3 class="mt-4">Contact Persons</h3>
          <v-list v-if="project.coInvestigators?.length">
            <v-list-item
              v-for="coInvestigator in project.coInvestigators"
              :key="coInvestigator.contactId"
            >
              <v-list-item-title>
                {{ coInvestigator.fullName }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ coInvestigator.primaryEmail }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>{{
                coInvestigator.canUserEdit ? "Can Edit" : "Read-only"
              }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
          <v-alert v-else class="mt-4" type="info">No available data</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useProject } from "@/composables/useProject";

const props = defineProps({
  id: { type: String, required: true },
});

const { project, loadProject } = useProject();

onMounted(() => {
  loadProject(props.id);
});
</script>
