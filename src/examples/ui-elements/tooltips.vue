<template>
    <div>
        <PageTitle heading="Tooltips" subheading="Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage."/>
        <div class="container demo-spacing demo-wrapper">
            <exampleAlt title="Position">
                <position></position>
            </exampleAlt>
            <exampleAlt title="Colors">
                <color></color>
            </exampleAlt>
            <exampleAlt title="Integrations">
                <integrations></integrations>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import position from '../examples-source/widgets/tooltips/position'
    import color from '../examples-source/widgets/tooltips/color'
    import integrations from '../examples-source/widgets/tooltips/integrations'
    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            position,
            color,
            integrations
        }
    }

</script>