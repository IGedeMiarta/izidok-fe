<template>
    <div>
        <div class="pt-5">
            <div class="container py-5">
                <div class="card shadow-xxl mb-5">
                    <div class="p-5">
                        <div class="d-flex flex-column flex-lg-row align-items-center">
                            <div class="pl-0 pl-lg-5 py-0 py-md-2 text-center text-lg-left">
                                <div class="mb-4">
                                    <span class="badge badge-pill badge-warning">Latest release</span>
                                    <h1 class="display-3 my-3 font-weight-bold">
                                        Volutpat pretium
                                    </h1>
                                    <p class="font-size-lg text-black-50">
                                        One morning, when Gregor Samsa woke from troubled dreams.
                                    </p>
                                </div>
                                <div>
                                    <a href="javascript:void(0);" class="btn btn-lg btn-outline-primary btn-pill">
                                        <span class="btn-wrapper--icon">
                                            <font-awesome-icon icon="question-circle"/>
                                        </span>
                                        <span class="btn-wrapper--label">
                                            Read more
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="p-4">
                                <img src="@/assets/img/illustrations/data_points.svg" class="img-fluid" alt="">
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
        faQuestionCircle
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faQuestionCircle
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>