<template>
    <div>
        <PageTitle heading="Timelines" subheading="Show your events chronological order in style with this included PRO feature."/>
        <div class="container">
            <exampleAlt title="Basic">
                <basic></basic>
            </exampleAlt>
            <exampleAlt title="Colors">
                <colors></colors>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/timelines/basic'
    import colors from '../examples-source/elements/timelines/colors'
    import exampleAlt from '../../Layout/Examples/example-alt';


    export default {
        components: {
            exampleAlt,

            basic,
            colors
        }
    }

</script>