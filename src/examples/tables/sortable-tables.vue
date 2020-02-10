<template>
    <div>
        <PageTitle heading="Alternate Tables" subheading="Advanced interaction controls to your HTML tables the free & easy way"/>
        <div class="container">
            <div class="card card-box mb-5">
            <div class="card-header pr-2">
                <div class="card-header--title">
                    <small>Custom</small>
                    <b>Example widget with table inside.</b>
                </div>
                <div class="card-header--actions">
                    <a href="javascript:void(0)" class="btn btn-sm text-primary btn-link" v-b-tooltip.hover title="Refresh">
                        <font-awesome-icon spin icon="sync"/>
                    </a>
                </div>
            </div>
            <div class="card-body p-0">
                <div>
                    <div class="table-responsive-md">
                        <table class="table table-striped table-hover mb-0">
                            <thead class="thead-light">
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">Owner</th>
                                <th scope="col" width="30%">Target</th>
                                <th scope="col" class="text-center">Status</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody class="list">
                            <tr>
                                <td class="company">
                                    <div class="align-box-row">
                                        <div>
                                            <a v-b-tooltip.hover href="javascript:void(0)" class="m-0 btn btn-link p-0 btn-facebook d-inline-block text-center text-white font-size-lg d-40 rounded-circle card-box-hover-rise" title="View details">
                                                <font-awesome-icon :icon="['fab', 'facebook']" />
                                            </a>
                                        </div>
                                        <div class="pl-3">
                                            <div class="d-flex align-items-center">
                                                <span>Facebook</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="owner">
                                    <div class="align-box-row">
                                        <div class="avatar-icon-wrapper avatar-icon-md">
                                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar2.jpg" alt=""></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="d-block">
                                                John Doe
                                                <small class="d-block text-black-50">(john@example.com)</small>
                                            </span>
                                        </div>
                                        <div class="ml-auto">
                                            <div>
                                                <font-awesome-icon icon="question-circle"/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="target">
                                    <div class="align-box-row">
                                        <div class="progress-bar-sm progress-bar-animated-alt progress w-100">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style="width: 33%;"></div>
                                        </div>
                                        <div class="pl-1">
                                            100%
                                        </div>
                                    </div>
                                </td>
                                <td class="status">
                                    <div class="text-center">
                                        <span class="badge badge-warning">Pending</span>
                                    </div>
                                </td>
                                <td class="text-center" width="5%">
                                    <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
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
                                </td>
                            </tr>
                            <tr>
                                <td class="company">
                                    <div class="align-box-row">
                                        <div>
                                            <a v-b-tooltip.hover href="javascript:void(0)" class="m-0 btn btn-link p-0 btn-twitter d-inline-block text-center text-white font-size-lg d-40 rounded-circle card-box-hover-rise" title="View details">
                                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                            </a>
                                        </div>
                                        <div class="pl-3">
                                            <div class="d-flex align-items-center">
                                                <span>Twitter</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="owner">
                                    <div class="align-box-row">
                                        <div class="avatar-icon-wrapper avatar-icon-md">
                                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="d-block">
                                                Mandy Erle
                                                <small class="d-block text-black-50">(Mandyrle@gma.com)</small>
                                            </span>
                                        </div>
                                        <div class="ml-auto">
                                            <div>
                                                <font-awesome-icon icon="question-circle"/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="target">
                                    <div class="align-box-row">
                                        <div class="progress-bar-sm progress-bar-animated-alt progress w-100">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" style="width: 56%;"></div>
                                        </div>
                                        <div class="pl-1">
                                            100%
                                        </div>
                                    </div>
                                </td>
                                <td class="status">
                                    <div class="text-center">
                                        <b-badge variant="success">Success</b-badge>
                                    </div>
                                </td>
                                <td class="text-center" width="5%">
                                    <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
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
                                </td>
                            </tr>
                            <tr>
                                <th class="company">
                                    <div class="align-box-row">
                                        <div>
                                            <a v-b-tooltip.hover href="javascript:void(0)" class="m-0 btn btn-link p-0 btn-dribbble d-inline-block text-center text-white font-size-lg d-40 rounded-circle card-box-hover-rise" title="View details">
                                                <font-awesome-icon :icon="['fab', 'dribbble']" />
                                            </a>
                                        </div>
                                        <div class="pl-3">
                                            <div class="d-flex align-items-center">
                                                <span>Dribbble</span>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <td class="owner">
                                    <div class="align-box-row">
                                        <div class="avatar-icon-wrapper avatar-icon-md">
                                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar1.jpg" alt=""></div>
                                        </div>
                                        <div class="pl-2">
                                            <span class="d-block">
                                                Adella Galen
                                                <small class="d-block text-black-50">(Galen@example.com)</small>
                                            </span>
                                        </div>
                                        <div class="ml-auto">
                                            <div>
                                                <font-awesome-icon icon="question-circle"/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="target">
                                    <div class="align-box-row">
                                        <div class="progress-bar-sm progress-bar-animated-alt progress w-100">
                                            <div class="progress-bar bg-info" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style="width: 12%;"></div>
                                        </div>
                                        <div class="pl-1">
                                            100%
                                        </div>
                                    </div>
                                </td>
                                <td class="status">
                                    <div class="text-center">
                                        <span class="badge badge-first">In progress</span>
                                    </div>
                                </td>
                                <td class="text-center" width="5%">
                                    <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
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
                                </td>
                            </tr>
                            <tr>
                                <th class="company">
                                    <div class="align-box-row">
                                        <div>
                                            <a v-b-tooltip.hover href="javascript:void(0)" class="m-0 btn btn-link p-0 btn-pinterest d-inline-block text-center text-white font-size-lg d-40 rounded-circle card-box-hover-rise" title="View details">
                                                <font-awesome-icon :icon="['fab', 'pinterest']" />
                                            </a>
                                        </div>
                                        <div class="pl-3">
                                            <div class="d-flex align-items-center">
                                                <span>Pinterest</span>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <td class="owner">
                                    <div class="align-box-row">
                                        <div class="avatar-icon-wrapper avatar-icon-md">
                                            <div class="avatar-icon rounded-circle"><img src="@/assets/img/avatars/avatar5.jpg" alt=""></div>
                                        </div>
                                        <div class="pl-2">
                                <span class="d-block">
                                    Napoleon Stacey
                                    <small class="d-block text-black-50">(Napoleon@test.com)</small>
                                </span>
                                        </div>
                                        <div class="ml-auto">
                                            <div>
                                                <font-awesome-icon icon="question-circle"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tip-popover-table-0" class="d-none">
                                        <ul class="list-group list-group-flush text-left bg-transparent">
                                            <li class="list-group-item rounded-top">
                                                <div class="align-box-row">
                                                    <div>
                                                        <div class="avatar-icon-wrapper avatar-icon-md">
                                                            <div class="avatar-icon rounded-circle"><img
                                                                    src="@/assets/img/avatars/avatar2.jpg"
                                                                    alt=""></div>
                                                        </div>
                                                    </div>
                                                    <div class="pl-2">
                                                        <span class="pb-1 d-block">John Doe <small class="text-black-50">(john@example.com)</small></span>
                                                        <b-badge variant="success">Active Account</b-badge>
                                                    </div>
                                                </div>
                                                <div class="alert alert-warning p-2 mb-1 mt-3 rounded">
                                                    <div class="align-box-row">
                                                        <div>
                                                            <font-awesome-icon icon="bell" />
                                                        </div>
                                                        <div class="pl-3">
                                                            <small><b class="d-block">Unpaid invoice</b></small>
                                                            <small>This account will be disabled starting <b>12 January 2021</b>.</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item bg-transparent p-0">
                                                <div class="grid-menu grid-menu-2col">
                                                    <div class="no-gutters row">
                                                        <div class="col-sm-6 py-3">
                                                            <div class="text-center">
                                                                <div>
                                                                    <font-awesome-icon icon="chart-bar" class="font-size-xxl text-info" />
                                                                </div>
                                                                <div class="mt-2 line-height-sm">
                                                                    <b class="font-size-lg">$9,693</b>
                                                                    <span class="text-black-50 d-block">revenue</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 py-3">
                                                            <div class="text-center">
                                                                <div>
                                                                    <font-awesome-icon icon="user" class="font-size-xxl text-success" />
                                                                </div>
                                                                <div class="mt-2 line-height-sm">
                                                                    <b class="font-size-lg">2,345</b>
                                                                    <span class="text-black-50 d-block">users</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td class="target">
                                    <div class="align-box-row">
                                        <div class="progress-bar-sm progress-bar-animated-alt progress w-100">
                                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%;"></div>
                                        </div>
                                        <div class="pl-1">
                                            100%
                                        </div>
                                    </div>
                                </td>
                                <td class="status">
                                    <div class="text-center">
                                        <span class="badge badge-danger">NEW</span>
                                    </div>
                                </td>
                                <td class="text-center" width="5%">
                                    <b-dropdown no-caret right variant="link p-0 btn-link-primary" class="text-primary">
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
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="divider"></div>
                    <div class="divider"></div>
                    <div class="p-3">
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                                    <font-awesome-icon icon="chevron-left"/>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                            <li class="page-item active"><a class="page-link" href="javascript:void(0)">2</a></li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)" aria-label="Next">
                                    <font-awesome-icon icon="chevron-right"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faSync,
        faQuestionCircle,
        faEllipsisV,
        faEllipsisH,
        faChevronLeft,
        faUser,
        faChevronRight
    } from '@fortawesome/free-solid-svg-icons'
    import {
        faTwitter,
        faFacebook,
        faPinterest,
        faDribbble
    } from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faSync,
        faQuestionCircle,
        faEllipsisH,
        faEllipsisV,
        faChevronLeft,
        faTwitter,
        faFacebook,
        faPinterest,
        faDribbble,
        faUser,
        faChevronRight
    );


    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>