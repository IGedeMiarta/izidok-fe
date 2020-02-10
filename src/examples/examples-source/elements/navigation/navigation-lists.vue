<template>
    <div>
        <div class="card card-box mb-5">
            <div class="card-header bg-light">
                <div class="card-header-title">
                    <small class="text-uppercase d-block font-weight-bold text-black-50">Links</small>
                    Navigation
                </div>
            </div>
            <div class="list-group list-group-flush">
                <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                    <div>
                        <font-awesome-icon icon="file-pdf" class="text-danger font-size-xl mr-3"/>
                        Adobe_file.pdf <span class="badge text-info badge-neutral-info ml-2">New</span>
                    </div>
                    <div class="ml-auto">
                        <font-awesome-icon icon="angle-right" class="text-primary"/>
                    </div>
                </a>

                <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                    <div>
                        <font-awesome-icon icon="file-word" class="text-first font-size-xl mr-3"/>
                        Word_file.docx
                    </div>
                    <div class="ml-auto">
                        <font-awesome-icon icon="angle-right" class="text-primary"/>
                    </div>
                </a>

                <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                    <div>
                        <font-awesome-icon icon="file-excel" class="text-success font-size-xl mr-3"/>
                        Excel_doc.csv
                        <span class="badge badge-neutral-success text-success ml-2">Draft</span>
                    </div>
                    <div class="ml-auto">
                        <font-awesome-icon icon="angle-right" class="text-primary"/>
                    </div>
                </a>

                <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                    <div>
                        <font-awesome-icon icon="file-archive" class="text-warning font-size-xl mr-3"/>
                        Archive_docs.zip
                    </div>
                    <div class="ml-auto">
                        <font-awesome-icon icon="angle-right" class="text-primary"/>
                    </div>
                </a>

                <a href="javascript:void(0);" class="list-group-item list-group-item-action text-center">
                    <font-awesome-icon icon="chevron-down" class="text-muted mr-3"/>
                    <small class="text-primary">Show all files <b>(93)</b></small>
                    <font-awesome-icon icon="chevron-down" class="text-muted ml-3"/>
                </a>
            </div>
        </div>
        <div class="card card-box mb-5">
            <div class="bg-composed-wrapper bg-plum-plate">
                <div class="bg-composed-wrapper--image bg-composed-img-4"></div>
                <div class="bg-composed-wrapper--content text-light p-5">
                    <h5 class="mb-1">Navigation</h5>
                    <p class="mb-0 opacity-7">This is a composed background</p>
                </div>
            </div>
            <div class="list-group list-group-flush">
                <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                    <div class="align-box-row w-100">
                        <div class="mr-3">
                            <div class="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                                <font-awesome-icon icon="globe-europe"/>
                            </div>
                        </div>
                        <div>
                            <div class="font-weight-bold text-primary d-block">Sales</div>
                            <small class="text-success">
                                <font-awesome-icon icon="arrow-up" class="text-success"/>
                                <span class="pl-2">15.4%</span>
                                <span>increase</span>
                            </small>
                        </div>
                        <div class="ml-auto card-hover-indicator align-self-center">
                            <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0);" class="list-group-item list-group-item-action align-box-row">
                    <div class="align-box-row w-100">
                        <div class="mr-3">
                            <div class="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                                <font-awesome-icon icon="glass-cheers"/>
                            </div>
                        </div>
                        <div>
                            <div class="font-weight-bold text-primary d-block">Income</div>
                            <small class="text-danger">
                                <font-awesome-icon icon="arrow-up" class="text-danger"/>
                                <span class="pl-2">5.2%</span>
                                <span>decrease</span>
                            </small>
                        </div>
                        <div class="ml-auto card-hover-indicator align-self-center">
                            <font-awesome-icon icon="chevron-right" class="font-size-xl"/>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    </div>
</template>


<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faChevronRight,
        faFileWord,
        faFilePdf,
        faFileExcel,
        faAngleRight,
        faChevronDown,
        faGlobeEurope,
        faFileArchive,
        faArrowUp,
        faArrowDown,
        faGlassCheers,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faChevronRight,
        faFileWord,
        faFilePdf,
        faFileExcel,
        faAngleRight,
        faChevronDown,
        faGlobeEurope,
        faFileArchive,
        faArrowUp,
        faArrowDown,
        faGlassCheers,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>