import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: import("../pages/Home.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: import("../pages/ProjectsListPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
