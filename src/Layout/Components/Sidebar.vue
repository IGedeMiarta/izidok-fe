<template>
  <div class="app-sidebar app-sidebar--dark" :class="{ 'sidebar-disable': initPage }">
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
        <router-link tag="a" class="d-block w-auto" active-class="active" to="/" exact>
          <b-img center fluid-grow :src="require('@/assets/izidok.png')" alt="izidok" class="py-0 px-4" />
        </router-link>
      </div>
      <VuePerfectScrollbar class="scroll-area">
        <sidebar-menu :disableHover="initPage" showOneChild :menu="dataMenu()" />
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  import {
    SidebarMenu
  } from "vue-sidebar-menu";
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  import {
    library
  } from "@fortawesome/fontawesome-svg-core";
  import {
    faHome,
    faUser,
    faUsers,
    faFileAlt,
    faFileMedical,
    faCog,
    faArchive,
    faThLarge,
    faClone,
    faMoneyBill
  } from "@fortawesome/free-solid-svg-icons";

  import {
    FontAwesomeIcon
  } from "@fortawesome/vue-fontawesome";

  library.add(
    faHome,
    faUser,
    faUsers,
    faFileAlt,
    faFileMedical,
    faCog,
    faArchive,
    faClone,
    faThLarge,
    faMoneyBill
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
        initPage: "sidebar/initPage",
        getRolesName: 'getRolesName'
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
      filterMenuByRole(menus) {
        let res = []
        menus.forEach(menu => {
          if(menu.child) {
            menu.child = this.filterMenuByRole(menu.child)
          }

          if(menu.type) {
            let valid = false
            this.getRolesName.forEach(role => {
              if(menu.type.indexOf(role) != -1) valid = true
            })

            if(valid) res.push(menu)
          }
        })
        return res
      },
      dataMenu() {
        const menus = [{
            title: "Dashboard",
            href: "/",
            type: ["dokter_praktek", "operator"],
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "home"
              }
            }
          },
          {
            title: "Registrasi Antrean",
            href: "/rawat-jalan/registrasi",
            type: ["dokter_praktek", "operator"],
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "file-alt"
              }
            }
          },
          {
            title: "Antrean",
            href: "/rawat-jalan/antrean",
            type: ["dokter_praktek", "operator"],
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "clone"
              }
            }
          },
          {
            title: "Daftar Pasien",
            href: "/pasien",
            type: ["dokter_praktek", "operator"],
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "user"
              }
            }
          },
          {
            title: "Rekam Medis",
            href: "/rekam-medis",
            type: ["dokter_praktek", "operator"],
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "file-medical"
              }
            }
          },
          {
            title: "Manajemen Pengguna",
            type: ["dokter_praktek", "operator"],
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "th-large"
              }
            },
            child: [
              {
                title: "Manajemen Asisten Dokter",
                href: "/asisten-dokter",
                type: ["dokter_praktek", "operator"]
              },
              {
                title: "Manajemen Tarif",
                href: "/tarif",
                type: ["dokter_praktek", "operator"]
              }
            ]
          },
          {
            title: "Pembayaran",
            href: "/pembayaran",
            type: ["dokter_praktek", "operator"],
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "archive"
              }
            },
          },
          {
            title: "Subskripsi",
            href: "/subskripsi",
            type: ["dokter_praktek", "operator"],
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "money-bill"
              }
            },
          },
          {
            title: "Account Setting",
            type: ["dokter_praktek", "operator"],
            icon: {
              element: "font-awesome-icon",
              attributes: {
                icon: "cog"
              }
            },
            child: [
              {
                title: "Manajemen Dokter",
                type: ["dokter_praktek", "operator"]
              },
              {
                title: "Profil Dokter",
                href: "/profile",
                type: ["dokter_praktek", "operator"]
              }
            ]
          },
        ];

        return this.filterMenuByRole(menus).map(item => ({
          ...item,
          disabled: this.initPage
        }));
      }
    }
  };
</script>