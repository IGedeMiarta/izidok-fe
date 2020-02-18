import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/rekam-medis",
    component: () => import("../views/RekamMedis/List.vue")
  },
  {
    path: "/rekam-medis/:transklinik_id/:pasien_id",
    name: "rekam-medis-pasien",
    component: () => import("../views/RekamMedis.vue")
  },
  // {
  //   path: ":transklinik_id/:pasien_id",
  //   name: "rekam-medis",
  //   component: () => import("../views/RekamMedis.vue")
  // },
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
    path: "/sukses",
    name: "sukses-page",
    component: () => import("../views/HomePage.vue"),
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
    path: "/init",
    component: () => import("../views/Initialization.vue"),
    children: [
      {
        path: "",
        name: "input-spesialisasi",
        component: () => import("../views/Initialization/InputSpesialisasi.vue")
      },
      {
        path: "input-asisten-dokter",
        name: "input-asisten-dokter",
        component: () =>
          import("../views/Initialization/InputDataAsistenDokter.vue")
      }
    ]
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
        path: ":bayar_id",
        // path: "tambah",
        name: "pembayaran-tambah",
        component: () => import("../views/Pembayaran/Tambah.vue")
      },
      {
        path: "",
        name: "pembayaran-list",
        component: () => import("../views/Pembayaran/List.vue")
      },
      {
        path: "struk",
        name: "pembayaran-struk",
        component: () => import("../views/Pembayaran/StrukWrapper.vue")
      }
    ]
  },
  {
    path: "/operator",
    name: "operator",
    component: () => import("../views/Operator.vue"),
    children: [
      {
        path: "/operator/list",
        name: "operator-list",
        component: () => import("../views/Operator/List.vue")
      },
      {
        path: "/operator/tambah",
        name: "operator-tambah",
        component: () => import("../views/Operator/Tambah.vue")
      }
    ]
  },
  {
    path: "/riwayat-rekam-medis",
    name: "riwayat-rekam-medis",
    component: () => import("../views/RiwayatRekamMedis.vue")
  },
  {
    path: "/tarif",
    name: "tarif",
    component: () => import("../views/Tarif.vue"),
    children: [
      {
        path: "/tarif",
        name: "tarif-list",
        component: () => import("../views/Tarif/List.vue")
      },
      {
        path: "/tarif/tambah",
        name: "tarif-tambah",
        component: () => import("../views/Tarif/Tambah.vue")
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
  const isAuthenticated = store.state.BEARER_TOKEN !== null;
  const isRouteAuth = [
    "login-page",
    "register-page",
    "forgot-password",
    "verification-process",
    "verification-operator",
    "verification-result",
    "sukses-page"
  ].includes(name);

  if (!isAuthenticated && !isRouteAuth) next("/login");
  else if (isAuthenticated && isRouteAuth) next("/");
  else next();
});

export default router;
