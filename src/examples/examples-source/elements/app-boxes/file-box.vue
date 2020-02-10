<template>
    <div>
        <div class="card card-box mb-5">
            <div class="card-header">
                <div class="card-header--title">
                    <small>File Manager</small>
                    <b>My saved documents</b>
                </div>
                <div class="card-header--actions">
                    <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary shadow-none p-0">
                        <template slot="button-content">
                            <div class="font-size-xl">
                                <font-awesome-icon icon="ellipsis-h"/>
                            </div>
                        </template>
                        <b-dropdown-item>First Action</b-dropdown-item>
                        <b-dropdown-item>Second Action</b-dropdown-item>
                        <b-dropdown-item>Third Action</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item active>Active action</b-dropdown-item>
                        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            <div class="card-body">
                <div class="file-manager-wrapper">
                    <div class="card-body pt-0 pb-2">
                        <div class="row">
                            <div class="col-md-6">
                                <small class="text-uppercase text-muted"><b>File name</b></small>
                            </div>
                            <div class="col-md-6 text-right">
                                <small class="text-uppercase text-muted"><b>Edited</b></small>
                            </div>
                        </div>
                    </div>
                    <div class="card card-box bg-secondary shadow-none">
                        <div class="list-group list-group-flush">
                            <div class="list-group-item file-manager-item">
                                <div class="align-box-row">
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="folder" class="font-size-lg text-warning mr-2"/>
                                        <a href="javascript:void(0);">
                                            Finance
                                        </a>
                                    </div>
                                    <div class="ml-auto d-flex align-items-center">
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                        </div>
                                        <small class="text-black-50">1d</small>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group-item file-manager-item">
                                <div class="align-box-row">
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="folder" class="font-size-lg text-warning mr-2"/>
                                        <a href="javascript:void(0);">
                                            Bookmarks
                                        </a>
                                    </div>
                                    <div class="ml-auto d-flex align-items-center">
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                        </div>
                                        <small class="text-black-50">41m</small>
                                    </div>
                                </div>
                                <div class="card card-box mt-3 mb-2 shadow-none">
                                    <ul class="list-group list-group-flash">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <div class="w-100">
                                                <div class="d-flex flex-wrap justify-content-between mb-2">
                                                    <small class="line-height-xs text-uppercase text-muted">Nov 12, 11:25am</small>
                                                    <small class="line-height-xs text-uppercase text-success">Due in 12 days</small>
                                                </div>
                                                <h6 class="pt-1 pb-1">
                                                    <a href="javascript:void(0);">#56 - Deploy new website</a>
                                                </h6>
                                                <p class="mb-3">This is a dummy text acting like a small description for the above title...</p>
                                                <div class="d-flex mt-1 justify-content-between align-items-center">
                                                    <div class="avatar-wrapper-overlap">
                                                        <div class="avatar-icon-wrapper">
                                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper">
                                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                                                        </div>
                                                        <div class="avatar-icon-wrapper">
                                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <b-button size="sm" variant="first">
                                                            <span class="btn-wrapper--icon">
                                                                <font-awesome-icon icon="plus"/>
                                                            </span>
                                                            <span class="btn-wrapper--label">
                                                                Add
                                                            </span>
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <div class="w-100">
                                                <div class="d-flex flex-wrap justify-content-between mb-2">
                                                    <small class="line-height-xs text-uppercase text-muted">Nov 12, 11:25am</small>
                                                    <small class="line-height-xs text-uppercase text-success">Due in 12 days</small>
                                                </div>
                                                <h6 class="pt-1 pb-1">
                                                    <a href="javascript:void(0);" class="badge badge-pill badge-neutral-warning text-warning">New report generated</a>
                                                </h6>
                                                <p class="mb-3">This is a dummy text acting like a small description for the above title...</p>
                                                <div class="mb-1">
                                                    <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-1.jpg" alt="Rounded image" width="70" class="img-fluid rounded m-2 shadow-sm"></a>
                                                    <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-2.jpg" alt="Rounded image" width="70" class="img-fluid rounded m-2 shadow-sm"></a>
                                                    <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-3.jpg" alt="Rounded image" width="70" class="img-fluid rounded shadow-sm"></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center align-content-center pl-0">
                                            <a href="javascript:void(0);" class="btn btn-sm btn-link" v-b-tooltip.top title="There are 653 new comments available!">
                                        <span class="btn-wrapper--icon">
                                            <font-awesome-icon icon="comments"/>
                                        </span>
                                                <span class="btn-wrapper--label ml-1">
                                            653
                                        </span>
                                            </a>
                                            <div>
                                                <small class="text-muted mr-1">(21)</small>
                                                <font-awesome-icon icon="star" class="text-warning"/>
                                                <font-awesome-icon icon="star" class="text-warning"/>
                                                <font-awesome-icon icon="star" class="text-warning"/>
                                                <font-awesome-icon icon="star" class="text-warning"/>
                                                <font-awesome-icon icon="star" class="text-warning"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="list-group-item file-manager-item">
                                <div class="align-box-row">
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="folder" class="font-size-lg text-warning mr-2"/>
                                        <a href="javascript:void(0);">
                                            Business
                                        </a>
                                    </div>
                                    <div class="ml-auto d-flex align-items-center">
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                        </div>
                                        <small class="text-black-50">5d</small>
                                    </div>
                                </div>
                            </div>
                            <div class="list-group-item file-manager-item">
                                <div class="align-box-row">
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="folder" class="font-size-lg text-warning mr-2"/>
                                        <a href="javascript:void(0);">
                                            Images
                                        </a>
                                    </div>
                                    <div class="ml-auto d-flex align-items-center">
                                        <div class="avatar-icon-wrapper avatar-icon-sm">
                                            <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                        </div>
                                        <small class="text-black-50">21h</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-secondary pt-5 pb-5 pr-4 pl-4">
                <h6 class="mb-3"><b>Upload documents</b></h6>
                <fieldset>
                    <b-form-file
                            placeholder="Choose a file..."
                            drop-placeholder="Drop file here..."
                    ></b-form-file>
                </fieldset>
            </div>
        </div>

    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faFolder,
        faStar,
        faEllipsisH
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faFolder,
        faStar,
        faEllipsisH
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>