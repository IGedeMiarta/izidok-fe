<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
                <div class="card-body">
                    <div class="bg-deep-blue text-white display-4 card-icon-wrapper rounded-circle">
                        <font-awesome-icon icon="air-freshener"/>
                    </div>
                    <h3 class="heading-6 mt-4 mb-4">Lightweight</h3>
                    <p class="card-text mb-4">
                        Bamburgh is a free UI Kit that enhances the standard Bootstrap 4 styles and components.
                    </p>
                    <a href="javascript:void(0);" class="btn-block btn btn-primary mt-1" target="_blank" title="Learn more"><span>Learn more</span></a>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
                <div class="card-body">
                    <div class="bg-sunny-morning text-white display-4 card-icon-wrapper rounded-circle">
                        <font-awesome-icon icon="anchor"/>
                    </div>
                    <h3 class="heading-6 mt-4 mb-4">Simple to use</h3>
                    <p class="card-text mb-4">
                        Bamburgh is a free UI Kit that enhances the standard Bootstrap 4 styles and components.
                    </p>
                    <a href="javascript:void(0);" class="btn-block btn btn-primary mt-1" target="_blank" title="Learn more"><span>Learn more</span></a>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card card-box-alt card-box-hover-rise card-box-hover mb-5">
                <div class="card-body">
                    <div class="bg-grow-early text-white display-4 card-icon-wrapper rounded-circle">
                        <font-awesome-icon icon="band-aid"/>
                    </div>
                    <h3 class="heading-6 mt-4 mb-4">Starter Templates</h3>
                    <p class="card-text mb-4">
                        Bamburgh is a free UI Kit that enhances the standard Bootstrap 4 styles and components.
                    </p>
                    <a href="javascript:void(0);" class="btn-block btn btn-primary mt-1" target="_blank" title="Learn more"><span>Learn more</span></a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faBandAid,
        faAnchor,
        faAirFreshener
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faBandAid,
        faAnchor,
        faAirFreshener
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>