import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { clerkPlugin } from "vue-clerk";
import { createPinia } from "pinia";
import App from "./App.vue";
import AssignmentAddView from "./views/AssignmentAddView.vue";
import AssignmentDetailsView from "./views/AssignmentDetailsView.vue";
import AssignmentsView from "./views/AssignmentsView.vue";
import CurriculumAddView from "./views/CurriculumAddView.vue";
import CurriculumView from "./views/CurriculumView.vue";
import HomeView from "./views/HomeView.vue";
import MemberHomeView from "./views/MemberHomeView.vue";
import MemberLayout from "./components/MemberLayout.vue";
import QuizzesView from "./views/QuizzesView.vue";
import SignInView from "./views/SignInView.vue";
import { OhVueIcon } from "./utils/icons";
import "./style.css";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/signin", name: "signin", component: SignInView },
  {
    path: "/main",
    component: MemberLayout,
    children: [
      { path: "", name: "mainhome", component: MemberHomeView },
      { path: "curriculum", name: "curriculum", component: CurriculumView },
      { path: "curriculum/new", name: "addCurriculum", component: CurriculumAddView },
      { path: "assignments", name: "assignments", component: AssignmentsView },
      { path: "assignments/new", name: "addAssignment", component: AssignmentAddView },
      { path: "assignments/:id", name: "assignmentDetails", component: AssignmentDetailsView },
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
