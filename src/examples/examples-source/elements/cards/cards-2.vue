<template>
    <div class="row">
        <div class="col-lg-4">
            <a href="javascript:void(0);" class="card card-box-hover-rise mb-5">
                <div class="card-badges">
                    <span class="badge badge-pill badge-warning">Warning</span>
                </div>
                <img src="@/assets/img/stock-photos/stock-1.jpg" class="card-img-top" alt="...">
                <div class="card-body card-body-avatar">
                    <div class="avatar-icon-wrapper">
                        <div class="avatar-icon"><img
                                src="@/assets/img/avatars/avatar2.jpg"
                                alt=""></div>
                    </div>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="card-date mt-2">
                        <font-awesome-icon icon="clock" class="text-muted mr-1"/>
                        <small class="text-muted">
                            added moments ago
                        </small>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-lg-4">
            <a href="javascript:void(0);" class="card card-box-hover-rise mb-5">
                <div class="card-badges">
                    <span class="badge badge-pill badge-success">Success</span>
                    <span class="badge badge-pill badge-neutral-info text-info">Info</span>
                </div>
                <img src="@/assets/img/stock-photos/stock-2.jpg" class="card-img-top" alt="...">
                <div class="card-body card-body-avatar">
                    <div class="avatar-icon-wrapper">
                        <div class="avatar-icon"><img
                                src="@/assets/img/avatars/avatar2.jpg"
                                alt=""></div>
                    </div>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="card-date mt-2">
                        <font-awesome-icon icon="clock" class="text-muted mr-1"/>
                        <small class="text-muted">
                            added moments ago
                        </small>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-lg-4">
            <a href="javascript:void(0);" class="card card-box-hover-rise mb-5">
                <div class="card-badges">
                    <b-badge variant="danger">Danger</b-badge>
                </div>
                <img src="@/assets/img/stock-photos/stock-3.jpg" class="card-img-top" alt="...">
                <div class="card-body card-body-avatar">
                    <div class="avatar-icon-wrapper">
                        <div class="avatar-icon"><img
                                src="@/assets/img/avatars/avatar2.jpg"
                                alt=""></div>
                    </div>
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="card-date mt-2">
                        <font-awesome-icon icon="clock" class="text-muted mr-1"/>
                        <small class="text-muted">
                            added moments ago
                        </small>
                    </div>
                </div>
            </a>
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