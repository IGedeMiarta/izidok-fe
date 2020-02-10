<template>
    <div>
        <div class="bg-plum-plate pt-5 pl-5 pr-5 mb-5 rounded">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-success card-box-hover-rise-alt">
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
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-danger card-box-hover-rise-alt">
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
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-warning card-box-hover-rise-alt">
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
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-info card-box-hover-rise-alt">
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
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faUser,
        faLemon,
        faChartBar,
        faNewspaper
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faUser,
        faLemon,
        faChartBar,
        faNewspaper
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        }
    }
</script>