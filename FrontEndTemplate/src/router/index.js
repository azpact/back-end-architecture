import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const mode = "hash";
const routes = [
  {
    path: "/",
    name: "Index",
    component: () =>
      import( "@v/TheIndex.vue")
  },
  {
    path:'*',
    redirect:'/'
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import( "@c/app/test.vue")
  },
  {
    path: "/TheEcharts",
    name: "TheEcharts",
    component: () =>
      import( "@v/TheEcharts.vue")
  },
  {
    path: "/movie",
    name: "movie",
    component: () =>
      import( "@v/movie.vue")
  },
  {
    path: "/TheArticle",
    name: "TheArticle",
    component: () =>
      import( "@v/TheArticle.vue")
  },
  {
    path: "/TheLogin",
    name: "TheLogin",
    component: () =>
      import( "@v/TheLogin.vue")
  },
  {
    path: "/TheWs",
    name: "TheWs",
    component: () =>
      import( "@v/TheWs.vue")
  },
  {
    path: "/The403Page",
    name: "The403Page",
    component: () =>
      import( "@v/The403Page.vue")
  },
];
const router = new VueRouter({
  mode,
  routes
});

export default router;
