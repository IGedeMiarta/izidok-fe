<template>
    <div>
        <PageTitle heading="Horizontal boxes" subheading="Create stunning dashboards using these horizontal boxes."/>
        <div class="container">
            <exampleBig title="Horizontal">
                <horizontal1></horizontal1>
            </exampleBig>
            <exampleBig>
                <horizontal2></horizontal2>
            </exampleBig>
        </div>
    </div>
</template>

<script>

    import horizontal1 from '../examples-source/elements/statistics-boxes/horizontal-1'
    import horizontal2 from '../examples-source/elements/statistics-boxes/horizontal-2'
    import exampleBig from '../../Layout/Examples/example-big';

    export default {
        components: {
            exampleBig,

            horizontal1,
            horizontal2,
        }
    }

</script>