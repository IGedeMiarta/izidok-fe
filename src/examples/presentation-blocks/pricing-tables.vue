<template>
    <div>
        <div class="divider"></div>
        <exampleBig>
            <pricing1></pricing1>
        </exampleBig>
        <exampleBig>
            <pricing2></pricing2>
        </exampleBig>
        <exampleBig>
            <pricing3></pricing3>
        </exampleBig>
        <exampleBig>
            <pricing4></pricing4>
        </exampleBig>
    </div>
</template>

<script>

    import pricing1 from '../examples-source/presentation-blocks/pricing-tables/pricing-1'
    import pricing2 from '../examples-source/presentation-blocks/pricing-tables/pricing-2'
    import pricing3 from '../examples-source/presentation-blocks/pricing-tables/pricing-3'
    import pricing4 from '../examples-source/presentation-blocks/pricing-tables/pricing-4'
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleBig,
            pricing1,
            pricing2,
            pricing3,
            pricing4,
        }
    }

</script>