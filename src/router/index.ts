import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: import("../pages/NotFound.vue"),
  },
  {
    path: "/",
    name: "home",
    component: import("../pages/Home.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: import("../pages/ProjectsListPage.vue"),
  },
  {
    path: "/projects/:id",
    name: "project-details",
    component: import("../pages/ProjectDetailsPage.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
