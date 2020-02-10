<template>
    <div>
        <exampleBig>
            <header1></header1>
        </exampleBig>
        <div class="divider my-3"></div>
        <exampleBig>
            <header2></header2>
        </exampleBig>
        <div class="divider my-3"></div>
        <exampleBig>
            <header3></header3>
        </exampleBig>
        <div class="divider my-3"></div>
        <exampleBig>
            <header4></header4>
        </exampleBig>
        <div class="divider my-3"></div>
        <exampleBig>
            <header5></header5>
        </exampleBig>
        <div class="divider my-3"></div>
        <exampleBig>
            <header6></header6>
        </exampleBig>
    </div>
</template>

<script>

    import header1 from '../examples-source/presentation-blocks/headers/header-1'
    import header2 from '../examples-source/presentation-blocks/headers/header-2'
    import header3 from '../examples-source/presentation-blocks/headers/header-3'
    import header4 from '../examples-source/presentation-blocks/headers/header-4'
    import header5 from '../examples-source/presentation-blocks/headers/header-5'
    import header6 from '../examples-source/presentation-blocks/headers/header-6'
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleBig,
            header1,
            header2,
            header3,
            header4,
            header5,
            header6,
        }
    }

</script>