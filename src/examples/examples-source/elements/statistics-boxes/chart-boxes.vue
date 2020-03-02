<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Statistics</small>
                            <b>Last quarter report</b>
                        </div>
                        <div class="card-header--actions">
                            <a href="javascript:void(0);" class="btn btn-sm btn-first" v-b-tooltip title="Send new message">
                                <font-awesome-icon icon="plus"/>
                            </a>
                        </div>
                    </div>
                    <div class="pt-3">
                        <div class="row mt-3 mb-2">
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">2,345</b>
                                        <span class="text-black-50 d-block">users</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">3,568</b>
                                        <span class="text-black-50 d-block">clicks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <apexchart type="area" height="120" :options="chartSuccess" :series="series"></apexchart>
                    </div>
                    <div class="p-4 text-center">
                        <b-button variant="outline-primary" class="mb-1">
                            <span class="btn-wrapper--label">
                                View complete report
                            </span>
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon icon="angle-right"/>
                            </span>
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Statistics</small>
                            <b>Users overview</b>
                        </div>
                        <div class="card-header--actions">
                            <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary shadow-none p-0">
                                <template slot="button-content">
                                    <div class="font-size-xl">
                                        <font-awesome-icon icon="ellipsis-h"/>
                                    </div>
                                </template>
                                <b-dropdown-item>First Action</b-dropdown-item>
                                <b-dropdown-item>Second Action</b-dropdown-item>
                                <b-dropdown-item>Third Action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item active>Active action</b-dropdown-item>
                                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                    <div class="card-body pb-2">
                        <div class="align-box-row">
                            <div class="font-weight-bold">
                                <small class="text-black-50 d-block mt-2 mb-2 text-uppercase">New Accounts</small>
                                <span class="font-size-xxl ">586,356</span>
                            </div>
                            <div class="ml-auto">
                                <div class="bg-first text-center text-white font-size-xl d-50 rounded-circle">
                                    <font-awesome-icon icon="lightbulb"/>
                                </div>
                            </div>
                        </div>
                        <div class="mt-1">
                            <font-awesome-icon icon="arrow-up" class="text-danger"/>
                            <span class="text-success pr-1">15.4%</span>
                            <span class="text-black-50">increase since last month</span>
                        </div>
                        <div class="mt-4">
                            <b-button pill variant="outline-primary" class="mb-3">
                                <span class="btn-wrapper--label">
                                    View complete report
                                </span>
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="angle-right"/>
                                </span>
                            </b-button>
                        </div>
                    </div>
                    <div class="mb-2">
                        <apexchart type="area" height="120" :options="chartDanger" :series="series3"></apexchart>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    import VueApexCharts from 'vue-apexcharts'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faUser,
        faLemon,
        faLightbulb,
        faPlus,
        faArrowUp,
        faEllipsisH,
        faAngleRight
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faUser,
        faLemon,
        faLightbulb,
        faPlus,
        faArrowUp,
        faEllipsisH,
        faAngleRight
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            'apexchart': VueApexCharts
        },
        data: function () {
            return {
                chartDanger: {
                    chart: {
                        id: 'vuechart-example2',
                        sparkline: {
                            enabled: true,
                        },
                    },
                    colors: ['#f83245'],
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
                chartSuccess: {
                    chart: {
                        id: 'vuechart-example3',
                        sparkline: {
                            enabled: true,
                        },
                    },
                    colors: ['#1bc943'],
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
                    name: 'series-1',
                    data: [73,77,75,78,73,77,73,74,76,78,74,72,74,74,76]
                }],
                series3: [{
                    name: 'series-3',
                    data: [73,78,75,74,76,78,77,72,74,73,74,73,77,74,76]
                }]
            }
        },
    }
</script>