<template>
    <div>
        <div class="row">
            <div class="col-md-5">
                <div class="card card-box d-block mb-5 pb-3">
                    <slick ref="slick" :options="{'slidesToShow': 1, 'slidesToScroll': 1, 'dots': true, 'arrows': true}">
                        <div>
                            <div class="card-body">
                                <div class="slider-item">1</div>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <div class="slider-item">2</div>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <div class="slider-item">3</div>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <div class="slider-item">4</div>
                            </div>
                        </div>
                    </slick>
                </div>
                <div class="card card-box d-block mb-5 pb-3">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Slideshows</small>
                            <b>Integrated in card box</b>
                        </div>
                        <div class="card-header--actions">
                            <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
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
                    <slick ref="slick" :options="{'slidesToShow': 1, 'slidesToScroll': 1, 'dots': true, 'arrows': true}">
                        <div>
                            <div class="card-body text-center pb-0">
                                <div class="font-weight-bold">
                                    <small class="text-black-50 d-block mt-2 mb-2 text-uppercase">New Accounts</small>
                                    <span class="font-size-xxl">586,356</span>
                                </div>
                                <div class="mt-1">
                                    <font-awesome-icon icon="arrow-up" class="text-danger"/>
                                    <span class="text-success pr-1">15.4%</span>
                                    <span class="text-black-50">increase since last month</span>
                                </div>
                            </div>
                            <apexchart type="area" height="180" :options="chartSuccess" :series="series"></apexchart>
                        </div>
                        <div>
                            <div class="card-body text-center pb-0">
                                <div class="font-weight-bold">
                                    <small class="text-black-50 d-block mb-1 text-uppercase">Sales</small>
                                    <span class="font-size-xxl">23,274</span>
                                </div>
                                <div class="mt-1">
                                    <font-awesome-icon icon="arrow-up" class="text-warning"/>
                                    <span class="text-warning pr-1">7.4%</span>
                                    <span class="text-black-50">same as last year earnings</span>
                                </div>
                            </div>
                            <apexchart type="area" height="180" :options="chartDanger" :series="series3"></apexchart>
                        </div>
                    </slick>
                </div>
            </div>
            <div class="col-md-7">
                <div class="card card-box d-block mb-5 pb-3">
                    <slick ref="slick" :options="{'slidesToShow': 2, 'slidesToScroll': 2, 'dots': true, 'arrows': true}">
                        <div>
                            <div class="card-body">
                                <div class="slider-item">1</div>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <div class="slider-item">2</div>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <div class="slider-item">3</div>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <div class="slider-item">4</div>
                            </div>
                        </div>
                    </slick>
                </div>

                <div class="card card-box d-block mb-5 pb-3">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Slideshows</small>
                            <b>Card box with blocks</b>
                        </div>
                        <div class="card-header--actions">
                            <a href="javascript:void(0);" class="btn btn-sm btn-success" v-b-tooltip title="Refresh">
                                <font-awesome-icon spin icon="sync"/>
                            </a>
                        </div>
                    </div>
                    <slick ref="slick" :options="{'slidesToShow': 2, 'slidesToScroll': 2, 'dots': true, 'arrows': true}">
                        <div>
                            <div class="card-body">
                                <div class="card card-box bg-premium-dark border-0 text-light">
                                    <div class="card-body">
                                        <div class="align-box-row align-items-start">
                                            <div class="font-weight-bold">
                                                <small class="text-white-50 d-block mb-1 text-uppercase">New Accounts</small>
                                                <span class="font-size-xxl mt-1">586,356</span>
                                            </div>
                                            <div class="ml-auto">
                                                <div class="bg-white text-center text-success font-size-xl d-50 rounded-circle">
                                                    <font-awesome-icon icon="lightbulb"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <font-awesome-icon icon="arrow-up" class="text-success"/>
                                            <span class="text-success pr-1">15.4%</span>
                                            <span class="text-white-50">increase this month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <div class="card card-box bg-midnight-bloom text-light">
                                    <div class="card-body">
                                        <div class="align-box-row align-items-start">
                                            <div class="font-weight-bold">
                                                <small class="text-white-50 d-block mb-1 text-uppercase">Sales</small>
                                                <span class="font-size-xxl mt-1">23,274</span>
                                            </div>
                                            <div class="ml-auto">
                                                <div class="bg-white text-center text-primary font-size-xl d-50 rounded-circle">
                                                    <font-awesome-icon icon="snowflake"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <font-awesome-icon icon="arrow-up" class="text-warning"/>
                                            <span class="text-warning pr-1">7.4%</span>
                                            <span class="text-white-50">same as before</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <div class="card card-box bg-night-sky text-light">
                                    <div class="card-body">
                                        <div class="align-box-row align-items-start">
                                            <div class="mr-3">
                                                <div class="bg-white text-center text-success font-size-xl d-50 rounded-circle">
                                                    <font-awesome-icon icon="lightbulb"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-weight-bold">
                                                    <small class="text-white-50 d-block mb-1 text-uppercase">New Accounts</small>
                                                    <span class="font-size-xxl mt-2">586,356</span>
                                                </div>
                                                <div class="mt-2">
                                                    <font-awesome-icon icon="arrow-up" class="text-success"/>
                                                    <span class="text-success pr-1">15.4%</span>
                                                    <span class="text-white-50">increase</span>
                                                </div>
                                            </div>
                                            <div class="ml-auto card-hover-indicator align-self-center">
                                                <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card-body">
                                <div class="card card-box bg-plum-plate text-light">
                                    <div class="card-body">
                                        <div class="align-box-row align-items-start">
                                            <div class="mr-3">
                                                <div class="bg-white text-center text-danger font-size-xl d-50 rounded-circle">
                                                    <font-awesome-icon icon="keyboard"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-weight-bold">
                                                    <small class="text-white-50 d-block mb-1 text-uppercase">Orders</small>
                                                    <span class="font-size-xxl text-white mt-1">345</span>
                                                </div>
                                                <div class="mt-2">
                                                    <font-awesome-icon icon="arrow-down" class="text-white"/>
                                                    <span class="text-white pr-1">7.4%</span>
                                                    <span class="text-white-50">less orders</span>
                                                </div>
                                            </div>
                                            <div class="ml-auto card-hover-indicator align-self-center">
                                                <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slick>
                </div>

                <div class="card card-box d-block mb-5 pb-3">
                    <slick ref="slick" :options="slickOptions">
                        <div>
                            <div class="card-body px-0 text-center">
                                <b-button v-b-tooltip variant="primary" class="m-3 p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                    <font-awesome-icon icon="cloud-moon-rain"/>
                                </b-button>
                            </div>
                        </div>
                        <div>
                            <div class="card-body px-0 text-center">
                                <b-button v-b-tooltip variant="dark" class="m-3 p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                    <font-awesome-icon icon="cloud-sun"/>
                                </b-button>
                            </div>
                        </div>
                        <div>
                            <div class="card-body px-0 text-center">
                                <b-button v-b-tooltip variant="second" class="m-3 p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                    <font-awesome-icon icon="cloud-meatball"/>
                                </b-button>
                            </div>
                        </div>
                        <div>
                            <div class="card-body px-0 text-center">
                                <b-button v-b-tooltip variant="warning" class="m-3 p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                    <font-awesome-icon icon="cloud-moon-rain"/>
                                </b-button>
                            </div>
                        </div>
                        <div>
                            <div class="card-body px-0 text-center">
                                <b-button v-b-tooltip variant="success" class="m-3 p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                    <font-awesome-icon icon="cloud-sun"/>
                                </b-button>
                            </div>
                        </div>
                        <div>
                            <div class="card-body px-0 text-center">
                                <b-button v-b-tooltip variant="second" class="m-3 p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                    <font-awesome-icon icon="cloud-meatball"/>
                                </b-button>
                            </div>
                        </div>
                        <div>
                            <div class="card-body px-0 text-center">
                                <b-button v-b-tooltip variant="first" class="m-3 p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                    <font-awesome-icon icon="cloud-moon-rain"/>
                                </b-button>
                            </div>
                        </div>
                        <div>
                            <div class="card-body px-0 text-center">
                                <b-button v-b-tooltip variant="info" class="m-3 p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                    <font-awesome-icon icon="cloud-sun"/>
                                </b-button>
                            </div>
                        </div>
                        <div>
                            <div class="card-body px-0 text-center">
                                <b-button v-b-tooltip variant="danger" class="m-3 p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                    <font-awesome-icon icon="cloud-meatball"/>
                                </b-button>
                            </div>
                        </div>
                    </slick>
                </div>

            </div>
        </div>
        <div class="bg-neutral-dark px-2 py-3 rounded">
            <div class="p-3">
                <slick ref="slick" :options="{'slidesToShow': 2, 'slidesToScroll': 2, 'dots': true, 'arrows': true}">
                    <div class="p-5">
                        <a href="javascript:void(0);" class="card card-box card-box-border-bottom border-success card-box-hover-rise">
                            <div class="card-body">
                                <div class="align-box-row">
                                    <div class="text-left">
                                        <div class="mt-1">
                                            <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                        </div>
                                        <div class="mt-3 line-height-sm">
                                            <b class="font-size-lg text-black pr-1">2,345</b>
                                            <span class="text-black-50">users</span>
                                        </div>
                                    </div>
                                    <div class="ml-auto card-hover-indicator">
                                        <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="p-5">
                        <a href="javascript:void(0);" class="card card-box card-box-border-bottom border-danger card-box-hover-rise">
                            <div class="card-body">
                                <div class="align-box-row">
                                    <div class="text-left">
                                        <div class="mt-1">
                                            <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                        </div>
                                        <div class="mt-3 line-height-sm">
                                            <b class="font-size-lg text-black pr-1">3,568</b>
                                            <span class="text-black-50">clicks</span>
                                        </div>
                                    </div>
                                    <div class="ml-auto card-hover-indicator">
                                        <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="p-5">
                        <a href="javascript:void(0);" class="card card-box card-box-border-bottom border-warning card-box-hover-rise">
                            <div class="card-body">
                                <div class="align-box-row">
                                    <div class="text-left">
                                        <div class="mt-1">
                                            <font-awesome-icon icon="chart-bar" class="font-size-xxl text-warning"/>
                                        </div>
                                        <div class="mt-3 line-height-sm">
                                            <b class="font-size-lg text-black pr-1">$9,693</b>
                                            <span class="text-black-50">revenue</span>
                                        </div>
                                    </div>
                                    <div class="ml-auto card-hover-indicator">
                                        <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="p-5">
                        <a href="javascript:void(0);" class="card card-box card-box-border-bottom border-info card-box-hover-rise">
                            <div class="card-body">
                                <div class="align-box-row">
                                    <div class="text-left">
                                        <div class="mt-1">
                                            <font-awesome-icon icon="newspaper" class="font-size-xxl text-info"/>
                                        </div>
                                        <div class="mt-3 line-height-sm">
                                            <b class="font-size-lg text-black pr-1">431</b>
                                            <span class="text-black-50">sales</span>
                                        </div>
                                    </div>
                                    <div class="ml-auto card-hover-indicator">
                                        <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </slick>
            </div>
        </div>

    </div>
</template>

<script>
    import Slick from 'vue-slick';
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faQuestionCircle,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain,
        faUser,
        faChevronRight,
        faNewspaper,
        faLightbulb,
        faArrowUp,
        faSnowflake,
        faKeyboard,
        faEllipsisH,
        faArrowDown
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faQuestionCircle,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain,
        faUser,
        faChevronRight,
        faNewspaper,
        faLightbulb,
        faArrowUp,
        faSnowflake,
        faKeyboard,
        faEllipsisH,
        faArrowDown
    );    import VueApexCharts from 'vue-apexcharts'

    export default {
        components: {
            Slick,
            'font-awesome-icon': FontAwesomeIcon,
            'apexchart': VueApexCharts

        },
        data: function () {
            return {
                slickOptions: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    speed: 500,
                    dots: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1
                            }
                        },
                    ]
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
                series3: [{
                    name: 'series-3',
                    data: [73,78,75,74,76,78,77,72,74,73,74,73,77,74,76]
                }]
            }
        },
    }
</script>