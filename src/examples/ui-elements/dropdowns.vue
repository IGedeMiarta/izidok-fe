<template>
    <div>
        <PageTitle heading="Dropdowns" subheading="Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin."/>
        <div class="container demo-spacing">
            <div class="row">
                <div class="col-md-12 demo-wrapper">
                    <exampleAlt title="Normal">
                        <normal></normal>
                    </exampleAlt>
                </div>
                <div class="col-md-12 demo-wrapper">
                    <exampleAlt title="Split">
                        <split></split>
                    </exampleAlt>
                </div>
                <div class="col-md-12 demo-wrapper">
                    <exampleAlt title="Integrations">
                        <integrations></integrations>
                    </exampleAlt>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import normal from '../examples-source/widgets/dropdowns/normal'
    import split from '../examples-source/widgets/dropdowns/split'
    import integrations from '../examples-source/widgets/dropdowns/integrations'
    import exampleAlt from '../../Layout/Examples/example-alt';


    export default {
        components: {
            exampleAlt,

            normal,
            split,
            integrations
        }
    }

</script>