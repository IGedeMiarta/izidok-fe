<template>
    <div>
        <div class="accordion mb-5">
            <div class="card card-box">
                <div class="card-header">
                    <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none" v-b-toggle.accordion-1>
                        <span>Navigation menu</span>
                        <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                    </b-button>
                </div>
                <b-collapse id="accordion-1" visible accordion="accordion-example" role="tabpanel">
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
                </b-collapse>
            </div>
            <div class="card card-box">
                <div class="card-header">
                    <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed" v-b-toggle.accordion-2>
                        <span>List blocks</span>
                        <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                    </b-button>
                </div>
                <b-collapse id="accordion-2" accordion="accordion-example" role="tabpanel">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item pt-4 pb-4">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="bg-premium-dark text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                                        <font-awesome-icon icon="lightbulb"/>
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-4">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-lg">Business</span>
                                        <span class="badge badge-neutral-info text-info ml-2">New</span>
                                    </div>
                                    <p class="text-black-50 mb-0">
                                        Grow familiar with the countless...
                                    </p>
                                </div>
                                <div class="mt-3 mt-sm-0 ml-sm-auto">
                                    <b-button variant="second">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon icon="comment-dots"/>
                            </span>
                                    </b-button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item pt-4 pb-4">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="bg-warning text-center text-white font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                                        <font-awesome-icon icon="eye"/>
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-4">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-lg">Images</span>
                                    </div>
                                    <p class="text-black-50 mb-0">
                                        Absorbed in the exquisite sense...
                                    </p>
                                </div>
                                <div class="mt-3 mt-sm-0 ml-sm-auto">
                                    <b-button variant="warning">
                            <span class="btn-wrapper--icon">
                                <font-awesome-icon icon="life-ring"/>
                            </span>
                                    </b-button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item pt-4 pb-4">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="bg-white border-primary border-2 text-center text-primary font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                                        <font-awesome-icon icon="air-freshener"/>
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-4">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-lg">Finance</span>
                                    </div>
                                    <p class="text-black-50 mb-0">
                                        A wonderful serenity has taken ...
                                    </p>
                                </div>
                                <div class="mt-3 mt-sm-0 ml-sm-auto">
                                    <b-button variant="primary">
                                        <span class="btn-wrapper--icon">
                                            <font-awesome-icon icon="credit-card"/>
                                        </span>
                                    </b-button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item pt-4 pb-4">
                            <div class="d-flex align-items-center flex-column flex-sm-row">
                                <div>
                                    <div class="border-success bg-neutral-success border-2 text-center text-success font-size-xl d-50 rounded-circle mb-3 mb-sm-0">
                                        <font-awesome-icon icon="calendar-check"/>
                                    </div>
                                </div>
                                <div class="pl-0 pl-sm-4">
                                    <div class="d-block text-center d-sm-flex align-items-center">
                                        <span class="font-size-lg">Calendar</span>
                                    </div>
                                    <p class="mb-0 mt-2 text-black-50">
                                        A wonderful serenity has taken ...
                                    </p>
                                </div>
                                <div class="mt-3 mt-sm-0 ml-sm-auto">
                                    <b-button variant="success">
                                <span class="btn-wrapper--icon">
                                    <font-awesome-icon icon="credit-card"/>
                                </span>
                                    </b-button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </b-collapse>
            </div>
            <div class="card card-box">
                <div class="card-header">
                    <b-button class="btn-link btn-lg d-flex align-items-center justify-content-between shadow-none collapsed" v-b-toggle.accordion-3>
                        <span>Alternate navs</span>
                        <font-awesome-icon icon="angle-up" class="font-size-xl"/>
                    </b-button>
                </div>
                <b-collapse id="accordion-3" accordion="accordion-example" role="tabpanel">
                    <div class="list-group list-group-flush">
                        <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                            <font-awesome-icon icon="file-excel" class="text-success font-size-lg mr-3"/>
                            <div>
                                <div>
                                    Excel_doc.csv
                                </div>
                            </div>
                            <div class="ml-auto">
                                <font-awesome-icon icon="caret-right" class="text-black-50"/>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                            <font-awesome-icon icon="file-archive" class="text-warning font-size-lg mr-3"/>
                            <div>
                                Archive_docs.zip
                            </div>
                            <div class="ml-auto">
                                <font-awesome-icon icon="caret-right" class="text-black-50"/>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                            <div>
                                <font-awesome-icon icon="file-pdf" class="text-danger font-size-lg mr-3"/>
                                Adobe_file.pdf
                                <span class="badge badge-info ml-2">New</span>
                            </div>
                            <div class="ml-auto">
                                <font-awesome-icon icon="caret-right" class="text-black-50"/>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                            <div>
                                <font-awesome-icon icon="file-word" class="text-first font-size-lg mr-3"/>
                                Word_file.docx
                            </div>
                            <div class="ml-auto">
                                <font-awesome-icon icon="caret-right" class="text-black-50"/>
                            </div>
                        </a>
                    </div>
                </b-collapse>
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faCreditCard,
        faLightbulb,
        faCommentDots,
        faEye,
        faLifeRing,
        faAirFreshener,
        faCalendarCheck,
        faAngleUp,
        faUsers,
        faBox,
        faSlidersH,
        faCaretRight,
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faFileArchive,
        faFilePdf,
        faFileWord
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faCreditCard,
        faLightbulb,
        faCommentDots,
        faEye,
        faLifeRing,
        faAirFreshener,
        faCalendarCheck,
        faAngleUp,
        faUsers,
        faBox,
        faSlidersH,
        faCaretRight,
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faFileArchive,
        faFilePdf,
        faFileWord
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>