<template>
  <v-row justify="space-between" align="center" class="mb-1">
    <v-col md="3">
      <v-text-field
        density="compact"
        :model-value="filters.search"
        prepend-inner-icon="mdi-magnify"
        @update:model-value="onSearch"
        label="Search"
        variant="outlined"
        hide-details
      ></v-text-field>
    </v-col>
    <v-col md="3">
      <v-row align="center">
        <p class="text-right">Filter by:</p>
        <v-col>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
          >
            <template v-slot:activator="{ props }">
              <v-text-field
                hide-details
                density="compact"
                variant="outlined"
                :model-value="formatDate(filters.updatedSince)"
                label="Updated since"
                readonly
                v-bind="props"
              ></v-text-field>
            </template>
            <v-date-picker
              @update:modelValue="onUpdatedSinceChange"
              :model-value="filters.updatedSince"
            />
          </v-menu>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { formatDate, debounce } from "@/utils";
import { useProjects } from "@/composables/useProjects";

const { filters, onFiltersChange } = useProjects();
const menu = ref(false);

const onUpdatedSinceChange = (value: Date) => {
  menu.value = false;
  onFiltersChange({ updatedSince: value });
};
const onSearch = debounce((value: string) => {
  onFiltersChange({ search: value });
});
</script>
