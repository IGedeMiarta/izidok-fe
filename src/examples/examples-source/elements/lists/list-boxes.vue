<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-body">
                        <div class="d-flex align-items-center flex-column flex-sm-row">
                            <div>
                                <div class="bg-deep-blue text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                                    <font-awesome-icon icon="air-freshener"/>
                                </div>
                            </div>
                            <div class="pl-0 pl-sm-4">
                                <div class="d-flex align-items-center">
                                    <span class="font-size-lg">Business meeting</span>
                                    <span class="badge badge-neutral-info text-info ml-2">New</span>
                                </div>
                                <small>
                                    Mosaic, the first graphical browser...
                                </small>
                            </div>
                            <div class="mt-3 mt-sm-0 ml-sm-auto">
                                <b-button variant="success">
                                    <span class="btn-wrapper--icon">
                                        <font-awesome-icon icon="question-circle"/>
                                    </span>
                                    <span class="btn-wrapper--label">
                                    Contact
                                </span>
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-body">
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
                                        <img src="@/assets/img/stock-photos/stock-3.jpg" class="card-img-top rounded" style="width: 140px" alt="...">
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
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faPlayCircle,
        faQuestionCircle,
        faAirFreshener,

    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faPlayCircle,
        faQuestionCircle,
        faAirFreshener,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>