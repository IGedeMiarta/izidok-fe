<template>
    <div class="app-wrapper bg-white">
        <div class="app-main">
            <div class="app-content p-0">
                <div class="app-content--inner p-0">
                    <div class="flex-grow-1 w-100 d-flex align-items-center">
                        <div class="bg-composed-wrapper--content">
                            <div class="row no-gutters">
                                <div class="col-lg-5">
                                    <div class="hero-wrapper bg-composed-wrapper bg-plum-plate min-vh-100">
                                        <div class="flex-grow-1 w-100 d-flex align-items-center">
                                            <div class="bg-composed-wrapper--image" :style="{ backgroundImage: 'url(' + require('@/assets/img/hero-bg/hero-9.jpg') + ')' }"></div>
                                            <div class="bg-composed-wrapper--bg bg-premium-dark opacity-5"></div>
                                            <div class="bg-composed-wrapper--content p-5">
                                                <div class="d-flex align-items-center">
                                                    <span class="badge badge-pill badge-second px-4 h-auto py-1">Register page</span>
                                                    <span class="text-white-50 pl-3" v-b-tooltip.right title="Create your own register or login pages using the included elements.">
                                                        <font-awesome-icon icon="question-circle" />
                                                    </span>
                                                </div>
                                                <div class="text-white mt-3">
                                                    <h1 class="display-4 my-3 font-weight-bold">
                                                        Why should you create an account?
                                                    </h1>
                                                    <p class="font-size-md mb-0 text-white-50">
                                                        A free hour, when our power of choice is untrammelled and when nothing prevents.
                                                    </p>
                                                    <div class="divider border-2 my-4 border-light opacity-2 rounded w-25"></div>
                                                    <div>
                                                        <a href="javascript:history.back()" class="btn btn-lg btn-warning">
                                                            <span class="btn-wrapper--icon">
                                                                <font-awesome-icon icon="arrow-left" />
                                                            </span>
                                                            <span class="btn-wrapper--label">Back to previous page</span>
                                                        </a>
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
                                <div class="col-lg-7 d-flex align-items-center">
                                    <div class="col-lg-6 mx-auto px-0">

                                        <b-tabs pills nav-class="nav-line mx-3 my-5">
                                            <b-tab title="Overview" active>
                                                <div slot="title">
                                                    Create an account
                                                    <div class="divider"></div>
                                                </div>
                                                <div class="px-4 py-2">
                                                    <h3 class="display-4 mb-2 font-weight-bold">
                                                        Create account
                                                    </h3>
                                                    <p class="font-size-lg mb-5 text-black-50">
                                                        Fill in the fields below and you'll be good to go.
                                                    </p>
                                                    <div class="form-group">
                                                        <label>Email address</label>
                                                        <input type="email" class="form-control" placeholder="Enter your email address">
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="d-flex justify-content-between mg-b-5">
                                                            <label>Password</label>
                                                        </div>
                                                        <input type="password" class="form-control" placeholder="Enter your password">
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Firstname</label>
                                                        <input type="text" class="form-control" placeholder="Enter your firstname">
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Lastname</label>
                                                        <input type="text" class="form-control" placeholder="Enter your lastname">
                                                    </div>
                                                    <div class="form-group mb-5">
                                                        By clicking the <strong>Create account</strong> button below you agree to our terms of service and privacy statement.
                                                    </div>

                                                    <button class="btn btn-primary btn-lg btn-block">Create Account</button>
                                                </div>
                                            </b-tab>
                                            <b-tab title="Sign in">
                                                <div slot="title">
                                                    Sign in
                                                    <div class="divider"></div>
                                                </div>
                                                <div class="card m-0 shadow-none border-0">
                                                    <h3 class="display-4 mb-2 font-weight-bold">
                                                        Existing account
                                                    </h3>
                                                    <p class="font-size-lg mb-5 text-black-50">
                                                        You already have an account? Fill in the fields below to login into your existing dashboard.
                                                    </p>
                                                    <div class="card-header p-3 pt-0 rounded bg-light">
                                                        <div class="text-black-50 text-center mb-3">
                                                            <small>Sign in with</small>
                                                        </div>
                                                        <div class="text-center">
                                                            <button class="btn btn-facebook mr-2" type="button">
                                                            <span class="btn-wrapper--icon">
                                                                <font-awesome-icon :icon="['fab', 'facebook']" />
                                                            </span>
                                                                <span class="btn-wrapper--label">
                                                                Facebook
                                                            </span>
                                                            </button>
                                                            <button class="btn btn-twitter ml-2" type="button">
                                                            <span class="btn-wrapper--icon">
                                                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                                            </span>
                                                                <span class="btn-wrapper--label">
                                                                Twitter
                                                            </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="text-center text-black-50 mb-3">
                                                            <small>Or sign in with credentials</small>
                                                        </div>
                                                        <form role="form">
                                                            <div class="form-group mb-3">
                                                                <div class="input-group input-group-alternative">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text">
                                                                        <font-awesome-icon icon="envelope" />
                                                                    </span>
                                                                    </div>
                                                                    <input class="form-control" placeholder="Email" type="email">
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <div class="input-group input-group-alternative">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text">
                                                                        <font-awesome-icon icon="unlock-alt" />
                                                                    </span>
                                                                    </div>
                                                                    <input class="form-control" placeholder="Password" type="password">
                                                                </div>
                                                            </div>
                                                            <div class="custom-control custom-control-alternative custom-checkbox">
                                                                <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                                                                <label class="custom-control-label" for=" customCheckLogin">
                                                                    <span>Remember me</span>
                                                                </label>
                                                            </div>
                                                            <div class="text-center">
                                                                <button type="button" class="btn btn-second my-2">Sign in</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </b-tab>
                                        </b-tabs>
                                    </div>
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