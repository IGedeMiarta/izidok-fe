<template>
    <div>
        <div class="bg-premium-dark py-5">
            <div class="container py-5">
                <div class="mb-5 text-center">
                    <h1 class="display-3 text-white mb-2 font-weight-bold">
                        Plans & pricing
                    </h1>
                    <p class="font-size-lg text-white-50">
                        Indignation and dislike men who are so beguiled and demoralized.
                    </p>
                    <div role="group" class="btn-group mt-3">
                        <a href="javascript:void(0);" class="active btn shadow-none btn-outline-secondary">Monthly plans</a>
                        <a href="javascript:void(0);" class="btn shadow-none btn-outline-secondary">Yearly plans</a>
                    </div>
                </div>
                <div class="col-md-9 mx-auto">
                    <div class="row no-gutters">
                        <div class="col-lg-6 order-2 order-lg-1 d-flex align-items-center">
                            <div class="card bg-secondary w-100 p-5 br-lg-right-0">
                                <h5 class="font-size-xl">
                                    Standard License
                                    <strong class="pt-2 font-weight-bold d-block">
                                        $69
                                        <small class="opacity-5">one time fee</small>
                                    </strong>
                                </h5>
                                <ul class="list-unstyled text-left my-4 font-weight-bold">
                                    <li class="px-4 py-2">
                                        <font-awesome-icon icon="check-circle" class="text-success font-size-lg mr-2"/>
                                        Unlimited Tasks
                                    </li>
                                    <li class="px-4 py-2">
                                        <font-awesome-icon icon="check-circle" class="text-success font-size-lg mr-2"/>
                                        Unlimited Teams
                                    </li>
                                    <li class="px-4 py-2">
                                        <font-awesome-icon icon="check-circle" class="text-success font-size-lg mr-2"/>
                                        All Integrations
                                    </li>
                                    <li class="px-4 py-2">
                                        <font-awesome-icon icon="times-circle" class="text-danger font-size-lg mr-2"/>
                                        Premium support
                                    </li>
                                </ul>
                                <a class="btn btn-lg btn-block btn-primary" href="javascript:void(0);">
                                    Buy now
                                </a>
                                <div class="mt-3">
                                    <b-button variant="link" class="text-primary" title="Licenses Details">
                                        <font-awesome-icon class="mr-2" icon="question-circle"/>
                                        Licenses Details
                                    </b-button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 mb-5 mb-lg-0 order-lg-2">
                            <div class="card w-100 shadow-lg p-5 text-white p-5 bg-plum-plate">
                                <div class="py-4">
                                    <h5 class="font-size-xl">
                                        Extended License
                                        <strong class="pt-2 font-weight-bold d-block">
                                            $99
                                            <small class="opacity-5">one time fee</small>
                                        </strong>
                                    </h5>
                                    <ul class="list-unstyled text-left my-4 font-weight-bold">
                                        <li class="px-4 py-2">
                                            <font-awesome-icon icon="check-circle" class="text-success font-size-lg mr-2"/>

                                            Unlimited Tasks
                                        </li>
                                        <li class="px-4 py-2">
                                            <font-awesome-icon icon="check-circle" class="text-success font-size-lg mr-2"/>
                                            Unlimited Teams
                                        </li>
                                        <li class="px-4 py-2">
                                            <font-awesome-icon icon="check-circle" class="text-success font-size-lg mr-2"/>
                                            All Integrations
                                        </li>
                                        <li class="px-4 py-2">
                                            <font-awesome-icon icon="times-circle" class="text-danger font-size-lg mr-2"/>
                                            Premium support
                                        </li>
                                    </ul>
                                    <a class="btn btn-lg btn-block btn-warning" href="javascript:void(0);">
                                        Buy now
                                    </a>
                                    <div class="mt-3">
                                        <b-button variant="link" class="text-white" title="Licenses Details">
                                            <font-awesome-icon class="mr-2" icon="question-circle"/>
                                            Licenses Details
                                        </b-button>
                                    </div>
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
        faCheckCircle,
        faTimesCircle,
        faQuestionCircle
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faCheckCircle,
        faTimesCircle,
        faQuestionCircle
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>