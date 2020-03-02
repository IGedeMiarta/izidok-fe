<template>
    <div>
        <PageTitle heading="Simple blocks" subheading="These blocks are simple when referring only to how easy they are to implement."/>
        <div class="container">
            <exampleBig title="Simple blocks">
                <simpleBlocks></simpleBlocks>
            </exampleBig>
        </div>
    </div>
</template>

<script>

    import simpleBlocks from '../examples-source/elements/statistics-boxes/simple-blocks'
    import exampleBig from '../../Layout/Examples/example-big';

    export default {
        components: {
            exampleBig,

            simpleBlocks,
        }
    }

</script>