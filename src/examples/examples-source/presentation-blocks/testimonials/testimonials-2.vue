<template>
    <div>
        <div class="bg-premium-dark py-5">
            <div class="container pt-5">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="text-center text-lg-right pt-0 pt-lg-4 pb-5 pb-lg-0">
                            <h1 class="display-2 text-white mb-3 font-weight-bold">
                                Our customer stories
                            </h1>
                            <p class="font-size-xl mb-5 text-white-50">
                                Read how customers around the world use our services to build their projects
                            </p>
                            <a href="javascript:void(0);" class="btn btn-first btn-lg">
                                Read the stories
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="pl-0 pl-lg-5">
                            <div class="card mb-5">
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
                                            <div class="mb-3 text-warning font-size-lg">
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
                            <div class="card mb-5">
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
                                            <div class="mb-3 text-warning font-size-lg">
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