import { ref } from "vue";
import { loadProject as loadProjectDetails } from "@/service";
import { Project } from "@/types";

export function useProject() {
  const loading = ref(false);
  const project = ref<Project | null>(null);

  const loadProject = async (id: string) => {
    loading.value = true;
    try {
      const resp = await loadProjectDetails(id);
      project.value = resp.data.project;
    } catch (error) {
      alert(error?.message);
    }
    loading.value = false;
  };

  return {
    project,
    loadProject,
  };
}
