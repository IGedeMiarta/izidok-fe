<template>
    <div>
        <div class="feature-section py-3 bg-light">
            <div class="container pt-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="feature-box mb-5">
                            <div class="font-size-xxl text-primary rounded-circle">
                                <font-awesome-icon icon="bomb"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-2">Widgets</h3>
                            <p class="text-black-50 mt-3">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-box mb-5">
                            <div class="font-size-xxl text-danger rounded-circle">
                                <font-awesome-icon icon="network-wired"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-2">Components</h3>
                            <p class="text-black-50 mt-3">
                                The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-box mb-5">
                            <div class="font-size-xxl text-success rounded-circle">
                                <font-awesome-icon icon="birthday-cake"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-2">Blocks</h3>
                            <p class="text-black-50 mt-3">
                                Who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-box mb-5">
                            <div class="font-size-xxl text-warning rounded-circle">
                                <font-awesome-icon icon="bus-alt"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-2">Pages</h3>
                            <p class="text-black-50 mt-3">
                                Which toil and pain can procure him some great pleasure. To take a trivial example, which of us avoids pleasure.
                            </p>
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