import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./style.css";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import Vue3lottie from "vue3-lottie";
import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "./screens/HomePage.vue";
import ProfilePage from "./screens/ProfilePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/profile", component: ProfilePage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(Vue3lottie);
app.use(router);
app.mount("#app");
