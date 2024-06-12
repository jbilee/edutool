import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { clerkPlugin } from "vue-clerk";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiPersonCheckFill } from "oh-vue-icons/icons";
import App from "./App.vue";
import AssignmentsView from "./views/AssignmentsView.vue";
import HomeView from "./views/HomeView.vue";
import MemberHomeView from "./views/MemberHomeView.vue";
import MemberLayout from "./components/MemberLayout.vue";
import SignInView from "./views/SignInView.vue";
import "./style.css";

addIcons(BiPersonCheckFill);

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/signin", name: "signin", component: SignInView },
  {
    path: "/main",
    component: MemberLayout,
    children: [
      { path: "", name: "mainhome", component: MemberHomeView },
      { path: "assignments", name: "assignments", component: AssignmentsView },
    ],
  },
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
app.component("v-icon", OhVueIcon);
app.mount("#app");
