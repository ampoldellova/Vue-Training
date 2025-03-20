import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../screens/HomePage.vue";
import ProfilePage from "../screens/ProfilePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/profile", name: "profile", component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
