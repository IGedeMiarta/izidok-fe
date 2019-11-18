<template>
    <div class="app-wrapper" v-bind:class="{'sidebar-collapsed': sidebarCollapsed, 'sidebar-open-mobile': sidebarCollapsedMobile}">
        <Sidebar/>
        <div class="sidebar-mobile-overlay" v-on:click="toggleSidebarMobile" v-show="sidebarCollapsedMobile"></div>
        <div class="app-main">
            <transition name="fade" mode="out-in" appear>
                <Header/>
            </transition>
            <div class="app-content">
                <div class="app-content--inner">
                    <slot></slot>
                </div>
                <transition name="fade" mode="out-in" appear>
                    <Footer/>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from "../Components/Header";
    import Sidebar from "../Components/Sidebar";
    import Footer from "../Components/Footer";

    export default {
        name: 'app',
        components: {
            Header,
            Sidebar,
            Footer,
        },
        computed: {
            sidebarCollapsed: {
                get() {
                    return !this.$store.state.sidebarCollapsed;
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
