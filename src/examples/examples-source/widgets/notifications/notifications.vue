<template>
    <div>
        <div class="card card-box mb-5">
            <form method="post" @submit.prevent="show" ref="demoPanel">
                <div class="card-body">
                    <div class="form-group">
                        <label>Message <code>(required)</code></label>
                        <input type="text" required class="form-control" v-model.trim="form.message" name="message"/>
                    </div>

                    <div class="form-group">
                        <label>Type</label>
                        <div>
                            <div v-for="item in types" class="custom-control custom-radio custom-control-inline">
                                <input v-model="form.type" :value="item" type="radio" :id="`radio-type-${item}`"
                                       class="custom-control-input">
                                <label class="custom-control-label text-capitalize" :for="`radio-type-${item}`">{{item}}</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Duration <code>({{form.duration/1000}} seconds)</code></label>
                        <input type="range" class="custom-range" min="1" max="500000"
                               v-model.number="form.duration">
                    </div>

                    <div class="form-row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Dismissible</label>
                                <div class="custom-control custom-checkbox">
                                    <input v-model="form.dismissible" type="checkbox" class="custom-control-input"
                                           id="checkbox-dismissible">
                                    <label class="custom-control-label" for="checkbox-dismissible">Close on click</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="form-group">
                                <label>Queue</label>
                                <div class="custom-control custom-checkbox">
                                    <input v-model="form.queue" type="checkbox" class="custom-control-input"
                                           id="checkbox-queue">
                                    <label class="custom-control-label" for="checkbox-queue">Wait for previous to close before
                                        showing new</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Position</label>
                        <div>
                            <div v-for="item in positions" class="custom-control custom-radio custom-control-inline">
                                <input v-model="form.notifications" :value="item" type="radio" :id="`radio-position-${item}`"
                                       class="custom-control-input">
                                <label class="custom-control-label text-capitalize" :for="`radio-position-${item}`">{{item}}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer d-block text-center">
                    <b-button size="lg" type="submit" variant="primary">Show notification</b-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueToast from 'vue-toast-notification';
    Vue.use(VueToast);

    export default {
        data() {
            return {
                form: {
                    message: 'This is a sample message',
                    type: 'success',
                    duration: 3000,
                    dismissible: true,
                    queue: false,
                    position: 'bottom-right',
                },
                types: [
                    'success',
                    'error',
                    'warning',
                    'info',
                    'default',
                ],
                positions: [
                    'top',
                    'bottom',
                    'top-right',
                    'bottom-right',
                    'top-left',
                    'bottom-left',
                ]
            }
        },
        components: {},
        methods: {
            show() {
                this.$toast.open(this.form);
            },
        }
    }
</script>