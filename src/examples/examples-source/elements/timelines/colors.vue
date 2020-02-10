<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <div class="timeline-list mb-5 timeline-list-success">
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label">Business investor meeting</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                17<sup>th</sup> September
                            </small>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label font-weight-bold">Learning round table gathering</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                18<sup>th</sup> September
                            </small>
                            <p class="mt-3">The World Wide Web goes live with its first web page.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label">Java exam day</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                19<sup>th</sup> September
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="timeline-list mb-5 timeline-list-danger">
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label font-weight-bold">Business investor meeting</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                17<sup>th</sup> September
                            </small>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label">Learning round table gathering</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                18<sup>th</sup> September
                            </small>
                            <p class="mt-3">The World Wide Web goes live with its first web page.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label">Java exam day</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                19<sup>th</sup> September
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="timeline-list mb-5 timeline-list-warning">
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label">Business investor meeting</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                17<sup>th</sup> September
                            </small>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label">Learning round table gathering</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                18<sup>th</sup> September
                            </small>
                            <p class="mt-3">The World Wide Web goes live with its first web page.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label font-weight-bold">Java exam day</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                19<sup>th</sup> September
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="timeline-list mb-5 timeline-list-info">
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label">Business investor meeting</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                17<sup>th</sup> September
                            </small>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label font-weight-bold">Learning round table gathering</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                18<sup>th</sup> September
                            </small>
                            <p class="mt-3">The World Wide Web goes live with its first web page.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-item--content">
                            <div class="timeline-item--icon"></div>
                            <h4 class="timeline-item--label">Java exam day</h4>
                            <small class="mt-2 d-block">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                19<sup>th</sup> September
                            </small>
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
        faClock
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faClock
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>