<template>
    <div>
        <div class="feature-box py-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="py-0 pb-5 py-lg-5">
                            <div class="pr-0 pr-lg-5">
                                <h1 class="display-3 mb-3 font-weight-bold">
                                    Wonderful serenity has possession
                                </h1>
                                <p class="font-size-lg text-black-50">
                                    A free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.
                                </p>
                            </div>
                            <div class="d-block mt-4">
                                <slick ref="slick" class="slick-slider-left" :options="{'slidesToShow': 2, 'slidesToScroll': 2, 'dots': true}">
                                    <div>
                                        <div class="feature-box pr-4">
                                            <h3 class="font-size-lg font-weight-bold my-3">
                                                <a href="javascript:void(0);" class="text-first">
                                                    Elements
                                                </a>
                                            </h3>
                                            <p class="text-black-50 mb-3">
                                                It takes a trivial example, which of us ever undertakes.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="feature-box pr-4">
                                            <h3 class="font-size-lg font-weight-bold my-3">
                                                <a href="javascript:void(0);" class="text-first">
                                                    Widgets
                                                </a>
                                            </h3>
                                            <p class="text-black-50 mb-3">
                                                Occur in which toil and pain can procure him some great pleasure.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="feature-box pr-4">
                                            <h3 class="font-size-lg font-weight-bold my-3">
                                                <a href="javascript:void(0);" class="text-first">
                                                    Components
                                                </a>
                                            </h3>
                                            <p class="text-black-50 mb-3">
                                                Nor again is there anyone who loves or pursues or desires.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="feature-box pr-4">
                                            <h3 class="font-size-lg font-weight-bold my-3">
                                                <a href="javascript:void(0);" class="text-first">
                                                    Pages
                                                </a>
                                            </h3>
                                            <p class="text-black-50 mb-3">
                                                On the other hand, we denounce with righteous indignation.
                                            </p>
                                        </div>
                                    </div>
                                </slick>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex col-lg-6 align-items-center">
                        <img src="@/assets/img/illustrations/projections.svg" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: 'home',
        components: {
            Slick
        },
    }
</script>