<template>
    <div>
        <PageTitle heading="Scrollable" subheading="Replace the regular browser scrollbars with a fancy looking custom bar, powered by PerfectScrollbar."/>
        <div class="container">
            <exampleAlt title="Sizing">
                <sizing></sizing>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import sizing from '../examples-source/widgets/scrollable/sizing'
    import exampleAlt from '../../Layout/Examples/example-big';

    export default {
        components: {
            exampleAlt,

            sizing,
        }
    }

</script>