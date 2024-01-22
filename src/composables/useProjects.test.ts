import { useProjects } from "@/composables/useProjects";
import { vi } from "vitest";
import { loadProjects } from "@/service";

vi.mock("@/service", () => ({
  loadProjects: vi.fn(() =>
    Promise.resolve({
      data: {
        projects: [
          {
            id: 1,
            title: "Project 1",
            description: "Description 1",
          },
          {
            id: 2,
            title: "Project 2",
            description: "Description 2",
          },
        ],
      },
    })
  ),
}));

describe("useProjects", () => {
  it("loads projects on initialization", async () => {
    const { loading, projects, loadAllProjects } = useProjects();

    await loadAllProjects();

    expect(loading.value).toBe(false);
    expect(projects.value).toEqual([
      {
        id: 1,
        title: "Project 1",
        description: "Description 1",
      },
      {
        id: 2,
        title: "Project 2",
        description: "Description 2",
      },
    ]);
  });

  it("updates filters and loads data", async () => {
    const { filters, onFiltersChange } = useProjects();

    onFiltersChange({ search: "example" });

    expect(filters.value).toEqual({
      ...filters.value,
      search: "example",
    });

    expect(loadProjects).toHaveBeenCalledWith({
      ...filters.value,
      search: "example",
    });
  });
});
