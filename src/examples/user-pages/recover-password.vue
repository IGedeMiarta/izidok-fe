<template>
    <div class="app-wrapper bg-white">
        <div class="app-main">
            <a href="javascript:history.back()" class="btn btn-lg btn-success btn-go-back">
            <span class="btn-wrapper--icon">
                <font-awesome-icon icon="arrow-left" />
            </span>
                <span class="btn-wrapper--label">Back to previous page</span>
            </a>
            <div class="app-content p-0">
                <div class="app-content--inner p-0">
                    <div class="flex-grow-1 w-100 d-flex align-items-center">
                        <div class="bg-composed-wrapper--content">
                            <div class="hero-wrapper bg-composed-wrapper bg-arielle-smile min-vh-100">
                                <div class="flex-grow-1 w-100 d-flex align-items-center">
                                    <div class="bg-composed-wrapper--image" :style="{ backgroundImage: 'url(' + require('@/assets/img/hero-bg/hero-3.jpg') + ')' }"></div>
                                    <div class="bg-composed-wrapper--bg bg-night-sky opacity-5"></div>
                                    <div class="bg-composed-wrapper--content text-center p-5">
                                        <div class="col-lg-4 px-0 mx-auto text-center text-white">
                                            <h1 class="display-2 mb-3 px-4 font-weight-bold">
                                                Recover Password
                                            </h1>
                                            <h3 class="font-size-lg line-height-sm font-weight-light d-block px-3 mb-3 text-white-50">
                                                Enter your username or email address and we will send you a link to reset your password.
                                            </h3>
                                            <div class="row no-gutters">
                                                <div class="col-sm-12 col-md-8 mt-0 mt-sm-4 px-2">
                                                    <input type="text" class="form-control form-control-lg" placeholder="Email">
                                                </div>
                                                <div class="col-sm-12 col-md-4 mt-0 mt-sm-4 px-2">
                                                    <button class="btn d-block shadow-none w-100 btn-warning btn-lg">
                                                            <span class="btn-wrapper--label">
                                                                Reset Password
                                                            </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="hero-footer pb-4">
                                    <ul class="nav">
                                        <li class="nav-item">
                                            <a class="nav-link font-size-lg text-white-50" v-b-tooltip.hover href="javascript:void(0);" title="Facebook">
                                                <font-awesome-icon :icon="['fab', 'facebook-square']" />
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-size-lg text-white-50" v-b-tooltip.hover href="javascript:void(0);" title="Twitter">
                                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-size-lg text-white-50" v-b-tooltip.hover href="javascript:void(0);" title="Google+">
                                                <font-awesome-icon :icon="['fab', 'google-plus']" />
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link font-size-lg text-white-50" v-b-tooltip.hover href="javascript:void(0);" title="Instagram">
                                                <font-awesome-icon :icon="['fab', 'instagram']" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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