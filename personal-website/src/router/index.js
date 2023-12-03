//vue imports
import Vue from "vue";
import VueRouter from "vue-router";

//components
import Home from "../views/HomeView.vue";
import NotFound from "../views/404NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home - Braveium Studios",
      navbar: true,
      footer: true
    }
  },
  {
    path: "*",
    name: "404 Not Found",
    component: NotFound,
    meta: {
      title: "404 Not Found - Braveium Studios",
      navbar: true,
      footer: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title =
    toRoute.meta && toRoute.meta.title
      ? toRoute.meta.title
      : "Loading... - Braveium";

  next();
});
export default router;
