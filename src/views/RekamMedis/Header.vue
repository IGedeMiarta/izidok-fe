<template>
    <div class="page-title">
        <div class="row">
            <div class="col-xl-7">
                <div>
                    <ol class="breadcrumb text-uppercase font-size-xs p-0">
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{heading}}</li>
                    </ol>
                    <h5 class="display-4 mt-1 mb-2 font-weight-bold">{{heading}}</h5>
                    <p class="text-black-50 mb-0">{{subheading}}</p>
                </div>
            </div>
            <div class="col-xl-5 d-flex align-items-center justify-content-start mt-4 mt-xl-0 justify-content-xl-end">
                <div class="mx-auto mx-xl-0">
                    <a href="https://demo.uifort.com/bamburgh-vue-admin-dashboard-pro-docs/" class="btn btn-primary" target="_blank" v-b-tooltip.hover title="Riwayat">
                        <span>
                            Lihat Riwayat
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faFileCode,
        faExpandArrowsAlt,
        faBuilding
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faFileCode,
        faExpandArrowsAlt,
        faBuilding
    );

    export default {
        components: {
            // 'font-awesome-icon': FontAwesomeIcon,
            // VuePerfectScrollbar,
        },
        props: {
            icon: String,
            heading: String,
            subheading: String,

        }
    }
</script>
