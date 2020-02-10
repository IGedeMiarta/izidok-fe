<template>
    <div>
        <PageTitle heading="Chart boxes" subheading="Multiple examples of boxes that can be used to show reports or statistics in a very beautiful way."/>
        <div class="container">
            <exampleBig>
                <chartBlocks></chartBlocks>
            </exampleBig>
            <exampleBig>
                <chartBoxes></chartBoxes>
            </exampleBig>
        </div>
    </div>
</template>

<script>

    import chartBlocks from '../examples-source/elements/statistics-boxes/chart-blocks'
    import chartBoxes from '../examples-source/elements/statistics-boxes/chart-boxes'
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleBig,

            chartBlocks,
            chartBoxes,
        }
    }

</script>