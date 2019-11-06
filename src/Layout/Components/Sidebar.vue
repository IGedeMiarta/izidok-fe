<template>
    <div class="app-sidebar app-sidebar--dark" :class="sidebarbg">
        <div class="app-sidebar--header">
            <div class="nav-logo w-100 text-center">
                <router-link tag="a" class="d-block" active-class="active" to="/" exact v-b-tooltip.bottom title="Fully built and powered by Vue.js 🚀">
                    <img src="@/assets/img/admin-logo.png" alt="">
                </router-link>
            </div>
            <button class="toggle-sidebar rounded-circle btn btn-sm bg-white shadow-sm-dark text-primary" v-b-tooltip.right title="Expand Sidebar" v-bind:class="{'is-active': sidebarCollapsed}" type="button" v-on:click="toggleSidebar">
                <font-awesome-icon icon="arrows-alt-h"/>
            </button>
        </div>
        <VuePerfectScrollbar class="app-sidebar--content">
            <div class="sidebar-navigation">
                <sidebar-menu showOneChild :menu="menu"/>
            </div>
        </VuePerfectScrollbar>
    </div>
</template>

<script>

    import Vue from 'vue'

    Vue.component('truck-icon', TruckIcon);
    Vue.component('battery-charging-icon', BatteryChargingIcon);
    Vue.component('cpu-icon', CpuIcon);
    Vue.component('user-check-icon', UserCheckIcon);
    Vue.component('check-circle-icon', CheckCircleIcon);
    Vue.component('layout-icon', LayoutIcon);
    Vue.component('paper-clip-icon', PaperclipIcon);
    Vue.component('layers-icon', LayersIcon);
    Vue.component('database-icon', DatabaseIcon);
    Vue.component('briefcase-icon', BriefcaseIcon);
    Vue.component('map-pin-icon', MapPinIcon);
    Vue.component('pie-chart-icon', PieChartIcon);

    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import { TruckIcon, BatteryChargingIcon, CpuIcon, UserCheckIcon, CheckCircleIcon, LayoutIcon, PaperclipIcon, LayersIcon, DatabaseIcon, BriefcaseIcon, MapPinIcon, PieChartIcon } from 'vue-feather-icons'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faArrowsAltH
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faArrowsAltH
    );

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
        },
        props: {
            sidebarbg: String,

        },
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'Examples',
                    },
                    {
                        title: 'Dashboards',
                        icon: {
                            element: 'truck-icon',
                        },
                        child: [
                            {
                                href: '/',
                                title: 'Web analytics',
                            },
                            {
                                href: '/dashboards/monitoring',
                                title: 'Monitoring',
                                class: 'pr-2',
                                badge: {
                                    text: 'New',
                                    class: 'badge badge-first ml-auto order-2'
                                }
                            },
                        ]
                    },
                    {
                        title: 'Layouts',
                        icon: {
                            element: 'battery-charging-icon',
                        },
                        child: [
                            {
                                href: '/layouts/light-sidebar',
                                title: 'Light sidebar',
                            },
                            {
                                href: '/layouts/dark-sidebar',
                                title: 'Dark sidebar',
                            },
                            {
                                href: '/layouts/gradient-sidebar-1',
                                title: 'Gradient sidebar 1',
                            },
                            {
                                href: '/layouts/gradient-sidebar-2',
                                title: 'Gradient sidebar 2',
                            },
                            {
                                href: '/layouts/primary-sidebar',
                                title: 'Primary sidebar',
                            },
                            {
                                href: '/applications/chat',
                                title: 'Collapsed sidebar',
                            },

                        ]
                    },

                    {
                        header: true,
                        title: 'Pages',
                    },
                    {
                        icon: {
                            element: 'cpu-icon',
                        },
                        title: 'Applications',
                        child: [
                            {
                                title: 'Apps widgets',
                                href: '/applications/apps-widgets',
                            },
                            {
                                title: 'Chat',
                                href: '/applications/chat',
                            },
                            {
                                title: 'Contacts',
                                href: '/applications/contacts',
                            },
                            {
                                title: 'File manager',
                                href: '/applications/file-manager',
                            },
                            {
                                title: 'Mail',
                                href: '/applications/mail',
                            },
                            {
                                title: 'Events calendar',
                                href: '/applications/events-calendar',
                            },
                        ],
                    },
                    {
                        icon: {
                            element: 'user-check-icon',
                        },
                        title: 'User pages',
                        child: [
                            {
                                title: 'Login',
                                href: '/user-pages/login',
                            },
                            {
                                title: 'Register',
                                href: '/user-pages/register',
                            },
                            {
                                title: 'Recover password',
                                href: '/user-pages/recover-password',
                            },
                            {
                                title: 'Profile',
                                href: '/user-pages/profile',
                            },

                        ],
                    },
                    {
                        icon: {
                            element: 'layout-icon',
                        },
                        title: 'Other pages',
                        child: [
                            {
                                title: 'Error 404',
                                href: '/other-pages/error-404',
                            },
                            {
                                title: 'Error 500',
                                href: '/other-pages/error-500',
                            },
                            {
                                title: 'Error 505',
                                href: '/other-pages/error-505',
                            },
                            {
                                title: 'Invoice',
                                href: '/other-pages/invoice',
                            },
                        ],
                    },
                    {
                        title: 'UI Kit PRO',
                        icon: {
                            element: 'check-circle-icon',
                        },
                        href: '/ui-kit-pro-included',
                        badge: {
                            text: 'Included',
                            class: 'badge badge-success ml-auto order-2'
                        }
                    },
                    {
                        header: true,
                        title: 'Components',
                    },
                    {
                        title: 'UI Elements',
                        icon: {
                            element: 'paper-clip-icon',
                        },
                        child: [
                            {
                                title: 'Colors',
                                href: '/elements/colors',
                            },
                            {
                                title: 'Buttons',
                                href: '/elements/buttons',
                            },
                            {
                                title: 'Badges',
                                href: '/elements/badges',
                            },
                            {
                                title: 'Avatars',
                                href: '/elements/avatars',
                            },
                            {
                                title: 'Progress bars',
                                href: '/elements/progress-bars',
                            },
                            {
                                title: 'Navigation',
                                href: '/elements/navigation',
                            },
                            {
                                title: 'Alerts',
                                href: '/elements/alerts',
                            },
                            {
                                title: 'Spinners',
                                href: '/elements/spinners',
                            },
                            {
                                title: 'Icons',
                                href: '/elements/icons',
                            },
                            {
                                title: 'Timelines',
                                href: '/elements/timelines',
                            },
                            {
                                title: 'Cards',
                                href: '/elements/cards',
                            },
                            {
                                title: 'Lists',
                                href: '/elements/lists',
                            },
                            {
                                title: 'Modals',
                                href: '/elements/modals',
                            },
                            {
                                title: 'Tooltips',
                                href: '/elements/tooltips',
                            },
                            {
                                title: 'Popovers',
                                href: '/elements/popovers',
                            },
                            {
                                title: 'Carousels',
                                href: '/elements/carousels',
                            },
                            {
                                title: 'Dropdowns',
                                href: '/elements/dropdowns',
                            },
                            {
                                title: 'Scrollable',
                                href: '/elements/scrollable',
                            },
                            {
                                title: 'Tabs',
                                href: '/elements/tabs',
                            },
                            {
                                title: 'Accordions',
                                href: '/elements/accordions',
                            },
                            {
                                title: 'Notifications',
                                href: '/elements/notifications',
                            },
                        ],
                    },
                    {
                        title: 'Statistics boxes',
                        icon: {
                            element: 'layers-icon',
                        },
                        child: [
                            {
                                title: 'Horizontal boxes',
                                href: '/statistics-boxes/horizontal-boxes',
                            },
                            {
                                title: 'Blocks',
                                href: '/statistics-boxes/blocks',
                            },
                            {
                                title: 'Simple blocks',
                                href: '/statistics-boxes/simple-blocks',
                            },
                            {
                                title: 'Chart boxes',
                                href: '/statistics-boxes/chart-boxes',
                            },
                            {
                                title: 'Card blocks',
                                href: '/statistics-boxes/card-blocks',
                            },
                        ],
                    },
                    {
                        title: 'Tables',
                        icon: {
                            element: 'database-icon',
                        },
                        child: [
                            {
                                title: 'Regular Tables',
                                href: '/tables/regular-tables',
                            },
                            {
                                title: 'Dynamic Tables',
                                href: '/tables/sortable-tables',
                            },
                        ]
                    },
                    {
                        title: 'Forms',
                        icon: {
                            element: 'briefcase-icon',
                        },
                        child: [
                            {
                                title: 'Elements',
                                href: '/forms/elements',
                            },
                            {
                                title: 'Widgets',
                                href: '/forms/widgets',
                            },
                            {
                                title: 'FullCalendar',
                                href: '/forms/fullcalendar',
                            }
                        ]
                    },
                    {
                        title: 'Maps',
                        icon: {
                            element: 'map-pin-icon',
                        },
                        href: '/maps',
                        badge: {
                            text: 'New',
                            class: 'badge badge-first ml-auto order-2'
                        }
                    },
                    {
                        title: 'Charts',
                        icon: {
                            element: 'pie-chart-icon',
                        },
                        href: '/charts',
                    },
                ],
                collapsed: true,
            }
        },
        computed: {
            sidebarCollapsed: {
                get() {
                    return this.$store.state.sidebarCollapsed;
                },
                set(value) {
                    this.$store.commit('SET_SIDEBAR_COLLAPSED', value);
                }
            }
        },
        methods: {
            toggleSidebar() {
                this.sidebarCollapsed = !this.sidebarCollapsed;
            }
        }
    }
</script>
