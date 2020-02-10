<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="card card-box mb-lg-0 mb-5">
                    <div class="p-2 text-center">
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-primary p-0 d-inline-block text-center font-size-xxl d-70 rounded">
                            <font-awesome-icon icon="cloud-moon-rain"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-success p-0 d-inline-block text-center font-size-xxl d-70 rounded">
                            <font-awesome-icon icon="cloud-sun"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-danger p-0 d-inline-block text-center font-size-xxl d-70 rounded">
                            <font-awesome-icon icon="cloud-meatball"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded">
                            <font-awesome-icon icon="bong"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded">
                            <font-awesome-icon icon="ambulance"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded">
                            <font-awesome-icon icon="diagnoses"/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card card-box bg-premium-dark mb-5 border-0">
                    <div class="p-2 text-center">
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-link p-0 bg-love-kiss d-inline-block text-center text-white font-size-xxl d-70 rounded-circle card-box-hover-rise-alt">
                            <font-awesome-icon icon="dove"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-link p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xxl d-70 rounded-circle card-box-hover-rise-alt">
                            <font-awesome-icon icon="drafting-compass"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-link p-0 bg-grow-early d-inline-block text-center text-white font-size-xxl d-70 rounded-circle card-box-hover-rise-alt">
                            <font-awesome-icon icon="dungeon"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-link p-0 bg-arielle-smile d-inline-block text-center text-white font-size-xxl d-70 rounded-circle card-box-hover-rise-alt">
                            <font-awesome-icon icon="football-ball"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-link p-0 bg-night-fade d-inline-block text-center text-white font-size-xxl d-70 rounded-circle card-box-hover-rise-alt">
                            <font-awesome-icon icon="gas-pump"/>
                        </a>
                        <a v-b-tooltip title="Menu Example" href="javascript:void(0);" class="m-3 btn btn-link p-0 bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded-circle card-box-hover-rise-alt">
                            <font-awesome-icon icon="gem"/>
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
        faGem,
        faGasPump,
        faDungeon,
        faFootballBall,
        faDraftingCompass,
        faDove,
        faDiagnoses,
        faAmbulance,
        faBong,
        faCloud,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faGem,
        faGasPump,
        faDungeon,
        faFootballBall,
        faDraftingCompass,
        faDove,
        faDiagnoses,
        faAmbulance,
        faBong,
        faCloud,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>