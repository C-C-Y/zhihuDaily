import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/articles/:id",
      name: "articles",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/articles/Articles.vue")
    },
    {
      path: "/articles/:id/comment",
      name: "comment",
      component: () => import("./views/comment/Comment.vue")
    },
    {
      path: "/collected",
      name: "collected",
      component: () => import("./views/collected/Collected.vue")
    }
  ]
});
