<template>
    <div>
        <PageTitle heading="Card blocks" subheading="These examples contain integrations between cards, charts and other UI elements."/>
        <div class="container">
            <exampleBig>
                <cardBlocks></cardBlocks>
            </exampleBig>
        </div>
    </div>
</template>

<script>

    import cardBlocks from '../examples-source/elements/statistics-boxes/card-blocks'
    import exampleBig from '../../Layout/Examples/example-big';

    export default {
        components: {
            exampleBig,

            cardBlocks
        }
    }

</script>