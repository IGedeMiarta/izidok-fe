<template>
    <div>
        <div class="accordion mb-5">
            <div class="card card-box">
                <div class="card-header">
                    <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none" v-b-toggle.accordion-1>
                        <span>Latest blog posts</span>
                        <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                    </b-button>
                </div>
                <b-collapse id="accordion-1" visible accordion="accordion-example" role="tabpanel">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item pt-4 pb-4">
                            <div class="d-flex flex-column flex-sm-row align-items-start">
                                <div>
                                    <div class="card card-transparent mb-3 mb-sm-0">
                                        <a href="javascript:void(0);" class="card-img-wrapper rounded">
                                            <div class="img-wrapper-overlay">
                                                <div class="overlay-btn-wrapper">
                                                    <b-button size="sm" pill variant="outline-secondary" class="border-0 shadow-none pl-2 pr-2 mx-auto d-flex align-items-center">
                                                        <font-awesome-icon icon="play-circle" class="font-size-lg"/>
                                                    </b-button>
                                                </div>
                                            </div>
                                            <img src="@/assets/img/stock-photos/stock-3.jpg" class="card-img-top rounded" style="width: 160px" alt="...">
                                        </a>
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-4">
                                    <div class="mb-1">
                                        <a href="javascript:void(0);" class="font-size-lg">Meeting minutes</a>
                                    </div>
                                    <div>
                                        <span class="badge badge-neutral-info text-info">Articles</span>
                                        <span class="badge badge-neutral-danger text-danger ml-2">Posts</span>
                                    </div>
                                    <p class="mb-0 mt-2 text-black-50">
                                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item pt-4 pb-4">
                            <div class="d-flex flex-column flex-sm-row align-items-start">
                                <div>
                                    <div class="card card-transparent mb-3 mb-sm-0">
                                        <a href="javascript:void(0);" class="card-img-wrapper rounded">
                                            <div class="img-wrapper-overlay">
                                                <div class="overlay-btn-wrapper">
                                                    <b-button size="sm" pill variant="outline-secondary" class="border-0 shadow-none pl-2 pr-2 mx-auto d-flex align-items-center">
                                                        <font-awesome-icon icon="play-circle" class="font-size-lg"/>
                                                    </b-button>
                                                </div>
                                            </div>
                                            <img src="@/assets/img/stock-photos/stock-2.jpg" class="card-img-top rounded" style="width: 160px" alt="...">
                                        </a>
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-4">
                                    <div class="mb-1">
                                        <a href="javascript:void(0);" class="font-size-lg">Example title</a>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" class="badge badge-neutral-success text-success">Blog</a>
                                    </div>
                                    <p class="mt-2 text-black-50">
                                        Who formed us in his own image, and the breath ...
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item bg-secondary text-center p-4">
                            <b-button variant="facebook" v-b-tooltip title="Facebook">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </span>
                            </b-button>
                            <b-button variant="dribbble" class="mr-2 ml-2" v-b-tooltip title="Dribbble">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'dribbble']" />
                        </span>
                            </b-button>
                            <b-button variant="twitter" v-b-tooltip title="Twitter">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </span>
                            </b-button>
                        </li>
                    </ul>
                </b-collapse>
            </div>
            <div class="card card-box">
                <div class="card-header">
                    <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed" v-b-toggle.accordion-2>
                        <span>Chart boxes</span>
                        <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                    </b-button>
                </div>
                <b-collapse id="accordion-2" accordion="accordion-example" role="tabpanel">
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
                    <div class="text-center mb-3">
                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-primary p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                            <font-awesome-icon icon="cloud-moon-rain"/>
                        </a>
                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-success p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                            <font-awesome-icon icon="cloud-sun"/>
                        </a>
                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-danger p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                            <font-awesome-icon icon="cloud-meatball"/>
                        </a>
                    </div>
                </b-collapse>
            </div>
            <div class="card card-box">
                <div class="card-header">
                    <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed" v-b-toggle.accordion-3>
                        <span>Statistics blocks</span>
                        <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                    </b-button>
                </div>
                <b-collapse id="accordion-3" accordion="accordion-example" role="tabpanel">
                    <div class="grid-menu grid-menu-2col">
                        <div class="no-gutters row">
                            <div class="col-sm-6">
                                <a href="javascript:void(0);" class="btn p-4 btn-link w-100">
                                    <div class="align-box-row align-items-start">
                                        <div class="mr-3">
                                            <div class="bg-love-kiss text-center text-white font-size-xl d-50 rounded-circle">
                                                <font-awesome-icon icon="save"/>
                                            </div>
                                        </div>
                                        <div class="text-left">
                                            <div class="font-weight-bold">
                                                <small class="text-black-50 d-block mb-1 text-uppercase">New Accounts</small>
                                                <span class="font-size-xxl mt-1">586,356</span>
                                            </div>
                                            <div class="mt-1">
                                                <font-awesome-icon icon="arrow-up" class="text-success"/>
                                                <span class="text-success">15.4%</span>
                                                <span class="text-black-50">increase</span>
                                            </div>
                                        </div>
                                        <div class="ml-auto card-hover-indicator align-self-center">
                                            <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <a href="javascript:void(0);" class="btn p-4 btn-link w-100">
                                    <div class="align-box-row align-items-start">
                                        <div class="mr-3">
                                            <div class="bg-happy-fisher text-center text-white font-size-xl d-50 rounded-circle">
                                                <font-awesome-icon icon="snowflake"/>
                                            </div>
                                        </div>
                                        <div class="text-left">
                                            <div class="font-weight-bold">
                                                <small class="text-black-50 d-block mb-1 text-uppercase">Sales</small>
                                                <span class="font-size-xxl mt-1">23,274</span>
                                            </div>
                                            <div class="mt-1">
                                                <font-awesome-icon icon="arrow-up" class="text-warning"/>
                                                <span class="text-warning">7.4%</span>
                                                <span class="text-black-50">more sales</span>
                                            </div>
                                        </div>
                                        <div class="ml-auto card-hover-indicator align-self-center">
                                            <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-block text-center">
                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded" title="Menu Example">
                            <font-awesome-icon icon="bong"/>
                        </a>
                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded" title="Menu Example">
                            <font-awesome-icon icon="ambulance"/>
                        </a>
                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded" title="Menu Example">
                            <font-awesome-icon icon="diagnoses"/>
                        </a>
                    </div>
                </b-collapse>
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faAllergies,
        faBasketballBall,
        faBezierCurve,
        faAnchor,
        faBabyCarriage,
        faAward,
        faPlayCircle,
        faUser,
        faCloudMoonRain,
        faSun,
        faSnowflake,
        faChevronRight,
        faBong,
        faAmbulance,
        faArrowUp,
        faCloudMeatball,
        faCloudSun,
        faDiagnoses,
        faSave
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faAllergies,
        faBasketballBall,
        faBezierCurve,
        faAnchor,
        faBabyCarriage,
        faAward,
        faPlayCircle,
        faUser,
        faCloudMoonRain,
        faSun,
        faSnowflake,
        faChevronRight,
        faBong,
        faAmbulance,
        faArrowUp,
        faCloudMeatball,
        faCloudSun,
        faDiagnoses,
        faSave
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>