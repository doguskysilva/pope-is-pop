import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Chapter from "@/pages/Chapter.vue";
import CompareChapters from "@/pages/CompareChapters.vue";
import { useStore } from "@/store";

const routes = [
  { path: "/", name: "books", component: Home, meta: { requiresBooks: true } },
  {
    path: "/chapter/:chapterSearch",
    name: "chapter",
    component: Chapter,
    meta: { requiresBooks: true },
  },
  {
    path: "/chapter-compare",
    name: "compare-chapters",
    component: CompareChapters,
    meta: { requiresBooks: true },
  },
  { path: "/about", name: "about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const store = useStore()

router.beforeEach((to, from) => {
  if (to.meta.requiresBooks) {
    console.log("Fetching books")
    store.dispatch("fetchBooks");
  }
});

export default router;
