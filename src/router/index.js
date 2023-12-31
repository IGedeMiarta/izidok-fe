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
    path: "/rekam-medis/riwayat/:pasien_id",
    name: "riwayat-rekam-medis",
    props: true,
    component: () => import("../views/RiwayatRekamMedis.vue")
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
    path: "/forgot_password/invalid",
    name: "forgot-password-failed",
    component: () => import("../views/ForgotPassword/ForgotExpired.vue"),
    meta: { layout: "examples" },
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
    path: "/pilih-paket",
    name: "pilih-paket",
    component: () => import("../views/Subscription/PilihPaket.vue"),
  },
  {
    path: "/struk-subskripsi/:bill_id",
    name: "struk-subskripsi",
    component: () => import("../views/Subscription/StrukSubscription.vue"),
  },
  {
    path: "/init",
    name: 'initialization',
    component: () => import("../views/Initialization.vue"),
    children: [
      {
        path: "",
        name: "input-spesialisasi",
        component: () => import("../views/Initialization/InputSpesialisasi.vue"),
        props: true
      },
      {
        path: "input-asisten-dokter",
        name: "input-asisten-dokter",
        component: () =>
          import("../views/Initialization/InputDataAsistenDokter.vue"),
        props: true
      },
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
        path: "login",
        name: "verification-login",
        component: () =>
          import("../views/Verification/VerificationLogin.vue"),
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
        path: "edit/:idPasien",
        name: "pasien-edit",
        component: () => import("../views/Pasien/Edit.vue")
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
        path: "struk/:pembayaran_id",
        name: "pembayaran-struk",
        component: () => import("../views/Pembayaran/StrukWrapper.vue")
      }
    ]
  },
  {
    path: "/asisten-dokter",
    name: "operator",
    component: () => import("../views/Operator.vue"),
    children: [
      {
        path: "",
        name: "operator-list",
        component: () => import("../views/Operator/List.vue")
      },
      {
        path: "/tambah",
        name: "operator-tambah",
        component: () => import("../views/Operator/Tambah.vue")
      },
      {
        path: "/asisten-dokter/edit/:operator_id?",
        name: "operator-edit",
        component: () => import("../views/Operator/Edit.vue"),
      }
    ]
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile/Profile.vue")
  },
  {
    path: "/subskripsi/pilih-paket",
    name: "subskripsi-pilih-paket",
    component: () => import("../views/Billing/BillingPilihPaket.vue")
  },
  {
    path: "/subskripsi",
    name: "subskripsi",
    component: () => import("../views/Billing/List.vue")
  },
  {
    path: "/subskripsi/detail/:id",
    name: "subskripsi-detail",
    component: () => import("../views/Subscription/DetailPaket.vue")
  },
  {
    path: "/subskripsi/addons",
    name: "subskripsi-addons",
    component: () => import("../views/Subscription/DetailAddons.vue")
  },
  {
    path: "/subskripsi/payment/:bill_id",
    name: "subskripsi-bayar",
    component: () => import("../views/Subscription/CaraPembayaran.vue")
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
  },
  {
    path: "/laporan-pendapatan",
    name: "laporan-pendapatan",
    component: () => import("../views/LaporanPendapatanPage.vue")
  },
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
    "verification-login",
    "forgot-password-failed",
    "sukses-page"
  ].includes(name);

  if (!isAuthenticated && !isRouteAuth) next("/login");
  else if (isAuthenticated && isRouteAuth) next("/");
  else next();
});

export default router;
