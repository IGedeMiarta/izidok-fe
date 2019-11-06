<template>
    <div>
        <div class="hero-wrapper bg-composed-wrapper bg-night-sky pt-5">
            <div class="flex-grow-1 w-100 d-flex align-items-center">
                <div class="bg-composed-wrapper--image opacity-4" :style="{ backgroundImage: 'url(' + require('@/assets/img/hero-bg/hero-5.jpg') + ')' }"></div>
                <div class="bg-composed-wrapper--bg bg-first opacity-1"></div>
                <div class="bg-composed-wrapper--content py-5">
                    <div class="container pt-5">
                        <div class="row">
                            <div class="col-lg-4 d-flex align-items-center">
                                <div class="text-center text-lg-right pt-0 pt-lg-4 pb-5 pb-lg-0">
                                    <h1 class="display-2 text-white mb-3 font-weight-bold">
                                        Our customer stories
                                    </h1>
                                    <p class="font-size-lg mb-5 text-white-50">
                                        Read how customers around the world use our services to build their projects
                                    </p>
                                    <a href="javascript:void(0);" class="btn btn-success btn-lg">
                                        Read all stories
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="pl-0 pl-lg-5">
                                    <div class="card mb-5">
                                        <div class="card-body">
                                            <div class="pl-4">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="text-warning font-size-lg">
                                                        <font-awesome-icon icon="star"/>
                                                        <font-awesome-icon icon="star"/>
                                                        <font-awesome-icon icon="star"/>
                                                        <font-awesome-icon icon="star"/>
                                                        <font-awesome-icon icon="star"/>
                                                    </div>
                                                    <div>
                                                        <font-awesome-icon icon="quote-right" class="text-dark font-size-xxl"/>
                                                    </div>
                                                </div>
                                                <blockquote class="mb-3 mt-2 font-size-lg text-black-50 blockquote">
                                                    But I must explain to you how all this mistaken idea was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.
                                                </blockquote>
                                                <div class="align-box-row">
                                                    <div class="avatar-icon-wrapper avatar-icon-lg">
                                                        <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                                    </div>
                                                    <div class="pl-2">
                                                        <span class="d-block font-size-lg">
                                                            Mandy Erle
                                                            <small class="d-block text-black-50">Mandy Company</small>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-5">
                                        <div class="card-body">
                                            <div class="align-box-row align-items-start">
                                                <div class="pl-4">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="text-warning font-size-lg">
                                                            <font-awesome-icon icon="star"/>
                                                            <font-awesome-icon icon="star"/>
                                                            <font-awesome-icon icon="star"/>
                                                            <font-awesome-icon icon="star"/>
                                                            <font-awesome-icon icon="star"/>
                                                        </div>
                                                        <div>
                                                            <font-awesome-icon icon="quote-right" class="text-dark font-size-xxl"/>
                                                        </div>
                                                    </div>
                                                    <blockquote class="mb-3 mt-2 font-size-lg text-black-50 blockquote">
                                                        To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man.
                                                    </blockquote>
                                                    <div class="align-box-row">
                                                        <div class="avatar-icon-wrapper avatar-icon-lg">
                                                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar5.jpg" alt=""></div>
                                                        </div>
                                                        <div class="pl-2">
                                                            <span class="d-block font-size-lg">
                                                                Napoleon Stacey
                                                                <small class="d-block text-black-50">ACME Inc.</small>
                                                            </span>
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