<template>
    <div>
        <div class="py-5">
            <div class="container">
                <div class="text-black text-center mb-5">
                    <h1 class="display-2 mb-1 px-4 font-weight-bold">
                        Partners
                    </h1>
                    <h3 class="font-size-xl line-height-md font-weight-light d-block mb-0 text-black-50">
                        Our products are used by a lot of big companies
                    </h3>
                </div>
                <slick ref="slick" :options="{'slidesToShow': 4, 'slidesToScroll': 1, 'dots': true, 'arrows': false}">
                    <div>
                        <div class="p-4 card card-box bg-light mx-4 mb-5 d-flex align-self-stretch">
                            <img src="@/assets/img/stock-logos/1.svg" style="height: 60px;" class="m-auto img-fluid" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="p-4 card card-box bg-light mx-4 mb-5 d-flex align-self-stretch">
                            <img src="@/assets/img/stock-logos/2.svg" style="height: 60px;" class="m-auto img-fluid" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="p-4 card card-box bg-light mx-4 mb-5 d-flex align-self-stretch">
                            <img src="@/assets/img/stock-logos/3.svg" style="height: 60px;" class="m-auto img-fluid" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="p-4 card card-box bg-light mx-4 mb-5 d-flex align-self-stretch">
                            <img src="@/assets/img/stock-logos/4.svg" style="height: 60px;" class="m-auto img-fluid" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="p-4 card card-box bg-light mx-4 mb-5 d-flex align-self-stretch">
                            <img src="@/assets/img/stock-logos/5.svg" style="height: 60px;" class="m-auto img-fluid" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="p-4 card card-box bg-light mx-4 mb-5 d-flex align-self-stretch">
                            <img src="@/assets/img/stock-logos/6.svg" style="height: 60px;" class="m-auto img-fluid" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="p-4 card card-box bg-light mx-4 mb-5 d-flex align-self-stretch">
                            <img src="@/assets/img/stock-logos/7.svg" style="height: 60px;" class="m-auto img-fluid" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="p-4 card card-box bg-light mx-4 mb-5 d-flex align-self-stretch">
                            <img src="@/assets/img/stock-logos/8.svg" style="height: 60px;" class="m-auto img-fluid" alt="">
                        </div>
                    </div>
                </slick>
            </div>
        </div>

    </div>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        components: {
            Slick,
        },
    }
</script>