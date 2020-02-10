<template>
    <div class="card card-box mb-5">
        <div class="card-header bg-light">
            <div class="card-header--title">
                <small class="d-block text-uppercase mt-1">Inline</small>
                <b>Datepicker example</b>
            </div>
        </div>
        <div class="card-body">
            <datepicker :inline="true" :bootstrap-styling="true" wrapper-class="datepicker-wrapper-flush" calendar-class="datepicker datepicker-inline"></datepicker>
        </div>
    </div>

</template>

<script>
    import Datepicker from 'vuejs-datepicker';

    export default {
        components: {
            Datepicker
        }
    }
</script>