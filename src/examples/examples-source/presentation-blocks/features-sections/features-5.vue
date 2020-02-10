<template>
    <div>
        <div class="py-5">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-6 d-flex align-items-center text-center text-lg-left">
                        <div class="mb-5 mb-lg-0">
                            <div class="mb-4">
                                <span class="badge badge-pill badge-warning">Latest release</span>
                                <h1 class="display-3 mt-3 font-weight-bold">
                                    Premium UI Kit
                                </h1>
                                <div class="divider border-2 mx-auto mx-lg-0 my-3 border-light w-43"></div>
                                <p class="font-size-lg text-black-50">
                                    Travelling day in and day out. Doing business like this takes much more effort than doing your own business.
                                </p>
                            </div>
                            <div class="wow fadeIn" data-wow-delay="1s">
                                <a href="javascript:void(0);" class="btn btn-success d-block d-sm-inline-block">
                                   <span class="btn-wrapper--label">
                                        Read more
                                    </span>
                                    <span class="btn-wrapper--icon">
                                        <font-awesome-icon icon="question-circle"/>
                                    </span>
                                </a>
                                <a href="javascript:void(0);" class="btn btn-link btn-link-first d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3" title="View documentation">
                                    <span>
                                        Documentation
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card shadow-xxl p-3">
                            <div class="card card-box demo-img-wrapper shadow-none" style="height: 350px;">
                                <font-awesome-icon icon="camera-retro"/>
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
        faCameraRetro,
        faQuestionCircle
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faCameraRetro,
        faQuestionCircle
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>