<template>
    <div>
        <div class="divider"></div>
        <exampleBig>
            <blog1></blog1>
        </exampleBig>
        <exampleBig>
            <blog2></blog2>
        </exampleBig>
        <exampleBig>
            <blog3></blog3>
        </exampleBig>
    </div>
</template>

<script>

    import blog1 from '../examples-source/presentation-blocks/blog/blog-1'
    import blog2 from '../examples-source/presentation-blocks/blog/blog-2'
    import blog3 from '../examples-source/presentation-blocks/blog/blog-3'
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleBig,
            blog1,
            blog2,
            blog3
        }
    }

</script>