<template>
    <div>
        <div class="divider"></div>
        <exampleBig>
            <testimonials1></testimonials1>
        </exampleBig>
        <exampleBig>
            <testimonials2></testimonials2>
        </exampleBig>
        <exampleBig>
            <testimonials3></testimonials3>
        </exampleBig>
        <exampleBig>
            <testimonials4></testimonials4>
        </exampleBig>
    </div>
</template>

<script>

    import testimonials1 from '../examples-source/presentation-blocks/testimonials/testimonials-1'
    import testimonials2 from '../examples-source/presentation-blocks/testimonials/testimonials-2'
    import testimonials3 from '../examples-source/presentation-blocks/testimonials/testimonials-3'
    import testimonials4 from '../examples-source/presentation-blocks/testimonials/testimonials-4'
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleBig,
            testimonials1,
            testimonials2,
            testimonials3,
            testimonials4
        }
    }

</script>