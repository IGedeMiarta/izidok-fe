<template>
    <div>
        <div class="feature-section bg-asteroid">
            <div class="container pt-5">
                <div class="row py-5">
                    <div class="col-md-4">
                        <div class="feature-box px-3 text-white mb-5">
                            <div class="bg-strong-bliss text-center text-white font-size-xl d-50 rounded-circle">
                                <font-awesome-icon icon="birthday-cake"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Blocks</h3>
                            <p class="text-white-50 mt-2">
                                Who are so beguiled and demoralized by the charms of pleasure.
                            </p>
                            <b-button size="sm" pill variant="outline-secondary" class="shadow-none mt-3">Continue reading</b-button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-box px-3 text-white mb-5">
                            <div class="bg-plum-plate text-center text-white font-size-xl d-50 rounded-circle">
                                <font-awesome-icon icon="bus-alt"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Pages</h3>
                            <p class="text-white-50 mt-2">
                                Which toil and pain can procure him some great pleasure.
                            </p>
                            <b-button size="sm" pill variant="outline-secondary" class="shadow-none mt-3">Continue reading</b-button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-box px-3 text-white mb-5">
                            <div class="bg-arielle-smile text-center text-white font-size-xl d-50 rounded-circle">
                                <font-awesome-icon icon="eye-dropper"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Widgets</h3>
                            <p class="text-white-50 mt-2">
                                To take a trivial example, which of us avoids pleasure, some great pleasure.
                            </p>
                            <b-button size="sm" pill variant="outline-secondary" class="shadow-none mt-3">Continue reading</b-button>
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
        faBirthdayCake,
        faEyeDropper,
        faBusAlt,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faBirthdayCake,
        faEyeDropper,
        faBusAlt,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>