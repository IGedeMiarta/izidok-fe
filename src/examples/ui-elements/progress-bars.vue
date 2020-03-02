<template>
    <div>
        <PageTitle heading="Progress bars" subheading="Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels."/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <exampleAlt title="Basic">
                        <basic></basic>
                    </exampleAlt>
                </div>
                <div class="col-lg-12">
                    <exampleAlt title="Labels">
                        <labels></labels>
                    </exampleAlt>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/progress-bar/basic'
    import labels from '../examples-source/elements/progress-bar/labels'

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic,
            labels
        }
    }

</script>