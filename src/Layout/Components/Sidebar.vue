<template>
  <div
    class="app-sidebar app-sidebar--dark"
    :class="{ 'sidebar-disable': initPage }"
  >
    <!-- <div class="app-sidebar--header bg-white">
      <div class="nav-logo w-100 text-center">
        <router-link tag="a" class="d-block" active-class="active" to="/" exact>
          <b-img
            center
            fluid-grow
            :src="require('@/assets/izidok.png')"
            alt="izidok"
            :style="[
              !sidebarCollapsed
                ? { width: '50% !important' }
                : { width: '69% !important' }
            ]"
          />
        </router-link>
      </div>
      <button
        class="toggle-sidebar rounded-circle btn btn-sm bg-white shadow-sm-dark text-primary"
        v-b-tooltip.right
        title="Expand Sidebar"
        v-bind:class="{ 'is-active': sidebarCollapsed }"
        type="button"
        v-on:click="toggleSidebar"
      >
        <font-awesome-icon icon="arrows-alt-h" />
      </button>
    </div> -->
    <div class="sidebar-navigation">
      <div class="nav-logo w-100 text-center my-4">
        <router-link
          tag="a"
          class="d-block w-auto"
          active-class="active"
          to="/"
          exact
        >
          <b-img
            center
            fluid-grow
            :src="require('@/assets/izidok.png')"
            alt="izidok"
            class="py-0 px-4"
          />
        </router-link>
      </div>
      <VuePerfectScrollbar class="app-sidebar--content">
        <sidebar-menu
          :disableHover="initPage"
          showOneChild
          :menu="dataMenu()"
        />
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SidebarMenu } from "vue-sidebar-menu";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowsAltH,
  faHome,
  faBriefcaseMedical,
  faUser,
  faSuitcase,
  faPlusSquare,
  faCalculator,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faArrowsAltH,
  faHome,
  faBriefcaseMedical,
  faUser,
  faSuitcase,
  faPlusSquare,
  faCalculator,
  faChartBar
);

export default {
  components: {
    SidebarMenu,
    VuePerfectScrollbar: () => import("vue-perfect-scrollbar")
  },
  props: {
    sidebarbg: String
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    ...mapGetters({
      initPage: "sidebar/initPage"
    }),
    sidebarCollapsed: {
      get() {
        return this.$store.state.sidebar.sidebarCollapsed;
      },
      set(value) {
        this.$store.commit("sidebar/SET_SIDEBAR_COLLAPSED", value);
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    },
    dataMenu() {
      const manajemenKlinikChild = () => {
        const signedInAs = "dokter praktek";
        const tmp = [
          {
            // href: "/layouts/light-sidebar",
            title: "Manajemen Dokter",
            type: "klinik"
          },
          // {
          //   // href: "/layouts/light-sidebar",
          //   title: "Manajemen Operator",
          //   type: ["klinik", "dokter praktek"]
          // },
          {
            // href: "/layouts/light-sidebar",
            title: "Manajemen Tarif",
            href: "/tarif",
            type: ["klinik", "dokter praktek"]
          }
        ];
        const v = tmp.filter(item => item.type.includes(signedInAs));
        return v;
      };
      const tmp = [
        {
          title: "Dashboard",
          href: "/",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "home"
            }
          }
        },
        {
          title: "Rawat Jalan",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "briefcase-medical"
            }
          },
          child: [
            {
              href: "/rawat-jalan/registrasi",
              title: "Registrasi"
            },
            {
              href: "/rawat-jalan/antrean",
              title: "Antrean"
            },
            {
              href: "/rekam-medis",
              title: "Rekam Medis"
            }
            // {
            //   // href: "/layouts/gradient-sidebar-1",
            //   title: "Resep"
            // },
            // {
            //   // href: "/layouts/gradient-sidebar-2",
            //   title: "Rujukan Lab"
            // }
          ]
        },
        {
          title: "Manajemen Pasien",
          href: "/pasien",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "user"
            }
          }
        },
        {
          title: "Manajemen Klinik",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "suitcase"
            }
          },
          child: manajemenKlinikChild()
        },
        // {
        //   title: "Halaman Farmasi",
        //   icon: {
        //     element: "font-awesome-icon",
        //     attributes: {
        //       icon: "plus-square"
        //     }
        //   }
        // },
        {
          title: "Halaman Pembayaran",
          href: "/pembayaran",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "calculator"
            }
          }
        }
        // {
        //   title: "Laporan",
        //   icon: {
        //     element: "font-awesome-icon",
        //     attributes: {
        //       icon: "chart-bar"
        //     }
        //   }
        // }
      ];

      return tmp.map(item => ({
        ...item,
        disabled: this.initPage
      }));
    }
  }
};
</script>
