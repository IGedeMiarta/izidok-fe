import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login-page",
    component: () => import("../views/Login.vue"),
    meta: { layout: "examples" }
  },
  {
    path: "/register",
    name: "register-page",
    component: () => import("../views/Register.vue"),
    meta: { layout: "examples" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
  routes
});

router.beforeEach((to, from, next) => {
  const { name } = to;
  const tmp = name && name.split("-");
  const isAuthenticated = false;
  if (
    !isAuthenticated &&
    // false &&
    !["login", "register"].includes(
      tmp && tmp.length && tmp.length > 1 && tmp[0]
    )
  ) {
    next({
      path: "/login",
      replace: true,
      meta: {
        layout: "examples"
      }
    });
  } else {
    next();
  }
});

export default router;
