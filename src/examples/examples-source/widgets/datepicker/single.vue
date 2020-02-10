<template>
    <div class="form-group mb-5">
        <label>Select date:</label>
        <datepicker placeholder="Select Date" calendar-class="datepicker datepicker-dropdown dropdown-menu" :bootstrap-styling="true"></datepicker>
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