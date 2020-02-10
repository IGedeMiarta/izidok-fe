<template>
    <div>

        <b-button id="tooltipIntegrExample1" variant="second">Example I</b-button>
        <b-tooltip @show="showTooltipIntegrations" ref="tooltipIntegrations1" target="tooltipIntegrExample1">
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
                            <span class="badge badge-success">Active</span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item bg-transparent p-0">
                    <div class="grid-menu grid-menu-2col">
                        <div class="no-gutters row">
                            <div class="col-sm-6 py-3">
                                <div class="line-height-sm text-center">
                                    <b class="font-size-lg">2,345</b>
                                    <span class="text-black-50 d-block">users</span>
                                </div>
                            </div>
                            <div class="col-sm-6 py-3">
                                <div class="line-height-sm text-center">
                                    <b class="font-size-lg">$9,693</b>
                                    <span class="text-black-50 d-block">revenue</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </b-tooltip>

        <b-button id="tooltipIntegrExample2" variant="second">Example II</b-button>
        <b-tooltip @show="showTooltipIntegrations" ref="tooltipIntegrations2" target="tooltipIntegrExample2">
            <ul class="list-group list-group-flush text-left bg-transparent">
                <li class="list-group-item p-0 rounded-top rounded-bottom">
                    <div class="grid-menu grid-menu-2col">
                        <div class="no-gutters row text-center">
                            <div class="col-sm-6 py-3">
                                <div class="font-weight-bold">
                                    <small class="text-black-50 d-block mb-1 text-uppercase">Clicks</small>
                                    <span class="font-size-xl text-warning mt-1">
                                <small class="pr-1"><font-awesome-icon icon="angle-down"/></small>
                                58,356
                            </span>
                                </div>
                            </div>
                            <div class="col-sm-6 py-3">
                                <div class="font-weight-bold">
                                    <small class="text-black-50 d-block mb-1 text-uppercase">New Accounts</small>
                                    <span class="font-size-xl text-info mt-1">
                                <small class="pr-1"><font-awesome-icon icon="angle-up"/></small>
                                7,876
                            </span>
                                </div>
                            </div>
                            <div class="col-sm-6 py-3 bg-neutral-danger br-bl">
                                <div class="font-weight-bold">
                                    <small class="text-black-50 d-block mb-1 text-uppercase">Sales</small>
                                    <span class="font-size-xl text-danger mt-1">
                                <small class="pr-1"><font-awesome-icon icon="angle-down"/></small>
                                $1.2M
                            </span>
                                </div>
                            </div>
                            <div class="col-sm-6 py-3">
                                <div class="font-weight-bold">
                                    <small class="text-black-50 d-block mb-1 text-uppercase">Orders</small>
                                    <span class="font-size-xl text-success mt-1">
                                <small class="pr-1"><font-awesome-icon icon="angle-up"/></small>
                                723
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </b-tooltip>

        <b-button id="tooltipIntegrExample3" variant="second">Example III</b-button>
        <b-tooltip @show="showTooltipIntegrations" ref="tooltipIntegrations3" target="tooltipIntegrExample3">
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
        </b-tooltip>

        <b-button id="tooltipIntegrExample4" variant="second">Example IV</b-button>
        <b-tooltip @show="showTooltipIntegrations" ref="tooltipIntegrations4" target="tooltipIntegrExample4">
            <ul class="list-group list-group-flush text-left bg-transparent">
                <li class="list-group-item bg-transparent">
                    <div class="card-body p-2">
                        <div class="align-box-row align-items-start">
                            <div class="font-weight-bold">
                                <small class="text-white-50 d-block mb-1 text-uppercase">New Accounts</small>
                                <span class="font-size-xxl mt-1">586,356</span>
                            </div>
                            <div class="ml-auto">
                                <div class="bg-white text-center text-success font-size-xl d-50 rounded-circle">
                                    <font-awesome-icon icon="lightbulb"/>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <font-awesome-icon icon="arrow-up" class="text-success"/>
                            <span class="text-success">15.4%</span>
                            <span class="text-white-50">increase since last month</span>
                        </div>
                    </div>
                </li>
            </ul>
        </b-tooltip>
    </div>
</template>
<script>
    import {library} from '@fortawesome/fontawesome-svg-core'

    import {
        faAngleUp,
        faLightbulb,
        faArrowUp
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faAngleUp,
        faLightbulb,
        faArrowUp
    );
    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        methods: {
            showTooltipIntegrations() {
                this.$refs.tooltipIntegrations1._toolpop.getTipElement().classList.add('tooltip-lg','tooltip-secondary');
                this.$refs.tooltipIntegrations2._toolpop.getTipElement().classList.add('tooltip-lg','tooltip-secondary');
                this.$refs.tooltipIntegrations3._toolpop.getTipElement().classList.add('tooltip-lg','tooltip-secondary');
                this.$refs.tooltipIntegrations4._toolpop.getTipElement().classList.add('tooltip-lg','tooltip-second');
            },
        }
    }
</script>