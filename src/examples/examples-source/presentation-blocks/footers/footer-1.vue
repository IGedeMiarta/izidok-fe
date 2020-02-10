<template>
    <div>
        <div class="py-5">
            <div class="container py-5">
                <div class="row text-center text-lg-left">
                    <div class="col-lg-5 d-flex align-items-center">
                        <div class="mb-5 mb-lg-0 w-100">
                            <a href="javascript:void(0);" >
                                <div class="navbar-brand d-50 bg-primary rounded-circle text-center" v-b-tooltip data-tooltip-class="tooltip-danger"  title="Welcome to uiFort 😀">
                                    <img src="@/assets/img/logo-inverse.png" class="d-inline-block my-auto" width="26px">
                                </div>
                            </a>
                            <p class="text-black-50 font-size-lg my-3">The home of perfectly built UI kits, dashboards, themes & templates.</p>
                            <div class="divider border-1 rounded-circle border-dark bg-dark opacity-2 mx-auto mx-lg-0 mb-4 w-25"></div>
                            <ul class="nav justify-content-center justify-content-lg-start">
                                <li class="nav-item">
                                    <a class="btn btn-facebook px-3 py-1 mx-2 font-size-lg" v-b-tooltip data-tooltip-class="tooltip-first" href="javascript:void(0);" title="Facebook">
                                        <font-awesome-icon :icon="['fab', 'facebook-square']" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="btn btn-twitter px-3 py-1 mx-2 font-size-lg" v-b-tooltip data-tooltip-class="tooltip-first" href="javascript:void(0);" title="Twitter">
                                        <font-awesome-icon :icon="['fab', 'twitter']" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="btn btn-google-plus px-3 py-1 mx-2 font-size-lg" v-b-tooltip data-tooltip-class="tooltip-first" href="javascript:void(0);" title="Google+">
                                        <font-awesome-icon :icon="['fab', 'google-plus']" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="btn btn-instagram px-3 py-1 mx-2 font-size-lg" v-b-tooltip data-tooltip-class="tooltip-first" href="javascript:void(0);" title="Instagram">
                                        <font-awesome-icon :icon="['fab', 'instagram']" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-none col-lg-7 d-md-flex align-items-center">
                        <div class="row w-100">
                            <div class="col-md-4">
                                <div class="divider-v divider-v-lg opacity-1 d-none d-lg-block"></div>
                                <div class="pl-3">
                                    <h6 class="text-dark font-weight-bold mb-3">
                                        Services
                                    </h6>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1">Products</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1">About us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="divider-v divider-v-lg opacity-1 d-none d-lg-block"></div>
                                <div class="pl-3">
                                    <h6 class="text-dark font-weight-bold mb-3">
                                        Support
                                    </h6>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1">Support center</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1">Affiliates</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="pl-3">
                                    <h6 class="text-dark font-weight-bold mb-3">
                                        UI Themes
                                    </h6>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1">React themes</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1">HTML5 themes</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link px-0 py-1">Angular themes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider border-1 d-none d-md-block rounded-circle border-dark bg-dark opacity-2 mx-auto my-5 w-25"></div>
                <small class="text-center d-block text-black-50">
                    Copyright &copy; 2019 - uiFort.com
                </small>
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'

    import {
        faFacebookSquare,
        faTwitter,
        faDribbble,
        faInstagram,
        faGooglePlus
    } from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faFacebookSquare,
        faTwitter,
        faDribbble,
        faInstagram,
        faGooglePlus
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>