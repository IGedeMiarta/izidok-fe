<template>
    <div>
        <div class="feature-box bg-slick-carbon py-5">
            <div class="container py-5">
                <div class="row">
                    <div class="d-flex col-lg-6 align-items-center">
                        <div class="card card-box flex-fill mb-5 mb-lg-0 demo-img-wrapper demo-img-wrapper-dark">
                            <font-awesome-icon icon="camera-retro"/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="py-0 py-lg-5">
                            <div class="pl-0 pl-lg-5 text-white">
                                <h1 class="display-3 mb-3 font-weight-bold">
                                    Pleasure rationally encounter consequences
                                </h1>
                                <p class="font-size-lg text-white-50">
                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.
                                </p>
                                <div class="d-block mt-4">
                                    <slick ref="slick" class="slick-slider-left" :options="{'slidesToShow': 2, 'slidesToScroll': 2, 'dots': true}">
                                        <div>
                                            <div class="feature-box pr-4">
                                                <h3 class="font-size-lg font-weight-bold my-3">
                                                    <a href="javascript:void(0);" class="text-white">
                                                        Elements
                                                    </a>
                                                </h3>
                                                <p class="text-white-50 mb-3">
                                                    It takes a trivial example, which of us ever undertakes.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="feature-box pr-4">
                                                <h3 class="font-size-lg font-weight-bold my-3">
                                                    <a href="javascript:void(0);" class="text-white">
                                                        Widgets
                                                    </a>
                                                </h3>
                                                <p class="text-white-50 mb-3">
                                                    Occur in which toil and pain can procure him some great pleasure.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="feature-box pr-4">
                                                <h3 class="font-size-lg font-weight-bold my-3">
                                                    <a href="javascript:void(0);" class="text-white">
                                                        Components
                                                    </a>
                                                </h3>
                                                <p class="text-white-50 mb-3">
                                                    Nor again is there anyone who loves or pursues or desires.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="feature-box pr-4">
                                                <h3 class="font-size-lg font-weight-bold my-3">
                                                    <a href="javascript:void(0);" class="text-white">
                                                        Pages
                                                    </a>
                                                </h3>
                                                <p class="text-white-50 mb-3">
                                                    On the other hand, we denounce with righteous indignation.
                                                </p>
                                            </div>
                                        </div>
                                    </slick>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Slick from 'vue-slick';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faCameraRetro
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faCameraRetro
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            Slick
        },
    }
</script>