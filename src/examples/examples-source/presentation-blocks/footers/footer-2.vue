<template>
    <div>
        <div class="bg-second py-5">
            <div class="container py-5">
                <div class="row text-center text-lg-left">
                    <div class="col-lg-5 d-flex align-items-center">
                        <div class="mb-5 mb-lg-0 w-100">
                            <a href="javascript:void(0);" >
                                <div class="navbar-brand d-50 bg-white rounded-circle text-center" v-b-tooltip data-tooltip-class="tooltip-secondary"  title="Welcome to uiFort 😀">
                                    <img src="@/assets/img/logo.png" class="d-inline-block my-auto" width="26px">
                                </div>
                            </a>
                            <p class="mb-5 mt-4 text-white-50">
                                I will give you a complete account of the system, and expound the actual teachings.
                            </p>
                            <div>
                                <a href="javascript:void(0);" class="btn btn-first mr-3">
                                    Contact us
                                </a>
                                <a href="javascript:void(0);" class="btn btn-outline-first">
                                    Affiliates
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="d-none col-lg-7 d-md-flex align-items-center">
                        <div class="row w-100">
                            <div class="col-md-4">
                                <div class="divider-v divider-v-lg opacity-1 d-none d-lg-block"></div>
                                <div class="pl-3">
                                    <h6 class="text-white font-weight-bold mb-3">
                                        Services
                                    </h6>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1 text-white-50">Products</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1 text-white-50">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1 text-white-50">About us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="divider-v divider-v-lg opacity-1 d-none d-lg-block"></div>
                                <div class="pl-3">
                                    <h6 class="text-white font-weight-bold mb-3">
                                        Support
                                    </h6>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1 text-white-50">Support center</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1 text-white-50">Affiliates</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1 text-white-50">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="pl-3">
                                    <h6 class="text-white font-weight-bold mb-3">
                                        UI Themes
                                    </h6>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1 text-white-50">React themes</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1 text-white-50">HTML5 themes</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1 text-white-50">Angular themes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider border-2 d-none d-md-block rounded-circle border-white bg-white opacity-2 mx-auto my-5 w-50"></div>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link font-size-lg text-white-50" v-b-tooltip data-tooltip-class="tooltip-secondary" href="javascript:void(0);" title="Facebook">
                            <font-awesome-icon :icon="['fab', 'facebook-square']" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-size-lg text-white-50" v-b-tooltip data-tooltip-class="tooltip-secondary" href="javascript:void(0);" title="Twitter">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-size-lg text-white-50" v-b-tooltip data-tooltip-class="tooltip-secondary" href="javascript:void(0);" title="Google+">
                            <font-awesome-icon :icon="['fab', 'google-plus']" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link font-size-lg text-white-50" v-b-tooltip data-tooltip-class="tooltip-secondary" href="javascript:void(0);" title="Instagram">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>