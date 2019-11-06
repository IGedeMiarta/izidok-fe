<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-header">
                        <div class="card-header--title">
                            <b>Monthly targets</b>
                            <small class="d-block text-capitalize mt-1">Card with progress bars list items.</small>
                        </div>
                        <div class="card-header--actions">
                            <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
                                <template slot="button-content">
                                    <div class="font-size-xl">
                                        <font-awesome-icon icon="ellipsis-h"/>
                                    </div>
                                </template>
                                <b-dropdown-item>First Action</b-dropdown-item>
                                <b-dropdown-item>Second Action</b-dropdown-item>
                                <b-dropdown-item>Third Action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item active>Active action</b-dropdown-item>
                                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                    <b-list-group flush>
                        <b-list-group-item class="pt-2 pb-2">
                            <div class="align-box-row mb-1">
                                <div>
                                    <div class="font-weight-bold">Orders</div>
                                </div>
                                <div class="ml-auto">
                                    <div class="font-size-xl font-weight-bold text-success">
                                        348
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar-sm progress-bar-animated-alt progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                            </div>
                            <div class="align-box-row progress-bar--label mt-1 text-muted">
                                <small class="text-dark">0</small>
                                <div class="ml-auto">100%</div>
                            </div>
                        </b-list-group-item>
                        <b-list-group-item class="pt-2 pb-2">
                            <div class="align-box-row mb-1">
                                <div>
                                    <div class="font-weight-bold">Sales</div>
                                </div>
                                <div class="ml-auto">
                                    <div class="font-size-xl font-weight-bold text-danger">
                                        <small>$</small>
                                        2.3M
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar-sm progress-bar-animated-alt progress">
                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="21" aria-valuemin="0" aria-valuemax="100" style="width: 21%;"></div>
                            </div>
                            <div class="align-box-row progress-bar--label mt-1 text-muted">
                                <small class="text-dark">0</small>
                                <div class="ml-auto">100%</div>
                            </div>
                        </b-list-group-item>
                        <b-list-group-item class="pt-2 pb-2">
                            <div class="align-box-row mb-1">
                                <div>
                                    <div class="font-weight-bold">Users</div>
                                </div>
                                <div class="ml-auto">
                                    <div class="font-size-xl font-weight-bold text-info">
                                        <small>#</small>
                                        87
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar-sm progress-bar-animated-alt progress">
                                <div class="progress-bar bg-info" role="progressbar" aria-valuenow="13" aria-valuemin="0" aria-valuemax="100" style="width: 13%;"></div>
                            </div>
                            <div class="align-box-row progress-bar--label mt-1 text-muted">
                                <small class="text-dark">0</small>
                                <div class="ml-auto">100%</div>
                            </div>
                        </b-list-group-item>
                    </b-list-group>
                    <div class="card-footer bg-light p-4 text-center">
                        <b-button size="sm" variant="second">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon icon="question-circle"/>
                            </span>
                            <span class="btn-wrapper--label">
                                View details
                            </span>
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small class="d-block text-uppercase mt-1">Targets</small>
                            <b>Monthly statistics</b>
                        </div>
                        <div class="card-header--actions">
                            <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
                                <template slot="button-content">
                                    <div class="font-size-xl">
                                        <font-awesome-icon icon="ellipsis-h"/>
                                    </div>
                                </template>
                                <b-dropdown-item>First Action</b-dropdown-item>
                                <b-dropdown-item>Second Action</b-dropdown-item>
                                <b-dropdown-item>Third Action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item active>Active action</b-dropdown-item>
                                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="align-box-row">
                                <div class="mr-4">
                                    <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                                        <div class="dot-badge"></div>
                                        <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                                    </a>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 43%;" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">43%
                                        </div>
                                    </div>
                                </div>
                                <div class="line-height-sm text-center ml-4">
                                    <small class="text-black-50 d-block text-uppercase">Totals</small>
                                    <b class="font-size-lg text-success"><small class="text-black-50">$</small> 2,345</b>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="align-box-row">
                                <div class="mr-4">
                                    <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                                        <div class="dot-badge"></div>
                                        <div class="avatar-icon"><img src="@/assets/img/avatars/avatar5.jpg" alt=""></div>
                                    </a>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="progress">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 61%;" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100">61%
                                        </div>
                                    </div>
                                </div>
                                <div class="line-height-sm text-center ml-4">
                                    <small class="text-black-50 d-block text-uppercase">Totals</small>
                                    <b class="font-size-lg text-info"><small class="text-black-50">$</small> 2,345</b>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="align-box-row">
                                <div class="mr-4">
                                    <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-lg m-0" v-b-tooltip title="View details">
                                        <div class="dot-badge"></div>
                                        <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                    </a>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="progress">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 22%;" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100">22%
                                        </div>
                                    </div>
                                </div>
                                <div class="line-height-sm text-center ml-4">
                                    <small class="text-black-50 d-block text-uppercase">Totals</small>
                                    <b class="font-size-lg text-danger"><small class="text-black-50">$</small> 2,345</b>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="card-footer bg-light text-center">
                        <b-button size="sm" variant="first">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon icon="question-circle"/>
                            </span>
                            <span class="btn-wrapper--label">
                                Generate reports
                            </span>
                        </b-button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faQuestionCircle,
        faEllipsisH,

    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faQuestionCircle,
        faEllipsisH,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>