<template>
    <span>
        <span class="d-inline-block mr-2" id="tooltipSuccessWrapper">
            <button class="btn bg-neutral-success text-success font-size-lg p-0 d-inline-block shadow-none text-center d-44 rounded position-relative"  v-b-modal="'modal-notifications'">
                <span class="badge badge-circle badge-success">New notifications</span>
                <font-awesome-icon icon="bell" />
            </button>
        </span>
        <b-tooltip @show="showTooltip" ref="tooltipSuccess" target="tooltipSuccessWrapper">
            You have <b>0</b> new notifications
        </b-tooltip>
        <b-modal size="xl" body-class="p-0" :hide-footer="true" :hide-header="true" id="modal-notifications" centered>
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

        <button class="btn bg-neutral-danger text-danger font-size-lg mr-2 p-0 d-inline-block shadow-none text-center d-44 rounded position-relative" type="button" id="popoverIntegrExample4">
            <span class="badge badge-circle badge-danger badge-header-alt">Online</span>
            <font-awesome-icon :icon="['far', 'comment']" />
        </button>
        <b-popover triggers="click blur" placement="bottom" @show="showPopoverIntegrations" ref="popoverIntegrations4" target="popoverIntegrExample4">
            <ul class="list-group list-group-flush text-left bg-transparent">
                <li class="list-group-item rounded-top">
                    <div class="align-box-row">
                        <div>
                            <div class="avatar-icon-wrapper avatar-icon-md">
                                <div class="avatar-icon rounded-circle"><img
                                        src="@/assets/img/avatars/avatar2.jpg"
                                        alt=""></div>
                            </div>
                        </div>
                        <div class="pl-2">
                            <span class="pb-1 d-block">John Doe</span>
                            <small class="pb-1 text-black-50 d-block">John's bio description here...</small>
                            <div class="divider my-2"></div>
                            <small class="text-black-50">
                                Deadline: <b class="text-danger">12 July 2029</b>
                            </small>
                        </div>
                    </div>
                </li>
                <li class="list-group-item bg-transparent py-2">
                    <div class="align-box-row mb-1">
                        <div>
                            <small class="font-weight-bold">Orders</small>
                        </div>
                        <div class="ml-auto">
                            <div class="font-weight-bold text-success">
                                348
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar-sm progress-bar-animated-alt progress w-100">
                        <div class="progress-bar bg-success w-43" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="align-box-row progress-bar--label mt-1 text-muted">
                        <small class="text-dark">0</small>
                        <small class="ml-auto">100%</small>
                    </div>
                </li>
            </ul>
            <div class="card-footer bg-white p-3 text-center d-block">
                <b-button variant="success" size="sm" class="mr-1">
                    <font-awesome-icon icon="sync" spin class="mr-1"/>
                    Refresh
                </b-button>
                <b-button variant="danger" size="sm" class="ml-1">
                    <font-awesome-icon icon="sync" class="mr-1"/>
                    Remove
                </b-button>
            </div>
        </b-popover>

        <button type="button" class="btn bg-neutral-first text-first font-size-lg mr-2 p-0 d-inline-block shadow-none text-center d-44 rounded" id="popoverIntegrExample3">
            <font-awesome-icon icon="th" />
        </button>
        <b-popover triggers="click blur" placement="bottom" @show="showPopoverIntegrations" ref="popoverIntegrations3" target="popoverIntegrExample3">
            <div class="px-3 pt-3 pb-3 text-center">
                <div class="m-3 d-inline-block text-center">
                    <a href="javascript:void(0);" class="btn btn-link p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                        <font-awesome-icon icon="drafting-compass" />
                    </a>
                    <div class="d-block text-white-50">Tasks</div>
                </div>
                <div class="m-3 d-inline-block text-center">
                    <a href="javascript:void(0);" class="btn btn-link p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                        <font-awesome-icon icon="dungeon" />
                    </a>
                    <div class="d-block text-white-50">Reports</div>
                </div>
                <div class="m-3 d-inline-block text-center">
                    <a href="javascript:void(0);" class="btn btn-link p-0 bg-arielle-smile d-inline-block text-center text-white font-size-xl d-50 rounded border-0 mb-2">
                        <font-awesome-icon icon="football-ball" />
                    </a>
                    <div class="d-block text-white-50">Stats</div>
                </div>
            </div>
            <div class="divider opacity-2 bg-white mb-1"></div>
            <div class="text-center">
                <a href="javascript:void(0);" class="btn btn-link-light text-white">
                    View more items
                </a>
            </div>
        </b-popover>

    </span>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faBell,
        faCommentDots,
        faTh,
        faQuestionCircle,
        faArrowRight,
        faLemon,
        faUnlockAlt,
        faEnvelope,
        faClock,
        faGem,
        faSync,
        faAngleDown,
        faDungeon,
        faFootballBall,
        faDraftingCompass
    } from '@fortawesome/free-solid-svg-icons'
    import {
        faComment
    } from '@fortawesome/free-regular-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import {
        faFacebookSquare,
        faGooglePlus,
        faTwitter,
        faInstagram,
        faFacebook
    } from '@fortawesome/free-brands-svg-icons'
    library.add(
        faBell,
        faCommentDots,
        faTh,
        faQuestionCircle,
        faArrowRight,
        faLemon,
        faComment,
        faUnlockAlt,
        faEnvelope,
        faClock,
        faSync,
        faAngleDown,
        faGem,
        faFacebookSquare,
        faGooglePlus,
        faTwitter,
        faInstagram,
        faFacebook,
        faDungeon,
        faFootballBall,
        faDraftingCompass
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        methods: {
            showTooltip() {
                this.$refs.tooltipSuccess._toolpop.getTipElement().classList.add('tooltip-success');
            },
            showPopoverIntegrations() {
                this.$refs.popoverIntegrations4._toolpop.getTipElement().classList.add('popover-custom-wrapper','popover-custom-lg','popover-secondary');
                this.$refs.popoverIntegrations3._toolpop.getTipElement().classList.add('popover-custom-wrapper','popover-custom-lg','popover-second');
            },
        }
    }
</script>

