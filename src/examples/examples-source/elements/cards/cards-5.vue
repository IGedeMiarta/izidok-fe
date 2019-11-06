<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card mb-5">
                <div class="card-img-wrapper">
                    <div class="card-badges card-badges-bottom">
                        <span class="badge badge-pill badge-warning">Warning</span>
                    </div>
                    <img src="@/assets/img/stock-photos/stock-1.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body text-center card-body-avatar">
                    <div class="avatar-icon-wrapper avatar-icon-xl">
                        <div class="avatar-icon rounded"><img
                                src="@/assets/img/avatars/avatar2.jpg"
                                alt=""></div>
                    </div>
                    <h3 class="card-title mt-4 mb-3">John Doe</h3>
                    <p class="card-text mb-3">Some quick example text to build on the card title ...</p>
                    <div>
                        <b-button variant="facebook">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon :icon="['fab', 'facebook']" />
                            </span>
                        </b-button>
                        <b-button variant="dribbble" class="mr-2 ml-2">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon :icon="['fab', 'dribbble']" />
                            </span>
                        </b-button>
                        <b-button variant="twitter">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                            </span>
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-5">
                <div class="card-img-wrapper">
                    <div class="card-badges">
                        <span class="badge badge-pill badge-success mr-2">Success</span>
                        <span class="badge badge-pill badge-neutral-info text-info">Info</span>
                    </div>
                    <img src="@/assets/img/stock-photos/stock-3.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body card-body-avatar">
                    <div class="avatar-icon-wrapper avatar-icon-lg">
                        <div class="avatar-icon rounded"><img
                                src="@/assets/img/avatars/avatar2.jpg"
                                alt=""></div>
                    </div>
                    <h5 class="card-title mt-3">Kate</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk...</p>

                    <b-button size="sm" variant="success" class="mt-2">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon icon="comment-dots"/>
                        </span>
                        <span class="btn-wrapper--label">Send Message</span>
                    </b-button>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-5">
                <div class="card-img-wrapper">
                    <img src="@/assets/img/stock-photos/stock-2.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title mt-2">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="card-date mt-2">
                        <font-awesome-icon icon="clock" class="text-muted mr-1"/>
                        <small class="text-muted">
                            added moments ago
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faClock,
        faCommentDots,
    } from '@fortawesome/free-solid-svg-icons'
    import {
        faTwitter,
        faDribbble,
        faFacebook
    } from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faClock,
        faCommentDots,
        faTwitter,
        faDribbble,
        faFacebook
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>