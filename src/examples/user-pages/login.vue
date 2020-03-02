<template>
    <div class="app-wrapper bg-white h-100">
        <div class="app-main">
            <a href="javascript:history.back()" class="btn btn-lg btn-go-back btn-outline-first">
            <span class="btn-wrapper--icon">
                <font-awesome-icon icon="arrow-left" />
            </span>
                <span class="btn-wrapper--label">Back to previous page</span>
            </a>
            <div class="divider border-2 border-primary bg-primary"></div>
            <div class="app-content p-0">
                <div class="app-content--inner d-flex align-items-center">
                    <div class="flex-grow-1 w-100 d-flex align-items-center">
                        <div class="bg-composed-wrapper--content py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 pl-0 d-none d-lg-flex align-items-center">
                                        <img src="@/assets/img/illustrations/login.svg" class="w-75 mx-auto d-block img-fluid" alt="">
                                    </div>
                                    <div class="col-lg-6 pr-0 d-flex align-items-center">
                                        <div class="pl-5">
                                            <div class="text-black mt-3">
                                                <h1 class="display-3 mb-3 font-weight-bold">
                                                    Login to your account
                                                </h1>
                                                <p class="font-size-lg mb-0 text-black-50">
                                                    We're glad you're glad crunching on your dashboard. Login in below to continue.
                                                </p>
                                                <div class="bg-secondary rounded p-4 my-4">
                                                    <div class="text-black-50 text-center mb-3">
                                                        Sign in with
                                                    </div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <button class="btn btn-facebook btn-block" type="button" v-b-tooltip.hover title="Facebook">
                                                            <span class="btn-wrapper--icon">
                                                                <font-awesome-icon :icon="['fab', 'facebook']" />
                                                            </span>
                                                            </button>
                                                        </div>
                                                        <div class="col">
                                                            <button class="btn btn-twitter btn-block" type="button" v-b-tooltip.hover title="Twitter">
                                                            <span class="btn-wrapper--icon">
                                                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                                            </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <form>
                                                        <div class="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" class="form-control" placeholder="yourname@yourmail.com">
                                                        </div>
                                                        <div class="form-group mb-4">
                                                            <div class="d-flex justify-content-between">
                                                                <label>Password</label>
                                                                <a href="javascript:void(0);">Forgot password?</a>
                                                            </div>
                                                            <input type="password" class="form-control" placeholder="Enter your password">
                                                        </div>

                                                        <button class="btn btn-lg btn-second btn-block">Login</button>
                                                    </form>
                                                </div>
                                                <div class="text-center pt-4 text-black-50">
                                                    Don't have an account?
                                                    <router-link tag="a" to="/user-pages/register" exact title="Create an account">
                                                        Create an account
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
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