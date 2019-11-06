<template>
    <div>
        <div class="container py-5">
            <div class="text-center">
                <h1 class="display-2 text-black mb-3 font-weight-bold">
                    Our customer stories
                </h1>
                <p class="font-size-xl mb-0 mb-lg-5 text-black-50">
                    Read how customers around the world use our services to build their projects
                </p>
            </div>
            <slick ref="slick" :options="{'slidesToShow': 2, 'slidesToScroll': 2, 'dots': true}">
                <div>
                    <div class="card m-5">
                        <div class="card-body">
                            <div class="align-box-row align-items-start">
                                <div>
                                    <div class="card card-transparent">
                                        <a href="javascript:void(0);" class="card-img-wrapper rounded">
                                            <img src="@/assets/img/stock-photos/people-1.jpg" class="card-img-top rounded-circle" style="width: 80px" alt="...">
                                        </a>
                                    </div>
                                </div>
                                <div class="pl-4">
                                    <font-awesome-icon icon="quote-right" class="text-primary font-size-xxl"/>
                                    <div class="my-3 text-warning font-size-lg">
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                    </div>
                                    <blockquote class="my-3 text-black-50 blockquote">
                                        I will give you a complete account of the system, and expound the actual teachings.
                                    </blockquote>
                                    <div class="font-size-lg font-weight-bold">
                                        John Doe,
                                        <small class="text-black-50">ACME Company</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card m-5">
                        <div class="card-body">
                            <div class="align-box-row align-items-start">
                                <div>
                                    <div class="card card-transparent">
                                        <a href="javascript:void(0);" class="card-img-wrapper rounded">
                                            <img src="@/assets/img/stock-photos/people-2.jpg" class="card-img-top rounded-circle" style="width: 80px" alt="...">
                                        </a>
                                    </div>
                                </div>
                                <div class="pl-4">
                                    <font-awesome-icon icon="quote-right" class="text-primary font-size-xxl"/>
                                    <div class="my-3 text-warning font-size-lg">
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                    </div>
                                    <blockquote class="my-3 text-black-50 blockquote">
                                        But who has any right to find fault with a man who chooses to enjoy a pleasure that has.
                                    </blockquote>
                                    <div class="font-size-lg font-weight-bold">
                                        Alexandros Hebert,
                                        <small class="text-black-50">Bailey Company</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card m-5">
                        <div class="card-body">
                            <div class="align-box-row align-items-start">
                                <div>
                                    <div class="card card-transparent">
                                        <a href="javascript:void(0);" class="card-img-wrapper rounded">
                                            <img src="@/assets/img/stock-photos/people-3.jpg" class="card-img-top rounded-circle" style="width: 80px" alt="...">
                                        </a>
                                    </div>
                                </div>
                                <div class="pl-4">
                                    <font-awesome-icon icon="quote-right" class="text-primary font-size-xxl"/>
                                    <div class="my-3 text-warning font-size-lg">
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                    </div>
                                    <blockquote class="my-3 text-black-50 blockquote">
                                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                                    </blockquote>
                                    <div class="font-size-lg font-weight-bold">
                                        Jimi Tomlinson,
                                        <small class="text-black-50">Wood Company</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card m-5">
                        <div class="card-body">
                            <div class="align-box-row align-items-start">
                                <div>
                                    <div class="card card-transparent">
                                        <a href="javascript:void(0);" class="card-img-wrapper rounded">
                                            <img src="@/assets/img/stock-photos/people-1.jpg" class="card-img-top rounded-circle" style="width: 80px" alt="...">
                                        </a>
                                    </div>
                                </div>
                                <div class="pl-4">
                                    <font-awesome-icon icon="quote-right" class="text-primary font-size-xxl"/>
                                    <div class="my-3 text-warning font-size-lg">
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                        <font-awesome-icon icon="star"/>
                                    </div>
                                    <blockquote class="my-3 text-black-50 blockquote">
                                        I will give you a complete account of the system, and expound the actual teachings.
                                    </blockquote>
                                    <div class="font-size-lg font-weight-bold">
                                        Kaylee Magana,
                                        <small class="text-black-50">Espinosa Company</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slick>
        </div>

    </div>
</template>
<script>
    import Slick from 'vue-slick';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faQuoteRight
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faQuoteRight
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            Slick
        },
    }
</script>