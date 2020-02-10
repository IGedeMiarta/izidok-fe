<template>
    <div class="app-wrapper"
         v-bind:class="{'sidebar-collapsed': sidebarCollapsed, 'sidebar-open-mobile': sidebarCollapsedMobile}">
        <Sidebar :sidebarbg="sidebarcolor"/>
        <div class="sidebar-mobile-overlay" v-on:click="toggleSidebarMobile" v-show="sidebarCollapsedMobile"></div>
        <div class="app-main">
            <transition name="fade" mode="out-in" appear>
                <Header/>
            </transition>
            <div class="app-content">
                <div class="app-content--inner">
                    <PageTitle heading="Light sidebar"
                               subheading="This page features an easy to implement light color scheme for the sidebar."/>
                    <div class="card card-box mb-5">
                        <div class="no-gutters row">
                            <div class="col-md-6 pt-3">
                                <div class="divider-v divider-v-md"></div>
                                <div class="row mt-2">
                                    <div class="col">
                                        <div class="text-center">
                                            <div>
                                                <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                            </div>
                                            <div class="mt-2 line-height-sm">
                                                <b class="font-size-lg">2,345</b>
                                                <span class="text-black-50 d-block">users</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="text-center">
                                            <div>
                                                <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info"/>
                                            </div>
                                            <div class="mt-2 line-height-sm">
                                                <b class="font-size-lg">$9,693</b>
                                                <span class="text-black-50 d-block">revenue</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="divider mt-3 mb-3"></div>
                                <div class="text-center">
                                    <a v-b-tooltip href="javascript:void(0);"
                                       class="m-3 btn btn-primary p-0 d-inline-block text-center font-size-xxl d-70 rounded"
                                       title="Menu Example">
                                        <font-awesome-icon icon="cloud-moon-rain"/>
                                    </a>
                                    <a v-b-tooltip href="javascript:void(0);"
                                       class="m-3 btn btn-success p-0 d-inline-block text-center font-size-xxl d-70 rounded"
                                       title="Menu Example">
                                        <font-awesome-icon icon="cloud-sun"/>
                                    </a>
                                    <a v-b-tooltip href="javascript:void(0);"
                                       class="m-3 btn btn-danger p-0 d-inline-block text-center font-size-xxl d-70 rounded"
                                       title="Menu Example">
                                        <font-awesome-icon icon="cloud-meatball"/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6 pt-3">
                                <div class="row mt-2">
                                    <div class="col">
                                        <div class="text-center">
                                            <div>
                                                <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                            </div>
                                            <div class="mt-2 line-height-sm">
                                                <b class="font-size-lg">2,345</b>
                                                <span class="text-black-50 d-block">users</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="text-center">
                                            <div>
                                                <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info"/>
                                            </div>
                                            <div class="mt-2 line-height-sm">
                                                <b class="font-size-lg">$9,693</b>
                                                <span class="text-black-50 d-block">revenue</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="divider mt-3 mb-3"></div>
                                <div class="text-center">
                                    <a v-b-tooltip href="javascript:void(0);"
                                       class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded"
                                       title="Menu Example">
                                        <font-awesome-icon icon="bong"/>
                                    </a>
                                    <a v-b-tooltip href="javascript:void(0);"
                                       class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded"
                                       title="Menu Example">
                                        <font-awesome-icon icon="ambulance"/>
                                    </a>
                                    <a v-b-tooltip href="javascript:void(0);"
                                       class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded"
                                       title="Menu Example">
                                        <font-awesome-icon icon="diagnoses"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="card card-box mb-5">
                                <div class="card-body px-3 py-3">
                                    <div class="font-size-lg pb-3">
                                        <a href="javascript:void(0);">
                                            Sketch mockups creation
                                        </a>
                                    </div>
                                    <div>
                                        <div class="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                                            <div class="avatar-icon rounded text-white bg-warning">
                                                JK
                                            </div>
                                        </div>
                                        <div class="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                                            <div class="avatar-icon rounded text-white bg-dark">
                                                HA
                                            </div>
                                            <span class="badge badge-circle badge-success">Online</span>
                                        </div>
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon rounded">
                                                <img src="@/assets/img/avatars/avatar2.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon rounded">
                                                <img src="@/assets/img/avatars/avatar1.jpg" alt="">
                                            </div>
                                            <span class="badge badge-circle badge-warning">Idle</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer d-flex align-items-center p-2 justify-content-between">
                                    <div>
                                        <b-dropdown no-caret variant="outline-first px-2 border-0" size="sm">
                                            <template slot="button-content">
                                                <font-awesome-icon icon="list-ul"/>
                                            </template>
                                            <b-dropdown-item>First Action</b-dropdown-item>
                                            <b-dropdown-item>Second Action</b-dropdown-item>
                                            <b-dropdown-item>Third Action</b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item active>Active action</b-dropdown-item>
                                            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                                        </b-dropdown>
                                        <span class="font-size-sm text-black-50 px-2" v-b-tooltip
                                              title="Total downloads">
                                <font-awesome-icon icon="link" class="mr-1"/>
                                55
                            </span>
                                        <span class="font-size-sm text-black-50 px-2" v-b-tooltip title="Total views">
                                <font-awesome-icon icon="eye" class="mr-1"/>
                                344
                            </span>
                                    </div>
                                    <div class="font-size-sm px-2">
                                        <font-awesome-icon icon="clock" class="mr-1"/>
                                        Today - 11:35
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card card-box mb-5 bg-royal text-white border-0">
                                <div class="card-body px-3 py-3">
                                    <div class="font-size-lg pb-3">
                                        <a href="javascript:void(0);" class="text-white">
                                            Photoshop design
                                        </a>
                                    </div>
                                    <div>
                                        <div class="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                                            <div class="avatar-icon rounded text-white bg-warning shadow-none">
                                                JK
                                            </div>
                                        </div>
                                        <div class="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                                            <div class="avatar-icon rounded text-white bg-dark shadow-none">
                                                HA
                                            </div>
                                            <span class="badge badge-circle badge-success">Online</span>
                                        </div>
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon rounded shadow-none">
                                                <img src="@/assets/img/avatars/avatar2.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon rounded shadow-none">
                                                <img src="@/assets/img/avatars/avatar1.jpg" alt="">
                                            </div>
                                            <span class="badge badge-circle badge-warning">Idle</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer d-flex align-items-center p-2 bg-white-50 border-0 justify-content-between">
                                    <div>
                                        <b-dropdown right no-caret variant="outline-first px-2 border-0" size="sm">
                                            <template slot="button-content">
                                                <font-awesome-icon icon="list-ul"/>
                                            </template>
                                            <b-dropdown-item>First Action</b-dropdown-item>
                                            <b-dropdown-item>Second Action</b-dropdown-item>
                                            <b-dropdown-item>Third Action</b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item active>Active action</b-dropdown-item>
                                            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                                        </b-dropdown>
                                        <span class="font-size-sm text-white-50 px-2" v-b-tooltip
                                              title="Total downloads">
                                <font-awesome-icon icon="link" class="mr-1"/>
                                55
                            </span>
                                        <span class="font-size-sm text-white-50 px-2" v-b-tooltip title="Total views">
                                <font-awesome-icon icon="eye" class="mr-1"/>
                                344
                            </span>
                                    </div>
                                    <div class="font-size-sm px-2">
                                        <font-awesome-icon icon="clock" class="mr-1"/>
                                        Today - 11:35
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card card-box mb-5 text-dark card-box-border-bottom border-warning">
                                <div class="card-body px-3 py-3">
                                    <div class="font-size-lg pb-3">
                                        <a href="javascript:void(0);">
                                            Angular implementation
                                        </a>
                                    </div>
                                    <div>
                                        <div class="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                                            <div class="avatar-icon rounded text-white bg-warning">
                                                JK
                                            </div>
                                        </div>
                                        <div class="avatar-icon-wrapper avatar-initials avatar-icon-sm">
                                            <div class="avatar-icon rounded text-white bg-dark">
                                                HA
                                            </div>
                                            <span class="badge badge-circle badge-success">Online</span>
                                        </div>
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon rounded">
                                                <img src="@/assets/img/avatars/avatar2.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon rounded">
                                                <img src="@/assets/img/avatars/avatar1.jpg" alt="">
                                            </div>
                                            <span class="badge badge-circle badge-warning">Idle</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer d-flex align-items-center bg-transparent p-2 justify-content-between">
                                    <div>
                                        <a href="javascript:void(0);" v-b-tooltip
                                           class="btn btn-sm btn-outline-first px-2 border-0" title="Actions menu">
                                            <font-awesome-icon icon="list-ul"/>
                                        </a>
                                        <span class="font-size-sm text-black-50 px-2" v-b-tooltip
                                              title="Total downloads">
                                <font-awesome-icon icon="link" class="mr-1"/>
                                55
                            </span>
                                        <span class="font-size-sm text-black-50 px-2" v-b-tooltip title="Total views">
                                <font-awesome-icon icon="eye" class="mr-1"/>
                                344
                            </span>
                                    </div>
                                    <div class="font-size-sm px-2">
                                        <font-awesome-icon icon="clock" class="mr-1"/>
                                        Today - 11:35
                                    </div>
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
    import PageTitle from "../../Layout/Components/PageTitle";
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faUser,
        faChartBar,
        faDiagnoses,
        faAmbulance,
        faBong,
        faCloud,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain,
        faLifeRing,
        faListUl,
        faLink,
        faEye
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faUser,
        faChartBar,
        faDiagnoses,
        faAmbulance,
        faBong,
        faCloud,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain,
        faLifeRing,
        faListUl,
        faEye,
        faLink,
    );
    export default {
        name: 'app',
        components: {
            Header,
            Sidebar,
            Footer,
            PageTitle,
            'font-awesome-icon': FontAwesomeIcon,
        },
        data() {
            return {
                sidebarcolor: 'app-sidebar--light',
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