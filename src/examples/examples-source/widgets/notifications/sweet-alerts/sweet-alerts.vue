<template>
    <div class="demo-wrapper">
        <div class="example-box">
            <div>
                <b-button variant="primary" @click="simple">Simple</b-button>
                <b-button variant="success" @click="success">Success alert</b-button>
                <b-button variant="danger" @click="error">Danger alert</b-button>
                <b-button variant="info" @click="info">Info alert</b-button>
                <b-button variant="first" @click="toastTopEnd">Toastr</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueSweetalert2 from 'vue-sweetalert2';

    Vue.use(VueSweetalert2);

    export default {
        methods: {
            simple() {
                this.$swal('Hello world!');
            },
            error() {
                this.$swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                });
            },
            success() {
                this.$swal({
                    type: 'success',
                    title: 'Well done',
                    text: 'This is a success alert!'
                });
            },
            info() {
                this.$swal({
                    type: 'question',
                    title: 'Well done',
                    text: 'This is a success alert!'
                });
            },
            toastTopEnd() {
                this.$swal({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    type: 'success',
                    title: 'Hi man',
                    text: 'is a good day!'
                });
            }
        }
    }
</script>