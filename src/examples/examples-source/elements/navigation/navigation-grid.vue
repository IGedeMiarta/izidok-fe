<template>
    <div>
        <div class="card card-box mb-5">
            <div class="grid-menu grid-menu-3col">
                <div class="no-gutters row">
                    <div class="col-sm-6 col-xl-4 p-3">
                        <b-button class="border-0 w-100" variant="outline-primary">
                            <font-awesome-icon icon="allergies" class="font-size-xxl d-block mb-2 mx-auto"/>
                            <span>Primary</span>
                        </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4 p-3">
                        <b-button class="border-0 w-100" variant="outline-first">
                            <font-awesome-icon icon="anchor" class="font-size-xxl d-block mb-2 mx-auto"/>
                            <span>First</span>
                        </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4 p-3">
                        <b-button class="border-0 w-100" variant="outline-success">
                            <font-awesome-icon icon="basketball-ball" class="font-size-xxl d-block mb-2 mx-auto"/>
                            <span>Success</span>
                        </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4 p-3">
                        <b-button class="border-0 w-100" variant="outline-info">
                            <font-awesome-icon icon="baby-carriage" class="font-size-xxl d-block mb-2 mx-auto"/>
                            <span>Info</span>
                        </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4 p-3">
                        <b-button class="border-0 w-100" variant="outline-warning">
                            <font-awesome-icon icon="award" class="font-size-xxl d-block mb-2 mx-auto"/>
                            <span>Warning</span>
                        </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4 p-3">
                        <b-button class="border-0 w-100" variant="outline-danger">
                            <font-awesome-icon icon="bezier-curve" class="font-size-xxl d-block mb-2 mx-auto"/>
                            <span>Danger</span>
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card card-box mb-5">
            <div class="grid-menu grid-menu-2col">
                <div class="no-gutters row">
                    <div class="col-sm-6 p-3">
                        <b-button class="border-0 w-100" variant="outline-primary">
                            <font-awesome-icon icon="allergies" class="font-size-xxl d-block mb-2 mx-auto"/>
                            <span>Primary</span>
                        </b-button>
                    </div>
                    <div class="col-sm-6 p-3">
                        <b-button class="border-0 w-100" variant="outline-info">
                            <font-awesome-icon icon="baby-carriage" class="font-size-xxl d-block mb-2 mx-auto"/>
                            <span>Info</span>
                        </b-button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faAllergies,
        faBasketballBall,
        faBezierCurve,
        faAnchor,
        faBabyCarriage,
        faAward
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faAllergies,
        faBasketballBall,
        faBezierCurve,
        faAnchor,
        faBabyCarriage,
        faAward
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>