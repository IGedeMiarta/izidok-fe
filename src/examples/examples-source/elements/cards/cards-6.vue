<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card card-transparent mb-5">
                <a href="javascript:void(0);" class="card-img-wrapper rounded">
                    <div class="img-wrapper-overlay">
                        <div class="overlay-btn-wrapper">
                            <b-button variant="facebook" class="mr-1">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon :icon="['fab', 'facebook']" />
                                </span>
                            </b-button>
                            <b-button variant="twitter" class="ml-1">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon :icon="['fab', 'twitter']" />
                                </span>
                            </b-button>
                        </div>
                    </div>
                    <div class="card-badges card-badges-bottom">
                        <span class="badge badge-pill badge-warning">Warning</span>
                    </div>
                    <img src="@/assets/img/stock-photos/stock-1.jpg" class="card-img-top rounded" alt="...">
                </a>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card card-transparent mb-5">
                <a href="javascript:void(0);" class="card-img-wrapper rounded">
                    <div class="img-wrapper-overlay">
                        <div class="overlay-btn-wrapper">
                            <div class="card-title mb-2">Sheldon Fischer</div>
                            <b-button size="sm" variant="info" pill class="mt-2">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="id-badge"/>
                                </span>
                                <span class="btn-wrapper--label">View Profile</span>
                            </b-button>
                        </div>
                    </div>
                    <div class="card-badges">
                        <span class="badge badge-pill badge-neutral-info text-info">Info</span>
                    </div>
                    <img src="@/assets/img/stock-photos/stock-2.jpg" class="card-img-top rounded" alt="...">
                </a>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card card-transparent mb-5">
                <a href="javascript:void(0);" class="card-img-wrapper rounded">
                    <div class="img-wrapper-overlay">
                        <div class="overlay-btn-wrapper">
                            <b-button pill variant="outline-secondary" class="border-2 mr-1">
                                <font-awesome-icon icon="comment-dots"/>
                            </b-button>
                            <b-button pill variant="outline-secondary" class="border-2 ml-1">
                                <font-awesome-icon icon="envelope-open-text"/>
                            </b-button>

                        </div>
                    </div>
                    <div class="card-badges card-badges-bottom">
                        <b-badge variant="danger">Danger</b-badge>
                    </div>
                    <img src="@/assets/img/stock-photos/stock-3.jpg" class="card-img-top rounded" alt="...">
                </a>
            </div>
        </div>
    </div>

</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faEnvelopeOpenText,
        faIdBadge,
        faCommentDots,
    } from '@fortawesome/free-solid-svg-icons'
    import {
        faTwitter,
        faFacebook
    } from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEnvelopeOpenText,
        faCommentDots,
        faIdBadge,
        faTwitter,
        faFacebook
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>