<template>
    <div>
        <PageTitle heading="Tabs" subheading="Split your content into multiple tabbable regions with this wonderful Bootstrap widget."/>
        <div class="container">
            <exampleAlt title="Basic">
                <basic></basic>
            </exampleAlt>
            <exampleAlt title="Line tabs">
                <line1></line1>
            </exampleAlt>
            <exampleBig title="Card tabs">
                <cardTabs></cardTabs>
            </exampleBig>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/widgets/tabs/basic'
    import line1 from '../examples-source/widgets/tabs/line-1'
    import cardTabs from '../examples-source/widgets/tabs/cards-tabs'
    import exampleAlt from '../../Layout/Examples/example-alt';
    import exampleBig from '../../Layout/Examples/example-big';

    export default {
        components: {
            exampleAlt,
            exampleBig,

            basic,
            line1,
            cardTabs
        }
    }

</script>