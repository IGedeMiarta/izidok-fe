<template>
    <div>
        <PageTitle heading="Dashboard"
                   subheading="This is an example dashboard created with the powerful Bamburgh UI Kit PRO + Bamburgh Vuejs Admin Dashboard PRO"/>
        <div class="bg-vicious-stance pt-5 pl-5 pr-5 mb-5 rounded">
            <div class="row">
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-success card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="user" class="font-size-xxl text-success"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">2,345</b>
                                        <span class="text-black-50">users</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-danger card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">3,568</b>
                                        <span class="text-black-50">clicks</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-warning card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-warning"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">$9,693</b>
                                        <span class="text-black-50">revenue</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xl-3 col-md-6 col-sm-12">
                    <a href="javascript:void(0);" class="mb-5 card card-box card-box-border-bottom border-info card-box-hover-rise-alt">
                        <div class="card-body">
                            <div class="align-box-row">
                                <div class="text-left">
                                    <div class="mt-1">
                                        <font-awesome-icon icon="newspaper" class="font-size-xxl text-info"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg text-black pr-1">431</b>
                                        <span class="text-black-50">sales</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-12 col-xl-6">
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
                    <div class="card-body p-0">
                        <div class="row mt-4">
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="balance-scale" class="font-size-xxl text-first"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">1,265</b>
                                        <span class="text-black-50 d-block">generated</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="car-battery" class="font-size-xxl text-warning"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">349</b>
                                        <span class="text-black-50 d-block">submitted</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="binoculars" class="font-size-xxl text-danger"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">456</b>
                                        <span class="text-black-50 d-block">rejected</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-4 pr-4 pl-4">
                            <apexchart type="area" height="120" :options="chartPrimary" :series="series2"></apexchart>
                        </div>
                        <div class="divider mt-3"></div>
                        <div class="mt-3 text-center">
                            <font-awesome-icon icon="hourglass" class="text-warning"/>
                            <span class="text-warning pl-2 ">reports are <b>pending</b> verifications!</span>
                        </div>
                        <div class="divider mt-3"></div>
                        <div class="text-center py-4">
                            <b-button variant="primary">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="eye"/>
                                </span>
                                <span class="btn-wrapper--label">
                                    Generate new reports
                                </span>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-md-6 col-sm-12 col-xl-6">
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
                    <div class="card-body pb-1">
                        <div class="row">
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
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">$9,693</b>
                                        <span class="text-black-50 d-block">revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-4 pr-4 pl-4">
                            <apexchart type="area" height="120" :options="chartFirst" :series="series"></apexchart>
                        </div>
                    </div>
                    <div class="divider mt-3"></div>
                    <div class="mt-3 text-center">
                        <font-awesome-icon icon="arrow-up" class="text-danger"/>
                        <span class="text-danger pr-1">15.4%</span>
                        <span class="text-black-50">new sales today</span>
                    </div>
                    <div class="divider mt-3"></div>
                    <div class="text-center py-4">
                        <b-button variant="primary">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="eye"/>
                                </span>
                            <span class="btn-wrapper--label">
                                    View latest sales
                                </span>
                        </b-button>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-lg-12 col-xl-7">
                <div class="card card-box mb-5">
                    <div class="card-header">
                        <div class="font-size-lg d-block text-truncate">
                            <span class="text-black-50 pr-2">#32</span> Global competition
                        </div>
                        <div class="ml-auto d-flex align-items-center align-content-center">
                            <div class="avatar-wrapper-overlap">
                                <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                                </div>
                                <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                            </div>
                            <a href="javascript:void(0);" class="btn btn-first font-size-lg ml-3 d-40 p-0 rounded-circle" v-b-tooltip title="View all participants">
                                <font-awesome-icon icon="lightbulb"/>
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 col-md-3">
                                <div class="text-center">
                                    <span class="text-black-50 d-block">Users</span>
                                    <b class="font-size-xxl">2,345</b>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="text-center">
                                    <span class="text-black-50 d-block">Revenue</span>
                                    <b class="font-size-xxl">$9,693</b>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 align-box-row">
                                <div class="w-100 mt-3 mt-md-0">
                                    <div class="mb-1">
                                        <span class="text-black-50 pr-1">Progress:</span>
                                        <span class="text-danger">-12</span>
                                    </div>
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-box mb-5">
                    <div class="card-header">
                        <div class="font-size-lg d-block text-truncate">
                            <span class="text-black-50 pr-2">#33</span> International Event
                        </div>
                        <div class="ml-auto d-flex align-items-center align-content-center">
                            <div class="avatar-wrapper-overlap">
                                <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                                <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                                </div>
                                <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                            </div>
                            <a href="javascript:void(0);" class="btn btn-first font-size-lg ml-3 d-40 p-0 rounded-circle" v-b-tooltip title="View all participants">
                                <font-awesome-icon icon="lightbulb"/>
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 col-md-3">
                                <div class="text-center">
                                    <span class="text-black-50 d-block">Users</span>
                                    <b class="font-size-xxl">2,345</b>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                <div class="text-center">
                                    <span class="text-black-50 d-block">Revenue</span>
                                    <b class="font-size-xxl">$9,693</b>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 align-box-row">
                                <div class="w-100 mt-3 mt-md-0">
                                    <div class="mb-1">
                                        <span class="text-black-50 pr-1">Progress:</span>
                                        <span class="text-danger">-12</span>
                                    </div>
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-box mb-5">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item p-0">
                            <div class="card-header bg-light">
                                <div class="font-size-lg d-block text-truncate">
                                    <span class="text-black-50 pr-2">#34</span> Hackathon
                                </div>
                                <div class="ml-auto d-flex align-items-center align-content-center">
                                    <div class="avatar-wrapper-overlap">
                                        <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                        </div>
                                        <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-first font-size-lg ml-3 d-40 p-0 rounded-circle" v-b-tooltip title="View all participants">
                                        <font-awesome-icon icon="lightbulb"/>
                                    </a>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-6 col-md-3">
                                        <div class="text-center">
                                            <span class="text-black-50 d-block">Users</span>
                                            <b class="font-size-xxl">2,345</b>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <div class="text-center">
                                            <span class="text-black-50 d-block">Revenue</span>
                                            <b class="font-size-xxl">$9,693</b>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 align-box-row">
                                        <div class="w-100 mt-3 mt-md-0">
                                            <div class="mb-1">
                                                <span class="text-black-50 pr-1">Progress:</span>
                                                <span class="text-danger">-12</span>
                                            </div>
                                            <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item p-0">
                            <div class="card-header bg-light">
                                <div class="font-size-lg d-block text-truncate">
                                    <span class="text-black-50 pr-2">#33</span> Gaming center
                                </div>
                                <div class="ml-auto d-flex align-items-center align-content-center">
                                    <div class="avatar-wrapper-overlap">
                                        <div class="avatar-icon-wrapper" v-b-tooltip.hover title="Tooltip content">
                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-first font-size-lg ml-3 d-40 p-0 rounded-circle" v-b-tooltip title="View all participants">
                                        <font-awesome-icon icon="lightbulb"/>
                                    </a>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-6 col-md-3">
                                        <div class="text-center">
                                            <span class="text-black-50 d-block">Users</span>
                                            <b class="font-size-xxl">1,466</b>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <div class="text-center">
                                            <span class="text-black-50 d-block">Revenue</span>
                                            <b class="font-size-xxl text-danger">$6,465</b>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 align-box-row">
                                        <div class="w-100 mt-3 mt-md-0">
                                            <div class="mb-1">
                                                <span class="text-black-50 pr-1">Progress:</span>
                                                <span class="text-warning">-5</span>
                                            </div>
                                            <div class="progress-bar-sm progress-bar-animated-alt progress">
                                                <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-12 col-xl-5">
                <div class="card card-box mb-5">
                    <div class="px-4 px-xl-5 pb-1">
                        <div class="card-header d-block">
                            <span class="text-uppercase py-3 py-xl-4 text-black d-block text-center font-weight-bold font-size-lg">Inventory</span>
                        </div>
                        <div class="card-body p-0">
                            <div class="grid-menu grid-menu-2col">
                                <div class="no-gutters row">
                                    <div class="col-6 p-3">
                                        <div class="text-center">
                                            <font-awesome-icon icon="lemon" class="font-size-xxl text-warning my-3"/>
                                            <span class="text-black-50 d-block">Users</span>
                                            <b class="font-size-xxl">2,345</b>
                                        </div>
                                    </div>
                                    <div class="col-6 p-3">
                                        <div class="text-center">
                                            <font-awesome-icon icon="user" class="font-size-xxl text-success my-3"/>
                                            <span class="text-black-50 d-block">Revenue</span>
                                            <b class="font-size-xxl">$9,693</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-header border-0 d-block">
                            <span class="text-uppercase pt-4 pb-2 text-black d-block text-center font-weight-bold font-size-lg">Activity</span>
                        </div>
                        <div>
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
                                    <b class="font-size-lg text-success"><small class="text-black-50">$</small> 1,754</b>
                                </div>
                            </div>
                        </div>
                        <div>
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
                                    <b class="font-size-lg text-info"><small class="text-black-50">$</small> 7,428</b>
                                </div>
                            </div>
                        </div>
                        <div>
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
                                    <b class="font-size-lg text-danger"><small class="text-black-50">$</small> 5,358</b>
                                </div>
                            </div>
                        </div>
                        <div class="card-header border-0 d-block">
                            <span class="text-uppercase pb-1 pt-1 text-black d-block text-center font-weight-bold font-size-lg">Charts</span>
                        </div>
                        <div class="mb-3">
                            <apexchart type="area" height="120" :options="chartWarning" :series="series"></apexchart>
                        </div>
                    </div>
                    <div class="card-footer d-block text-center">
                        <a href="javascript:void(0);" class="btn btn-sm btn-success" v-b-tooltip title="Refresh">
                            <font-awesome-icon spin icon="sync"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
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
                    <div class="table-responsive-md">
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
        <div class="row">
            <div class="col-md-6">
                <div class="card card-box mb-5">
                    <div class="card-header">
                        <div class="card-header--title">
                            <small>Messenger</small>
                            <b>Talking to Kate</b>
                        </div>
                        <div class="card-header--actions">
                            <b-button size="sm" variant="first" v-b-tooltip title="Send new message">
                                <font-awesome-icon icon="plus"/>
                            </b-button>
                        </div>
                    </div>
                    <div class="card-body">
                        <VuePerfectScrollbar class="scrollbar-container scroll-area-md" v-once>
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
                                        <p>Hello, John.</p>
                                        <p>This is Kenny. How are you?</p>
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
                                        <p>Hey, Kate.</p>
                                        <p>I'm attaching the pictures you requested below:</p>
                                        <div class="card mt-3 mb-2 pt-2 pb-2 text-center">
                                            <div>
                                                <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-1.jpg" alt="Rounded image" width="54" class="img-fluid rounded m-1 shadow-sm"></a>
                                                <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-2.jpg" alt="Rounded image" width="54" class="img-fluid rounded m-1 shadow-sm"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <small class="mt-2 d-block text-black-50">
                                        <font-awesome-icon icon="clock" class="mr-1 opacity-5"/>
                                        11:01 AM | Yesterday
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="chat-item p-2 mb-2">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-lg align-self-start">
                                    <div class="avatar-icon rounded border-0">
                                        <img src="@/assets/img/avatars/avatar7.jpg" alt="">
                                    </div>
                                </div>
                                <div>
                                    <div class="chat-box bg-first text-white">
                                        <p>Thanks.</p>
                                        <p>Really appreciate it!</p>
                                    </div>
                                    <small class="mt-2 d-block text-black-50">
                                        <font-awesome-icon icon="clock" class="mr-1 opacity-5"/>
                                        11:01 AM | Yesterday
                                    </small>
                                </div>
                            </div>
                        </div>
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
                        </VuePerfectScrollbar>
                    </div>
                    <div class="card-footer bg-light p-4">
                        <div class="">
                            <input class="form-control" placeholder="Write your message and hit enter to send...">
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
                                <b-button variant="primary">
                                    Send
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
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
                        <VuePerfectScrollbar class="scrollbar-container scroll-area-md" v-once>
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
                        </VuePerfectScrollbar>
                    </div>
                    <div class="card-footer bg-light p-4">
                        <input class="form-control" placeholder="Add new task..." />
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
                                <b-button variant="primary">
                                    <font-awesome-icon icon="plus" class="mr-2" />
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
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faChevronRight,
        faPlus,
        faEye,
        faArrowUp,
        faNewspaper,
        faLightbulb,
        faUser,
        faEllipsisH,
        faChevronLeft,
        faArrowDown,
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faComments,
        faBalanceScale,
        faCarBattery,
        faBinoculars,
        faHourglass
    } from '@fortawesome/free-solid-svg-icons'
    import {
        faPinterest,
    } from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faChevronRight,
        faPlus,
        faEye,
        faArrowUp,
        faNewspaper,
        faLightbulb,
        faUser,
        faEllipsisH,
        faChevronLeft,
        faArrowDown,
        faPinterest,
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faComments,
        faBalanceScale,
        faCarBattery,
        faBinoculars,
        faHourglass
    );
    export default {
        components: {
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
            'apexchart': VueApexCharts
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
                chartWarning: {
                    chart: {
                        id: 'vuechart-example4',
                        sparkline: {
                            enabled: true,
                        },
                    },
                    colors: ['#f4772e'],
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
                chartFirst: {
                    chart: {
                        id: 'vuechart-example5',
                        sparkline: {
                            enabled: true,
                        },
                    },
                    colors: ['#4191ff'],
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
                    data: [73,77,75,78,73,77,73,74,76,78,74,72,74,74,76]
                }],
                series2: [{
                    name: 'series-2',
                    data: [73,78,75,74,73,77,74,76,72,74,73,78,77,74,76]
                }],
                series3: [{
                    name: 'series-3',
                    data: [73,78,75,74,76,78,77,72,74,73,74,73,77,74,76]
                }]
            }
        },
    }
</script>
