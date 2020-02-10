<template>
    <div>
        <div class="card card-box mb-5">
            <div class="no-gutters row">
                <div class="col-lg-4 p-3">
                    <div class="divider-v divider-v-lg"></div>
                    <div class="row mt-3">
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
                    <div class="pt-3 pr-4 pl-4">
                        <apexchart type="area" height="120" :options="chartPrimary" :series="series"></apexchart>
                    </div>
                    <div class="text-center pt-4 pb-2">
                        <b-button size="sm" pill class="px-4" variant="outline-primary">View details</b-button>
                    </div>
                </div>
                <div class="col-lg-4 p-3">
                    <div class="divider-v divider-v-lg"></div>
                    <div class="row mt-3">
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
                    </div>
                    <div class="pt-3 pr-4 pl-4">
                        <apexchart type="area" height="120" :options="chartDanger" :series="series2"></apexchart>
                    </div>
                    <div class="text-center pt-4 pb-2">
                        <b-button size="sm" pill class="px-4" variant="outline-danger">View details</b-button>
                    </div>
                </div>
                <div class="col-lg-4 p-3">
                    <div class="row mt-3">
                        <div class="col">
                            <div class="text-center">
                                <div>
                                    <font-awesome-icon icon="bus-alt" class="font-size-xxl text-success"/>
                                </div>
                                <div class="mt-2 line-height-sm">
                                    <b class="font-size-lg">1,024</b>
                                    <span class="text-black-50 d-block">orders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-3 pr-4 pl-4">
                        <apexchart type="area" height="120" :options="chartSuccess" :series="series3"></apexchart>
                    </div>
                    <div class="text-center pt-4 pb-2">
                        <b-button size="sm" pill class="px-4" variant="outline-success">View details</b-button>
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
        faChartBar
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faBusAlt,
        faUser,
        faChartBar
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