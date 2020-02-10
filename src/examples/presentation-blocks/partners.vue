<template>
    <div>
        <div class="divider"></div>
        <exampleBig>
            <partners1></partners1>
        </exampleBig>
        <exampleBig>
            <partners2></partners2>
        </exampleBig>
        <exampleBig>
            <partners3></partners3>
        </exampleBig>
        <exampleBig>
            <partners4></partners4>
        </exampleBig>
    </div>
</template>

<script>

    import partners1 from '../examples-source/presentation-blocks/partners/partners-1'
    import partners2 from '../examples-source/presentation-blocks/partners/partners-2'
    import partners3 from '../examples-source/presentation-blocks/partners/partners-3'
    import partners4 from '../examples-source/presentation-blocks/partners/partners-4'
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleBig,
            partners1,
            partners2,
            partners3,
            partners4
        }
    }

</script>