<template>
    <div>
        <PageTitle heading="Form elements" subheading="Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms."/>
        <div class="container">
            <exampleAlt title="Controls">
                <controls></controls>
            </exampleAlt>
            <exampleAlt title="Custom controls">
                <customControls></customControls>
            </exampleAlt>
            <exampleAlt title="Icons">
                <icons></icons>
            </exampleAlt>
            <exampleAlt title="Validation">
                <validation></validation>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import controls from '../examples-source/elements/forms/controls'
    import customControls from '../examples-source/elements/forms/custom-controls'
    import icons from '../examples-source/elements/forms/icons'
    import validation from '../examples-source/elements/forms/validation'
    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            controls,
            customControls,
            icons,
            validation
        }
    }

</script>