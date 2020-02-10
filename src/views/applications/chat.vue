<template>
    <div class="app-content app-content-aside">
        <div class="d-flex d-lg-none p-4 order-0 justify-content-between align-items-center">
            <button type="button" class="btn btn-sm btn-primary px-3 toggle-inner-sidebar" v-bind:class="{ 'active' : isActiveLeft }" @click="toggleSidebarLeft">
                <font-awesome-icon icon="ellipsis-v" />
            </button>
            <button type="button" class="btn btn-sm btn-primary px-3 toggle-inner-sidebar" v-bind:class="{ 'active' : isActiveRight }" @click="toggleSidebarRight">
                <font-awesome-icon icon="bars" />
            </button>
        </div>
        <div class="app-content--sidebar order-1 app-content--sidebar__lg" v-bind:class="{ 'sidebar-inner-open' : isActiveLeft }">
            <VuePerfectScrollbar class="app-content--sidebar__content scrollbar-container" v-once>
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="nav-header d-flex align-items-center">
                        <div>
                            Channels tags
                        </div>
                        <div class="ml-auto font-size-xs">
                            <a href="javascript:void(0);" v-b-tooltip.hover title="Add new channel">
                                <font-awesome-icon icon="plus-circle" />
                            </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="javascript:void(0);">
                            # development
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            # angular_themes
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            # react_templates
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            # vue_dashboards
                        </a>
                    </li>
                </ul>
                <div class="divider my-3"></div>
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="nav-header">
                        Members list
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block">
                                        Adella Galen
                                        <small class="d-block text-black-50">(Galen@example.com)</small>
                                    </span>
                                </div>
                                <div class="ml-auto font-size-lg">
                                    <font-awesome-icon icon="angle-right" class="text-right d-block" />
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-danger">Offline</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block">
                                        Mandy Erle
                                        <small class="d-block text-black-50">(Mandyrle@gma.com)</small>
                                    </span>
                                </div>
                                <div class="ml-auto font-size-lg">
                                    <font-awesome-icon icon="angle-right" class="text-right d-block" />
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar3.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block">
                                        John Doe
                                        <small class="d-block text-black-50">(Galen@example.com)</small>
                                    </span>
                                </div>
                                <div class="ml-auto font-size-lg">
                                    <font-awesome-icon icon="angle-right" class="text-right d-block" />
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-warning">Idle</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar4.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block">
                                        Napoleon Stacey
                                        <small class="d-block text-black-50">(Napoleon@test.com)</small>
                                    </span>
                                </div>
                                <div class="ml-auto font-size-lg">
                                    <font-awesome-icon icon="angle-right" class="text-right d-block" />
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="divider my-3"></div>
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="nav-header text-primary pb-2">
                        <div>
                            Stats
                        </div>
                    </li>
                </ul>
                <div class="row font-size-xs">
                    <div class="col">
                        <div class="card text-center my-2 p-3">
                            <div>
                                <font-awesome-icon icon="user" class="font-size-xxl text-success" />
                            </div>
                            <div class="mt-2 line-height-sm">
                                <b class="font-size-lg">345</b>
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
                                <b class="font-size-lg">2,693</b>
                                <span class="text-black-50 d-block">messages</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-box my-3">
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
                                <font-awesome-icon icon="clock" class="mr-1" />
                                14:22
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-box my-3">
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
                                <font-awesome-icon icon="clock" class="mr-1" />
                                09:41
                            </div>
                        </div>
                    </div>
                </div>
            </VuePerfectScrollbar>
        </div>
        <div class="app-content--inner order-3 order-lg-2 p-0 card-box d-flex flex-column bg-secondary">
            <div class="app-content--inner__header rounded-0 card-header bg-white p-4 border-bottom">
                <div class="card-header--title">
                    <small>Messenger</small>
                    <b>Talking to Kate</b>
                </div>
                <div class="card-header--actions">
                    <a href="javascript:void(0);" class="btn btn-sm btn-first" v-b-tooltip.hover title="Send new message">
                        <font-awesome-icon icon="plus" />
                    </a>
                </div>
            </div>
            <VuePerfectScrollbar class="scrollbar-container" v-once>
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
            <div class="app-content--inner__footer bg-white p-4 border-top">
                <div>
                    <input class="form-control" placeholder="Write your message and hit enter to send...">
                </div>
                <div class="align-box-row mt-3">
                    <div class="align-items-center">
                        <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl text-success" v-b-tooltip.hover title="Add audio file">
                            <font-awesome-icon icon="file-audio" />
                        </a>
                        <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl mr-2 ml-2 text-danger" v-b-tooltip.hover title="Add video file">
                            <font-awesome-icon icon="file-video" />
                        </a>
                        <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl text-info" v-b-tooltip.hover title="Upload documents">
                            <font-awesome-icon icon="file-excel" />
                        </a>
                    </div>
                    <div class="ml-auto">
                        <a href="javascript:void(0);" class="btn btn-primary">
                            Send
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="app-content--sidebar pos-r order-2 order-lg-3 app-content--sidebar__sm" v-bind:class="{ 'sidebar-inner-open' : isActiveRight }">
            <div class="app-content--sidebar__header border-0 pb-0">
                <div class="font-weight-bold font-size-lg">
                    Friends list
                </div>
            </div>
            <VuePerfectScrollbar class="scrollbar-container app-content--sidebar__content p-3" v-once>
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-danger">Offline</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        Mandy Erle
                                        <div class="d-block text-black-50">3 hours ago</div>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar3.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        John Doe
                                        <div class="d-block text-black-50">2 hours ago</div>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-warning">Idle</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar4.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        Napoleon Stacey
                                        <small class="d-block text-black-50">(Napoleon@test.com)</small>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-danger">Offline</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        Mandy Erle
                                        <div class="d-block text-black-50">3 hours ago</div>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        Adella Galen
                                        <div class="d-block text-black-50">5 hours ago</div>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-danger">Offline</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        Mandy Erle
                                        <div class="d-block text-black-50">3 hours ago</div>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar3.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        John Doe
                                        <div class="d-block text-black-50">2 hours ago</div>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-warning">Idle</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar4.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        Napoleon Stacey
                                        <small class="d-block text-black-50">(Napoleon@test.com)</small>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-danger">Offline</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        Mandy Erle
                                        <div class="d-block text-black-50">3 hours ago</div>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <div class="align-box-row">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar5.jpg" alt=""></div>
                                </div>
                                <div class="pl-2">
                                    <span class="d-block text-black">
                                        John Doe
                                        <div class="d-block text-black-50">2 hours ago</div>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </VuePerfectScrollbar>
            <div class="app-content--sidebar__footer d-none d-lg-block">
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="nav-header text-primary">
                        Quick actions
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="file" class="mr-1" />
                            Receive files
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="plug" class="mr-1" />
                            Connect phone
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="concierge-bell" class="mr-1" />
                            Recent messages
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-danger" href="javascript:void(0);">
                            <font-awesome-icon icon="trash-alt" class="text-danger mr-1" />
                            Clear conversation
                        </a>
                    </li>
                </ul>
            </div>
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
        faBars,
        faAngleRight,
        faUser,
        faPlus,
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faPlug,
        faTrashAlt,
        faConciergeBell,
        faFile
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEllipsisV,
        faBars,
        faAngleRight,
        faUser,
        faPlus,
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faPlug,
        faTrashAlt,
        faConciergeBell,
        faFile
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
