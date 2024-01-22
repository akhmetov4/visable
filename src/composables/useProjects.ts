import { loadProjects } from "@/service";
import { ProjectShort } from "@/types";
import { ref } from "vue";

const loading = ref(false);
const projects = ref<ProjectShort[]>([]);
const filters = ref({
  updatedSince: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), // last 7 days
  search: "",
});

export function useProjects() {
  const loadAllProjects = async () => {
    loading.value = true;
    try {
      const resp = await loadProjects(filters.value);
      projects.value = resp.data.projects;
    } catch (error) {
      console.log(error);
    }
    loading.value = false;
  };

  const onFiltersChange = (data: Record<string, any>) => {
    filters.value = {
      ...filters.value,
      ...data,
    };
    loadAllProjects();
  };

  return {
    projects,
    loading,
    filters,
    loadAllProjects,
    onFiltersChange,
  };
}
