<template>
    <div>
        <div class="bg-light pt-5">
            <div class="container py-5">
                <div class="card shadow-xxl mb-5">
                    <div class="p-5">
                        <div class="d-flex flex-lg-row flex-column align-items-center">
                            <div class="feature-box-img p-4 p-lg-0 mb-5 mb-lg-0">
                                <img src="@/assets/img/stock-photos/stock-1.jpg" class="img-fluid" alt="...">
                            </div>
                            <div class="pl-0 pl-lg-5 py-0 py-lg-2 text-center text-lg-left">
                                <div class="mb-4">
                                    <span class="badge badge-pill badge-success">New Release</span>
                                    <h1 class="display-4 mt-3 font-weight-bold">
                                        Volutpat pretium libero.
                                    </h1>
                                    <div class="my-4">
                                        <a v-b-tooltip href="javascript:void(0);" class="mr-3 btn btn-primary p-0 d-inline-block text-center font-size-lg d-50 rounded" title="Menu Example">
                                            <font-awesome-icon icon="cloud-moon-rain"/>
                                        </a>
                                        <a v-b-tooltip href="javascript:void(0);" class="mr-3 btn btn-success p-0 d-inline-block text-center font-size-lg d-50 rounded" title="Menu Example">
                                            <font-awesome-icon icon="cloud-sun"/>
                                        </a>
                                        <a v-b-tooltip href="javascript:void(0);" class="btn btn-danger p-0 d-inline-block text-center font-size-lg d-50 rounded" title="Menu Example">
                                            <font-awesome-icon icon="cloud-meatball"/>
                                        </a>
                                    </div>
                                    <p class="font-size-lg text-black-50">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
                                    </p>
                                </div>
                                <div class="wow fadeIn" data-wow-delay="1s">
                                    <a href="javascript:void(0);" class="btn btn-lg btn-primary d-block d-sm-inline-block">
                                       <span class="btn-wrapper--icon">
                                            <font-awesome-icon icon="question-circle"/>
                                        </span>
                                        <span class="btn-wrapper--label">
                                            View Details
                                        </span>
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-lg btn-outline-second d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3" title="View documentation">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="question-circle"/>
                                </span>
                                        <span class="btn-wrapper--label">
                                    Documentation
                                </span>
                                    </a>
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
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faQuestionCircle,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faQuestionCircle,
        faCloudMeatball,
        faCloudSun,
        faCloudMoonRain,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>