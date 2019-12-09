import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/rekam-medis",
    name: "rekam-medis",
    component: () => import("../views/RekamMedis.vue")
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
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
    path: "/forgot-password/:token?",
    name: "forgot-password",
    component: () => import("../views/ForgotPassword.vue"),
    meta: { layout: "examples" },
    props: true
  },
  {
    path: "/input-tarif",
    name: "input-tarif",
    component: () => import("../views/InputTarif.vue"),
    props: true
  },
  {
    path: "/input-data-operator",
    name: "input-data-operator",
    component: () => import("../views/InputDataOperator.vue")
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
        meta: { layout: "examples" },
        props: true
      },
      {
        path: "operator/:token",
        name: "verification-operator",
        component: () =>
          import("../views/Verification/VerificationOperator.vue"),
        meta: { layout: "examples" },
        props: true
      },
      {
        path: ":state",
        name: "verification-result",
        component: () => import("../views/Verification/VerificationResult.vue"),
        meta: { layout: "examples" },
        props: true
      }
    ]
  },
  {
    path: "/rawat-jalan",
    component: () => import("../views/RawatJalan.vue"),
    children: [
      {
        path: "antrean",
        name: "antrean-rawat-jalan",
        component: () => import("../views/RawatJalan/Antrean.vue")
      },
      {
        path: "registrasi",
        name: "registrasi-rawat-jalan",
        component: () => import("../views/RawatJalan/Registrasi.vue")
      }
    ]
  },
  {
    path: "/pasien",
    name: "pasien",
    component: () => import("../views/Pasien.vue"),
    children: [
      {
        path: "",
        name: "pasien-list",
        component: () => import("../views/Pasien/List.vue")
      },
      {
        path: "tambah",
        name: "pasien-tambah",
        component: () => import("../views/Pasien/Tambah.vue")
      },
      {
        path: "edit/:id?",
        name: "pasien-edit",
        component: () => import("../views/Pasien/Edit.vue"),
        props: true
      },
      {
        path: "detail/:id?",
        name: "pasien-detail",
        component: () => import("../views/Pasien/Detail.vue"),
        props: true
      }
    ]
  },
  {
    path: "/pembayaran",
    name: "pembayaran",
    component: () => import("../views/Pembayaran.vue"),
    children: [
      {
        path: "tambah",
        name: "pembayaran-tambah",
        component: () => import("../views/Pembayaran/Tambah.vue")
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
