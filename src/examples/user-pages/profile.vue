<template>
    <div class="app-content app-content-aside fixed-inner-layout bg-white">
        <div class="d-flex d-lg-none p-4 order-0 justify-content-between align-items-center">
            <button type="button" class="btn btn-sm btn-primary px-3 toggle-inner-sidebar" v-bind:class="{ 'active' : isActiveLeft }" @click="toggleSidebarLeft">
                <font-awesome-icon icon="ellipsis-v" />
            </button>
        </div>
        <div class="app-content--sidebar app-content--sidebar__lg bg-transparent shadow-none" v-bind:class="{ 'sidebar-inner-open' : isActiveLeft }">
            <div class="app-content--sidebar__content bg-midnight-bloom my-4 ml-4 rounded text-white">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="avatar-icon-wrapper d-100">
                        <span class="badge badge-circle badge-success">Online</span>
                        <div class="avatar-icon d-100">
                            <img src="@/assets/img/avatars/avatar7.jpg" alt="">
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="btn btn-sm btn-first shadow-none">
                        Follow
                    </a>
                </div>
                <div class="font-weight-bold font-size-lg d-flex align-items-center mt-2 mb-0">
                    <span>Kate Stacey</span>
                </div>
                <p class="mb-4 font-size-md text-white-50">@kateST</p>
                <a href="javascript:void(0);" class="btn btn-sm btn-outline-light shadow-none mr-2">
                    Send message
                </a>
                <a href="javascript:void(0);" v-b-tooltip.hover class="btn btn-sm btn-warning shadow-none" title="Add to favourites">
                    <font-awesome-icon icon="star" />
                </a>
                <p class="text-white-50 mb-0 py-4">
                    Short profile bio description here. Pleasure of the moment, so blinded by desire, that they cannot foresee... <a href="javascript:void(0);" class="text-white">Read more</a>
                </p>

                <div class="pt-3 pb-4">
                    <div class="row no-gutters text-center">
                        <div class="col">
                            <b class="d-block font-weight-bold font-size-lg">456</b>
                            <small class="text-uppercase text-white-50">friends</small>
                        </div>
                        <div class="col">
                            <b class="d-block font-weight-bold font-size-lg">1.3k</b>
                            <small class="text-uppercase text-white-50">updates</small>
                        </div>
                        <div class="col">
                            <b class="d-block font-weight-bold font-size-lg">34</b>
                            <small class="text-uppercase text-white-50">followers</small>
                        </div>
                    </div>
                </div>
                <div class="font-weight-bold font-size-lg d-flex align-items-center mb-3">
                    <span>Followers</span>
                    <div class="ml-auto font-size-xs">
                        <a href="javascript:void(0);" class="text-white" v-b-tooltip.hover title="Add new subscriber">
                            <font-awesome-icon icon="plus-circle" />
                        </a>
                    </div>
                </div>
                <div class="py-2">
                    <div class="align-box-row">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-md text-white">
                            <span class="badge badge-circle badge-success">Online</span>
                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                        </a>
                        <div class="pl-2">
                                <span class="d-block">
                                    <a href="javascript:void(0);" class="text-white">Adella Galen</a>
                                    <small class="d-block text-white-50">(Galen@example.com)</small>
                                </span>
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <div class="align-box-row">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-md text-white">
                            <span class="badge badge-circle badge-danger">Offline</span>
                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                        </a>
                        <div class="pl-2">
                                <span class="d-block">
                                    <a href="javascript:void(0);" class="text-white">Mandy Erle</a>
                                    <small class="d-block text-white-50">(Mandyrle@gma.com)</small>
                                </span>
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <div class="align-box-row">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-md text-white">
                            <span class="badge badge-circle badge-success">Online</span>
                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar3.jpg" alt=""></div>
                        </a>
                        <div class="pl-2">
                                <span class="d-block">
                                    <a href="javascript:void(0);" class="text-white">John Doe</a>
                                    <small class="d-block text-white-50">(Galen@example.com)</small>
                                </span>
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <div class="align-box-row">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-md text-white">
                            <span class="badge badge-circle badge-warning">Idle</span>
                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar4.jpg" alt=""></div>
                        </a>
                        <div class="pl-2">
                                <span class="d-block">
                                    <a href="javascript:void(0);" class="text-white">Napoleon Stacey</a>
                                    <small class="d-block text-white-50">(Napoleon@test.com)</small>
                                </span>
                        </div>
                    </div>
                </div>
                <div class="divider opacity-2 my-4"></div>
                <div class="font-weight-bold font-size-lg d-flex align-items-center mb-3">
                    <span>Mutual connections</span>
                </div>
                <div class="py-2">
                    <div class="avatar-wrapper-overlap mb-3">
                        <div class="avatar-icon-wrapper">
                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                        </div>
                        <div class="avatar-icon-wrapper">
                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                        </div>
                        <div class="avatar-icon-wrapper">
                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                        </div>
                        <div class="avatar-icon-wrapper">
                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                        </div>
                        <div class="avatar-icon-wrapper">
                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                        </div>
                    </div>
                </div>
                <small class="text-white-50">
                    <b class="d-block pb-1 text-white-50">You have 25 mutual connections</b>
                    You and John both know Kate Erle, Napoleon Stacey, and 23 others
                </small>
                <div class="divider opacity-2 my-4"></div>
                <div class="font-weight-bold font-size-lg d-flex align-items-center mb-3">
                    <span>Job titles</span>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);" class="text-white">Software developer</a>
                            </span>
                        <span class="badge badge-dark">
                                22
                            </span>
                    </div>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);" class="text-white">QA Engineer</a>
                            </span>
                        <span class="badge badge-dark">
                                23
                            </span>
                    </div>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);" class="text-white">UX Specialist</a>
                            </span>
                        <span class="badge badge-dark">
                                76
                            </span>
                    </div>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);" class="text-white">Frontend Architect</a>
                            </span>
                        <span class="badge badge-dark">
                                15
                            </span>
                    </div>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);" class="text-white">DevOps Manager</a>
                            </span>
                        <span class="badge badge-dark">
                                5
                            </span>
                    </div>
                </div>
                <div class="divider opacity-3 my-4"></div>
                <div class="card card-box mt-4 mb-4 bg-white text-light">
                    <div class="card-body">
                        <div class="align-box-row align-items-start">
                            <div class="font-weight-bold">
                                <small class="text-black-50 d-block mb-1 text-uppercase">Contacts</small>
                                <span class="font-size-xxl text-black mt-1">23,274</span>
                            </div>
                            <div class="ml-auto">
                                <div class="bg-midnight-bloom text-center text-white font-size-xl d-50 rounded-circle">
                                    <font-awesome-icon icon="snowflake" />
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <font-awesome-icon icon="arrow-up" class="text-warning" />
                            <span class="text-warning">7.4%</span>
                            <span class="text-black-50">same as before</span>
                        </div>
                    </div>
                </div>
                <div class="row font-size-xs">
                    <div class="col">
                        <div class="card text-center my-2 p-3">
                            <div>
                                <font-awesome-icon icon="user" class="font-size-xxl text-success" />
                            </div>
                            <div class="mt-2 line-height-sm">
                                <b class="font-size-lg text-black">345</b>
                                <span class="text-black-50 d-block">friends</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-center my-2 p-3">
                            <div>
                                <font-awesome-icon icon="chart-bar" class="font-size-xxl text-danger" />
                            </div>
                            <div class="mt-2 line-height-sm">
                                <b class="font-size-lg text-black">2,693</b>
                                <span class="text-black-50 d-block">messages</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-content--inner p-0 d-flex flex-column">
            <div class="pb-5">
                <ul class="nav nav-line nav-line-alt nav-justified px-5">
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link active py-4 px-4">
                            <span class="d-block py-2">
                                Updates
                                <span class="badge ml-2 badge-neutral-danger text-danger">51</span>
                                <div class="divider"></div>
                            </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link py-4 px-4">
                            <span class="d-block py-2">
                                New posts
                                <span class="badge ml-2 badge-success">625</span>
                                <div class="divider"></div>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="px-5">
                <div class="row">
                    <div class="col-lg-12 col-md-6 col-xl-6">
                        <div class="rounded card card-box shadow-none bg-secondary mb-5">
                            <div class="p-4">
                                <div class="align-box-row">
                                    <div class="font-weight-bold">
                                        <small class="text-black-50 d-block mt-2 mb-2 text-uppercase">New Accounts</small>
                                        <span class="font-size-xxl ">586,356</span>
                                    </div>
                                    <div class="ml-auto">
                                        <div class="bg-first text-center text-white font-size-xl d-50 rounded-circle">
                                            <font-awesome-icon icon="lightbulb" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-1">
                                    <font-awesome-icon icon="arrow-up" class="text-danger" />
                                    <span class="text-success">15.4%</span>
                                    <span class="text-black-50">increase since last month</span>
                                </div>
                                <div class="mt-4">
                                    <button class="btn btn-pill btn-outline-primary" type="button">
                                                        <span class="btn-wrapper--label">
                                                            View complete report
                                                        </span>
                                        <span class="btn-wrapper--icon">
                                                            <font-awesome-icon icon="angle-right" />
                                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6 col-xl-6">
                        <div class="rounded card card-box shadow-none bg-secondary mb-5">
                            <div class="p-4">
                                <div class="align-box-row">
                                    <div class="font-weight-bold">
                                        <small class="text-black-50 d-block mt-2 mb-2 text-uppercase">New followers</small>
                                        <span class="font-size-xxl ">4,725</span>
                                    </div>
                                    <div class="ml-auto">
                                        <div class="bg-first text-center text-white font-size-xl d-50 rounded-circle">
                                            <font-awesome-icon icon="thumbs-up" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-1">
                                    <font-awesome-icon icon="arrow-up" class="text-danger" />
                                    <span class="text-success">15.4%</span>
                                    <span class="text-black-50">increase since last month</span>
                                </div>
                                <div class="mt-4">
                                    <button class="btn btn-pill btn-outline-primary" type="button">
                                                        <span class="btn-wrapper--label">
                                                            View complete report
                                                        </span>
                                        <span class="btn-wrapper--icon">
                                                            <font-awesome-icon icon="angle-right" />
                                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-box shadow-none bg-white mb-5">
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
                                        <span class="text-black-50">Progress:</span>
                                        <span class="text-warning">-5</span>
                                    </div>
                                    <div class="progress-bar-sm progress-bar-animated-alt progress">
                                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sparkline-gradient-warning rounded-bottom"></div>
                </div>
                <div class="card card-box mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Profiles</small>
                            <b class="font-size-lg d-flex align-items-center">Latest activities</b>
                        </div>
                        <div class="card-header--actions">
                                            <span class="dropdown">
                                                <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl text-primary" title="View options" id="dropdownMenuButton2" v-b-tooltip.hover>
                                                    <font-awesome-icon icon="ellipsis-h" />
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                                    <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                                    <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                                </div>
                                            </span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <div class="align-box-row">
                                <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-md text-white">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </a>
                                <div class="pl-2">
                                                <span class="d-block">
                                                    <a href="javascript:void(0);" class="text-back">Adella Galen</a>
                                                    <small class="d-block text-back-50">(Galen@example.com)</small>
                                                </span>
                                </div>
                            </div>
                            <small class="ml-auto text-black-50">
                                <font-awesome-icon icon="clock" class="opacity-6 mr-2" />
                                12 hours ago
                            </small>
                        </div>
                        <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>

                        <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p>

                        <div class="rounded p-4 bg-secondary">
                            <b class="d-block pb-1">Job description title</b>
                            <p>But who has any right to find fault with a man.</p>
                            <small class="d-block text-black-50">Posted in San Francisco, CA</small>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center align-content-center">
                        <a href="javascript:void(0);" class="btn btn-sm btn-link" v-b-tooltip.top title="There are 653 new comments available!">
                                        <span class="btn-wrapper--icon">
                                            <font-awesome-icon icon="comments" />
                                        </span>
                            <span class="btn-wrapper--label ml-1">
                                            653
                                        </span>
                        </a>
                        <div>
                            <small class="text-muted mr-1">(21)</small>
                            <font-awesome-icon icon="star" class="text-warning" />
                            <font-awesome-icon icon="star" class="text-warning" />
                            <font-awesome-icon icon="star" class="text-warning" />
                            <font-awesome-icon icon="star" class="text-warning" />
                            <font-awesome-icon icon="star" class="text-warning" />
                        </div>
                    </div>
                </div>
                <div class="card card-box mb-5">
                    <div class="card-header bg-light">
                        <div class="card-header--title">
                            <small>Companies</small>
                            <b class="font-size-lg d-flex align-items-center">Social interests</b>
                        </div>
                        <div class="card-header--actions">
                                            <span class="dropdown">
                                                <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl text-primary" title="View options" id="dropdownMenuButton2" v-b-tooltip.hover>
                                                    <font-awesome-icon icon="ellipsis-h" />
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
                                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                                    <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                                    <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                                </div>
                                            </span>
                        </div>
                    </div>
                    <div class="px-5 pt-5">
                        <div class="row">
                            <div class="col-lg-12 col-md-6 col-xl-6">
                                <div class="feature-box d-flex align-items-start text-black mb-5">
                                    <div>
                                        <div class="bg-brand-facebook text-center text-white font-size-xl d-50 rounded-circle">
                                            <font-awesome-icon :icon="['fab', 'facebook']" />
                                        </div>
                                    </div>
                                    <div class="pl-3">
                                        <h3 class="font-size-lg font-weight-bold">Facebook</h3>
                                        <p class="text-black-50 mt-2">
                                            Who are so beguiled and demoralized by the charms of pleasure.
                                        </p>
                                        <button class="btn btn-sm btn-outline-dark" type="button">View profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6 col-xl-6">
                                <div class="feature-box d-flex align-items-start text-black mb-5">
                                    <div>
                                        <div class="bg-brand-github text-center text-white font-size-xl d-50 rounded-circle">
                                            <font-awesome-icon :icon="['fab', 'github']" />
                                        </div>
                                    </div>
                                    <div class="pl-3">
                                        <h3 class="font-size-lg font-weight-bold">Github</h3>
                                        <p class="text-black-50 mt-2">
                                            Which toil and pain can procure him some great pleasure.
                                        </p>
                                        <button class="btn btn-sm btn-outline-dark" type="button">View profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6 col-xl-6">
                                <div class="feature-box d-flex align-items-start text-black mb-5">
                                    <div>
                                        <div class="bg-brand-twitter text-center text-white font-size-xl d-50 rounded-circle">
                                            <font-awesome-icon :icon="['fab', 'twitter']" />
                                        </div>
                                    </div>
                                    <div class="pl-3">
                                        <h3 class="font-size-lg font-weight-bold">Twitter</h3>
                                        <p class="text-black-50 mt-2">
                                            To take a trivial example, which of us avoids pleasure, some great pleasure.
                                        </p>
                                        <button class="btn btn-sm btn-outline-dark" type="button">View profile</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6 col-xl-6">
                                <div class="feature-box d-flex align-items-start text-black mb-5">
                                    <div>
                                        <div class="bg-brand-dribbble text-center text-white font-size-xl d-50 rounded-circle">
                                            <font-awesome-icon :icon="['fab', 'dribbble']" />
                                        </div>
                                    </div>
                                    <div class="pl-3">
                                        <h3 class="font-size-lg font-weight-bold">Dribbble</h3>
                                        <p class="text-black-50 mt-2">
                                            To take a trivial example, which of us avoids pleasure, some great pleasure.
                                        </p>
                                        <button class="btn btn-sm btn-outline-dark" type="button">View profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-left mb-5">
                    <h1 class="display-4 text-black mb-2 font-weight-bold">
                        Blog posts
                    </h1>
                    <p class="font-size-lg text-black-50">
                        Indignation and dislike men who are so beguiled and demoralized.
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box-hover-rise mb-5">
                            <div class="card-badges">
                                <span class="badge badge-pill badge-warning">Warning</span>
                            </div>
                            <img src="@/assets/img/hero-bg/hero-6.jpg" class="card-img-top" alt="...">
                            <div class="card-body card-body-avatar">
                                <div class="avatar-icon-wrapper">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="card-date mt-2">
                                    <font-awesome-icon icon="clock" class="text-muted mr-1" />
                                    <small class="text-muted">
                                        added moments ago
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box-hover-rise mb-5">
                            <div class="card-badges">
                                <span class="badge badge-pill badge-success">Success</span>
                                <span class="badge badge-pill badge-neutral-info text-info">Info</span>
                            </div>
                            <img src="@/assets/img/hero-bg/hero-5.jpg" class="card-img-top" alt="...">
                            <div class="card-body card-body-avatar">
                                <div class="avatar-icon-wrapper">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="card-date mt-2">
                                    <font-awesome-icon icon="clock" class="text-muted mr-1" />
                                    <small class="text-muted">
                                        added moments ago
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box-hover-rise mb-5">
                            <div class="card-badges">
                                <span class="badge badge-danger">Danger</span>
                            </div>
                            <img src="@/assets/img/hero-bg/hero-4.jpg" class="card-img-top" alt="...">
                            <div class="card-body card-body-avatar">
                                <div class="avatar-icon-wrapper">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="card-date mt-2">
                                    <font-awesome-icon icon="clock" class="text-muted mr-1" />
                                    <small class="text-muted">
                                        added moments ago
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box-hover-rise mb-5">
                            <div class="card-badges">
                                <span class="badge badge-pill badge-warning">Warning</span>
                            </div>
                            <img src="@/assets/img/hero-bg/hero-3.jpg" class="card-img-top" alt="...">
                            <div class="card-body card-body-avatar">
                                <div class="avatar-icon-wrapper">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="card-date mt-2">
                                    <font-awesome-icon icon="clock" class="text-muted mr-1" />
                                    <small class="text-muted">
                                        added moments ago
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box-hover-rise mb-5">
                            <div class="card-badges">
                                <span class="badge badge-pill badge-success">Success</span>
                                <span class="badge badge-pill badge-neutral-info text-info">Info</span>
                            </div>
                            <img src="@/assets/img/hero-bg/hero-2.jpg" class="card-img-top" alt="...">
                            <div class="card-body card-body-avatar">
                                <div class="avatar-icon-wrapper">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="card-date mt-2">
                                    <font-awesome-icon icon="clock" class="text-muted mr-1" />
                                    <small class="text-muted">
                                        added moments ago
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box-hover-rise mb-5">
                            <div class="card-badges">
                                <span class="badge badge-danger">Danger</span>
                            </div>
                            <img src="@/assets/img/hero-bg/hero-1.jpg" class="card-img-top" alt="...">
                            <div class="card-body card-body-avatar">
                                <div class="avatar-icon-wrapper">
                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                </div>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div class="card-date mt-2">
                                    <font-awesome-icon icon="clock" class="text-muted mr-1" />
                                    <small class="text-muted">
                                        added moments ago
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <nav class="bg-light p-3 d-block rounded mb-5 d-flex justify-content-center" aria-label="Page navigation example">
                    <ul class="pagination my-0">
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Previous">
                                <font-awesome-icon icon="chevron-left" />
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);" aria-label="Next">
                                <font-awesome-icon icon="chevron-right" />
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="text-center my-5">
                    <h1 class="display-4 text-black mb-2 font-weight-bold">
                        Alternate blog posts
                    </h1>
                    <p class="font-size-lg text-black-50">
                        Indignation and dislike men who are so beguiled and demoralized.
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-transparent mb-5">
                            <div class="card-img-wrapper">
                                <div class="card-badges card-badges-bottom">
                                    <span class="badge badge-pill badge-warning">Warning</span>
                                </div>
                                <img src="@/assets/img/stock-photos/stock-1.jpg" class="card-img-top rounded" alt="...">
                            </div>
                            <div class="card-body text-black text-center">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text text-black-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button class="btn btn-pill btn-sm btn-outline-primary mt-1 shadow-none" type="button">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-transparent mb-5">
                            <div class="card-img-wrapper">
                                <div class="card-badges card-badges-bottom">
                                    <span class="badge badge-pill badge-success">Success</span>
                                    <span class="badge badge-pill badge-neutral-info text-info">Info</span>
                                </div>
                                <img src="@/assets/img/stock-photos/stock-2.jpg" class="card-img-top rounded" alt="...">
                            </div>
                            <div class="card-body text-black text-center">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text text-black-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button class="btn btn-pill btn-sm btn-outline-primary mt-1 shadow-none" type="button">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-transparent mb-5">
                            <div class="card-img-wrapper">
                                <div class="card-badges card-badges-bottom">
                                    <span class="badge badge-danger">Danger</span>
                                </div>
                                <img src="@/assets/img/stock-photos/stock-3.jpg" class="card-img-top rounded" alt="...">
                            </div>
                            <div class="card-body text-black text-center">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text text-black-50">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button class="btn btn-pill btn-sm btn-outline-primary mt-1 shadow-none" type="button">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-inner-mobile-overlay" @click="toggleSidebarLeft" v-bind:class="{ 'active' : isActiveLeft }"></div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faEllipsisH,
        faSnowflake,
        faArrowUp,
        faUser,
        faLightbulb,
        faAngleRight,
        faComments,
        faChevronLeft,
        faEllipsisV,
        faThumbsUp
    } from '@fortawesome/free-solid-svg-icons'
    import {
        faGithub,
    } from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEllipsisH,
        faSnowflake,
        faArrowUp,
        faUser,
        faLightbulb,
        faAngleRight,
        faComments,
        faChevronLeft,
        faGithub,
        faEllipsisV,
        faThumbsUp
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        data() {
            return {
                isActiveLeft: false,
            }
        },
        methods: {
            toggleSidebarLeft: function(){
                this.isActiveLeft = !this.isActiveLeft;
            },
        }
    }
</script>