<template>
    <div>
        <PageTitle heading="Blocks" subheading="Use these statistics blocks to create simple, powerful actionable widgets."/>
        <div class="container">
            <exampleAlt title="Blocks">
                <blocks1></blocks1>
            </exampleAlt>
            <exampleBig>
                <blocks2></blocks2>
            </exampleBig>
            <exampleBig>
                <blocksExpanded></blocksExpanded>
            </exampleBig>
        </div>
    </div>
</template>

<script>

    import blocks1 from '../examples-source/elements/statistics-boxes/blocks-1'
    import blocks2 from '../examples-source/elements/statistics-boxes/blocks-2'
    import blocksExpanded from '../examples-source/elements/statistics-boxes/blocks-expanded'
    import exampleAlt from '../../Layout/Examples/example-alt';
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleAlt,
            exampleBig,

            blocks1,
            blocks2,
            blocksExpanded,
        }
    }

</script>