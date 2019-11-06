<template>
    <div>
        <div class="card card-box mb-5">
            <div class="card-header">
                <div class="card-header--title">
                    <small>Messenger</small>
                    <b>Talking to Kate</b>
                </div>
                <div class="card-header--actions">
                    <b-button size="sm" variant="first" v-b-tooltip title="Send new message">
                        <font-awesome-icon icon="plus"/>
                    </b-button>
                </div>
            </div>
            <div class="card-body">
                <div class="chat-wrapper">
                    <div class="chat-item p-2 mb-2">
                        <div class="align-box-row">
                            <div class="avatar-icon-wrapper avatar-icon-lg align-self-start">
                                <div class="avatar-icon rounded border-0">
                                    <img src="@/assets/img/avatars/avatar7.jpg" alt="">
                                </div>
                            </div>
                            <div>
                                <div class="chat-box bg-first text-white">
                                    <p>Hello, John.</p>
                                    <p>This is Kenny. How are you?</p>
                                </div>
                                <small class="mt-2 d-block text-black-50">
                                    <font-awesome-icon icon="clock" class="mr-1 opacity-5"/>
                                    11:01 AM | Yesterday
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="chat-item chat-item-reverse p-2 mb-2">
                        <div class="align-box-row flex-row-reverse">
                            <div class="avatar-icon-wrapper avatar-icon-lg align-self-start">
                                <div class="avatar-icon rounded border-0">
                                    <img src="@/assets/img/avatars/avatar3.jpg" alt="">
                                </div>
                            </div>
                            <div>
                                <div class="chat-box bg-first text-white">
                                    <p>Hey, Kate.</p>
                                    <p>I'm attaching the pictures you requested below:</p>
                                    <div class="card mt-3 mb-2 pt-2 pb-2 text-center">
                                        <div>
                                            <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-1.jpg" alt="Rounded image" width="54" class="img-fluid rounded m-1 shadow-sm"></a>
                                            <a href="javascript:void(0);"><img src="@/assets/img/stock-photos/people-2.jpg" alt="Rounded image" width="54" class="img-fluid rounded m-1 shadow-sm"></a>
                                        </div>
                                    </div>
                                </div>
                                <small class="mt-2 d-block text-black-50">
                                    <font-awesome-icon icon="clock" class="mr-1 opacity-5"/>
                                    11:01 AM | Yesterday
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="chat-item p-2 mb-2">
                        <div class="align-box-row">
                            <div class="avatar-icon-wrapper avatar-icon-lg align-self-start">
                                <div class="avatar-icon rounded border-0">
                                    <img src="@/assets/img/avatars/avatar7.jpg" alt="">
                                </div>
                            </div>
                            <div>
                                <div class="chat-box bg-first text-white">
                                    <p>Thanks.</p>
                                    <p>Really appreciate it!</p>
                                </div>
                                <small class="mt-2 d-block text-black-50">
                                    <font-awesome-icon icon="clock" class="mr-1 opacity-5"/>
                                    11:01 AM | Yesterday
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="chat-item p-2 mb-2">
                        <div class="align-box-row">
                            <div class="avatar-icon-wrapper avatar-icon-lg align-self-start">
                                <div class="avatar-icon rounded border-0">
                                    <img src="@/assets/img/avatars/avatar7.jpg" alt="">
                                </div>
                            </div>
                            <div>
                                <div class="chat-box bg-first text-white">
                                    <p>Bye for now, talk to you later.</p>
                                </div>
                                <small class="mt-2 d-block text-black-50">
                                    <font-awesome-icon icon="clock" class="mr-1 opacity-5"/>
                                    11:01 AM | Yesterday
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="chat-item chat-item-reverse p-2 mb-2">
                        <div class="align-box-row flex-row-reverse">
                            <div class="avatar-icon-wrapper avatar-icon-lg align-self-start">
                                <div class="avatar-icon rounded border-0">
                                    <img src="@/assets/img/avatars/avatar3.jpg" alt="">
                                </div>
                            </div>
                            <div>
                                <div class="chat-box bg-first text-white">
                                    <p>Almost forgot about your tasks.</p>
                                    <p><b>Check the links below:</b></p>
                                    <div class="card bg-premium-dark p-2 mt-3 mb-2">
                                        <div class="text-center py-2">
                                            <a v-b-tooltip href="javascript:void(0);" class="m-1 btn btn-link p-0 bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle card-box-hover-rise-alt" title="Menu Example">
                                                <font-awesome-icon icon="dungeon"/>
                                            </a>
                                            <a v-b-tooltip href="javascript:void(0);" class="m-1 btn btn-link p-0 bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle card-box-hover-rise-alt" title="Menu Example">
                                                <font-awesome-icon icon="drafting-compass"/>
                                            </a>
                                            <a v-b-tooltip href="javascript:void(0);" class="m-1 btn btn-link p-0 bg-plum-plate d-inline-block text-center text-white font-size-xl d-40 rounded-circle card-box-hover-rise-alt" title="Menu Example">
                                                <font-awesome-icon icon="football-ball"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <small class="mt-2 d-block text-black-50">
                                    <font-awesome-icon icon="clock" class="mr-1 opacity-5"/>
                                    11:03 AM | Yesterday
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer bg-light p-4">
                <div class="">
                    <input class="form-control" placeholder="Write your message and hit enter to send...">
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
                        <b-button variant="primary">
                            Send
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
        faClock,
        faPlus,
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faFileAudio,
        faFileVideo,
        faFileExcel,
        faClock,
        faPlus,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
    }
</script>