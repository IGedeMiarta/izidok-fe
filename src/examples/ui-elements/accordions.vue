<template>
    <div>
        <PageTitle heading="Accordions" subheading="Collapse your content regions one at a time with our Bootstrap accordion implementation."/>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <exampleAlt title="Menus">
                        <menus></menus>
                    </exampleAlt>
                </div>
                <div class="col-lg-8">
                    <exampleAlt title="Alternate">
                        <alternate></alternate>
                    </exampleAlt>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import menus from '../examples-source/widgets/accordion/menus'
    import alternate from '../examples-source/widgets/accordion/alternate'

    import exampleAlt from '../../Layout/Examples/example-big';

    export default {
        components: {
            exampleAlt,

            menus,
            alternate
        }
    }

</script>