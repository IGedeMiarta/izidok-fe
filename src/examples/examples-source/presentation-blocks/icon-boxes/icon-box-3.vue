<template>
    <div>
        <div class="feature-section">
            <div class="container pt-5">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="feature-box text-center mb-5">
                            <div class="bg-primary text-white font-size-xl mb-2 mx-auto d-50 rounded">
                                <font-awesome-icon icon="bomb"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold my-3">Widgets</h3>
                            <p class="text-black-50 mb-3">
                                It takes a trivial example, which of us ever undertakes.
                            </p>
                            <a href="javascript:void(0);" class="btn btn-link btn-link-primary pl-0 pr-0" title="Learn more"><span>Learn more</span></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="feature-box text-center mb-5">
                            <div class="bg-primary text-white font-size-xl mx-auto d-50 rounded mb-1">
                                <font-awesome-icon icon="network-wired"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold my-3">Components</h3>
                            <p class="text-black-50 mb-2">
                                Pleasure that has no annoying consequences of the moment.
                            </p>
                            <a href="javascript:void(0);" class="btn btn-link btn-link-primary pl-0 pr-0" title="Learn more"><span>Learn more</span></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="feature-box text-center mb-5">
                            <div class="bg-primary text-white font-size-xl mb-2 mx-auto d-50 rounded mb-1">
                                <font-awesome-icon icon="birthday-cake"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold my-3">Blocks</h3>
                            <p class="text-black-50 mb-2">
                                So blinded by desire, that they cannot foresee.
                            </p>
                            <a href="javascript:void(0);" class="btn btn-link btn-link-primary pl-0 pr-0" title="Learn more"><span>Learn more</span></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="feature-box text-center mb-5">
                            <div class="bg-primary text-white font-size-xl mb-2 mx-auto d-50 rounded mb-1">
                                <font-awesome-icon icon="bus-alt"/>
                            </div>
                            <h3 class="font-size-lg font-weight-bold my-3">Pages</h3>
                            <p class="text-black-50 mb-2">
                                But I must explain to you how all this mistaken.
                            </p>
                            <a href="javascript:void(0);" class="btn btn-link btn-link-primary pl-0 pr-0" title="Learn more"><span>Learn more</span></a>
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