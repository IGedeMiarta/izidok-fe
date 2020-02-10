<template>
    <div>
        <div class="feature-section">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="feature-box my-5 text-center">
                            <div class="bg-deep-blue text-white font-size-xl mx-auto d-50 rounded-circle">
                                <font-awesome-icon icon="bomb"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Widgets</h3>
                            <p class="text-black-50 mt-2 px-2">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you.
                            </p>
                            <b-button size="sm" variant="outline-first" class="mt-1">
                                <span class="btn-wrapper--label">Learn more</span>
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                            </b-button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-box my-5 text-center">
                            <div class="bg-grow-early text-white font-size-xl mx-auto d-50 rounded-circle">
                                <font-awesome-icon icon="network-wired"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Components</h3>
                            <p class="text-black-50 mt-2 px-2">
                                The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.
                            </p>
                            <b-button size="sm" variant="outline-first" class="mt-1">
                                <span class="btn-wrapper--label">Learn more</span>
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                            </b-button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-box my-5 text-center">
                            <div class="bg-strong-bliss text-white font-size-xl mx-auto d-50 rounded-circle">
                                <font-awesome-icon icon="birthday-cake"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Blocks</h3>
                            <p class="text-black-50 mt-2 px-2">
                                Who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.
                            </p>
                            <b-button size="sm" variant="outline-first" class="mt-1">
                                <span class="btn-wrapper--label">Learn more</span>
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                            </b-button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-box my-5 text-center">
                            <div class="bg-plum-plate text-white font-size-xl mx-auto d-50 rounded-circle">
                                <font-awesome-icon icon="bus-alt"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Pages</h3>
                            <p class="text-black-50 mt-2 px-2">
                                Which toil and pain can procure him some great pleasure. To take a trivial example, which of us avoids pleasure.
                            </p>
                            <b-button size="sm" variant="outline-first" class="mt-1">
                                <span class="btn-wrapper--label">Learn more</span>
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                            </b-button>
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
        faBomb,
        faBusAlt,
        faBirthdayCake,
        faNetworkWired,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faBomb,
        faBusAlt,
        faBirthdayCake,
        faNetworkWired,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>