<template>
    <div>
        <b-button id="popoverIntegrExample1" variant="second">Example I</b-button>
        <b-popover triggers="click blur" placement="auto" @show="showPopoverIntegrations" ref="popoverIntegrations1" target="popoverIntegrExample1">
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
                            <span class="pb-1 d-block">John Doe <small class="text-black-50">(john@example.com)</small></span>
                            <b-badge variant="success">Active Account</b-badge>
                        </div>
                    </div>
                    <div class="alert alert-warning p-2 mb-1 mt-3 rounded">
                        <div class="align-box-row">
                            <div>
                                <font-awesome-icon icon="bell"/>
                            </div>
                            <div class="pl-3">
                                <small><b class="d-block">Unpaid invoice</b></small>
                                <small>This account will be disabled starting <b>12 January 2021</b>.</small>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="list-group-item bg-transparent p-0">
                    <div class="grid-menu grid-menu-2col">
                        <div class="no-gutters row">
                            <div class="col-sm-6 py-3">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info"/>
                                    </div>
                                    <div class="mt-2 line-height-sm">
                                        <b class="font-size-lg">$9,693</b>
                                        <span class="text-black-50 d-block">revenue</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 py-3">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                    </div>
                                    <div class="mt-2 line-height-sm">
                                        <b class="font-size-lg">2,345</b>
                                        <span class="text-black-50 d-block">users</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="list-group-item rounded-bottom p-3 text-center">
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
                </li>
            </ul>
        </b-popover>

        <b-button id="popoverIntegrExample2" variant="second">Example II</b-button>
        <b-popover triggers="click blur" placement="auto" @show="showPopoverIntegrations" ref="popoverIntegrations2" target="popoverIntegrExample2">
            <ul class="list-group list-group-flush text-left bg-transparent">
                <li class="list-group-item">
                    <div class="align-box-row">
                        <div class="align-self-start">
                            <div class="bg-premium-dark text-center text-white font-size-lg d-40 rounded-circle">
                                <font-awesome-icon icon="lightbulb"/>
                            </div>
                        </div>
                        <div class="pl-3">
                            <b>
                                Blinded by desire
                            </b>
                            <p class="text-black-50 mt-1 mb-0">
                                A wonderful serenity has taken possession.
                            </p>
                            <div class="timeline-list mt-3">
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
                                        <h4 class="timeline-item--label mb-2 font-weight-bold">
                                            Business investor meeting
                                            <span class="badge badge-neutral-info text-info ml-2">New</span>
                                        </h4>
                                        <p>
                                            Mosaic, the first graphical browser, is introduced to the average consumer.
                                        </p>
                                        <div class="mt-3">
                                            <b-button variant="primary" size="sm">Submit Report</b-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="card-footer bg-light p-3 text-center">
                <b-button variant="second">
                    <span class="btn-wrapper--icon">
                        <font-awesome-icon icon="question-circle"/>
                    </span>
                    <span class="btn-wrapper--label">
                        View details
                    </span>
                </b-button>
            </div>
        </b-popover>

        <b-button id="popoverIntegrExample3" variant="second">Example III</b-button>
        <b-popover triggers="click blur" placement="auto" @show="showPopoverIntegrations" ref="popoverIntegrations3" target="popoverIntegrExample3">
            <div class="card-body">
                <div class="chat-wrapper">
                    <div class="chat-item p-2 mb-2">
                        <div class="align-box-row">
                            <div class="avatar-icon-wrapper avatar-icon-lg align-self-start">
                                <div class="avatar-icon rounded border-0">
                                    <img src="@/assets/img/avatars/avatar7.jpg" alt="">
                                </div>
                            </div>
                            <div>
                                <div class="chat-box bg-first text-white">
                                    <p>Bye for now, talk to you later.</p>
                                </div>
                                <small class="mt-2 d-block text-black-50">
                                    <font-awesome-icon icon="clock" class="mr-1 opacity-5"/>
                                    11:01 AM | Yesterday
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="chat-item chat-item-reverse p-2 mb-2">
                        <div class="align-box-row flex-row-reverse">
                            <div class="avatar-icon-wrapper avatar-icon-lg align-self-start">
                                <div class="avatar-icon rounded border-0">
                                    <img src="@/assets/img/avatars/avatar3.jpg" alt="">
                                </div>
                            </div>
                            <div>
                                <div class="chat-box bg-first text-white">
                                    <p>Almost forgot about your tasks.</p>
                                    <p><b>Check the links below:</b></p>
                                    <div class="card bg-premium-dark p-2 mt-3 mb-2">
                                        <div class="text-center py-2">
                                            <a v-b-tooltip href="javascript:void(0);" class="m-1 btn btn-link p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle card-box-hover-rise-alt" title="Menu Example">
                                                <font-awesome-icon icon="dungeon"/>
                                            </a>
                                            <a v-b-tooltip href="javascript:void(0);" class="m-1 btn btn-link p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle card-box-hover-rise-alt" title="Menu Example">
                                                <font-awesome-icon icon="drafting-compass"/>
                                            </a>
                                            <a v-b-tooltip href="javascript:void(0);" class="m-1 btn btn-link p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle card-box-hover-rise-alt" title="Menu Example">
                                                <font-awesome-icon icon="football-ball"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <small class="mt-2 d-block text-black-50">
                                    <font-awesome-icon icon="clock" class="mr-1 opacity-5"/>
                                    11:03 AM | Yesterday
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-white p-3 text-center d-block">
                <b-button variant="primary" size="sm">
                    <font-awesome-icon icon="history" class="mr-1"/>
                    View History
                </b-button>
            </div>
        </b-popover>

        <b-button id="popoverIntegrExample4" variant="second">Example IV</b-button>
        <b-popover triggers="click blur" placement="auto" @show="showPopoverIntegrations" ref="popoverIntegrations4" target="popoverIntegrExample4">
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
    </div>
</template>
<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faAngleUp,
        faBell,
        faHistory,
        faUser,
        faLightbulb
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faAngleUp,
        faBell,
        faHistory,
        faUser,
        faLightbulb
    );
    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        methods: {
            showPopoverIntegrations() {
                this.$refs.popoverIntegrations1._toolpop.getTipElement().classList.add('popover-custom-wrapper','popover-custom-lg','popover-secondary');
                this.$refs.popoverIntegrations2._toolpop.getTipElement().classList.add('popover-custom-wrapper','popover-custom-lg','popover-secondary');
                this.$refs.popoverIntegrations3._toolpop.getTipElement().classList.add('popover-custom-wrapper','popover-custom-lg','popover-secondary');
                this.$refs.popoverIntegrations4._toolpop.getTipElement().classList.add('popover-custom-wrapper','popover-custom-lg','popover-secondary');
            },
        }
    }
</script>