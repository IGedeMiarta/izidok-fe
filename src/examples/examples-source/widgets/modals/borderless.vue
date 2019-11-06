<template>
    <div>
        <b-button variant="primary" v-b-modal="'modal-bbb4'">Open Example I</b-button>
        <b-modal id="modal-bbb4" body-class="p-0" :hide-footer="true" :hide-header="true" size="lg" centered>
            <div class="row no-gutters">
                <div class="col-lg-5">
                    <img src="@/assets/img/stock-photos/stock-1.jpg" class="rounded-left img-fit-container" alt="...">
                </div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <img src="@/assets/img/illustrations/business_plan.svg" class="w-25 d-block img-fluid" alt="">
                        <h1 class="display-4 my-3 font-weight-bold">
                            Wonderful serenity has possession
                        </h1>
                        <p class="font-size-lg text-black">
                            A free hour, when our power of choice is untrammelled and when nothing prevents.
                        </p>
                        <p class="font-size-sm mb-3 text-black-50">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
                        </p>
                        <a href="javascript:void(0);" class="btn btn-primary btn-block">
                            Continue reading
                        </a>
                    </div>
                </div>
            </div>
        </b-modal>

        <b-button variant="primary" v-b-modal="'modal-bbb5'">Open Example II</b-button>
        <b-modal size="xl" body-class="p-0" :hide-footer="true" :hide-header="true" id="modal-bbb5" centered>
            <div class="row no-gutters">
                <div class="col-lg-5">
                    <div class="hero-wrapper bg-composed-wrapper bg-plum-plate h-100 rounded-left">
                        <div class="flex-grow-1 w-100 d-flex align-items-center">
                            <div class="bg-composed-wrapper--image rounded-left" :style="{ backgroundImage: 'url(' + require('@/assets/img/hero-bg/hero-1.jpg') + ')' }"></div>
                            <div class="bg-composed-wrapper--bg bg-second opacity-5 rounded-left"></div>
                            <div class="bg-composed-wrapper--content p-5">
                                <div class="d-flex align-items-center">
                                    <span class="badge badge-pill badge-second px-4 h-auto py-1">New release</span>
                                    <span class="text-white-50 pl-3" v-b-tooltip.right title="More info placeholder!">
                                    <font-awesome-icon icon="question-circle"/>
                                </span>
                                </div>
                                <div class="text-white mt-3">
                                    <h1 class="display-4 my-3 font-weight-bold">
                                        Wonderful serenity has possession
                                    </h1>
                                    <p class="font-size-md mb-0 text-white-50">
                                        A free hour, when our power of choice is untrammelled and when nothing prevents.
                                    </p>
                                    <div class="divider border-2 my-4 border-light opacity-2 rounded w-25"></div>
                                    <div>
                                        <a href="javascript:void(0);" class="btn btn-warning">
                                        <span class="btn-wrapper--label">
                                            Browse gallery
                                        </span>
                                            <span class="btn-wrapper--icon">
                                            <font-awesome-icon icon="arrow-right"/>
                                        </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hero-footer pb-4">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link font-size-lg text-white-50" v-b-tooltip href="javascript:void(0);" title="Facebook">
                                        <font-awesome-icon :icon="['fab', 'facebook-square']" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link font-size-lg text-white-50" v-b-tooltip href="javascript:void(0);" title="Twitter">
                                        <font-awesome-icon :icon="['fab', 'twitter']" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link font-size-lg text-white-50" v-b-tooltip href="javascript:void(0);" title="Google+">
                                        <font-awesome-icon :icon="['fab', 'google-plus']" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link font-size-lg text-white-50" v-b-tooltip href="javascript:void(0);" title="Instagram">
                                        <font-awesome-icon :icon="['fab', 'instagram']" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <b-tabs pills nav-class="nav-line mx-3 my-4">
                        <b-tab title="Overview" active>
                            <div slot="title">
                                Overview
                                <div class="divider"></div>
                            </div>
                            <div class="px-4 py-2">
                                <div class="row">
                                <div class="col-md-6 col-lg-4">
                                    <div class="card card-box text-black-50 mb-5 p-3">
                                        <div class="display-3 text-black font-weight-bold">
                                            31
                                        </div>
                                        <div class="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first"></div>
                                        <div class="font-weight-bold font-size-sm text-uppercase">
                                            Implemented
                                            <br>
                                            bugfixes
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card card-box text-black-50 mb-5 p-3">
                                        <div class="display-3 text-black font-weight-bold">
                                            68
                                        </div>
                                        <div class="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success"></div>
                                        <div class="font-weight-bold font-size-sm text-uppercase">
                                            Unresolved
                                            <br>
                                            tickets
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card card-box text-black-50 mb-5 p-3">
                                        <div class="display-3 text-black font-weight-bold">
                                            57
                                        </div>
                                        <div class="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning"></div>
                                        <div class="font-weight-bold font-size-sm text-uppercase">
                                            Support
                                            <br>
                                            requests
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="card card-box mb-5">
                                <div class="card-body">
                                    <div class="text-left">
                                        <div class="mt-1">
                                            <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                        </div>
                                        <div class="mt-3 line-height-sm">
                                            <b class="font-size-lg text-black pr-1">3,568</b>
                                            <span class="text-black-50">clicks</span>
                                        </div>
                                    </div>
                                    <div class="progress mt-3">
                                        <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                                <b-button variant="outline-primary" class="mb-4">
                                    Example button
                                </b-button>
                            </div>
                        </b-tab>
                        <b-tab title="Sign in">
                            <div slot="title">
                                Sign in
                                <div class="divider"></div>
                            </div>
                            <div class="card shadow-none border-0">
                                <div class="card-header bg-white pb-5">
                                    <div class="text-muted text-center mb-3">
                                        <small>Sign in with</small>
                                    </div>
                                    <div class="text-center">
                                        <b-button variant="facebook" class="mr-2">
                                            <span class="btn-wrapper--icon">
                                                <font-awesome-icon :icon="['fab', 'facebook']" />
                                            </span>
                                            <span class="btn-wrapper--label">
                                                Facebook
                                            </span>
                                        </b-button>
                                        <b-button variant="twitter" class="ml-2">
                                            <span class="btn-wrapper--icon">
                                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                            </span>
                                            <span class="btn-wrapper--label">
                                                Twitter
                                            </span>
                                        </b-button>
                                    </div>
                                </div>
                                <div class="card-body bg-secondary rounded px-lg-5 py-lg-5">
                                    <div class="text-center text-muted mb-4">
                                        <small>Or sign in with credentials</small>
                                    </div>
                                    <form role="form">
                                        <b-form-group>
                                            <b-input-group>
                                                <b-form-input placeholder="Search"></b-form-input>
                                                <b-input-group-text slot="prepend">
                                                    <font-awesome-icon class="mx-auto" icon="envelope"/>
                                                </b-input-group-text>
                                            </b-input-group>
                                        </b-form-group>
                                        <b-form-group>
                                            <b-input-group>
                                                <b-form-input placeholder="Search"></b-form-input>
                                                <b-input-group-text slot="prepend">
                                                    <font-awesome-icon class="mx-auto" icon="unlock-alt"/>
                                                </b-input-group-text>
                                            </b-input-group>
                                        </b-form-group>
                                        <b-form-checkbox>
                                            Remember me
                                        </b-form-checkbox>
                                        <div class="text-center">
                                            <b-button variant="second" class="my-4">Sign in</b-button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="Recent Activity">
                            <div slot="title">
                                Recent Activity
                                <div class="divider"></div>
                            </div>
                            <div class="px-4 py-2">
                                <div class="row">
                                <div class="col-lg-6">
                                    <div class="card card-box mb-5">
                                        <div class="card-indicator bg-first"></div>
                                        <div class="card-body px-4 py-3">
                                            <div class="pb-3 d-flex justify-content-between">
                                                <a href="javascript:void(0);">
                                                    Presentation site design
                                                </a>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="badge badge-first px-3">On hold</div>
                                                <div class="font-size-sm text-danger px-2">
                                                    <font-awesome-icon icon="clock" class="mr-1"/>
                                                    14:22
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card card-box mb-5">
                                        <div class="card-indicator bg-success"></div>
                                        <div class="card-body px-4 py-3">
                                            <div class="pb-3 d-flex justify-content-between">
                                                <a href="javascript:void(0);">
                                                    Create UI mockups
                                                </a>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="badge badge-success px-3">Fixed</div>
                                                <div class="font-size-sm text-dark px-2">
                                                    <font-awesome-icon icon="clock" class="mr-1"/>
                                                    09:41
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="timeline-list mb-5">
                                <div class="timeline-item timeline-item-icon">
                                    <div class="timeline-item--content">
                                        <div class="timeline-item--icon-wrapper bg-danger text-white">
                                            <font-awesome-icon icon="gem"/>
                                        </div>
                                        <h4 class="timeline-item--label mb-2 font-weight-bold">1998</h4>
                                        <p>
                                            Bill Clinton's presidential scandal makes it online.
                                        </p>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-item--content">
                                        <div class="timeline-item--icon"></div>
                                        <h4 class="timeline-item--label mb-2 font-weight-bold">Java exam day</h4>
                                        <p>
                                            Bill Clinton's presidential scandal makes it online.
                                        </p>
                                        <div class="avatar-wrapper-overlap mt-2 mb-1">
                                            <div class="avatar-icon-wrapper avatar-icon-sm">
                                                <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                            </div>
                                            <div class="avatar-icon-wrapper avatar-icon-sm">
                                                <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                                            </div>
                                            <div class="avatar-icon-wrapper avatar-icon-sm">
                                                <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                            </div>
                                            <div class="avatar-icon-wrapper avatar-icon-sm">
                                                <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                            </div>
                                            <div class="avatar-icon-wrapper avatar-icon-sm">
                                                <div class="avatar-icon"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-item--content">
                                        <div class="timeline-item--icon"></div>
                                        <h4 class="timeline-item--label mb-2 font-weight-bold">
                                            Business investor meeting
                                            <span class="badge badge-neutral-info text-info ml-2">New</span>
                                        </h4>
                                        <p>
                                            Mosaic, the first graphical browser, is introduced to the average consumer.
                                        </p>
                                        <div class="mt-2">
                                            <b-button variant="primary" size="sm">Submit Report</b-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faClock,
        faQuestionCircle,
        faArrowRight
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faClock,
        faQuestionCircle,
        faArrowRight
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>