<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <b-card no-body class="card-box mb-5">
                    <b-tabs pills small card>
                        <b-tab class="p-0" title="Tab 1">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="align-box-row">
                                        <div class="mr-4">
                                            <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                                                <div class="dot-badge"></div>
                                                <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                                            </a>
                                        </div>
                                        <div class="flex-grow-1">
                                            <div class="progress">
                                                <div class="progress-bar bg-success" role="progressbar" style="width: 43%;" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">43%
                                                </div>
                                            </div>
                                        </div>
                                        <div class="line-height-sm text-center ml-4">
                                            <small class="text-black-50 d-block text-uppercase">Totals</small>
                                            <b class="font-size-lg text-success"><small class="text-black-50">$</small> 2,345</b>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="align-box-row">
                                        <div class="mr-4">
                                            <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                                                <div class="dot-badge"></div>
                                                <div class="avatar-icon"><img src="@/assets/img/avatars/avatar5.jpg" alt=""></div>
                                            </a>
                                        </div>
                                        <div class="flex-grow-1">
                                            <div class="progress">
                                                <div class="progress-bar bg-info" role="progressbar" style="width: 61%;" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100">61%
                                                </div>
                                            </div>
                                        </div>
                                        <div class="line-height-sm text-center ml-4">
                                            <small class="text-black-50 d-block text-uppercase">Totals</small>
                                            <b class="font-size-lg text-info"><small class="text-black-50">$</small> 2,345</b>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="align-box-row">
                                        <div class="mr-4">
                                            <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                                                <div class="dot-badge"></div>
                                                <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                            </a>
                                        </div>
                                        <div class="flex-grow-1">
                                            <div class="progress">
                                                <div class="progress-bar bg-danger" role="progressbar" style="width: 22%;" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100">22%
                                                </div>
                                            </div>
                                        </div>
                                        <div class="line-height-sm text-center ml-4">
                                            <small class="text-black-50 d-block text-uppercase">Totals</small>
                                            <b class="font-size-lg text-danger"><small class="text-black-50">$</small> 2,345</b>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </b-tab>
                        <b-tab class="p-0" title="Tab 2">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item pt-2 pb-2">
                                    <div class="align-box-row mb-1">
                                        <div>
                                            <div class="font-weight-bold">Orders</div>
                                        </div>
                                        <div class="ml-auto">
                                            <div class="font-size-xl font-weight-bold text-success">
                                                348
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                                    </div>
                                    <div class="align-box-row progress-bar--label mt-1 text-muted">
                                        <small class="text-dark">0</small>
                                        <div class="ml-auto">100%</div>
                                    </div>
                                </li>
                                <li class="list-group-item pt-2 pb-2">
                                    <div class="align-box-row mb-1">
                                        <div>
                                            <div class="font-weight-bold">Sales</div>
                                        </div>
                                        <div class="ml-auto">
                                            <div class="font-size-xl font-weight-bold text-danger">
                                                <small>$</small>
                                                2.3M
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="21" aria-valuemin="0" aria-valuemax="100" style="width: 21%;"></div>
                                    </div>
                                    <div class="align-box-row progress-bar--label mt-1 text-muted">
                                        <small class="text-dark">0</small>
                                        <div class="ml-auto">100%</div>
                                    </div>
                                </li>
                                <li class="list-group-item pt-2 pb-2">
                                    <div class="align-box-row mb-1">
                                        <div>
                                            <div class="font-weight-bold">Users</div>
                                        </div>
                                        <div class="ml-auto">
                                            <div class="font-size-xl font-weight-bold text-info">
                                                <small>#</small>
                                                87
                                            </div>
                                        </div>
                                    </div>
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                        <div class="progress-bar bg-info" role="progressbar" aria-valuenow="13" aria-valuemin="0" aria-valuemax="100" style="width: 13%;"></div>
                                    </div>
                                    <div class="align-box-row progress-bar--label mt-1 text-muted">
                                        <small class="text-dark">0</small>
                                        <div class="ml-auto">100%</div>
                                    </div>
                                </li>
                            </ul>
                        </b-tab>
                        <b-tab title="Disabled tab" disabled>Disabled tab</b-tab>
                    </b-tabs>
                    <div class="card-footer bg-light text-center">
                        <b-button size="sm" variant="first">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon icon="question-circle"/>
                            </span>
                            <span class="btn-wrapper--label">
                                Generate reports
                            </span>
                        </b-button>
                    </div>
                </b-card>
            </div>
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="list-group-item border-top-0 border-left-0 border-right-0 d-flex justify-content-between bg-light align-items-center">
                        <div class="avatar-icon-wrapper avatar-icon-lg">
                            <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                        </div>
                        <div class="flex-grow-1 pl-2">
                            <h5 class="mt-0 mb-1">Kate Middleton</h5>
                            <p class="card-text mb-0">
                                This is a short profile bio description...
                            </p>
                        </div>
                        <span class="pl-3">
                            <b-button size="sm" variant="second" class="pl-2 pr-2">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="cog"/>
                                </span>
                            </b-button>
                        </span>
                    </div>
                    <b-tabs pills card fill nav-class="w-100" nav-wrapper-class="w-100">
                        <b-tab class="p-0" title="Earnings">
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
                            <div class="divider mt-3 mb-2"></div>
                            <div class="text-center pb-1">
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
                        </b-tab>
                        <b-tab class="p-0" title="Sales">
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
                                            <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                        </div>
                                        <div class="mt-2 line-height-sm">
                                            <b class="font-size-lg">3,568</b>
                                            <span class="text-black-50 d-block">clicks</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="divider mt-3 mb-2"></div>
                            <div class="text-center pb-1">
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
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faBusAlt,
        faUser,
        faChartBar,
        faChevronRight,
        faEllipsisH,
        faArrowUp,
        faSnowflake,
        faLightbulb,
        faKeyboard,
        faArrowDown,
        faChevronLeft,
        faAngleRight,
        faDiagnoses,
        faAmbulance,
        faFileVideo,
        faFileAudio,
        faFileExcel,
        faPlus,
        faStar,
        faBong,
        faCloudSun,
        faCloudMeatball,
        faCloudMoonRain,
        faComments,
        faCog,
        faBuilding,
        faExpandArrowsAlt,
        faFileCode
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faBusAlt,
        faUser,
        faChartBar,
        faChevronRight,
        faEllipsisH,
        faArrowUp,
        faSnowflake,
        faLightbulb,
        faKeyboard,
        faArrowDown,
        faChevronLeft,
        faAngleRight,
        faDiagnoses,
        faAmbulance,
        faFileVideo,
        faFileAudio,
        faFileExcel,
        faPlus,
        faStar,
        faBong,
        faCloudSun,
        faCloudMeatball,
        faCloudMoonRain,
        faComments,
        faCog,
        faBuilding,
        faExpandArrowsAlt,
        faFileCode
    );
    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>