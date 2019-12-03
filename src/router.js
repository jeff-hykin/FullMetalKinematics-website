/* eslint-disable */
import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/projects/project1",
      name: "project1",
      component: () => import(/* webpackChunkName: "projects" */ "./views/Project1/Main.vue"),
    },
    {
      path: "/projects/project2",
      name: "project2",
      component: () => import(/* webpackChunkName: "projects" */ "./views/Project2/Main.vue"),
    },
    {
      path: "/projects/project3",
      name: "project3",
      component: () => import(/* webpackChunkName: "project3" */ "./views/Project3/Main.vue"),
    },
    {
      path: "/projects/project3/app",
      name: "project3-app",
      component: () => import(/* webpackChunkName: "project3" */ "./views/Project3/AppWrapper.vue"),
    },
    {
      path: "/projects/project4",
      name: "project4",
      component: () => import(/* webpackChunkName: "project4" */ "./views/Project4/Main.vue"),
    },
    {
      path: "/projects/project5",
      name: "project5",
      component: () => import(/* webpackChunkName: "project5" */ "./views/Project5/Main.vue"),
    },
  ]
})
