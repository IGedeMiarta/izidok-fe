<template>
    <div>
        <div class="bg-first py-5">
            <div class="container pt-sm-0 pt-5">
                <div class="row">
                    <div class="col-lg-6 d-flex align-items-center">
                        <div class="w-100">
                            <div class="row d-none d-md-flex mt-3">
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
                            <div class="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-2 mx-auto my-4 w-50"></div>
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
                    <div class="col-lg-6 d-flex align-items-center">
                        <div class="w-100">
                            <div class="card border-0 mt-5 mt-lg-0 card-box">
                                <div class="card-body">
                                    <div class="text-black">
                                        <h1 class="display-4 mb-3 font-weight-bold">
                                            Pleasure rationally encounter consequences
                                        </h1>
                                        <p class="font-size-md mb-4 text-black-50">
                                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized.
                                        </p>
                                        <div>
                                            <form>
                                                <div class="row">
                                                    <div class="col pr-0">
                                                        <input type="text" class="form-control" placeholder="Email">
                                                    </div>
                                                    <div class="col">
                                                        <b-button block variant="first" class="w-100">
                                                            <span class="btn-wrapper--label">
                                                                Sign up
                                                            </span>
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <small class="text-black-50 d-block pt-2">It takes less than 20 seconds to create your account!</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <small class="text-center d-block text-white-50">
                        Copyright &copy; 2019 - uiFort.com
                    </small>
                </div>
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