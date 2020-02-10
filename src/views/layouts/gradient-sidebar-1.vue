<template>
  <div class="app-wrapper" v-bind:class="{'sidebar-collapsed': sidebarCollapsed, 'sidebar-open-mobile': sidebarCollapsedMobile}">
    <Sidebar :sidebarbg="sidebarcolor"/>
    <div class="sidebar-mobile-overlay" v-on:click="toggleSidebarMobile" v-show="sidebarCollapsedMobile"></div>
    <div class="app-main">
      <transition name="fade" mode="out-in" appear>
        <Header/>
      </transition>
      <div class="app-content">
        <div class="app-content--inner">
          <div class="page-title page-title--alt page-title--shadow">
            <div class="px-3">
              <div class="row">
                <div class="col-xl-7 d-block d-xl-flex align-items-center">
                  <div class="pr-0 pr-xl-4 mb-4 mb-xl-0">
                    <div class="d-70 mx-auto rounded-circle font-size-xxl bg-midnight-bloom text-center">
                      <font-awesome-icon icon="business-time" class="text-white"/>
                    </div>
                  </div>
                  <div>
                    <h5 class="display-4 mt-1 mb-2 font-weight-bold">Sidebar with gradient</h5>
                    <p class="text-black-50 mb-0">This sidebar example page features one of the included background color gradients that come packed with this admin dashboard template.</p>
                  </div>
                </div>
                <div class="col-xl-5 d-flex align-items-center justify-content-start mt-4 mt-xl-0 justify-content-xl-end">
                  <div class="mx-auto mx-xl-0">
                    <b-button variant="success">Generate reports</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-7">
              <div class="card card-box mb-5">
                <div class="card-header">
                  <div class="font-size-lg d-block text-truncate">
                    <span class="text-black-50 pr-2">#32</span> Global competition
                  </div>
                  <div class="ml-auto d-flex align-items-center align-content-center">
                    <div class="avatar-wrapper-overlap">
                      <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                        <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                      </div>
                      <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                        <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-first font-size-lg ml-3 d-40 p-0 rounded-circle" v-b-tooltip title="View all participants">
                      <font-awesome-icon icon="lightbulb"/>
                    </a>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-6 col-md-3">
                      <div class="text-center">
                        <span class="text-black-50 d-block">Users</span>
                        <b class="font-size-xxl">2,345</b>
                      </div>
                    </div>
                    <div class="col-6 col-md-3">
                      <div class="text-center">
                        <span class="text-black-50 d-block">Revenue</span>
                        <b class="font-size-xxl">$9,693</b>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 align-box-row">
                      <div class="w-100 mt-3 mt-md-0">
                        <div class="mb-1">
                          <span class="text-black-50 pr-1">Progress:</span>
                          <span class="text-danger">-12</span>
                        </div>
                        <div class="progress-bar-sm progress-bar-animated-alt progress">
                          <div class="progress-bar bg-success" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card-box mb-5">
                <div class="card-header">
                  <div class="font-size-lg d-block text-truncate">
                    <span class="text-black-50 pr-2">#33</span> International Event
                  </div>
                  <div class="ml-auto d-flex align-items-center align-content-center">
                    <div class="avatar-wrapper-overlap">
                      <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                        <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                      </div>
                      <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                        <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                      </div>
                      <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                        <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-first font-size-lg ml-3 d-40 p-0 rounded-circle" v-b-tooltip title="View all participants">
                      <font-awesome-icon icon="lightbulb"/>
                    </a>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-6 col-md-3">
                      <div class="text-center">
                        <span class="text-black-50 d-block">Users</span>
                        <b class="font-size-xxl">2,345</b>
                      </div>
                    </div>
                    <div class="col-6 col-md-3">
                      <div class="text-center">
                        <span class="text-black-50 d-block">Revenue</span>
                        <b class="font-size-xxl">$9,693</b>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 align-box-row">
                      <div class="w-100 mt-3 mt-md-0">
                        <div class="mb-1">
                          <span class="text-black-50 pr-1">Progress:</span>
                          <span class="text-danger">-12</span>
                        </div>
                        <div class="progress-bar-sm progress-bar-animated-alt progress">
                          <div class="progress-bar bg-success" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card-box mb-5">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item p-0">
                    <div class="card-header bg-light">
                      <div class="font-size-lg d-block text-truncate">
                        <span class="text-black-50 pr-2">#34</span> Hackathon
                      </div>
                      <div class="ml-auto d-flex align-items-center align-content-center">
                        <div class="avatar-wrapper-overlap">
                          <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                          </div>
                          <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-first font-size-lg ml-3 d-40 p-0 rounded-circle" v-b-tooltip title="View all participants">
                          <font-awesome-icon icon="lightbulb"/>
                        </a>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6 col-md-3">
                          <div class="text-center">
                            <span class="text-black-50 d-block">Users</span>
                            <b class="font-size-xxl">2,345</b>
                          </div>
                        </div>
                        <div class="col-6 col-md-3">
                          <div class="text-center">
                            <span class="text-black-50 d-block">Revenue</span>
                            <b class="font-size-xxl">$9,693</b>
                          </div>
                        </div>
                        <div class="col-12 col-md-6 align-box-row">
                          <div class="w-100 mt-3 mt-md-0">
                            <div class="mb-1">
                              <span class="text-black-50 pr-1">Progress:</span>
                              <span class="text-danger">-12</span>
                            </div>
                            <div class="progress-bar-sm progress-bar-animated-alt progress">
                              <div class="progress-bar bg-success" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item p-0">
                    <div class="card-header bg-light">
                      <div class="font-size-lg d-block text-truncate">
                        <span class="text-black-50 pr-2">#33</span> Gaming center
                      </div>
                      <div class="ml-auto d-flex align-items-center align-content-center">
                        <div class="avatar-wrapper-overlap">
                          <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-first font-size-lg ml-3 d-40 p-0 rounded-circle" v-b-tooltip title="View all participants">
                          <font-awesome-icon icon="lightbulb"/>
                        </a>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-6 col-md-3">
                          <div class="text-center">
                            <span class="text-black-50 d-block">Users</span>
                            <b class="font-size-xxl">1,466</b>
                          </div>
                        </div>
                        <div class="col-6 col-md-3">
                          <div class="text-center">
                            <span class="text-black-50 d-block">Revenue</span>
                            <b class="font-size-xxl text-danger">$6,465</b>
                          </div>
                        </div>
                        <div class="col-12 col-md-6 align-box-row">
                          <div class="w-100 mt-3 mt-md-0">
                            <div class="mb-1">
                              <span class="text-black-50 pr-1">Progress:</span>
                              <span class="text-warning">-5</span>
                            </div>
                            <div class="progress-bar-sm progress-bar-animated-alt progress">
                              <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-5">
              <div class="card card-box mb-5">
                <div class="px-4 px-xl-5 pb-1">
                  <div class="card-header d-block">
                    <span class="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold font-size-lg">Inventory</span>
                  </div>
                  <div class="card-body p-0">
                    <div class="grid-menu grid-menu-2col">
                      <div class="no-gutters row">
                        <div class="col-6 p-3">
                          <div class="text-center">
                            <font-awesome-icon icon="lemon" class="font-size-xxl text-warning my-3"/>
                            <span class="text-black-50 d-block">Users</span>
                            <b class="font-size-xxl">2,345</b>
                          </div>
                        </div>
                        <div class="col-6 p-3">
                          <div class="text-center">
                            <font-awesome-icon icon="user" class="font-size-xxl text-success my-3"/>
                            <span class="text-black-50 d-block">Revenue</span>
                            <b class="font-size-xxl">$9,693</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-header border-0 d-block">
                    <span class="text-uppercase pt-4 pb-2 text-black d-block text-center font-weight-bold font-size-lg">Activity</span>
                  </div>
                  <div>
                    <div class="align-box-row">
                      <div class="mr-4">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                          <div class="dot-badge"></div>
                          <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                        </a>
                      </div>
                      <div class="flex-grow-1">
                        <div class="progress">
                          <div class="progress-bar bg-success" role="progressbar" style="width: 43%;" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">43%
                          </div>
                        </div>
                      </div>
                      <div class="line-height-sm text-center ml-4">
                        <b class="font-size-lg text-success"><small class="text-black-50">$</small> 1,754</b>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="align-box-row">
                      <div class="mr-4">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                          <div class="dot-badge"></div>
                          <div class="avatar-icon"><img src="@/assets/img/avatars/avatar5.jpg" alt=""></div>
                        </a>
                      </div>
                      <div class="flex-grow-1">
                        <div class="progress">
                          <div class="progress-bar bg-info" role="progressbar" style="width: 61%;" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100">61%
                          </div>
                        </div>
                      </div>
                      <div class="line-height-sm text-center ml-4">
                        <b class="font-size-lg text-info"><small class="text-black-50">$</small> 7,428</b>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="align-box-row">
                      <div class="mr-4">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                          <div class="dot-badge"></div>
                          <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                        </a>
                      </div>
                      <div class="flex-grow-1">
                        <div class="progress">
                          <div class="progress-bar bg-danger" role="progressbar" style="width: 22%;" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100">22%
                          </div>
                        </div>
                      </div>
                      <div class="line-height-sm text-center ml-4">
                        <b class="font-size-lg text-danger"><small class="text-black-50">$</small> 5,358</b>
                      </div>
                    </div>
                  </div>
                  <div class="card-header border-0 d-block">
                    <span class="text-uppercase pb-1 pt-1 text-black d-block text-center font-weight-bold font-size-lg">Charts</span>
                  </div>
                  <div class="mb-3">
                    <apexchart type="area" height="120" :options="chartWarning" :series="series"></apexchart>
                  </div>
                </div>
                <div class="card-footer d-block text-center">
                  <a href="javascript:void(0);" class="btn btn-sm btn-success" v-b-tooltip title="Refresh">
                    <font-awesome-icon spin icon="sync"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="py-5 bg-royal rounded">
            <div class="container py-4 text-center">
              <div class="col-md-8 p-0 text-center mx-auto">
                <a href="/" class="d-inline-block my-auto" data-tooltip-class="tooltip-first"
                   v-b-tooltip.hover title="Bamburgh Vue.js Admin Dashboard PRO">
                  <img src="@/assets/img/admin-logo.png" alt="">
                </a>
                <h3 class="display-4 line-height-sm mt-3 mb-4 text-white font-weight-bold">
                  Let's build something great for your project 😀
                </h3>
                <p class="font-size-lg text-white-50 mb-4">
                  Start from either the included pages, layouts or applications or create your own
                  using available UI elements, widgets and components.
                </p>
              </div>
              <a href="https://uifort.com/pro-admin-dashboards/bamburgh-vue-admin-dashboard-pro.html"
                 class="btn-success font-size-lg mx-2 btn-lg btn mx-2 btn-lg btn mb-4 mb-sm-0" target="_blank">
                                <span class="btn-wrapper--label">
                                      Buy now
                                </span>
              </a>
              <a href="https://demo.uifort.com/bamburgh-vue-admin-dashboard-pro-docs/"
                 class="btn-outline-warning font-size-lg mx-2 btn-lg btn" target="_blank">
                                <span class="btn-wrapper--icon">
                                  <font-awesome-icon icon="life-ring"/>
                                </span>
                <span class="btn-wrapper--label">
                                    Documentation
                                </span>
              </a>
            </div>
          </div>
        </div>
        <transition name="fade" mode="out-in" appear>
          <Footer/>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from "../../Layout/Components/Header";
  import Sidebar from "../../Layout/Components/Sidebar";
  import Footer from "../../Layout/Components/Footer";
  import VueApexCharts from 'vue-apexcharts'

  import {library} from '@fortawesome/fontawesome-svg-core'
  import {
    faSync,
    faUser,
    faLemon,
    faLightbulb,
    faBusinessTime
  } from '@fortawesome/free-solid-svg-icons'

  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(
          faSync,
          faUser,
          faLemon,
          faLightbulb,
          faBusinessTime
  );

  export default {
    name: 'app',
    components: {
      Header,
      Sidebar,
      Footer,
      'font-awesome-icon': FontAwesomeIcon,
      'apexchart': VueApexCharts
    },
    data() {
      return {
        sidebarcolor: 'bg-midnight-bloom',

        chartWarning: {
          chart: {
            id: 'vuechart-example4',
            sparkline: {
              enabled: true,
            },
          },
          colors: ['#f4772e'],
          stroke: {
            width: 3,
            curve: 'smooth'
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: "vertical",
              shadeIntensity: 0.5,
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 100],
              colorStops: []
            }
          }
        },
        series: [{
          name: 'series',
          data: [73,78,75,74,76,78,77,72,74,73,74,73,77,74,76]
        }]
      }
    },
    computed: {
      sidebarCollapsed: {
        get() {
          return this.$store.state.sidebarCollapsed;
        },
      },
      sidebarCollapsedMobile: {
        get() {
          return this.$store.state.sidebarCollapsedMobile;
        },
        set(value) {
          this.$store.commit('SET_SIDEBAR_COLLAPSED_MOBILE', value);
        }
      }
    },
    methods: {
      toggleSidebarMobile() {
        this.sidebarCollapsedMobile = !this.sidebarCollapsedMobile;
      }
    }
  }
</script>