<template>
    <div class="row">
        <div class="col-md-6 col-lg-4">
            <div class="heading-3 text-center">List group</div>

            <b-dropdown variant="first" class="w-100 dropdown-menu-lg pb-0" text="Open menu">
                    <div class="bg-composed-wrapper bg-royal">
                        <div class="bg-composed-wrapper--image bg-composed-img-5"></div>
                        <div class="bg-composed-wrapper--content text-light text-center py-3 px-3">
                            <h5 class="mb-1">Navigation</h5>
                            <p class="mb-0 opacity-7">This is a composed background</p>
                        </div>
                    </div>
                    <div class="list-group list-group-flush">
                        <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                            <font-awesome-icon icon="file-excel" class="text-success font-size-lg mr-3"/>
                            <div>
                                <div>
                                    Excel_doc.csv
                                </div>
                                <b-badge variant="danger">Danger</b-badge>
                            </div>
                            <div class="ml-auto">
                                <font-awesome-icon icon="angle-right" class="text-primary"/>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                            <font-awesome-icon icon="file-archive" class="text-warning font-size-lg mr-3"/>
                            <div>
                                Archive_docs.zip
                            </div>
                            <div class="ml-auto">
                                <font-awesome-icon icon="angle-right" class="text-primary"/>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                            <div>
                                <font-awesome-icon icon="file-pdf" class="text-danger font-size-lg mr-3"/>
                                Adobe_file.pdf
                                <span class="badge text-info badge-neutral-info ml-2">New</span>
                            </div>
                            <div class="ml-auto">
                                <font-awesome-icon icon="angle-right" class="text-primary"/>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                            <div>
                                <font-awesome-icon icon="file-word" class="text-first font-size-lg mr-3"/>
                                Word_file.docx
                            </div>
                            <div class="ml-auto">
                                <font-awesome-icon icon="angle-right" class="text-primary"/>
                            </div>
                        </a>
                    </div>
            </b-dropdown>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="heading-3 text-center">Composed header</div>
            <div class="mb-5">
                <b-dropdown variant="first" class="w-100 dropdown-menu-lg pb-0" text="Open menu">
                    <div class="bg-composed-wrapper bg-plum-plate">
                        <div class="bg-composed-wrapper--image bg-composed-img-3"></div>
                        <div class="bg-composed-wrapper--content text-light p-4">
                            <h5 class="mb-1">Navigation</h5>
                            <p class="mb-0 opacity-7">This is a composed background</p>
                        </div>
                    </div>
                    <VuePerfectScrollbar class="scrollbar-container" v-once>
                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                    </VuePerfectScrollbar>
                    <div class="card-body bg-light text-center d-block nav-icon-wrapper border-top ">
                        <b-button size="sm" variant="primary" v-b-tooltip title="View details">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon icon="expand-arrows-alt"/>
                            </span>
                            <span class="btn-wrapper--label">
                                Details
                            </span>
                        </b-button>
                    </div>
                </b-dropdown>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="heading-3 text-center">List group</div>
            <div class="mb-5">
                <b-dropdown variant="first" class="w-100 dropdown-menu-xl pb-0" text="Open menu">
                    <div class="bg-composed-wrapper bg-asteroid">
                        <div class="bg-composed-wrapper--image bg-composed-img-2"></div>
                        <div class="bg-composed-wrapper--content text-light p-4">
                            <h5 class="mb-1">Navigation</h5>
                            <p class="mb-0 opacity-7">This is a composed background</p>
                        </div>
                    </div>
                    <div class="list-group list-group-flush">
                        <a href="javascript:void(0);" class="list-group-item align-items-center d-flex list-group-item-action pl-3">
                            <font-awesome-icon icon="users" class="nav-icon-wrapper text-primary font-size-lg mr-2"/>
                            <span>My profile</span>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item align-items-center d-flex list-group-item-action pl-3">
                            <font-awesome-icon icon="bell" class="nav-icon-wrapper text-info font-size-lg mr-2"/>
                            <span>Notifications</span>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item align-items-center d-flex list-group-item-action pl-3">
                            <font-awesome-icon icon="award" class="nav-icon-wrapper text-danger font-size-lg mr-2"/>
                            <span>Awards</span>
                            <span class="badge badge-danger ml-auto">29</span>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item align-items-center d-flex list-group-item-action pl-3">
                            <font-awesome-icon icon="box" class="nav-icon-wrapper text-success font-size-lg mr-2"/>
                            <span>Events</span>
                            <span class="badge badge-info ml-auto">48</span>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item align-items-center d-flex list-group-item-action pl-3">
                            <font-awesome-icon icon="sliders-h" class="nav-icon-wrapper text-warning font-size-lg mr-2"/>
                            <span>Account settings</span>
                        </a>
                    </div>
                    <div class="divider"></div>
                    <div class="card-body d-block text-center">
                        <b-button size="sm" variant="primary">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="expand-arrows-alt"/>
                                </span>
                            <span class="btn-wrapper--label">
                                    Details
                                </span>
                        </b-button>
                    </div>
                </b-dropdown>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="heading-3 text-center">Grid menu</div>
            <div class="mb-5">
                <b-dropdown variant="first" class="w-100 dropdown-menu-xl pb-0" text="Open menu">
                    <div class="grid-menu grid-menu-2col">
                        <div class="no-gutters row">
                            <div class="col-sm-6 p-3">
                                <b-button class="border-0 w-100" variant="outline-primary">
                                    <font-awesome-icon icon="allergies" class="font-size-xxl d-block mb-2 mx-auto"/>
                                    <span>Primary</span>
                                </b-button>
                            </div>
                            <div class="col-sm-6 p-3">
                                <b-button class="border-0 w-100" variant="outline-first">
                                    <font-awesome-icon icon="anchor" class="font-size-xxl d-block mb-2 mx-auto"/>
                                    <span>First</span>
                                </b-button>
                            </div>
                            <div class="col-sm-6 p-3">
                                <b-button class="border-0 w-100" variant="outline-warning">
                                    <font-awesome-icon icon="award" class="font-size-xxl d-block mb-2 mx-auto"/>
                                    <span>Warning</span>
                                </b-button>
                            </div>
                            <div class="col-sm-6 p-3">
                                <b-button class="border-0 w-100" variant="outline-danger">
                                    <font-awesome-icon icon="bezier-curve" class="font-size-xxl d-block mb-2 mx-auto"/>
                                    <span>Danger</span>
                                </b-button>
                            </div>
                        </div>
                    </div>
                </b-dropdown>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="heading-3 text-center">Rounded bullets</div>
            <div class="mb-5">
                <b-dropdown variant="first" class="w-100 border-0 dropdown-menu-xxl" menu-class="bg-slick-carbon" text="Open menu">
                    <div class="p-2 text-center">
                        <a v-b-tooltip href="javascript:void(0);"
                           class="m-3 btn btn-link p-0 bg-love-kiss d-inline-block text-center text-white font-size-xl d-60 rounded-circle card-box-hover-rise-alt"
                           title="Menu Example">
                            <font-awesome-icon icon="dove"/>
                        </a>
                        <a v-b-tooltip href="javascript:void(0);"
                           class="m-3 btn btn-link p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-60 rounded-circle card-box-hover-rise-alt"
                           title="Menu Example">
                            <font-awesome-icon icon="drafting-compass"/>
                        </a>
                        <a v-b-tooltip href="javascript:void(0);"
                           class="m-3 btn btn-link p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-60 rounded-circle card-box-hover-rise-alt"
                           title="Menu Example">
                            <font-awesome-icon icon="dungeon"/>
                        </a>
                        <a v-b-tooltip href="javascript:void(0);"
                           class="m-3 btn btn-link p-0 bg-arielle-smile d-inline-block text-center text-white font-size-xl d-60 rounded-circle card-box-hover-rise-alt"
                           title="Menu Example">
                            <font-awesome-icon icon="football-ball"/>
                        </a>
                        <a v-b-tooltip href="javascript:void(0);"
                           class="m-3 btn btn-link p-0 bg-night-fade d-inline-block text-center text-white font-size-xl d-60 rounded-circle card-box-hover-rise-alt"
                           title="Menu Example">
                            <font-awesome-icon icon="gas-pump"/>
                        </a>
                        <a v-b-tooltip href="javascript:void(0);"
                           class="m-3 btn btn-link p-0 bg-strong-bliss d-inline-block text-center text-white font-size-xl d-60 rounded-circle card-box-hover-rise-alt"
                           title="Menu Example">
                            <font-awesome-icon icon="gem"/>
                        </a>
                    </div>
                </b-dropdown>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="heading-3 text-center">Blocks</div>
            <div class="mb-5">
                <b-dropdown variant="first" class="w-100 dropdown-menu-xxl pb-0" text="Open menu">
                    <div class="card-body p-0">
                        <div class="row mt-4">
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="lemon" class="font-size-xxl text-danger"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">3,568</b>
                                        <span class="text-black-50 d-block">sales</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center">
                                    <div>
                                        <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info"/>
                                    </div>
                                    <div class="mt-3 line-height-sm">
                                        <b class="font-size-lg">$9,693</b>
                                        <span class="text-black-50 d-block">revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="divider mt-4"></div>
                        <div class="text-center py-4">
                            <b-button variant="primary" size="sm">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="eye"/>
                                </span>
                                <span class="btn-wrapper--label">
                                    Generate reports
                                </span>
                            </b-button>
                        </div>
                    </div>
                    <div class="card-footer bg-light text-center">
                        <div class="pt-3 pr-2 pl-2">
                            <apexchart type="area" height="100" :options="chartPrimary" :series="series"></apexchart>
                        </div>
                    </div>
                </b-dropdown>
            </div>
        </div>
    </div>

</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import VueApexCharts from 'vue-apexcharts'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faExpandArrowsAlt,
        faUsers,
        faBox,
        faSlidersH,
        faAnchor,
        faAward,
        faBezierCurve,
        faGasPump,
        faEye,
        faDove,
        faFileExcel,
        faFileWord,
        faAngleRight,
        faFileArchive,
        faFilePdf,
        faAllergies
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faExpandArrowsAlt,
        faUsers,
        faBox,
        faSlidersH,
        faAnchor,
        faAward,
        faBezierCurve,
        faGasPump,
        faEye,
        faDove,
        faFileExcel,
        faFileWord,
        faAngleRight,
        faFileArchive,
        faFilePdf,
        faAllergies
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            VuePerfectScrollbar,
            'apexchart': VueApexCharts
        },
        data() {
            return {
                slide: 0,
                sliding: null,
                chartPrimary: {
                    chart: {
                        id: 'vuechart-example1',
                        sparkline: {
                            enabled: true,
                        },
                    },
                    colors: ['#3c44b1'],
                    stroke: {
                        width: 3,
                        curve: 'smooth'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'light',
                            type: "vertical",
                            shadeIntensity: 0.5,
                            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                            inverseColors: false,
                            opacityFrom: 0.5,
                            opacityTo: 0,
                            stops: [0, 100],
                            colorStops: []
                        }
                    }
                },
                series: [{
                    name: 'series-1',
                    data: [73,77,75,78,73,77,73,74,76,78,74,72,74,74,76]
                }],
            }
        },
    }
</script>