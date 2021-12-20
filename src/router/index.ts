import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Chapter from "@/pages/Chapter.vue";
import CompareChapters from "@/pages/CompareChapters.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/chapter/:chapterSearch", name: "chapter", component: Chapter },
  { path: "/chapter-compare", component: CompareChapters },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
