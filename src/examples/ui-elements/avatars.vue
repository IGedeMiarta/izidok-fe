<template>
    <div>
        <PageTitle heading="Avatars" subheading="Image or letters avatars with multiple sizes, borders and possibility to group them"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <exampleAlt title="Basic">
                        <basic></basic>
                    </exampleAlt>
                    <exampleAlt title="Sizing">
                        <sizing></sizing>
                    </exampleAlt>
                    <exampleAlt title="Initials">
                        <initials1></initials1>
                    </exampleAlt>
                </div>
                <div class="col-lg-12">
                    <exampleAlt title="Badges">
                        <badges></badges>
                    </exampleAlt>
                    <exampleAlt title="Overlap">
                        <overlap></overlap>
                    </exampleAlt>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/avatars/basic'
    import sizing from '../examples-source/elements/avatars/sizing'
    import initials1 from '../examples-source/elements/avatars/initials'
    import badges from '../examples-source/elements/avatars/badges'
    import overlap from '../examples-source/elements/avatars/overlap'

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic,
            sizing,
            initials1,
            badges,
            overlap
        }
    }

</script>