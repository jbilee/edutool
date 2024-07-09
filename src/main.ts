import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { clerkPlugin } from "vue-clerk";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiChevronCompactDown, BiChevronCompactUp, BiPersonCheckFill, BiPencilSquare } from "oh-vue-icons/icons";
import App from "./App.vue";
import AssignmentsView from "./views/AssignmentsView.vue";
import CurriculumView from "./views/CurriculumView.vue";
import HomeView from "./views/HomeView.vue";
import MemberHomeView from "./views/MemberHomeView.vue";
import MemberLayout from "./components/MemberLayout.vue";
import QuizzesView from "./views/QuizzesView.vue";
import SignInView from "./views/SignInView.vue";
import "./style.css";

addIcons(BiPersonCheckFill);
addIcons(BiChevronCompactDown);
addIcons(BiChevronCompactUp);
addIcons(BiPencilSquare);

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/signin", name: "signin", component: SignInView },
  {
    path: "/main",
    component: MemberLayout,
    children: [
      { path: "", name: "mainhome", component: MemberHomeView },
      { path: "curriculum", name: "curriculum", component: CurriculumView },
      { path: "assignments", name: "assignments", component: AssignmentsView },
      { path: "quizzes", name: "quizzes", component: QuizzesView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(clerkPlugin, {
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
});
app.use(pinia);
app.component("v-icon", OhVueIcon);
app.mount("#app");
