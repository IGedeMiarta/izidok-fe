<template>
    <div>
        <div class="pt-2 pb-5 text-center text-xl-left">
            <div class="row">
                <div class="col-xl-7">
                    <div>
                        <ol class="d-inline-block breadcrumb text-uppercase font-size-xs p-0">
                            <li class="d-inline-block breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                            <li class="d-inline-block breadcrumb-item"><a href="javascript:void(0);">Examples</a></li>
                            <li class="d-inline-block breadcrumb-item active" aria-current="page">Monitoring dashboard</li>
                        </ol>
                        <h5 class="display-4 mt-1 mb-2 font-weight-bold">Monitoring dashboard</h5>
                        <p class="text-black-50 mb-0">This is another dashboard examples created with the included UI
                            elements and components</p>
                    </div>
                </div>
                <div class="col-xl-5 d-flex align-items-center justify-content-start mt-4 mt-xl-0 justify-content-xl-end">
                    <div class="mx-auto mx-xl-0">
                        <b-dropdown variant="primary" class="dropdown-menu-xl mr-3 pb-0" right no-caret>
                            <template slot="button-content">
                                <font-awesome-icon icon="bell" />
                                <span class="badge badge-warning ml-3"><b>23</b> New</span>
                            </template>
                            <div class="bg-composed-wrapper bg-asteroid">
                                <div class="bg-composed-wrapper--image bg-composed-img-2"></div>
                                <div class="bg-composed-wrapper--content text-light p-4">
                                    <h5 class="mb-1">Navigation</h5>
                                    <p class="mb-0 opacity-7">This is a composed background</p>
                                </div>
                            </div>
                            <VuePerfectScrollbar class="scrollbar-container scroll-area-sm" v-once>
                                <div class="p-3">
                                    <div class="timeline-list">
                                        <div class="timeline-item timeline-item-icon">
                                            <div class="timeline-item--content">
                                                <div class="timeline-item--icon-wrapper bg-primary text-white">
                                                    <font-awesome-icon icon="building"/>
                                                </div>
                                                <h4 class="timeline-item--label mb-2 font-weight-bold">1991</h4>
                                                <p>
                                                    The World Wide Web goes live with its first web page.
                                                </p>
                                            </div>
                                        </div>
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
                                                <h4 class="timeline-item--label mb-2 font-weight-bold">1991</h4>
                                                <p>
                                                    The World Wide Web goes live with its first web page.
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
                                                <div class="mt-3">
                                                    <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-3.jpg" alt="Rounded image" width="70" class="img-fluid rounded mr-3 shadow-sm"></a>
                                                    <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-2.jpg" alt="Rounded image" width="70" class="img-fluid rounded shadow-sm"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeline-item timeline-item-icon">
                                            <div class="timeline-item--content">
                                                <div class="timeline-item--icon-wrapper bg-amy-crisp text-white">
                                                    <font-awesome-icon icon="lemon"/>
                                                </div>
                                                <h4 class="timeline-item--label mb-2 font-weight-bold">2003</h4>
                                                <p>
                                                    MySpace becomes the most popular social network.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </VuePerfectScrollbar>
                            <div class="divider"></div>
                            <div class="card-body d-block text-center">
                                <b-button size="sm" variant="primary">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="expand-arrows-alt"/>
                                </span>
                                </b-button>
                            </div>
                        </b-dropdown>
                        <a href="https://demo.uifort.com/bamburgh-vue-admin-dashboard-pro-docs/" class="btn btn-success" target="_blank" v-b-tooltip.hover title="View documentation">
                            <span>
                                <font-awesome-icon icon="file-code" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-xl-4">
                <div class="row">
                    <div class="col-md-6">
                        <a href="javascript:void(0);" class="card border-0 card-box card-box-hover-rise card-box-hover text-white align-box-row bg-midnight-bloom align-items-start mb-5 p-4">
                            <div>
                                <div class="display-3 font-weight-bold">
                                    56
                                </div>
                                <div class="divider mt-2 mb-3 border-2 w-25 bg-white rounded border-white"></div>
                                <div class="font-weight-bold text-white-50 font-size-sm text-uppercase">
                                    Tasks
                                </div>
                            </div>
                            <div class="ml-auto card-hover-indicator align-self-center">
                                <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <a href="javascript:void(0);" class="card border-0 card-box card-box-hover-rise card-box-hover text-white bg-success align-box-row align-items-start mb-5 p-4">
                            <div>
                                <div class="display-3 font-weight-bold text-white">
                                    18
                                </div>
                                <div class="divider mt-2 mb-3 border-2 w-25 bg-white rounded border-white"></div>
                                <div class="font-weight-bold text-white-50 font-size-sm text-uppercase">
                                    requests
                                </div>
                            </div>
                            <div class="ml-auto card-hover-indicator align-self-center">
                                <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6">
                        <div class="card card-box border-0 text-white-50 mb-5 p-4 bg-warning">
                            <div class="display-3 text-white font-weight-bold">
                                29
                            </div>
                            <div class="divider mt-2 mb-3 border-2 w-25 bg-white rounded border-white"></div>
                            <div class="font-weight-bold font-size-sm text-uppercase">
                                bugfixes
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card card-box border-0 text-white-50 bg-info mb-5 p-4">
                            <div class="display-3 text-white font-weight-bold">
                                768
                            </div>
                            <div class="divider mt-2 mb-3 border-2 w-25 bg-white rounded border-white"></div>
                            <div class="font-weight-bold font-size-sm text-uppercase">
                                tickets
                            </div>
                        </div>
                    </div>
                </div>
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
                <div class="card card-box mb-5">
                    <div class="card-indicator bg-warning"></div>
                    <div class="card-body px-4 py-3">
                        <div class="pb-3 d-flex justify-content-between">
                            <a href="javascript:void(0);">
                                Presentation site design
                            </a>
                        </div>
                        <div class="d-flex align-items-center justify-content-start">
                            <div class="badge badge-warning px-3">Scheduled</div>
                            <div class="font-size-sm text-danger px-2">
                                <font-awesome-icon icon="clock" class="mr-1"/>
                                11:35
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xl-8">
                <div class="card card-box mb-5">
                    <div class="card-header pr-2">
                        <div class="card-header--title">
                            <small>Custom</small>
                            <b>Example widget with table inside.</b>
                        </div>
                        <div class="card-header--actions">
                            <a href="javascript:void(0)" class="btn btn-sm text-primary btn-link" v-b-tooltip.hover title="Refresh">
                                <font-awesome-icon spin icon="sync"/>
                            </a>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div>
                            <div class="table-responsive-xs">
                                <table class="table table-striped table-hover mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">Company</th>
                                        <th scope="col">Owner</th>
                                        <th scope="col" width="30%">Target</th>
                                        <th scope="col" class="text-center">Status</th>
                                        <th scope="col"></th>
                                    </tr>
                                    </thead>
                                    <tbody class="list">
                                    <tr>
                                        <td class="company">
                                            <div class="align-box-row">
                                                <div>
                                                    <a v-b-tooltip.hover href="javascript:void(0)" class="m-0 btn btn-link p-0 btn-facebook d-inline-block text-center text-white font-size-lg d-40 rounded-circle card-box-hover-rise" title="View details">
                                                        <font-awesome-icon :icon="['fab', 'facebook']" />
                                                    </a>
                                                </div>
                                                <div class="pl-3">
                                                    <div class="d-flex align-items-center">
                                                        <span>Facebook</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="avatar-icon-wrapper avatar-icon-md">
                                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                                </div>
                                                <div class="pl-2">
                                            <span class="d-block">
                                                John Doe
                                                <small class="d-block text-black-50">(john@example.com)</small>
                                            </span>
                                                </div>
                                                <div class="ml-auto">
                                                    <div>
                                                        <font-awesome-icon icon="question-circle"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="target">
                                            <div class="align-box-row">
                                                <div class="progress-bar-sm progress-bar-animated-alt progress w-100">
                                                    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style="width: 33%;"></div>
                                                </div>
                                                <div class="pl-1">
                                                    100%
                                                </div>
                                            </div>
                                        </td>
                                        <td class="status">
                                            <div class="text-center">
                                                <span class="badge badge-warning">Pending</span>
                                            </div>
                                        </td>
                                        <td class="text-center" width="5%">
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
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="company">
                                            <div class="align-box-row">
                                                <div>
                                                    <a v-b-tooltip.hover href="javascript:void(0)" class="m-0 btn btn-link p-0 btn-twitter d-inline-block text-center text-white font-size-lg d-40 rounded-circle card-box-hover-rise" title="View details">
                                                        <font-awesome-icon :icon="['fab', 'twitter']" />
                                                    </a>
                                                </div>
                                                <div class="pl-3">
                                                    <div class="d-flex align-items-center">
                                                        <span>Twitter</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="avatar-icon-wrapper avatar-icon-md">
                                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                                </div>
                                                <div class="pl-2">
                                            <span class="d-block">
                                                Mandy Erle
                                                <small class="d-block text-black-50">(Mandyrle@gma.com)</small>
                                            </span>
                                                </div>
                                                <div class="ml-auto">
                                                    <div>
                                                        <font-awesome-icon icon="question-circle"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="target">
                                            <div class="align-box-row">
                                                <div class="progress-bar-sm progress-bar-animated-alt progress w-100">
                                                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" style="width: 56%;"></div>
                                                </div>
                                                <div class="pl-1">
                                                    100%
                                                </div>
                                            </div>
                                        </td>
                                        <td class="status">
                                            <div class="text-center">
                                                <b-badge variant="success">Success</b-badge>
                                            </div>
                                        </td>
                                        <td class="text-center" width="5%">
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
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="company">
                                            <div class="align-box-row">
                                                <div>
                                                    <a v-b-tooltip.hover href="javascript:void(0)" class="m-0 btn btn-link p-0 btn-dribbble d-inline-block text-center text-white font-size-lg d-40 rounded-circle card-box-hover-rise" title="View details">
                                                        <font-awesome-icon :icon="['fab', 'dribbble']" />
                                                    </a>
                                                </div>
                                                <div class="pl-3">
                                                    <div class="d-flex align-items-center">
                                                        <span>Dribbble</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="avatar-icon-wrapper avatar-icon-md">
                                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                                </div>
                                                <div class="pl-2">
                                            <span class="d-block">
                                                Adella Galen
                                                <small class="d-block text-black-50">(Galen@example.com)</small>
                                            </span>
                                                </div>
                                                <div class="ml-auto">
                                                    <div>
                                                        <font-awesome-icon icon="question-circle"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="target">
                                            <div class="align-box-row">
                                                <div class="progress-bar-sm progress-bar-animated-alt progress w-100">
                                                    <div class="progress-bar bg-info" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style="width: 12%;"></div>
                                                </div>
                                                <div class="pl-1">
                                                    100%
                                                </div>
                                            </div>
                                        </td>
                                        <td class="status">
                                            <div class="text-center">
                                                <span class="badge badge-first">In progress</span>
                                            </div>
                                        </td>
                                        <td class="text-center" width="5%">
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
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="company">
                                            <div class="align-box-row">
                                                <div>
                                                    <a v-b-tooltip.hover href="javascript:void(0)" class="m-0 btn btn-link p-0 btn-pinterest d-inline-block text-center text-white font-size-lg d-40 rounded-circle card-box-hover-rise" title="View details">
                                                        <font-awesome-icon :icon="['fab', 'pinterest']" />
                                                    </a>
                                                </div>
                                                <div class="pl-3">
                                                    <div class="d-flex align-items-center">
                                                        <span>Pinterest</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <td class="owner">
                                            <div class="align-box-row">
                                                <div class="avatar-icon-wrapper avatar-icon-md">
                                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar5.jpg" alt=""></div>
                                                </div>
                                                <div class="pl-2">
                                <span class="d-block">
                                    Napoleon Stacey
                                    <small class="d-block text-black-50">(Napoleon@test.com)</small>
                                </span>
                                                </div>
                                                <div class="ml-auto">
                                                    <div>
                                                        <font-awesome-icon icon="question-circle"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tip-popover-table-0" class="d-none">
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
                                                                    <font-awesome-icon icon="bell" />
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
                                                                            <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info" />
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
                                                                            <font-awesome-icon icon="user" class="font-size-xxl text-success" />
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
                                                </ul>
                                            </div>
                                        </td>
                                        <td class="target">
                                            <div class="align-box-row">
                                                <div class="progress-bar-sm progress-bar-animated-alt progress w-100">
                                                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%;"></div>
                                                </div>
                                                <div class="pl-1">
                                                    100%
                                                </div>
                                            </div>
                                        </td>
                                        <td class="status">
                                            <div class="text-center">
                                                <span class="badge badge-danger">NEW</span>
                                            </div>
                                        </td>
                                        <td class="text-center" width="5%">
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
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="divider"></div>
                            <div class="divider"></div>
                            <div class="p-3">
                                <ul class="pagination justify-content-center mb-0">
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                            <font-awesome-icon icon="chevron-left"/>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0)">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0)" aria-label="Next">
                                            <font-awesome-icon icon="chevron-right"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-box d-block mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Slideshows</small>
                            <b>Card box with blocks</b>
                        </div>
                        <div class="card-header--actions">
                            <a href="javascript:void(0);" class="btn btn-sm btn-success" v-b-tooltip title="Refresh">
                                <font-awesome-icon spin icon="sync"/>
                            </a>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <div class="p-3">
                                <div class="card card-box bg-premium-dark border-0 text-light">
                                    <div class="card-body">
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
                                        <div class="mt-3">
                                            <font-awesome-icon icon="arrow-up" class="text-success"/>
                                            <span class="text-success pr-1">15.4%</span>
                                            <span class="text-white-50">increase this month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3">
                                <div class="card card-box bg-midnight-bloom text-light">
                                    <div class="card-body">
                                        <div class="align-box-row align-items-start">
                                            <div class="font-weight-bold">
                                                <small class="text-white-50 d-block mb-1 text-uppercase">Sales</small>
                                                <span class="font-size-xxl mt-1">23,274</span>
                                            </div>
                                            <div class="ml-auto">
                                                <div class="bg-white text-center text-primary font-size-xl d-50 rounded-circle">
                                                    <font-awesome-icon icon="snowflake"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3">
                                            <font-awesome-icon icon="arrow-up" class="text-warning"/>
                                            <span class="text-warning pr-1">7.4%</span>
                                            <span class="text-white-50">same as before</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="card card-box mb-5">
            <div class="no-gutters row">
                <div class="col-lg-4 p-3">
                    <div class="divider-v divider-v-lg"></div>
                    <div class="row mt-3">
                        <div class="col">
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
                    </div>
                    <div class="pt-3 pr-4 pl-4">
                        <apexchart type="area" height="120" :options="chartPrimary" :series="series"></apexchart>
                    </div>
                    <div class="text-center pt-4 pb-2">
                        <b-button size="sm" pill class="px-4" variant="outline-primary">View details</b-button>
                    </div>
                </div>
                <div class="col-lg-4 p-3">
                    <div class="divider-v divider-v-lg"></div>
                    <div class="row mt-3">
                        <div class="col">
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
                    <div class="pt-3 pr-4 pl-4">
                        <apexchart type="area" height="120" :options="chartDanger" :series="series2"></apexchart>
                    </div>
                    <div class="text-center pt-4 pb-2">
                        <b-button size="sm" pill class="px-4" variant="outline-danger">View details</b-button>
                    </div>
                </div>
                <div class="col-lg-4 p-3">
                    <div class="row mt-3">
                        <div class="col">
                            <div class="text-center">
                                <div>
                                    <font-awesome-icon icon="bus-alt" class="font-size-xxl text-success"/>
                                </div>
                                <div class="mt-2 line-height-sm">
                                    <b class="font-size-lg">1,024</b>
                                    <span class="text-black-50 d-block">orders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-3 pr-4 pl-4">
                        <apexchart type="area" height="120" :options="chartSuccess" :series="series3"></apexchart>
                    </div>
                    <div class="text-center pt-4 pb-2">
                        <b-button size="sm" pill class="px-4" variant="outline-success">View details</b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Statistics</small>
                            <b>Last quarter report</b>
                        </div>
                        <div class="card-header--actions">
                            <a href="javascript:void(0);" class="btn btn-sm btn-first" v-b-tooltip title="Send new message">
                                <font-awesome-icon icon="plus"/>
                            </a>
                        </div>
                    </div>
                    <div class="pt-3">
                        <div class="row mt-3 mb-2">
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">2,345</b>
                                        <span class="text-black-50 d-block">users</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">3,568</b>
                                        <span class="text-black-50 d-block">clicks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <apexchart type="area" height="120" :options="chartSuccess" :series="series"></apexchart>
                    </div>
                    <div class="p-4 text-center">
                        <b-button variant="outline-primary" class="mb-1">
                            <span class="btn-wrapper--label">
                                View complete report
                            </span>
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon icon="angle-right"/>
                            </span>
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Statistics</small>
                            <b>Users overview</b>
                        </div>
                        <div class="card-header--actions">
                            <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary shadow-none p-0">
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
                    <div class="card-body pb-2">
                        <div class="align-box-row">
                            <div class="font-weight-bold">
                                <small class="text-black-50 d-block mt-2 mb-2 text-uppercase">New Accounts</small>
                                <span class="font-size-xxl ">586,356</span>
                            </div>
                            <div class="ml-auto">
                                <div class="bg-first text-center text-white font-size-xl d-50 rounded-circle">
                                    <font-awesome-icon icon="lightbulb"/>
                                </div>
                            </div>
                        </div>
                        <div class="mt-1">
                            <font-awesome-icon icon="arrow-up" class="text-danger"/>
                            <span class="text-success pr-1">15.4%</span>
                            <span class="text-black-50">increase since last month</span>
                        </div>
                        <div class="mt-4">
                            <b-button pill variant="outline-primary" class="mb-3">
                                <span class="btn-wrapper--label">
                                    View complete report
                                </span>
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="angle-right"/>
                                </span>
                            </b-button>
                        </div>
                    </div>
                    <div class="mb-2">
                        <apexchart type="area" height="120" :options="chartDanger" :series="series3"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <b-card no-body class="card-box mb-5">
                    <b-tabs pills small card>
                        <b-tab class="p-0" title="Tab 1">
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
                        </b-tab>
                        <b-tab class="p-0" title="Tab 2">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item pt-2 pb-2">
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
                                </li>
                                <li class="list-group-item pt-2 pb-2">
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
                                </li>
                                <li class="list-group-item pt-2 pb-2">
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
                                </li>
                            </ul>
                        </b-tab>
                        <b-tab title="Disabled tab" disabled>Disabled tab</b-tab>
                    </b-tabs>
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
                </b-card>
                <div class="card card-box mb-5">
                            <div class="list-group-item border-top-0 border-left-0 border-right-0 d-flex justify-content-between bg-light align-items-center">
                                <div class="avatar-icon-wrapper avatar-icon-lg">
                                    <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                                <div class="flex-grow-1 pl-2">
                                    <h5 class="mt-0 mb-1">Kate Middleton</h5>
                                    <p class="card-text mb-0">
                                        This is a short profile bio description...
                                    </p>
                                </div>
                                <span class="pl-3">
                            <b-button size="sm" variant="second" class="pl-2 pr-2">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="cog"/>
                                </span>
                            </b-button>
                        </span>
                            </div>
                            <b-tabs pills card fill nav-class="w-100" nav-wrapper-class="w-100">
                                <b-tab class="p-0" title="Earnings">
                                    <div class="row mt-3">
                                        <div class="col">
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
                                        <div class="col">
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
                                    </div>
                                    <div class="divider mt-3 mb-2"></div>
                                    <div class="text-center pb-1">
                                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-primary p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                            <font-awesome-icon icon="cloud-moon-rain"/>
                                        </a>
                                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-success p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                            <font-awesome-icon icon="cloud-sun"/>
                                        </a>
                                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-danger p-0 d-inline-block text-center font-size-xxl d-70 rounded" title="Menu Example">
                                            <font-awesome-icon icon="cloud-meatball"/>
                                        </a>
                                    </div>
                                </b-tab>
                                <b-tab class="p-0" title="Sales">
                                    <div class="row mt-3">
                                        <div class="col">
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
                                        <div class="col">
                                            <div class="text-center">
                                                <div>
                                                    <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                                </div>
                                                <div class="mt-2 line-height-sm">
                                                    <b class="font-size-lg">3,568</b>
                                                    <span class="text-black-50 d-block">clicks</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="divider mt-3 mb-2"></div>
                                    <div class="text-center pb-1">
                                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-sunny-morning d-inline-block text-center text-white font-size-xxl d-70 rounded" title="Menu Example">
                                            <font-awesome-icon icon="bong"/>
                                        </a>
                                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-strong-bliss d-inline-block text-center text-white font-size-xxl d-70 rounded" title="Menu Example">
                                            <font-awesome-icon icon="ambulance"/>
                                        </a>
                                        <a v-b-tooltip href="javascript:void(0);" class="m-3 btn btn-primary border-0 p-0 shadow-sm bg-night-sky d-inline-block text-center text-white font-size-xxl d-70 rounded" title="Menu Example">
                                            <font-awesome-icon icon="diagnoses"/>
                                        </a>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                <div class="card card-box d-block mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Slideshows</small>
                            <b>Card box with blocks</b>
                        </div>
                        <div class="card-header--actions">
                            <a href="javascript:void(0);" class="btn btn-sm btn-success" v-b-tooltip title="Refresh">
                                <font-awesome-icon spin icon="sync"/>
                            </a>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-xl-6">
                            <div class="p-3">
                                <div class="card card-box bg-plum-plate text-light">
                                    <div class="card-body">
                                        <div class="align-box-row align-items-start">
                                            <div class="mr-3">
                                                <div class="bg-white text-center text-danger font-size-xl d-50 rounded-circle">
                                                    <font-awesome-icon icon="keyboard"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-weight-bold">
                                                    <small class="text-white-50 d-block mb-1 text-uppercase">Orders</small>
                                                    <span class="font-size-xxl text-white mt-1">345</span>
                                                </div>
                                                <div class="mt-2">
                                                    <font-awesome-icon icon="arrow-down" class="text-white"/>
                                                    <span class="text-white pr-1">7.4%</span>
                                                    <span class="text-white-50">less orders</span>
                                                </div>
                                            </div>
                                            <div class="ml-auto card-hover-indicator align-self-center">
                                                <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="p-3">
                                <div class="card card-box bg-night-sky text-light">
                                    <div class="card-body">
                                        <div class="align-box-row align-items-start">
                                            <div class="mr-3">
                                                <div class="bg-white text-center text-success font-size-xl d-50 rounded-circle">
                                                    <font-awesome-icon icon="lightbulb"/>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-weight-bold">
                                                    <small class="text-white-50 d-block mb-1 text-uppercase">New Accounts</small>
                                                    <span class="font-size-xxl mt-2">586,356</span>
                                                </div>
                                                <div class="mt-2">
                                                    <font-awesome-icon icon="arrow-up" class="text-success"/>
                                                    <span class="text-success pr-1">15.4%</span>
                                                    <span class="text-white-50">increase</span>
                                                </div>
                                            </div>
                                            <div class="ml-auto card-hover-indicator align-self-center">
                                                <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card card-box mb-5">
                    <div class="card-header">
                        <div class="card-header--title">
                            <small>Tasks</small>
                            <b>Today's list</b>
                        </div>
                        <div class="card-header--actions">
                            <span class="badge badge-pill badge-neutral-warning text-warning">New Tasks</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="task-wrapper">
                            <div class="task-item">
                                <div class="align-box-row">
                                    <div class="custom-checkbox custom-control align-self-start">
                                        <input type="checkbox" id="exampleCustomCheckbox1" class="custom-control-input">
                                        <label class="custom-control-label" for="exampleCustomCheckbox1">&nbsp;</label>
                                    </div>
                                    <div>
                                        Finish tasks for today
                                        <p class="text-black-50 mt-1 mb-0">
                                            But I must explain to you how all this mistaken idea.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="task-item">
                                <div class="align-box-row">
                                    <div class="custom-checkbox custom-control align-self-start">
                                        <input type="checkbox" id="exampleCustomCheckbox2" class="custom-control-input">
                                        <label class="custom-control-label" for="exampleCustomCheckbox2">&nbsp;</label>
                                    </div>
                                    <div>
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
                                                    <div class="mt-3">
                                                        <b-button variant="primary" size="sm">Submit Report</b-button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="task-item">
                                <div class="align-box-row">
                                    <div class="custom-checkbox custom-control align-self-start">
                                        <input type="checkbox" id="exampleCustomCheckbox3" class="custom-control-input">
                                        <label class="custom-control-label" for="exampleCustomCheckbox3">&nbsp;</label>
                                    </div>
                                    <div class="w-100">
                                        World among the stalks
                                        <p class="text-black-50 mt-1">
                                            Who formed us in his own image, and the breath.
                                        </p>

                                        <ul class="list-group list-group-flash">
                                            <li class="list-group-item bg-secondary d-flex justify-content-between align-items-center p-4">
                                                <div class="w-100">
                                                    <div class="d-flex flex-wrap justify-content-between mb-2">
                                                        <small class="line-height-xs text-uppercase text-muted">Nov 12, 11:25am</small>
                                                        <small class="line-height-xs text-uppercase text-success">Due in 12 days</small>
                                                    </div>
                                                    <h6 class="pt-1 pb-1">
                                                        <a href="javascript:void(0);">#56 - Deploy new website</a>
                                                    </h6>
                                                    <p class="mb-3">This is a dummy text acting ...</p>
                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <a href="javascript:void(0);" class="badge badge-pill badge-danger pl-3 pr-3">Files ready</a>
                                                        <div>
                                                            <b-button size="sm" variant="first">
                                                        <span class="btn-wrapper--icon">
                                                            <font-awesome-icon icon="plus"/>
                                                        </span>
                                                                <span class="btn-wrapper--label">
                                                            Add
                                                        </span>
                                                            </b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center align-content-center pl-1">
                                                <a href="javascript:void(0);" class="btn btn-sm btn-link" v-b-tooltip.top title="There are 653 new comments available!">
                                            <span class="btn-wrapper--icon">
                                                <font-awesome-icon icon="comments"/>
                                            </span>
                                                    <span class="btn-wrapper--label ml-1">
                                                653
                                            </span>
                                                </a>
                                                <div>
                                                    <small class="text-muted mr-1">(21)</small>
                                                    <font-awesome-icon icon="star" class="text-warning"/>
                                                    <font-awesome-icon icon="star" class="text-warning"/>
                                                    <font-awesome-icon icon="star" class="text-warning"/>
                                                    <font-awesome-icon icon="star" class="text-warning"/>
                                                    <font-awesome-icon icon="star" class="text-warning"/>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-3 mb-3">
                            <b-button variant="link" class="btn-link-dark">
                        <span>
                            View completed tasks
                            <span class="text-muted">(87)</span>
                        </span>
                            </b-button>
                        </div>
                        <div class="">
                            <input class="form-control" placeholder="Add new task..." />
                        </div>
                        <div class="align-box-row mt-3">
                            <div class="align-items-center">
                                <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl text-success" v-b-tooltip title="Add audio file">
                                    <font-awesome-icon icon="file-audio"/>
                                </a>
                                <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl mr-2 ml-2 text-danger" v-b-tooltip title="Add video file">
                                    <font-awesome-icon icon="file-video"/>
                                </a>
                                <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl text-info" v-b-tooltip title="Upload documents">
                                    <font-awesome-icon icon="file-excel"/>
                                </a>
                            </div>
                            <div class="ml-auto">
                                <b-button size="sm" variant="primary">
                                    <font-awesome-icon icon="plus"/>
                                    Create Task
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    import Slick from 'vue-slick';
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faBusAlt,
        faUser,
        faChartBar,
        faChevronRight,
        faEllipsisH,
        faArrowUp,
        faSnowflake,
        faLightbulb,
        faKeyboard,
        faArrowDown,
        faChevronLeft,
        faAngleRight,
        faDiagnoses,
        faAmbulance,
        faFileVideo,
        faFileAudio,
        faFileExcel,
        faPlus,
        faStar,
        faBong,
        faCloudSun,
        faCloudMeatball,
        faCloudMoonRain,
        faComments,
        faCog,
        faBuilding,
        faExpandArrowsAlt,
        faFileCode
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import {
        faPinterest,
    } from '@fortawesome/free-brands-svg-icons'
    library.add(
        faPinterest,
        faBusAlt,
        faUser,
        faChartBar,
        faChevronRight,
        faEllipsisH,
        faArrowUp,
        faSnowflake,
        faLightbulb,
        faKeyboard,
        faArrowDown,
        faChevronLeft,
        faAngleRight,
        faDiagnoses,
        faAmbulance,
        faFileVideo,
        faFileAudio,
        faFileExcel,
        faPlus,
        faStar,
        faBong,
        faCloudSun,
        faCloudMeatball,
        faCloudMoonRain,
        faComments,
        faCog,
        faBuilding,
        faExpandArrowsAlt,
        faFileCode
    );

    export default {
        components: {
            Slick,
            'font-awesome-icon': FontAwesomeIcon,
            'apexchart': VueApexCharts,
            VuePerfectScrollbar
        },
        data: function () {
            return {
                chartPrimary: {
                    chart: {
                        id: 'vuechart-example1',
                        sparkline: {
                            enabled: true,
                        },
                    },
                    colors: ['#3c44b1'],
                    stroke: {
                        width: 3,
                        curve: 'smooth'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            type: "vertical",
                            shadeIntensity: 0.5,
                            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                            inverseColors: false,
                            opacityFrom: 0.5,
                            opacityTo: 0,
                            stops: [0, 100],
                            colorStops: []
                        }
                    }
                },
                chartDanger: {
                    chart: {
                        id: 'vuechart-example2',
                        sparkline: {
                            enabled: true,
                        },
                    },
                    colors: ['#f83245'],
                    stroke: {
                        width: 3,
                        curve: 'smooth'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            type: "vertical",
                            shadeIntensity: 0.5,
                            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                            inverseColors: false,
                            opacityFrom: 0.5,
                            opacityTo: 0,
                            stops: [0, 100],
                            colorStops: []
                        }
                    }
                },
                chartSuccess: {
                    chart: {
                        id: 'vuechart-example3',
                        sparkline: {
                            enabled: true,
                        },
                    },
                    colors: ['#1bc943'],
                    stroke: {
                        width: 3,
                        curve: 'smooth'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            type: "vertical",
                            shadeIntensity: 0.5,
                            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                            inverseColors: false,
                            opacityFrom: 0.5,
                            opacityTo: 0,
                            stops: [0, 100],
                            colorStops: []
                        }
                    }
                },
                series: [{
                    name: 'series-1',
                    data: [73, 77, 75, 78, 73, 77, 73, 74, 76, 78, 74, 72, 74, 74, 76]
                }],
                series2: [{
                    name: 'series-2',
                    data: [73, 78, 75, 74, 73, 77, 74, 76, 72, 74, 73, 78, 77, 74, 76]
                }],
                series3: [{
                    name: 'series-3',
                    data: [73, 78, 75, 74, 76, 78, 77, 72, 74, 73, 74, 73, 77, 74, 76]
                }]
            }
        },
    }
</script>
