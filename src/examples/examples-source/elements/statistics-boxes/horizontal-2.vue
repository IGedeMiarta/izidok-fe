<template>
    <div>
        <div class="card card-box mb-5">
            <div class="no-gutters row">
                <div class="col-md-6 pt-3">
                    <div class="divider-v divider-v-md"></div>
                    <div class="row mt-2">
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
                    <div class="text-center">
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
                </div>
                <div class="col-md-6 pt-3">
                    <div class="row mt-2">
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
                    <div class="text-center">
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
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faUser,
        faChartBar,
        faDiagnoses,
        faAmbulance,
        faBong,
        faCloud,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faUser,
        faChartBar,
        faDiagnoses,
        faAmbulance,
        faBong,
        faCloud,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        }
    }
</script>