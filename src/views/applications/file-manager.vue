<template>
    <div class="app-content app-content-aside">
        <div class="d-flex d-lg-none p-4 order-0 bg-white justify-content-between align-items-center">
            <button type="button" class="btn btn-sm btn-primary px-3 toggle-inner-sidebar" v-bind:class="{ 'active' : isActiveLeft }" @click="toggleSidebarLeft">
                <font-awesome-icon icon="ellipsis-v" />
            </button>
            <button type="button" class="btn btn-sm btn-primary px-3 toggle-inner-sidebar" v-bind:class="{ 'active' : isActiveRight }" @click="toggleSidebarRight">
                <font-awesome-icon icon="bars" />
            </button>
        </div>
        <div class="app-content--sidebar app-content--sidebar__sm" v-bind:class="{ 'sidebar-inner-open' : isActiveLeft }">
            <div class="app-content--sidebar__header py-4">
                <button type="button" class="btn btn-block btn-sm btn-success">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon icon="upload" />
                        </span>
                    <span class="btn-wrapper--label">Upload</span>
                </button>
            </div>
            <VuePerfectScrollbar class="app-content--sidebar__content scrollbar-container" v-once>
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="nav-header">
                        My storage drive
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="javascript:void(0);">
                            <font-awesome-icon icon="file" class="mr-1" />
                            All files
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="plug" class="mr-1" />
                            Connected devices
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="concierge-bell" class="mr-1" />
                            Recent files
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="trash-alt" />
                            Deleted files
                        </a>
                    </li>
                    <li class="nav-header">
                        Content library
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="file-image" />
                            Images
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="file-alt" />
                            Documents
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="file-video" />
                            Videos
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="file-archive" />
                            Archive files
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="file-audio" />
                            Audio
                        </a>
                    </li>
                </ul>
            </VuePerfectScrollbar>
            <div class="app-content--sidebar__footer">
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="nav-header">
                        Available storage
                    </li>
                    <li class="nav-item">
                        <div class="d-flex align-items-start">
                            <div class="display-3">
                                <font-awesome-icon icon="hdd" />
                            </div>
                            <div class="pl-3">
                                <small class="d-block mb-2"><b>5GB</b> used out of <b>25GB</b></small>
                                <div class="progress-bar-sm progress-bar-animated-alt progress">
                                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                                </div>
                            </div>
                        </div>
                        <small class="d-block mt-2">
                                <span class="d-block pb-2">
                                    Get <b>1 GB</b> of free storage if you take advantage of our premium plans.
                                </span>
                            <a href="javascript:void(0);" title="Learn more" class="btn p-0 font-weight-bold font-size-xs btn-link btn-link-first">View details</a>
                        </small>
                    </li>
                </ul>
            </div>
        </div>
        <div class="app-content--inner p-0 d-flex flex-column bg-secondary">
            <div>
                <div class="px-5 py-4 bg-light">

                    <div class="row">
                        <div class="col-xl-7">
                            <div>
                                <h5 class="display-4 mt-1 mb-2 font-weight-bold">File manager</h5>
                                <p class="text-black-50 mb-0">This is an example dashboard created with the powerful Bamburgh UI Kit PRO + Bamburgh Vue.js Admin Dashboard Template</p>
                            </div>
                        </div>
                        <div class="col-xl-5 d-flex align-items-center justify-content-start mt-4 mt-xl-0 justify-content-xl-end">
                            <div>
                                <a href="javascript:void(0);" class="btn btn-warning d-block d-sm-inline-block" >
                                    <span>
                                        Upload
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider bg-dark opacity-2"></div>
            </div>
            <VuePerfectScrollbar class="scrollbar-container px-5" v-once>
                <h5 class="font-size-sm text-uppercase text-black-50 font-weight-bold my-4">Latest files added</h5>
                <div class="row">
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-box mb-5">
                            <div class="card-body">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-top">
                                        <button type="button" class="btn btn-link p-1 shadow-none btn-link-primary" v-b-tooltip.hover>
                                            <font-awesome-icon icon="ellipsis-v" />
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                        </div>
                                    </div>
                                    <div class="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                                        <font-awesome-icon icon="file-word" class="display-2 text-first mx-auto" />
                                    </div>
                                    <a href="javascript:void(0);">
                                        <b>Example_WordFile.doc</b>
                                    </a>
                                    <div>
                                        <small class="d-block text-black-50 pb-2">15.2MB</small>
                                        <small class="opacity-6">
                                            Modified on: <span class="text-black-50">12.06.2020</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-box mb-5">
                            <div class="card-body">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-top">
                                        <button type="button" class="btn btn-link p-1 shadow-none btn-link-primary" v-b-tooltip.hover>
                                            <font-awesome-icon icon="ellipsis-v" />
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                        </div>
                                    </div>
                                    <div class="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                                        <font-awesome-icon icon="file-excel" class="display-2 text-warning mx-auto" />
                                    </div>
                                    <a href="javascript:void(0);">
                                        <b>Excel_2002.xls</b>
                                    </a>
                                    <div>
                                        <small class="d-block text-black-50 pb-2">3.1MB</small>
                                        <small class="opacity-6">
                                            Modified: <span class="text-black-50">5 hours ago</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-box mb-5">
                            <div class="card-body">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-top">
                                        <button type="button" class="btn btn-link p-1 shadow-none btn-link-primary" v-b-tooltip.hover>
                                            <font-awesome-icon icon="ellipsis-v" />
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                        </div>
                                    </div>
                                    <div class="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                                        <font-awesome-icon icon="file-archive" class="display-2 text-danger mx-auto" />
                                    </div>
                                    <a href="javascript:void(0);">
                                        <b>AllPhotos.zip</b>
                                    </a>
                                    <div>
                                        <small class="d-block text-black-50 pb-2">15.2MB</small>
                                        <small class="opacity-6">
                                            Modified on: <span class="text-black-50">5 January 2000</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-box mb-5">
                            <div class="card-body">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-top">
                                        <button type="button" class="btn btn-link p-1 shadow-none btn-link-primary" v-b-tooltip.hover>
                                            <font-awesome-icon icon="ellipsis-v" />
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                        </div>
                                    </div>
                                    <div class="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                                        <font-awesome-icon icon="file-image" class="display-2 text-info mx-auto" />
                                    </div>
                                    <a href="javascript:void(0);">
                                        <b>IMG_063037.jpg</b>
                                    </a>
                                    <div>
                                        <small class="d-block text-black-50 pb-2">2.2mb</small>
                                        <small class="opacity-6">
                                            Modified on: <span class="text-black-50">12.06.2020</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-box mb-5">
                            <div class="card-body">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-top">
                                        <button type="button" class="btn btn-link p-1 shadow-none btn-link-primary" v-b-tooltip.hover>
                                            <font-awesome-icon icon="ellipsis-v" />
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                        </div>
                                    </div>
                                    <div class="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                                        <font-awesome-icon icon="file-audio" class="display-2 text-second mx-auto" />
                                    </div>
                                    <a href="javascript:void(0);">
                                        <b>Audio.mp3</b>
                                    </a>
                                    <div>
                                        <small class="d-block text-black-50 pb-2">745,3 kb</small>
                                        <small class="opacity-6">
                                            Modified on: <span class="text-black-50">22.11.2019</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-box mb-5">
                            <div class="card-body">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-top">
                                        <button type="button" class="btn btn-link p-1 shadow-none btn-link-primary" v-b-tooltip.hover>
                                            <font-awesome-icon icon="ellipsis-v" />
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                        </div>
                                    </div>
                                    <div class="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                                        <font-awesome-icon icon="file-word" class="display-2 text-first mx-auto" />
                                    </div>
                                    <a href="javascript:void(0);">
                                        <b>Example_WordFile.doc</b>
                                    </a>
                                    <div>
                                        <small class="d-block text-black-50 pb-2">15.2MB</small>
                                        <small class="opacity-6">
                                            Modified on: <span class="text-black-50">12.06.2020</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-box mb-5">
                            <div class="card-body">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-top">
                                        <button type="button" class="btn btn-link p-1 shadow-none btn-link-primary" v-b-tooltip.hover>
                                            <font-awesome-icon icon="ellipsis-v" />
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                        </div>
                                    </div>
                                    <div class="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                                        <font-awesome-icon icon="file-archive" class="display-2 text-danger mx-auto" />
                                    </div>
                                    <a href="javascript:void(0);">
                                        <b>AllPhotos.zip</b>
                                    </a>
                                    <div>
                                        <small class="d-block text-black-50 pb-2">15.2MB</small>
                                        <small class="opacity-6">
                                            Modified on: <span class="text-black-50">5 January 2000</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="card card-box mb-5">
                            <div class="card-body">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-top">
                                        <button type="button" class="btn btn-link p-1 shadow-none btn-link-primary" v-b-tooltip.hover>
                                            <font-awesome-icon icon="ellipsis-v" />
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                        </div>
                                    </div>
                                    <div class="rounded py-5 mb-3 bg-secondary d-flex align-items-center align-content-center">
                                        <font-awesome-icon icon="file-archive" class="display-2 text-danger mx-auto" />
                                    </div>
                                    <a href="javascript:void(0);">
                                        <b>AllPhotos.zip</b>
                                    </a>
                                    <div>
                                        <small class="d-block text-black-50 pb-2">15.2MB</small>
                                        <small class="opacity-6">
                                            Modified on: <span class="text-black-50">5 January 2000</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="bg-white p-3 d-block rounded mb-5 d-flex justify-content-center" aria-label="Page navigation example">
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
                <h5 class="font-size-sm text-uppercase text-black-50 font-weight-bold my-4">Recent folders</h5>

                <div class="row">
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box btn rounded text-left mb-5 p-3">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                                        <font-awesome-icon icon="folder-open" />
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-md">Downloads</span>
                                        <span class="badge badge-neutral-warning text-warning ml-2">OLD</span>
                                    </div>
                                    <p class="text-black-50 opacity-8 mb-0">
                                        <b>5 files</b>, 15 mb
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box btn rounded text-left mb-5 p-3">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                                        <font-awesome-icon icon="folder" />
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-md">Image album</span>
                                    </div>
                                    <p class="text-black-50 opacity-8 mb-0">
                                        <b>125 files</b>, 564 mb
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box btn rounded text-left mb-5 p-3">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                                        <font-awesome-icon icon="folder-plus" />
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-md">Reports</span>
                                    </div>
                                    <p class="text-black-50 opacity-8 mb-0">
                                        <b>45 files</b>, 345 mb
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box btn rounded text-left mb-5 p-3">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="text-center text-warning display-2 d-50 rounded-circle mb-3 mb-sm-2">
                                        <font-awesome-icon icon="file-excel" />
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-md">Other files</span>
                                    </div>
                                    <p class="text-black-50 opacity-8 mb-0">
                                        <b>55 files</b>, 2,3 GB
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box btn rounded text-left mb-5 p-3">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="text-center text-first display-2 d-50 rounded-circle mb-3 mb-sm-2">
                                        <font-awesome-icon icon="folder-open" />
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-md">Websites</span>
                                        <span class="badge badge-success ml-2">New</span>
                                    </div>
                                    <p class="text-black-50 opacity-8 mb-0">
                                        <b>3 directories</b>, 45,23 GB
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-12 col-xl-6">
                        <a href="javascript:void(0);" class="card card-box btn rounded text-left mb-5 p-3">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="text-center text-danger display-2 d-50 rounded-circle mb-3 mb-sm-2">
                                        <font-awesome-icon icon="folder" />
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-3">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-md text-danger"><b>Overdue</b></span>
                                    </div>
                                    <p class="text-black-50 opacity-8 mb-0">
                                        <b>3 files</b>, 34 mb
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </VuePerfectScrollbar>
        </div>
        <div class="app-content--sidebar app-content--sidebar__lg pos-r border-right" v-bind:class="{ 'sidebar-inner-open' : isActiveRight }">
            <div class="app-content--sidebar__header border-0 p-0">
                <ul class="nav nav-line nav-line-alt nav-justified">
                    <li class="nav-item">
                        <a class="nav-link py-4 font-weight-bold px-1" href="javascript:void(0)">
                            Details
                            <div class="divider"></div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link py-4 font-weight-bold px-1 active" href="javascript:void(0)">
                            Activity
                            <div class="divider"></div>
                        </a>
                    </li>
                </ul>
            </div>
            <VuePerfectScrollbar class="scrollbar-container app-content--sidebar__content px-0 pt-3 pb-0" v-once>
                <div class="p-3">
                    <div class="timeline-list">
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
                                <h4 class="timeline-item--label mb-2 font-weight-bold">Business investor meeting</h4>
                                <p>
                                    Mosaic, the first graphical browser, is introduced to the average consumer.
                                </p>
                                <div class="mt-3">
                                    <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-1.jpg" alt="Rounded image" width="70" class="img-fluid rounded mr-3 shadow-sm"></a>
                                    <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-3.jpg" alt="Rounded image" width="70" class="img-fluid rounded shadow-sm"></a>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-item--content">
                                <div class="timeline-item--icon"></div>
                                <h4 class="timeline-item--label mb-2 font-weight-bold">Learning round table gathering</h4>
                                <p>
                                    First ever iPod launches.
                                </p>
                                <div class="mt-2">
                                    <button class="btn btn-sm btn-primary" type="button">Submit Report</button>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-item--content">
                                <div class="timeline-item--icon"></div>
                                <h4 class="timeline-item--label mb-2 font-weight-bold">2003</h4>
                                <p>
                                    MySpace becomes the most popular social network.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="p-3">
                    <div class="text-center">
                        <a href="javascript:void(0);" class="d-inline-block my-auto" v-b-tooltip.hover title="Bamburgh Vue.js Admin Dashboard PRO">
                            <img src="@/assets/img/admin-logo-inverse.png" alt="">
                        </a>
                    </div>
                    <div class="swal2-icon swal2-success swal2-animate-success-icon" style="display: flex;">
                        <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                        <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                        <div class="swal2-success-ring"></div>
                        <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                        <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                    </div>

                    <div class="text-center">
                        <h3 class="font-size-xl line-height-sm mt-2 mb-2 text-black font-weight-bold">
                            All tasks completed 😀
                        </h3>
                        <p class="font-size-md text-black-50 mb-5">
                            You have no modifications active!
                        </p>
                    </div>
                    <a href="javascript:void(0);" class="card card-box mb-5 card-box-border-bottom border-danger">
                        <div class="card-body">
                            <div class="align-box-row align-items-center">
                                <div class="mr-3">
                                    <div class="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                                        <font-awesome-icon icon="keyboard" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-weight-bold">
                                        <small class="text-black-50 d-block mb-1 text-uppercase">Orders</small>
                                        <span class="font-size-xxl text-danger mt-1">345</span>
                                    </div>
                                </div>
                                <div class="ml-auto card-hover-indicator align-self-center">
                                    <font-awesome-icon icon="chevron-right" class="font-size-xl" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </VuePerfectScrollbar>
        </div>
        <div class="sidebar-inner-mobile-overlay" @click="toggleSidebarLeft" v-bind:class="{ 'active' : isActiveLeft }"></div>
        <div class="sidebar-inner-mobile-overlay" @click="toggleSidebarRight" v-bind:class="{ 'active' : isActiveRight }"></div>

    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faEllipsisV,
        faFileWord,
        faFileArchive,
        faFolderOpen,
        faFolder,
        faKeyboard,
        faFileAudio,
        faFileExcel,
        faBars,
        faUpload,
        faFile,
        faConciergeBell,
        faPlug,
        faFileImage,
        faFileAlt,
        faFileVideo,
        faHdd,
        faChevronRight,
        faFolderPlus,
        faTrashAlt,
        faChevronLeft
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEllipsisV,
        faFileWord,
        faFileArchive,
        faFolderOpen,
        faFolder,
        faKeyboard,
        faFileAudio,
        faFileExcel,
        faBars,
        faUpload,
        faFile,
        faConciergeBell,
        faPlug,
        faFileImage,
        faFileAlt,
        faFileVideo,
        faHdd,
        faChevronRight,
        faFolderPlus,
        faTrashAlt,
        faChevronLeft
    );
    export default {
        components: {
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
        },
        data() {
            return {
                isActiveLeft: false,
                isActiveRight: false,
            }
        },
        methods: {
            toggleSidebarLeft: function(){
                this.isActiveLeft = !this.isActiveLeft;
            },
            toggleSidebarRight: function(){
                this.isActiveRight = !this.isActiveRight;
            },
        }
    }
</script>
