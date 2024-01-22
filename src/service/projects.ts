import axios from "axios";
import { formatDate } from "@/utils";

export function loadProjects(filters: Record<string, any>) {
  if (filters.search) {
    return axios.get("/api/projects/search", {
      params: { searchQuery: filters.search },
    });
  }
  return axios.get("/api/projects", {
    params: { updatedSince: formatDate(filters.updatedSince) },
  });
}

export function loadProject(id: string) {
  return axios.get(`/api/projects/${id}`);
}
