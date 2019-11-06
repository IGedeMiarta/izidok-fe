<template>
    <div>
        <div class="divider"></div>
        <exampleBig>
            <footer1></footer1>
        </exampleBig>
        <exampleBig>
            <footer2></footer2>
        </exampleBig>
        <exampleBig>
            <footer3></footer3>
        </exampleBig>
    </div>
</template>

<script>

    import footer1 from '../examples-source/presentation-blocks/footers/footer-1'
    import footer2 from '../examples-source/presentation-blocks/footers/footer-2'
    import footer3 from '../examples-source/presentation-blocks/footers/footer-3'
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleBig,
            footer1,
            footer2,
            footer3
        }
    }

</script>