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
        <div class="app-content--sidebar bg-secondary app-content--sidebar__sm shadow-none border-right" v-bind:class="{ 'sidebar-inner-open' : isActiveLeft }">
            <div class="app-content--sidebar__header border-0 pb-0">
                <button type="button" class="btn btn-block btn-first">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon icon="upload" />
                        </span>
                    <span class="btn-wrapper--label">Compose new</span>
                </button>
            </div>
            <VuePerfectScrollbar class="app-content--sidebar__content scrollbar-container">
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="javascript:void(0);">
                            <font-awesome-icon icon="file" class="mr-2"/>
                            Inbox
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="plug" class="mr-2"/>
                            Starred
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="concierge-bell" class="mr-2"/>
                            Important
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="trash-alt" class="mr-2"/>
                            Sent mail
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="file-image" class="mr-2"/>
                            Drafts
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="file-alt" class="mr-2"/>
                            Spam
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="file-video" class="mr-2"/>
                            Trash
                        </a>
                    </li>
                    <li class="nav-header">
                        Labels
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="folder" class="mr-2"/>
                            Social
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="folder" class="mr-2"/>
                            Promotions
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="folder" class="mr-2"/>
                            Company
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">
                            <font-awesome-icon icon="folder" class="mr-2"/>
                            Ecommerce
                        </a>
                    </li>
                </ul>
                </VuePerfectScrollbar>
            <div class="app-content--sidebar__footer">
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="nav-header">
                        Space available
                    </li>
                    <li class="nav-item">
                        <div class="d-flex align-items-start">
                            <div class="display-3">
                                <font-awesome-icon icon="hdd" />
                            </div>
                            <div class="pl-3">
                                <small class="d-block mb-2"><b>21GB</b> used out of <b>25GB</b></small>
                                <div class="progress-bar-sm progress-bar-animated-alt progress">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 77%;"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="app-content--sidebar app-content--sidebar__lg pos-r shadow-none border-right" v-bind:class="{ 'sidebar-inner-open' : isActiveRight }">
            <div class="app-content--sidebar__header p-4">
                <div class="search-widget">
                    <font-awesome-icon icon="search" />
                    <input type="search" placeholder="Search terms here..." class="form-control">
                </div>
            </div>
            <VuePerfectScrollbar class="app-content--sidebar__content p-0 scrollbar-container">
                <ul class="nav nav-pills nav-pills-hover flex-column">
                    <li class="bg-secondary text-uppercase px-4 py-2 font-weight-bold font-size-xs">
                        Today
                    </li>
                    <li class="nav-item">
                        <div class="divider"></div>
                        <a class="nav-link rounded-0 p-4 m-0" href="javascript:void(0);">
                            <div class="d-flex align-items-start">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                                <div class="pl-3">
                                    <div class="d-flex justify-content-between text-black-50">
                                        <div>
                                            Adella Galen
                                        </div>
                                        <span class="opacity-5">12:54 PM</span>
                                    </div>
                                    <div class="font-weight-bold my-2">
                                        Beguiled and demoralized by the charms
                                    </div>
                                    <p class="font-size-xs mb-0">
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising ...
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div class="divider"></div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link rounded-0 p-4 m-0" href="javascript:void(0);">
                            <div class="d-flex align-items-start">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                </div>
                                <div class="pl-3">
                                    <div class="d-flex justify-content-between text-black-50">
                                        <div>
                                            Kate Jones
                                        </div>
                                        <span class="opacity-5">5:22 PM</span>
                                    </div>
                                    <div class="font-weight-bold my-2">
                                        Take a trivial example
                                    </div>
                                    <p class="font-size-xs mb-0">
                                        Because occasionally circumstances occur in which ...
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div class="divider"></div>
                    </li>
                    <li class="bg-secondary text-uppercase px-4 py-2 font-weight-bold font-size-xs">
                        Yesterday
                    </li>
                    <li class="nav-item">
                        <div class="divider"></div>
                        <a class="nav-link rounded-0 p-4 m-0" href="javascript:void(0);">
                            <div class="d-flex align-items-start">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar3.jpg" alt=""></div>
                                </div>
                                <div class="pl-3">
                                    <div class="d-flex justify-content-between text-black-50">
                                        <div>
                                            Napoleon Stacey
                                        </div>
                                        <span class="opacity-5">2:16 AM</span>
                                    </div>
                                    <div class="font-weight-bold my-2">
                                        Belongs to those
                                    </div>
                                    <p class="font-size-xs mb-0">
                                        Because occasionally circumstances occur in which toil and pain can great pleasure ...
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div class="divider"></div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link rounded-0 p-4 m-0" href="javascript:void(0);">
                            <div class="d-flex align-items-start">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar4.jpg" alt=""></div>
                                </div>
                                <div class="pl-3">
                                    <div class="d-flex justify-content-between text-black-50">
                                        <div>
                                            Mandy Erle
                                        </div>
                                        <span class="opacity-5">1:42 AM</span>
                                    </div>
                                    <div class="font-weight-bold my-2">
                                        Duty through weakness
                                    </div>
                                    <p class="font-size-xs mb-0">
                                        Other greater pleasures, or else he endures pains to avoid worse pains ...
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div class="divider"></div>
                    </li>
                    <li class="bg-secondary text-uppercase px-4 py-2 font-weight-bold font-size-xs">
                        17<sup>th</sup> July
                    </li>
                    <li class="nav-item">
                        <div class="divider"></div>
                        <a class="nav-link rounded-0 p-4 m-0" href="javascript:void(0);">
                            <div class="d-flex align-items-start">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                </div>
                                <div class="pl-3">
                                    <div class="d-flex justify-content-between text-black-50">
                                        <div>
                                            Adella Galen
                                        </div>
                                        <span class="opacity-5">12:54 PM</span>
                                    </div>
                                    <div class="font-weight-bold my-2">
                                        Beguiled and demoralized by the charms
                                    </div>
                                    <p class="font-size-xs mb-0">
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising ...
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div class="divider"></div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link rounded-0 p-4 m-0" href="javascript:void(0);">
                            <div class="d-flex align-items-start">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                </div>
                                <div class="pl-3">
                                    <div class="d-flex justify-content-between text-black-50">
                                        <div>
                                            Kate Jones
                                        </div>
                                        <span class="opacity-5">5:22 PM</span>
                                    </div>
                                    <div class="font-weight-bold my-2">
                                        Take a trivial example
                                    </div>
                                    <p class="font-size-xs mb-0">
                                        Because occasionally circumstances occur in which ...
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div class="divider"></div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link rounded-0 p-4 m-0" href="javascript:void(0);">
                            <div class="d-flex align-items-start">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar3.jpg" alt=""></div>
                                </div>
                                <div class="pl-3">
                                    <div class="d-flex justify-content-between text-black-50">
                                        <div>
                                            Napoleon Stacey
                                        </div>
                                        <span class="opacity-5">2:16 AM</span>
                                    </div>
                                    <div class="font-weight-bold my-2">
                                        Belongs to those
                                    </div>
                                    <p class="font-size-xs mb-0">
                                        Because occasionally circumstances occur in which toil and pain can great pleasure ...
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div class="divider"></div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link rounded-0 p-4 m-0" href="javascript:void(0);">
                            <div class="d-flex align-items-start">
                                <div class="avatar-icon-wrapper avatar-icon-md">
                                    <span class="badge badge-circle badge-success">Online</span>
                                    <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar4.jpg" alt=""></div>
                                </div>
                                <div class="pl-3">
                                    <div class="d-flex justify-content-between text-black-50">
                                        <div>
                                            Mandy Erle
                                        </div>
                                        <span class="opacity-5">1:42 AM</span>
                                    </div>
                                    <div class="font-weight-bold my-2">
                                        Duty through weakness
                                    </div>
                                    <p class="font-size-xs mb-0">
                                        Other greater pleasures, or else he endures pains to avoid worse pains ...
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                </VuePerfectScrollbar>
        </div>
        <div class="app-content--inner bg-white p-0 d-flex flex-column">
            <div class="app-content--inner__header m-4 p-3 rounded d-flex justify-content-between bg-secondary border-bottom">
                <div>
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-primary mr-2 px-3" v-b-tooltip.hover title="Previous">
                        <font-awesome-icon icon="arrow-left" />
                    </a>
                    <a href="javascript:void(0);" class="btn btn-sm btn-outline-primary px-3" v-b-tooltip.hover title="Next">
                        <font-awesome-icon icon="arrow-right" />
                    </a>
                </div>
                <div>
                    <a href="javascript:void(0);" class="btn btn-sm btn-primary mx-2 px-3" title="Reply">
                        <font-awesome-icon icon="reply" class="mr-2" />
                        Reply
                    </a>
                    <a href="javascript:void(0);" class="btn btn-sm btn-danger px-3" data-tooltip-class="tooltip-danger" v-b-tooltip.hover title="Move to trash">
                        <font-awesome-icon icon="trash-alt" />
                    </a>
                </div>
            </div>
            <VuePerfectScrollbar class="card shadow-none rounded mx-4 mb-4 p-3 scrollbar-container">
                <h3 class="font-size-lg mb-3 font-weight-bold">
                    Beguiled and demoralized by the charms
                </h3>
                <p class="font-size-lg mb-4 text-black-50">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>

                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>

                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>

                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>

                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>

                <p>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>

                <p>The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>

                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
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
        faUpload,
        faFile,
        faPlug,
        faTrashAlt,
        faConciergeBell,
        faFileAlt,
        faFileVideo,
        faFolder,
        faHdd,
        faReply,
        faFileImage,
        faArrowLeft,
        faFileAudio,
        faFileExcel
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEllipsisV,
        faBars,
        faUpload,
        faFile,
        faPlug,
        faTrashAlt,
        faConciergeBell,
        faFileAlt,
        faFileVideo,
        faFolder,
        faHdd,
        faReply,
        faFileImage,
        faArrowLeft,
        faFileAudio,
        faFileExcel
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
