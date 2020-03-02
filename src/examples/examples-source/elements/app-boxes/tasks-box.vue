<template>
    <div>
        <div class="card card-box mb-5">
            <div class="card-header">
                <div class="card-header--title">
                    <small>Tasks</small>
                    <b>Today's list</b>
                </div>
                <div class="card-header--actions">
                    <span class="badge badge-pill badge-neutral-warning text-warning">New Tasks</span>
                </div>
            </div>
            <div class="card-body">
                <div class="task-wrapper">
                    <div class="task-item">
                        <div class="align-box-row">
                            <div class="custom-checkbox custom-control align-self-start">
                                <input type="checkbox" id="exampleCustomCheckbox1" class="custom-control-input">
                                <label class="custom-control-label" for="exampleCustomCheckbox1">&nbsp;</label>
                            </div>
                            <div>
                                Finish tasks for today
                                <p class="text-black-50 mt-1 mb-0">
                                    But I must explain to you how all this mistaken idea.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="align-box-row">
                            <div class="custom-checkbox custom-control align-self-start">
                                <input type="checkbox" id="exampleCustomCheckbox2" class="custom-control-input">
                                <label class="custom-control-label" for="exampleCustomCheckbox2">&nbsp;</label>
                            </div>
                            <div>
                                <b>
                                    Blinded by desire
                                </b>
                                <p class="text-black-50 mt-1 mb-0">
                                    A wonderful serenity has taken possession.
                                </p>
                                <div class="timeline-list mt-3">
                                    <div class="timeline-item timeline-item-icon">
                                        <div class="timeline-item--content">
                                            <div class="timeline-item--icon-wrapper bg-danger text-white">
                                                <font-awesome-icon icon="gem"/>
                                            </div>
                                            <h4 class="timeline-item--label mb-2 font-weight-bold">1998</h4>
                                            <p>
                                                Bill Clinton's presidential scandal makes it online.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-item--content">
                                            <div class="timeline-item--icon"></div>
                                            <h4 class="timeline-item--label mb-2 font-weight-bold">Java exam day</h4>
                                            <p>
                                                Bill Clinton's presidential scandal makes it online.
                                            </p>
                                            <div class="avatar-wrapper-overlap mt-2 mb-1">
                                                <div class="avatar-icon-wrapper avatar-icon-sm">
                                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                                </div>
                                                <div class="avatar-icon-wrapper avatar-icon-sm">
                                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar7.jpg" alt=""></div>
                                                </div>
                                                <div class="avatar-icon-wrapper avatar-icon-sm">
                                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                                </div>
                                                <div class="avatar-icon-wrapper avatar-icon-sm">
                                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                                </div>
                                                <div class="avatar-icon-wrapper avatar-icon-sm">
                                                    <div class="avatar-icon"><img src="@/assets/img/avatars/avatar6.jpg" alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-item--content">
                                            <div class="timeline-item--icon"></div>
                                            <h4 class="timeline-item--label mb-2 font-weight-bold">
                                                Business investor meeting
                                                <span class="badge badge-neutral-info text-info ml-2">New</span>
                                            </h4>
                                            <p>
                                                Mosaic, the first graphical browser, is introduced to the average consumer.
                                            </p>
                                            <div class="mt-3">
                                                <b-button variant="primary" size="sm">Submit Report</b-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="task-item">
                        <div class="align-box-row">
                            <div class="custom-checkbox custom-control align-self-start">
                                <input type="checkbox" id="exampleCustomCheckbox3" class="custom-control-input">
                                <label class="custom-control-label" for="exampleCustomCheckbox3">&nbsp;</label>
                            </div>
                            <div class="w-100">
                                World among the stalks
                                <p class="text-black-50 mt-1">
                                    Who formed us in his own image, and the breath.
                                </p>

                                <ul class="list-group list-group-flash">
                                    <li class="list-group-item bg-secondary d-flex justify-content-between align-items-center p-4">
                                        <div class="w-100">
                                            <div class="d-flex flex-wrap justify-content-between mb-2">
                                                <small class="line-height-xs text-uppercase text-muted">Nov 12, 11:25am</small>
                                                <small class="line-height-xs text-uppercase text-success">Due in 12 days</small>
                                            </div>
                                            <h6 class="pt-1 pb-1">
                                                <a href="javascript:void(0);">#56 - Deploy new website</a>
                                            </h6>
                                            <p class="mb-3">This is a dummy text acting ...</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <a href="javascript:void(0);" class="badge badge-pill badge-danger pl-3 pr-3">Files ready</a>
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
                                    <li class="list-group-item d-flex justify-content-between align-items-center align-content-center pl-1">
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
                    </div>
                </div>
                <div class="text-center mt-3 mb-3">
                    <b-button variant="link" class="btn-link-dark">
                        <span>
                            View completed tasks
                            <span class="text-muted">(87)</span>
                        </span>
                    </b-button>
                </div>
                <div class="">
                    <input class="form-control" placeholder="Add new task..." />
                </div>
                <div class="align-box-row mt-3">
                    <div class="align-items-center">
                        <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl text-success" v-b-tooltip title="Add audio file">
                            <font-awesome-icon icon="file-audio"/>
                        </a>
                        <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl mr-2 ml-2 text-danger" v-b-tooltip title="Add video file">
                            <font-awesome-icon icon="file-video"/>
                        </a>
                        <a href="javascript:void(0);" class="btn btn-link btn-link-primary p-0 font-size-xl text-info" v-b-tooltip title="Upload documents">
                            <font-awesome-icon icon="file-excel"/>
                        </a>
                    </div>
                    <div class="ml-auto">
                        <b-button size="sm" variant="primary">
                            <font-awesome-icon icon="plus"/>
                            Create Task
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
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faPlus,
        faStar,
        faGem,
        faComments,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faPlus,
        faStar,
        faGem,
        faComments,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>