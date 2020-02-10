<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <a href="javascript:void(0);" class="card mb-5 card-box card-box-border-bottom border-warning">
                    <div class="card-badges">
                        <span class="badge badge-pill badge-neutral-info text-info shadow-none">NEW</span>
                    </div>
                    <div class="card-body pb-1">
                        <div class="align-box-row">
                            <div class="text-left">
                                <div class="mt-1">
                                    <font-awesome-icon icon="user" class="font-size-xxl text-warning"/>
                                </div>
                                <div class="mt-3 line-height-sm">
                                    <b class="font-size-lg text-black pr-1">2,345</b>
                                    <span class="text-black-50">users</span>
                                </div>
                                <div class="mt-2 pt-3">
                                    <apexchart type="area" height="120" :options="chartWarning" :series="series"></apexchart>
                                </div>
                            </div>
                            <div class="ml-auto card-hover-indicator">
                                <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-6">
                <div class="card card-box mb-5 card-box-border-bottom border-danger">
                    <div class="card-badges">
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
                    <div class="card-body pb-1">
                        <div class="align-box-row">
                            <div class="text-left w-100">
                                <div class="mt-1">
                                    <font-awesome-icon icon="chart-bar" class="font-size-xxl text-danger"/>
                                </div>
                                <div class="mt-3 line-height-sm">
                                    <b class="font-size-lg pr-1">$9,693</b>
                                    <span class="text-black-50">revenue</span>
                                </div>
                                <div class="mt-2 pt-3">
                                    <apexchart type="area" height="120" :options="chartDanger" :series="series3"></apexchart>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-body p-0">
                        <div class="row mt-4">
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
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">$9,693</b>
                                        <span class="text-black-50 d-block">revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider mt-4"></div>
                        <div class="text-center py-4">
                            <b-button variant="primary" size="sm">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon icon="eye"/>
                        </span>
                                <span class="btn-wrapper--label">
                            Generate reports
                        </span>
                            </b-button>
                        </div>
                    </div>
                    <div class="card-footer bg-light text-center">
                        <div class="pt-4 pr-4 pl-4">
                            <apexchart type="area" height="120" :options="chartPrimary" :series="series2"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-body pb-1">
                        <div class="row">
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
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">$9,693</b>
                                        <span class="text-black-50 d-block">revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-4 pr-4 pl-4">
                            <apexchart type="area" height="120" :options="chartFirst" :series="series"></apexchart>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="my-2 text-center">
                        <font-awesome-icon icon="arrow-up" class="text-danger"/>
                        <span class="text-danger pr-1">15.4%</span>
                        <span class="text-black-50">new sales today</span>
                    </div>
                    <div class="card-footer bg-light p-4 text-center">
                        <b-button variant="first">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon icon="eye"/>
                            </span>
                            <span class="btn-wrapper--label">
                                View latest sales
                            </span>
                        </b-button>
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
        faBusAlt,
        faUser,
        faChartBar,
        faEllipsisH,
        faEye,
        faChevronRight
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faBusAlt,
        faUser,
        faChartBar,
        faEllipsisH,
        faEye,
        faChevronRight
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            'apexchart': VueApexCharts
        },
        data: function () {
            return {
                chartPrimary: {
                    chart: {
                        id: 'vuechart-example1',
                        sparkline: {
                            enabled: true,
                        },
                    },
                    colors: ['#3c44b1'],
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
                chartFirst: {
                chart: {
                    id: 'vuechart-example5',
                        sparkline: {
                        enabled: true,
                    },
                },
                colors: ['#4191ff'],
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
                series2: [{
                    name: 'series-2',
                    data: [73,78,75,74,73,77,74,76,72,74,73,78,77,74,76]
                }],
                series3: [{
                    name: 'series-3',
                    data: [73,78,75,74,76,78,77,72,74,73,74,73,77,74,76]
                }]
            }
        },
    }
</script>