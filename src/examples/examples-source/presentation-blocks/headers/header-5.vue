<template>
    <div>
        <div class="header-nav-wrapper header-nav-wrapper-lg px-4 navbar-light bg-secondary">
            <div class="header-nav-logo">
                <router-link tag="a" class="nav-link p-0" active-class="active" to="/" exact>
                    <div class="navbar-brand d-40 bg-primary rounded-circle text-center" v-b-tooltip.bottom title="Powered by Vuejs 😀">
                        <img src="@/assets/img/logo-inverse.png" class="d-inline-block my-auto" width="26px">
                    </div>
                    Bamburgh
                </router-link>
            </div>
            <div class="header-nav-menu d-none d-lg-block">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">Elements</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="javascript:void(0);">Widgets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">Blocks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">Pages</a>
                    </li>
                </ul>
            </div>
            <div class="header-nav-actions justify-content-end">
                <span class="d-block d-lg-none">
                    <button class="navbar-toggler is-active collapsed hamburger hamburger--elastic" v-b-toggle.nav-inner-header5>
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </span>
                <span class="d-none d-lg-block">
                    <a href="javascript:void(0);" class="btn btn-link btn-link-primary"><span>My account</span></a>
                    <b-button href="https://uifort.com/pro-ui-kits/bamburgh-vue-ui-kit-pro.html" target="_blank" pill variant="primary">
                        Buy now
                    </b-button>
                </span>
            </div>
            <b-collapse id="nav-inner-header5" class="nav-collapsed-wrapper navbar-collapse collapse">
                <div class="navbar-collapse-inner p-0">
                    <div class="list-group list-group-flush">
                        <div class="list-group-item bg-secondary px-4 py-3">
                            <div class="d-flex align-items-stretch navbar-light align-content-center">
                                <div class="header-nav-logo justify-content-start">
                                    <router-link tag="a" class="nav-link p-0" active-class="active" to="/" exact>
                                        <div class="navbar-brand d-50 bg-primary rounded-circle text-center" v-b-tooltip.bottom title="Powered by Vuejs 😀">
                                            <img src="@/assets/img/logo-inverse.png" class="d-inline-block my-auto" width="26px">
                                        </div>
                                    </router-link>
                                </div>
                                <button class="navbar-toggler is-active collapsed hamburger hamburger--elastic" v-b-toggle.nav-inner-header5>
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="list-group-item p-2">
                            <router-link tag="a" class="d-flex px-3 align-items-center dropdown-item rounded" active-class="active" to="/ui-elements" exact>
                                <div class="align-box-row w-100">
                                    <div class="mr-3">
                                        <div class="bg-strong-bliss text-center text-white d-40 rounded-circle">
                                            <font-awesome-icon icon="shapes"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-weight-bold text-primary d-block">UI Elements</div>
                                        <small class="text-black-50">
                                            Easy to customise
                                        </small>
                                    </div>
                                    <div class="ml-auto card-hover-indicator align-self-center">
                                        <font-awesome-icon icon="chevron-right" class="font-size-lg"/>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="list-group-item p-2">
                            <router-link tag="a" class="d-flex px-3 align-items-center dropdown-item rounded" active-class="active" to="/form-widgets" exact>
                                <div class="align-box-row w-100">
                                    <div class="mr-3">
                                        <div class="bg-plum-plate text-center text-white d-40 rounded-circle">
                                            <font-awesome-icon icon="car-battery"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-weight-bold text-primary d-block">Form widgets</div>
                                        <small class="text-black-50">
                                            Multiple options available
                                        </small>
                                    </div>
                                    <div class="ml-auto card-hover-indicator align-self-center">
                                        <font-awesome-icon icon="chevron-right" class="font-size-lg"/>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="list-group-item p-2">
                            <router-link tag="a" class="d-flex px-3 align-items-center dropdown-item rounded" active-class="active" to="/tables" exact>
                                <div class="align-box-row w-100">
                                    <div class="mr-3">
                                        <div class="bg-grow-early text-center text-white d-40 rounded-circle">
                                            <font-awesome-icon icon="layer-group"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-weight-bold text-primary d-block">Tables</div>
                                        <small class="text-black-50">
                                            Dynamic and sortable examples
                                        </small>
                                    </div>
                                    <div class="ml-auto card-hover-indicator align-self-center">
                                        <font-awesome-icon icon="chevron-right" class="font-size-lg"/>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="list-group-item p-2">
                            <router-link tag="a" class="d-flex px-3 align-items-center dropdown-item rounded" active-class="active" to="/maps" exact>
                                <div class="align-box-row w-100">
                                    <div class="mr-3">
                                        <div class="bg-ripe-malin text-center text-white d-40 rounded-circle">
                                            <font-awesome-icon icon="map-marked-alt"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-weight-bold text-primary d-block">Maps</div>
                                        <small class="text-black-50">
                                            Everything you'll need, included
                                        </small>
                                    </div>
                                    <div class="ml-auto card-hover-indicator align-self-center">
                                        <font-awesome-icon icon="chevron-right" class="font-size-lg"/>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="list-group-item p-2">
                            <router-link tag="a" class="d-flex px-3 align-items-center dropdown-item rounded" active-class="active" to="/presentation-blocks" exact>
                                <div class="align-box-row w-100">
                                    <div class="mr-3">
                                        <div class="bg-malibu-beach text-center text-white d-40 rounded-circle">
                                            <font-awesome-icon icon="cubes"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-weight-bold text-primary d-block">Presentation blocks</div>
                                        <small class="text-black-50">
                                            Build perfect websites today
                                        </small>
                                    </div>
                                    <div class="ml-auto card-hover-indicator align-self-center">
                                        <font-awesome-icon icon="chevron-right" class="font-size-lg"/>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="list-group-item p-2 accordion" id="navAccordion">
                            <a href="javascript:void(0)" class="d-flex px-3 align-items-center dropdown-item rounded collapsed" v-b-toggle.collapse-3>
                                <div class="align-box-row w-100">
                                    <div class="mr-3">
                                        <div class="bg-strong-bliss text-center text-white d-40 rounded-circle">
                                            <font-awesome-icon icon="pager"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-weight-bold text-primary d-block">Landing pages</div>
                                        <small class="text-black-50">
                                            Complex examples of dynamic elements...
                                        </small>
                                    </div>
                                    <div class="ml-auto card-hover-indicator align-self-center">
                                        <font-awesome-icon icon="chevron-right" class="font-size-lg"/>
                                    </div>
                                </div>
                            </a>
                            <b-collapse id="collapse-3">
                                <div class="card card-box shadow-none border-light list-group mt-3 mb-2">
                                    <router-link class="d-flex px-3 my-1 rounded dropdown-item mx-1" active-class="active" to="/landing-page-1" exact>
                                        <div class="d-flex align-items-center">
                                            <font-awesome-icon icon="clone" class="mr-2 opacity-3 font-size-lg"/>
                                            Landing page 1
                                        </div>
                                    </router-link>
                                    <router-link class="d-flex px-3 my-1 rounded dropdown-item mx-1" active-class="active" to="/landing-page-2" exact>
                                        <div class="d-flex align-items-center">
                                            <font-awesome-icon icon="clone" class="mr-2 opacity-3 font-size-lg"/>
                                            Landing page 2
                                        </div>
                                    </router-link>
                                </div>
                            </b-collapse>
                        </div>
                        <div class="list-group-item list-group-item-action align-box-row p-2">
                            <a href="https://uifort.com/pro-ui-kits/bamburgh-vue-ui-kit-pro.html" target="_blank" class="btn btn-pill btn-second btn-block">
                                Buy now
                            </a>
                        </div>
                    </div>
                </div>
            </b-collapse>
        </div>

    </div>
</template>

<script>

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faAngleDown,
        faChevronRight,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faAngleDown,
        faChevronRight,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>