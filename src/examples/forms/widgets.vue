<template>
    <div>
        <PageTitle heading="Form widgets" subheading="We've included the most useful and popular form related widgets."/>
        <div class="container">
            <exampleAlt title="Datepicker">
                <datepicker></datepicker>
            </exampleAlt>
            <exampleAlt title="Dropzone">
                <dropzone></dropzone>
            </exampleAlt>
            <exampleAlt title="Input masks">
                <inputMasks></inputMasks>
            </exampleAlt>
            <exampleAlt title="Editor">
                <editor></editor>
            </exampleAlt>
            <exampleAlt title="VueSelect">
                <select2></select2>
            </exampleAlt>
            <exampleAlt title="Sliders">
                <sliders></sliders>
            </exampleAlt>
        </div>
    </div>
</template>

<script>
    import datepicker from '../examples-source/forms/datepicker'
    import dropzone from '../examples-source/forms/dropzone'
    import inputMasks from '../examples-source/forms/input-masks'
    import editor from '../examples-source/forms/quill-editor'
    import select2 from '../examples-source/forms/select2'
    import sliders from '../examples-source/forms/sliders'

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            datepicker,
            dropzone,
            inputMasks,
            editor,
            select2,
            sliders
        }
    }
</script>