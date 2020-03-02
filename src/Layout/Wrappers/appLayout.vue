<template>
    <div class="app-wrapper app-sidebar-mini flex-grow-1" v-bind:class="{'sidebar-collapsed': sidebarCollapsed, 'sidebar-open-mobile': sidebarCollapsedMobile}">
        <SidebarMini/>
        <div class="sidebar-mobile-overlay" v-on:click="toggleSidebarMobile" v-show="sidebarCollapsedMobile"></div>
        <div class="app-main">
            <transition name="fade" mode="out-in" appear>
                <Header/>
            </transition>
            <slot></slot>
        </div>

    </div>
</template>

<script>
    import Header from "../Components/Header";
    import SidebarMini from "../Components/SidebarMini";

    export default {
        name: 'app',
        components: {
            Header,
            SidebarMini,
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
