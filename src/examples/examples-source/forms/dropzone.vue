<template>
    <div>
        <div class="alert d-flex align-items-center p-2 align-content-center border-2 border-danger text-danger fade show mb-5">
            <span class="font-size-lg d-block d-40 ml-2 mr-1 text-center">
                <font-awesome-icon icon="question-circle"/>
            </span>
            <div>
                The demo examples below won't work because dropzone needs to be configured for server-side processing.
            </div>
        </div>
        <single></single>
    </div>
</template>

<script>

    import single from '../../examples-source/widgets/dropzone/single'
    import exampleAlt from '../../../Layout/Examples/example-alt';
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    export default {
        components: {
            exampleAlt,
            single,

            'font-awesome-icon': FontAwesomeIcon,
        }
    }

</script>