<template>
    <div>
        <div class="hero-wrapper bg-composed-wrapper bg-midnight-bloom pt-5">
            <div class="flex-grow-1 w-100 d-flex align-items-center">
                <div class="bg-composed-wrapper--image" :style="{ backgroundImage: 'url(' + require('@/assets/img/hero-bg/hero-3.jpg') + ')' }"></div>
                <div class="bg-composed-wrapper--bg bg-primary opacity-2"></div>
                <div class="bg-composed-wrapper--content py-5">
                    <div class="container">
                        <div class="text-white text-center">
                            <h1 class="display-2 mb-2 px-4 font-weight-bold">
                                Our customers
                            </h1>
                            <h3 class="font-size-lg line-height-md font-weight-light d-block mb-0 text-white-50">
                                Read how customers around the world use our services to build their projects
                            </h3>
                        </div>
                        <div class="col-md-10 col-lg-6 mx-auto">
                            <slick ref="slick" :options="{'slidesToShow': 1, 'slidesToScroll': 1, 'dots': true}">
                                <div>
                                    <div class="card m-5">
                                        <div class="card-body">
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
                                <div>
                                    <div class="card m-5">
                                        <div class="card-body">
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
                            </slick>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Slick from 'vue-slick';

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    export default {
        components: {
            Slick,
            'font-awesome-icon': FontAwesomeIcon,

        },
    }
</script>