<template>
    <div>
        <PageTitle heading="Modals" subheading="Add dialogs to your site for lightboxes, user notifications, or completely custom content."/>
        <div class="container demo-spacing demo-wrapper">
            <exampleAlt title="Basic">
                <basic></basic>
            </exampleAlt>
            <exampleAlt title="Colors">
                <color></color>
            </exampleAlt>
            <exampleAlt title="Borderless">
                <borderless></borderless>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/widgets/modals/basic'
    import color from '../examples-source/widgets/modals/color'
    import borderless from '../examples-source/widgets/modals/borderless'
    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic,
            color,
            borderless
        }
    }

</script>