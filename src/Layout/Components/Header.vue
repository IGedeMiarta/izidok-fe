<template>
    <div class="app-header">
        <div class="d-flex">
            <button class="navbar-toggler hamburger hamburger--elastic toggle-sidebar" v-bind:class="{'is-active': sidebarCollapsed}" type="button" v-on:click="toggleSidebar">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <button class="navbar-toggler hamburger hamburger--elastic toggle-sidebar-mobile" v-bind:class="{'is-active': sidebarCollapsedMobile}" type="button" v-on:click="toggleSidebarMobile">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <div class="search-link">
                <div class="d-none d-lg-flex align-items-center">
                    <font-awesome-icon icon="search" class="search-icon w-auto" />
                    <input type="text" placeholder="Click here to search...">
                </div>
                <div class="d-none d-sm-flex d-lg-none">
                    <b-button variant="outline-primary" size="sm" class="px-3" v-b-modal.search-modal>
                        <font-awesome-icon icon="search" />
                    </b-button>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <Dots/>
            <UserBox/>
        </div>
        <b-modal id="search-modal" centered>
            <div slot="modal-header">
                <h6 class="display-4 font-weight-bold">Search</h6>
                <p class="text-black-50 mb-0">Use the form below to search for files</p>
            </div>
            <div class="p-5">
                <div class="input-group">
                    <input type="search" class="form-control" placeholder="Search terms here..." />
                    <div class="input-group-append">
                        <b-button variant="primary" class="border-0">
                            <font-awesome-icon icon="search" />
                        </b-button>
                    </div>
                </div>
            </div>
            <div slot="modal-footer" class="d-block w-100">
                <b-button variant="link" block class="btn-link-dark" @click="$bvModal.hide('search-modal')">Close search box</b-button>
            </div>
        </b-modal>
    </div>
</template>

<script>

    import Dots from './Header/Dots';
    import UserBox from './Header/UserBox';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faSearch,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faSearch,
    );
    export default {
        name: "Header",
        components: {
            Dots,
            UserBox,
            'font-awesome-icon': FontAwesomeIcon,
        },

        data() {
            return {
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
            toggleSidebar() {
                this.sidebarCollapsed = !this.sidebarCollapsed;
            },
            toggleSidebarMobile() {
                this.sidebarCollapsedMobile = !this.sidebarCollapsedMobile;
            }
        }
    };
</script>
