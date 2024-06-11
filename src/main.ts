import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { clerkPlugin } from "vue-clerk";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import SignInView from "./views/SignInView.vue";
import "./style.css";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/signin", name: "signin", component: SignInView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(clerkPlugin, {
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
});
app.mount("#app");
