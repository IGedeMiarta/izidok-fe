<template>
    <div>
        <u-animate-container>
            <u-animate class="page-title bg-vicious-stance mt-0 rounded"
                    name="fadeInDown"
                    delay="0.1s"
                    :iteration="1"
                    animateClass="animated"
                    :begin="false"
            >
                <div class="container">
                    <div class="text-center py-4">
                        <h3 class="display-4 mb-5 font-weight-bold text-white">
                            Bamburgh Vue.js Admin Dashboard <span class="text-white-50"> + </span> Bamburgh UI Kit PRO
                        </h3>
                        <p class="font-size-lg mb-5 text-white-50">
                            This admin dashboard template comes integrated with Bamburgh UI Kit PRO allowing you to create not only application interfaces, but also presentation websites.
                        </p>
                        <div class="text-center">
                            <a href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro" class="btn-first font-size-lg mx-2 btn shadow-none" target="_blank">
                                <span class="btn-wrapper--icon">
                                    <i class="fab fa-uikit"></i>
                                </span>
                                <span class="btn-wrapper--label">
                                    UI Kit Live Preview
                                </span>
                            </a>
                            <a href="https://uifort.com/pro-admin-dashboards/bamburgh-vue-admin-dashboard-pro.html" class="btn-outline-success font-size-lg mx-2 btn shadow-none" target="_blank">
                                <span class="btn-wrapper--label">
                                    Buy now
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </u-animate>
            <u-animate
                    name="fadeInUp"
                    delay="0.3s"
                    :iteration="1"
                    animateClass="animated"
                    :begin="false"
                    class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card p-5 mb-5">
                        <div class="card-badges">
                        <span class="badge badge-pill shadow-none badge-success" v-b-tooltip
                              title="Combine any of our UI components together to create truly unique new ones.">200+</span>
                        </div>
                        <div class="bg-grow-early text-center text-white font-size-xl d-50 rounded">
                            <font-awesome-icon icon="shapes"/>
                        </div>
                        <h3 class="font-size-lg font-weight-bold mt-4">UI Elements</h3>
                        <p class="text-black-50 mt-2">
                            Bamburgh features easy to use, easy to integrate user interface elements, widgets and
                            components. Over 200 UI comps included.
                        </p>
                        <a class="btn btn-sm btn-outline-first mt-1" href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro/#/ui-elements" target="_blank">
                            <span class="btn-wrapper--label">View live preview</span>
                            <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card p-5 mb-5">
                        <div class="card-badges">
                        <span class="badge badge-pill shadow-none badge-warning" v-b-tooltip
                              title="Not just datepickers, but also sliders, calendars and many many more included!">30+</span>
                        </div>
                        <div class="bg-ripe-malin text-center text-white font-size-xl d-50 rounded">
                            <font-awesome-icon icon="align-center"/>
                        </div>
                        <h3 class="font-size-lg font-weight-bold mt-4">Form widgets</h3>
                        <p class="text-black-50 mt-2">
                            Everything you need to get started, in terms of forms related elements. Datepicker, slider,
                            calendar and many others...
                        </p>
                        <a class="btn btn-sm btn-outline-first mt-1" href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro/#/form-widgets" target="_blank">
                            <span class="btn-wrapper--label">View live preview</span>
                            <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card p-5 mb-5">
                        <div class="card-badges">
                        <span class="badge badge-pill shadow-none badge-first" v-b-tooltip
                              title="Create your own sortable tables in less than 15 minutes, from start to finish!">5+</span>
                        </div>
                        <div class="bg-malibu-beach text-center text-white font-size-xl d-50 rounded">
                            <font-awesome-icon icon="table"/>
                        </div>
                        <h3 class="font-size-lg font-weight-bold mt-4">Tables</h3>
                        <p class="text-black-50 mt-2">
                            100% custom styled DataTables included. Also, we added a few example of sortable tables, with
                            various styles.
                        </p>
                        <a class="btn btn-sm btn-outline-first mt-1" href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro/#/tables" target="_blank">
                            <span class="btn-wrapper--label">View live preview</span>
                            <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card p-5 mb-5">
                        <div class="card-badges">
                        <span class="badge badge-pill shadow-none badge-danger" v-b-tooltip
                              title="Bamburgh Vuejs UI Kit PRO has integrations for GoogleMaps and VectorMaps.">2</span>
                        </div>
                        <div class="bg-arielle-smile text-center text-white font-size-xl d-50 rounded">
                            <font-awesome-icon icon="map-marked-alt"/>
                        </div>
                        <h3 class="font-size-lg font-weight-bold mt-4">Maps</h3>
                        <p class="text-black-50 mt-2">
                            We've included only the most popular solutions included because we also don't want bloated code
                            in our apps and sites.
                        </p>
                        <a class="btn btn-sm btn-outline-first mt-1" href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro/#/maps" target="_blank">
                            <span class="btn-wrapper--label">View live preview</span>
                            <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card p-5 mb-5">
                        <div class="card-badges">
                        <span class="badge badge-pill shadow-none badge-info" v-b-tooltip
                              title="Presentation blocks are sections mostly used to build websites, but they can also be used in app dashboards!">50+</span>
                        </div>
                        <div class="bg-strong-bliss text-center text-white font-size-xl d-50 rounded">
                            <font-awesome-icon icon="layer-group"/>
                        </div>
                        <h3 class="font-size-lg font-weight-bold mt-4">Presentation blocks</h3>
                        <p class="text-black-50 mt-2">
                            Testimonials, pricing tables, hero sections and more. Built with UX in mind, beautiful modern
                            designs and always fully responsive.
                        </p>
                        <a class="btn btn-sm btn-outline-first mt-1" href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro/#/presentation-blocks" target="_blank">
                            <span class="btn-wrapper--label">View live preview</span>
                            <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card p-5 mb-5">
                        <div class="card-badges">
                        <span class="badge badge-pill shadow-none badge-dark" v-b-tooltip
                              title="There are 12 different landing pages already created by us, so you can get up and running in no time.">12</span>
                        </div>
                        <div class="bg-plum-plate text-center text-white font-size-xl d-50 rounded">
                            <font-awesome-icon icon="sitemap"/>
                        </div>
                        <h3 class="font-size-lg font-weight-bold mt-4">Landing pages</h3>
                        <p class="text-black-50 mt-2">
                            We put together some presentation blocks to create these awesome landing pages. Create your own,
                            with examples from documentation.
                        </p>
                        <a class="btn btn-sm btn-outline-first mt-1" href="https://demo.uifort.com/bamburgh-vue-ui-kit-pro/#/landing-page-1" target="_blank">
                            <span class="btn-wrapper--label">View live preview</span>
                            <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="arrow-right"/>
                                </span>
                        </a>
                    </div>
                </div>
            </u-animate>
        </u-animate-container>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueWow from 'vue-wow'
    Vue.use(VueWow);


    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faShapes,
        faAlignCenter,
        faTable,
        faMapMarkedAlt,
        faLayerGroup,
        faSitemap
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    library.add(
        faShapes,
        faAlignCenter,
        faTable,
        faMapMarkedAlt,
        faLayerGroup,
        faSitemap
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>