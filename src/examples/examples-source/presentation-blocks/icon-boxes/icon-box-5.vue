<template>
    <div>
        <div class="feature-section bg-vicious-stance">
            <div class="container pt-5">
                <div class="row py-5">
                    <div class="col-md-6">
                        <div class="feature-box text-white mb-5">
                            <div class="bg-deep-blue text-center text-white font-size-xl d-50 rounded-circle">
                                <font-awesome-icon icon="bomb"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Widgets</h3>
                            <p class="text-white-50 mt-2">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and account of the system.
                            </p>
                            <b-button size="sm" pill variant="outline-secondary" class="shadow-none mt-1">Continue reading</b-button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-box text-white mb-5">
                            <div class="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                                <font-awesome-icon icon="network-wired"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold mt-4">Components</h3>
                            <p class="text-white-50 mt-2">
                                The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.
                            </p>
                            <b-button size="sm" pill variant="outline-secondary" class="shadow-none mt-1">Continue reading</b-button>
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
        faNetworkWired,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faBomb,
        faNetworkWired,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>