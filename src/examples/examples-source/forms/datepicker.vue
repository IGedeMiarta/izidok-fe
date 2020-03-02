<template>
    <div>
        <div class="row">
            <div class="col-md-7">
                <single></single>
            </div>
            <div class="col-md-5">
                <exampleBig>
                    <inline></inline>
                </exampleBig>
            </div>
        </div>
    </div>
</template>

<script>

    import single from '../../examples-source/widgets/datepicker/single'
    import inline from '../../examples-source/widgets/datepicker/inline'
    import exampleAlt from '../../../Layout/Examples/example-alt';
    import exampleBig from '../../../Layout/Examples/example-big';


    export default {
        components: {
            exampleAlt,
            exampleBig,

            single,
            inline
        }
    }

</script>