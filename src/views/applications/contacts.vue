<template>
    <div class="app-content app-content-aside fixed-inner-layout bg-white">
        <div class="d-flex d-lg-none p-4 bg-secondary order-0 justify-content-between align-items-center">
            <div></div>
            <button type="button" class="btn btn-sm btn-primary px-3 toggle-inner-sidebar" v-bind:class="{ 'active' : isActiveRight }" @click="toggleSidebarRight">
                <font-awesome-icon icon="bars" />
            </button>
        </div>
        <div class="app-content--inner p-0 d-flex flex-column">
            <div class="pt-4 pb-5">
                <div class="d-flex px-5 justify-content-between">
                    <div class="pr-5">
                        <h5 class="display-4 mb-0 font-weight-bold">Contacts</h5>
                    </div>
                    <div class="d-flex align-items-center">

                    </div>
                </div>
                <ul class="nav nav-line nav-line-alt px-5 mt-4">
                    <li class="nav-item">
                        <a class="nav-link active px-3">
                            Followers
                            <span class="badge ml-2 badge-neutral-first text-first">128</span>
                            <div class="divider"></div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-3" href="javascript:void(0)">
                            Subscribers
                            <span class="badge ml-2 badge-neutral-first text-first">2,125</span>
                            <div class="divider"></div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="px-5">
                <div class="row  pt-3">
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-5">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-bottom">
                                        <span class="badge badge-pill badge-warning">Warning</span>
                                    </div>
                                    <img src="@/assets/img/stock-photos/people-1.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body text-center card-body-avatar">
                                    <div class="avatar-icon-wrapper avatar-icon-xl">
                                        <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                    </div>
                                    <h3 class="card-title mt-4 mb-1">Patrick Hills</h3>
                                    <p class="card-text mb-3">Junior Software Developer</p>
                                    <div>
                                        <button class="btn btn-facebook" type="button">
                                            <span class="btn-wrapper--icon">
                                                <font-awesome-icon :icon="['fab', 'facebook']" />
                                            </span>
                                        </button>
                                        <button class="btn btn-dribbble mr-2 ml-2" type="button">
                                            <span class="btn-wrapper--icon">
                                                <font-awesome-icon :icon="['fab', 'dribbble']" />
                                            </span>
                                        </button>
                                        <button class="btn btn-twitter" type="button">
                                            <span class="btn-wrapper--icon">
                                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-5">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-bottom">
                                        <span class="badge badge-pill badge-warning">Warning</span>
                                    </div>
                                    <img src="@/assets/img/stock-photos/people-2.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body text-center card-body-avatar">
                                    <div class="avatar-icon-wrapper avatar-icon-xl">
                                        <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                    </div>
                                    <h3 class="card-title mt-4 mb-1">Carol Parker</h3>
                                    <p class="card-text mb-3">Lead UI Designer</p>
                                    <div>
                                        <button class="btn btn-facebook" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </span>
                                        </button>
                                        <button class="btn btn-dribbble mr-2 ml-2" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'dribbble']" />
                        </span>
                                        </button>
                                        <button class="btn btn-twitter" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-5">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-bottom">
                                        <span class="badge badge-pill badge-warning">Warning</span>
                                    </div>
                                    <img src="@/assets/img/stock-photos/people-3.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body text-center card-body-avatar">
                                    <div class="avatar-icon-wrapper avatar-icon-xl">
                                        <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar3.jpg" alt=""></div>
                                    </div>
                                    <h3 class="card-title mt-4 mb-1">Robert Pose</h3>
                                    <p class="card-text mb-3">Senior Software Developer</p>
                                    <div>
                                        <button class="btn btn-facebook" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </span>
                                        </button>
                                        <button class="btn btn-dribbble mr-2 ml-2" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'dribbble']" />
                        </span>
                                        </button>
                                        <button class="btn btn-twitter" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-5">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-bottom">
                                        <span class="badge badge-pill badge-warning">Warning</span>
                                    </div>
                                    <img src="@/assets/img/stock-photos/people-4.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body text-center card-body-avatar">
                                    <div class="avatar-icon-wrapper avatar-icon-xl">
                                        <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar4.jpg" alt=""></div>
                                    </div>
                                    <h3 class="card-title mt-4 mb-1">Mandy Erle</h3>
                                    <p class="card-text mb-3">DevOps Architect</p>
                                    <div>
                                        <button class="btn btn-facebook" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </span>
                                        </button>
                                        <button class="btn btn-dribbble mr-2 ml-2" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'dribbble']" />
                        </span>
                                        </button>
                                        <button class="btn btn-twitter" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-5">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-bottom">
                                        <span class="badge badge-pill badge-warning">Warning</span>
                                    </div>
                                    <img src="@/assets/img/hero-bg/hero-2.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body text-center card-body-avatar">
                                    <div class="avatar-icon-wrapper avatar-icon-xl">
                                        <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar5.jpg" alt=""></div>
                                    </div>
                                    <h3 class="card-title mt-4 mb-1">Adella Galen</h3>
                                    <p class="card-text mb-3">QA Manager</p>
                                    <div>
                                        <button class="btn btn-facebook" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </span>
                                        </button>
                                        <button class="btn btn-dribbble mr-2 ml-2" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'dribbble']" />
                        </span>
                                        </button>
                                        <button class="btn btn-twitter" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-5">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-bottom">
                                        <span class="badge badge-pill badge-warning">Warning</span>
                                    </div>
                                    <img src="@/assets/img/hero-bg/hero-3.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body text-center card-body-avatar">
                                    <div class="avatar-icon-wrapper avatar-icon-xl">
                                        <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                                    </div>
                                    <h3 class="card-title mt-4 mb-1">Kate Taylor</h3>
                                    <p class="card-text mb-3">Frontend Developer</p>
                                    <div>
                                        <button class="btn btn-facebook" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </span>
                                        </button>
                                        <button class="btn btn-dribbble mr-2 ml-2" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'dribbble']" />
                        </span>
                                        </button>
                                        <button class="btn btn-twitter" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-5">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-bottom">
                                        <span class="badge badge-pill badge-warning">Warning</span>
                                    </div>
                                    <img src="@/assets/img/hero-bg/hero-4.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body text-center card-body-avatar">
                                    <div class="avatar-icon-wrapper avatar-icon-xl">
                                        <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                    </div>
                                    <h3 class="card-title mt-4 mb-1">Napoleon Stacey</h3>
                                    <p class="card-text mb-3">QA Engineer</p>
                                    <div>
                                        <button class="btn btn-facebook" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </span>
                                        </button>
                                        <button class="btn btn-dribbble mr-2 ml-2" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'dribbble']" />
                        </span>
                                        </button>
                                        <button class="btn btn-twitter" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="card mb-5">
                                <div class="card-img-wrapper">
                                    <div class="card-badges card-badges-bottom">
                                        <span class="badge badge-pill badge-warning">Warning</span>
                                    </div>
                                    <img src="@/assets/img/hero-bg/hero-8.jpg" class="card-img-top" alt="...">
                                </div>
                                <div class="card-body text-center card-body-avatar">
                                    <div class="avatar-icon-wrapper avatar-icon-xl">
                                        <div class="avatar-icon rounded"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                    </div>
                                    <h3 class="card-title mt-4 mb-1">Mandy Karol</h3>
                                    <p class="card-text mb-3">Software Developer</p>
                                    <div>
                                        <button class="btn btn-facebook" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </span>
                                        </button>
                                        <button class="btn btn-dribbble mr-2 ml-2" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'dribbble']" />
                        </span>
                                        </button>
                                        <button class="btn btn-twitter" type="button">
                        <span class="btn-wrapper--icon">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
            </div>
        </div>
        <div class="app-content--sidebar app-content--sidebar__lg pos-r bg-white shadow-none" v-bind:class="{ 'sidebar-inner-open' : isActiveRight }">
            <div class="app-content--sidebar__content">
                <div class="font-weight-bold font-size-lg d-flex align-items-center mb-3">
                    <span>Latest subscribers</span>
                    <div class="ml-auto font-size-xs">
                        <a href="javascript:void(0);" v-b-tooltip.hover title="Add new subscriber">
                            <font-awesome-icon icon="plus-circle" />
                        </a>
                    </div>
                </div>
                <div class="py-2">
                    <div class="align-box-row">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-md">
                            <span class="badge badge-circle badge-success">Online</span>
                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                        </a>
                        <div class="pl-2">
                                <span class="d-block">
                                    <a href="javascript:void(0);">Adella Galen</a>
                                    <small class="d-block text-black-50">(Galen@example.com)</small>
                                </span>
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <div class="align-box-row">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-md">
                            <span class="badge badge-circle badge-danger">Offline</span>
                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                        </a>
                        <div class="pl-2">
                                <span class="d-block">
                                    <a href="javascript:void(0);">Mandy Erle</a>
                                    <small class="d-block text-black-50">(Mandyrle@gma.com)</small>
                                </span>
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <div class="align-box-row">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-md">
                            <span class="badge badge-circle badge-success">Online</span>
                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar3.jpg" alt=""></div>
                        </a>
                        <div class="pl-2">
                                <span class="d-block">
                                    <a href="javascript:void(0);">John Doe</a>
                                    <small class="d-block text-black-50">(Galen@example.com)</small>
                                </span>
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <div class="align-box-row">
                        <a href="javascript:void(0);" class="avatar-icon-wrapper avatar-icon-md">
                            <span class="badge badge-circle badge-warning">Idle</span>
                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar4.jpg" alt=""></div>
                        </a>
                        <div class="pl-2">
                                <span class="d-block">
                                    <a href="javascript:void(0);">Napoleon Stacey</a>
                                    <small class="d-block text-black-50">(Napoleon@test.com)</small>
                                </span>
                        </div>
                    </div>
                </div>
                <div class="divider my-4"></div>
                <div class="font-weight-bold font-size-lg d-flex align-items-center mb-3">
                    <span>Positions</span>
                    <div class="ml-auto font-size-xs">
                        <a href="javascript:void(0);" class="btn btn-sm btn-first" v-b-tooltip.hover title="Send new message">
                            <font-awesome-icon icon="plus" />
                        </a>
                    </div>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);">Software developer</a>
                            </span>
                        <span class="badge badge-dark">
                                22
                            </span>
                    </div>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);">QA Engineer</a>
                            </span>
                        <span class="badge badge-dark">
                                23
                            </span>
                    </div>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);">UX Specialist</a>
                            </span>
                        <span class="badge badge-dark">
                                76
                            </span>
                    </div>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);">Frontend Architect</a>
                            </span>
                        <span class="badge badge-dark">
                                15
                            </span>
                    </div>
                </div>
                <div class="py-2">
                    <div class="d-flex justify-content-between">
                            <span class="d-block">
                                <a href="javascript:void(0);">DevOps Manager</a>
                            </span>
                        <span class="badge badge-dark">
                                5
                            </span>
                    </div>
                </div>
                <div class="divider my-4"></div>
                <div class="card card-box mt-3 mb-5 bg-midnight-bloom text-light">
                    <div class="card-body">
                        <div class="align-box-row align-items-start">
                            <div class="font-weight-bold">
                                <small class="text-white-50 d-block mb-1 text-uppercase">Contacts</small>
                                <span class="font-size-xxl mt-1">23,274</span>
                            </div>
                            <div class="ml-auto">
                                <div class="bg-white text-center text-primary font-size-xl d-50 rounded-circle">
                                    <font-awesome-icon icon="snowflake" />
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <font-awesome-icon icon="arrow-up" class="text-warning" />
                            <span class="text-warning">7.4%</span>
                            <span class="text-white-50">same as before</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-inner-mobile-overlay" @click="toggleSidebarRight" v-bind:class="{ 'active' : isActiveRight }"></div>

    </div>
</template>

<script>

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faBars,
        faEnvelopeOpenText,
        faChevronLeft,
        faChevronRight,
        faPlus,
        faSnowflake,
        faArrowUp
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faBars,
        faEnvelopeOpenText,
        faChevronLeft,
        faChevronRight,
        faPlus,
        faSnowflake,
        faArrowUp
    );
    export default {
        components: {
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
