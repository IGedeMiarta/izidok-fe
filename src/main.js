import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.component("default-layout", () =>
  import("./Layout/Wrappers/baseLayout.vue")
);
Vue.component("pages-layout", () =>
  import("./Layout/Wrappers/pagesLayout.vue")
);
Vue.component("apps-layout", () => import("./Layout/Wrappers/appLayout.vue"));
Vue.component("examples-layout", () =>
  import("./Layout/Wrappers/layoutsExamples.vue")
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
