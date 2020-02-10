<template>
    <div>
        <PageTitle heading="Popovers" subheading="Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site."/>
        <div class="demo-spacing container demo-wrapper">
            <exampleAlt title="Position">
                <position></position>
            </exampleAlt>
            <exampleAlt title="Color">
                <color></color>
            </exampleAlt>
            <exampleAlt title="Integrations">
                <integrations></integrations>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import position from '../examples-source/widgets/popovers/position'
    import color from '../examples-source/widgets/popovers/color'
    import integrations from '../examples-source/widgets/popovers/integrations'
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