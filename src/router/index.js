import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: { layout: "apps" }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
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
  },
  {
    path: "/forgot-password/:email?",
    name: "forgot-password",
    component: () => import("../views/ForgotPassword.vue"),
    meta: { layout: "examples" },
    props: true
  },
  {
    path: "/verification",
    component: () => import("../views/Verification.vue"),
    children: [
      {
        path: "",
        name: "verification-process",
        component: () =>
          import("../views/Verification/VerificationProcess.vue"),
        meta: { layout: "examples" }
      },
      {
        path: "success",
        name: "verification-success",
        component: () =>
          import("../views/Verification/VerificationSuccess.vue"),
        meta: { layout: "examples" }
      }
    ]
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
    false &&
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
