<template>
    <div class="app-content app-content-aside fixed-inner-layout">
        <div class="d-flex d-lg-none p-4 order-0 justify-content-between align-items-center">
            <button type="button" class="btn btn-sm btn-primary px-3 toggle-inner-sidebar" v-bind:class="{ 'active' : isActiveLeft }" @click="toggleSidebarLeft">
                <font-awesome-icon icon="ellipsis-v" />
            </button>
        </div>
        <div class="app-content--sidebar app-content--sidebar__lg bg-secondary border-right" v-bind:class="{ 'sidebar-inner-open' : isActiveLeft }">
            <VuePerfectScrollbar class="app-content--sidebar__content p-0 scrollbar-container">
                <datepicker :inline="true" :bootstrap-styling="true" wrapper-class="datepicker-wrapper-flush border-0 bg-transparent w-100" calendar-class="border-0 rounded-0 datepicker datepicker-inline"></datepicker>
                <div class="divider"></div>
                <div class="px-4 pt-4 pb-3">
                    <ul class="nav nav-pills nav-pills-hover flex-column">
                        <li class="nav-header d-flex align-items-center">
                            <div class="text-primary font-weight-bold">
                                Calendar Events
                            </div>
                            <div class="ml-auto font-size-xs">
                                <a href="javascript:void(0);" v-b-tooltip.hover title="Add new event">
                                    <font-awesome-icon icon="plus-circle" />
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);">
                                <span class="badge badge-circle-inner badge-success border-0 mr-2">1</span>
                                Upcoming events
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);">
                                <span class="badge badge-circle-inner badge-warning border-0 mr-2">2</span>
                                Planned holidays
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);">
                                <span class="badge badge-circle-inner badge-first border-0 mr-2">3</span>
                                Meetups near you
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0);">
                                <span class="badge badge-circle-inner badge-danger border-0 mr-2">4</span>
                                Other events
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="divider mt-2"></div>
                <div class="p-4 bg-white">
                    <ul class="nav nav-pills nav-pills-hover flex-column">
                        <li class="nav-header d-flex align-items-center">
                            <div class="text-primary font-weight-bold">
                                Statistics
                            </div>
                            <div class="ml-auto font-size-xs">
                                <a href="javascript:void(0);" v-b-tooltip.hover class="text-success" title="Refresh stats">
                                    <font-awesome-icon spin icon="sync" />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div class="row font-size-xs">
                        <div class="col">
                            <div class="card border-1 shadow-none bg-light text-center my-2 p-3">
                                <div>
                                    <font-awesome-icon icon="user" class="font-size-xxl text-success" />
                                </div>
                                <div class="mt-2 line-height-sm">
                                    <b class="font-size-lg">345</b>
                                    <span class="text-black-50 d-block">friends</span>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-1 shadow-none bg-light text-center my-2 p-3">
                                <div>
                                    <font-awesome-icon icon="chart-bar" class="font-size-xxl text-danger" />
                                </div>
                                <div class="mt-2 line-height-sm">
                                    <b class="font-size-lg">2,693</b>
                                    <span class="text-black-50 d-block">messages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="p-4">
                    <ul class="nav nav-pills nav-pills-hover flex-column">
                        <li class="nav-header">
                            <div class="text-primary font-weight-bold">
                                Upcoming meetups
                            </div>
                        </li>
                    </ul>
                    <div class="card card-box mt-1 mb-4">
                        <div class="card-indicator bg-first"></div>
                        <div class="card-body px-4 py-3">
                            <div class="pb-3 d-flex justify-content-between">
                                <a href="javascript:void(0);">
                                    Presentation site design
                                </a>
                            </div>
                            <div class="d-flex align-items-center justify-content-start">
                                <div class="badge badge-first px-3">On hold</div>
                                <div class="font-size-sm text-danger px-2">
                                    <font-awesome-icon icon="clock" class="mr-1" />
                                    14:22
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card card-box mb-4">
                        <div class="card-indicator bg-success"></div>
                        <div class="card-body px-4 py-3">
                            <div class="pb-3 d-flex justify-content-between">
                                <a href="javascript:void(0);">
                                    Create UI mockups
                                </a>
                            </div>
                            <div class="d-flex align-items-center justify-content-start">
                                <div class="badge badge-success px-3">Fixed</div>
                                <div class="font-size-sm text-dark px-2">
                                    <font-awesome-icon icon="clock" class="mr-1" />
                                    09:41
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-block btn-sm btn-outline-primary">
                        Add more events
                    </a>
                </div>
            </VuePerfectScrollbar>
        </div>
        <div class="app-content--inner bg-white p-0 card-box d-flex flex-column">
            <div class="app-content--inner__header rounded-0 card-header bg-white p-4 border-bottom">
                <div class="card-header--title">
                    <small>Events</small>
                    <b class="font-size-lg">FullCalendar</b>
                </div>
                <div class="card-header--actions">
                    <a href="javascript:void(0);" class="btn btn-sm btn-first" v-b-tooltip.hover title="Add new event">
                        <font-awesome-icon icon="plus" />
                    </a>
                </div>
            </div>
            <VuePerfectScrollbar class="scrollbar-container">
                <div class="p-4">
                    <full-calendar :events="events"></full-calendar>
                </div>
            </VuePerfectScrollbar>
        </div>
        <div class="sidebar-inner-mobile-overlay" @click="toggleSidebarLeft" v-bind:class="{ 'active' : isActiveLeft }"></div>

    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import { FullCalendar } from 'vue-full-calendar'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faEllipsisV,
        faUser,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEllipsisV,
        faUser,
        faPlus
    );
    export default {
        components: {
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
            Datepicker,
            FullCalendar,
        },
        data() {
            return {
                isActiveLeft: false,
                isActiveRight: false,
                events: [
                    {
                        title  : 'event1',
                        start  : '2010-01-01',
                    },
                    {
                        title  : 'event2',
                        start  : '2010-01-05',
                        end    : '2010-01-07',
                    },
                    {
                        title  : 'event3',
                        start  : '2010-01-09T12:30:00',
                        allDay : false,
                    },
                ]
            }
        },
        methods: {
            toggleSidebarLeft: function(){
                this.isActiveLeft = !this.isActiveLeft;
            },
            toggleSidebarRight: function(){
                this.isActiveRight = !this.isActiveRight;
            },
        }
    }
</script>
