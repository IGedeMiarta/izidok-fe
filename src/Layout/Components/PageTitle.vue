<template>
    <div class="page-title">
        <div class="row">
            <div class="col-xl-7">
                <div>
                    <ol class="breadcrumb text-uppercase font-size-xs p-0">
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Examples</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{heading}}</li>
                    </ol>
                    <h5 class="display-4 mt-1 mb-2 font-weight-bold">{{heading}}</h5>
                    <p class="text-black-50 mb-0">{{subheading}}</p>
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
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faFileCode,
        faExpandArrowsAlt,
        faBuilding
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faFileCode,
        faExpandArrowsAlt,
        faBuilding
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            VuePerfectScrollbar,
        },
        props: {
            icon: String,
            heading: String,
            subheading: String,

        }
    }
</script>
