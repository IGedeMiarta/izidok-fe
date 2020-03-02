<template>
    <div>
        <div class="divider mb-3"></div>
        <div class="container">
            <exampleBig>
                <iconBox1></iconBox1>
            </exampleBig>
        </div>
        <div class="divider my-3"></div>
        <div class="container">
            <exampleBig>
                <iconBox2></iconBox2>
            </exampleBig>
        </div>
        <div class="divider my-3"></div>
        <div class="container">
            <exampleBig>
                <iconBox3></iconBox3>
            </exampleBig>
        </div>
        <exampleBig>
            <iconBox4></iconBox4>
        </exampleBig>
        <exampleBig>
            <iconBox5></iconBox5>
        </exampleBig>
        <div class="container">
            <exampleBig>
                <iconBox6></iconBox6>
            </exampleBig>
        </div>
        <exampleBig>
            <iconBox7></iconBox7>
        </exampleBig>
    </div>
</template>

<script>

    import iconBox1 from '../examples-source/presentation-blocks/icon-boxes/icon-box-1'
    import iconBox2 from '../examples-source/presentation-blocks/icon-boxes/icon-box-2'
    import iconBox3 from '../examples-source/presentation-blocks/icon-boxes/icon-box-3'
    import iconBox4 from '../examples-source/presentation-blocks/icon-boxes/icon-box-4'
    import iconBox5 from '../examples-source/presentation-blocks/icon-boxes/icon-box-5'
    import iconBox6 from '../examples-source/presentation-blocks/icon-boxes/icon-box-6'
    import iconBox7 from '../examples-source/presentation-blocks/icon-boxes/icon-box-7'
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleBig,
            iconBox1,
            iconBox2,
            iconBox3,
            iconBox4,
            iconBox5,
            iconBox6,
            iconBox7
        }
    }

</script>