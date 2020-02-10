<template>
    <div>
        <div class="divider"></div>
        <exampleBig>
            <features1></features1>
        </exampleBig>
        <exampleBig>
            <features2></features2>
        </exampleBig>
        <exampleBig>
            <features3></features3>
        </exampleBig>
        <exampleBig>
            <features4></features4>
        </exampleBig>
        <exampleBig>
            <features5></features5>
        </exampleBig>
        <div class="divider"></div>
        <exampleBig>
            <features6></features6>
        </exampleBig>
        <div class="divider"></div>
    </div>
</template>

<script>

    import features1 from '../examples-source/presentation-blocks/features-sections/features-1'
    import features2 from '../examples-source/presentation-blocks/features-sections/features-2'
    import features3 from '../examples-source/presentation-blocks/features-sections/features-3'
    import features4 from '../examples-source/presentation-blocks/features-sections/features-4'
    import features5 from '../examples-source/presentation-blocks/features-sections/features-5'
    import features6 from '../examples-source/presentation-blocks/features-sections/features-6'
    import exampleBig from '../../Layout/Examples/example-big';

    export default {
        components: {
            exampleBig,
            features1,
            features2,
            features3,
            features4,
            features5,
            features6,
        }
    }

</script>