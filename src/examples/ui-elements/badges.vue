<template>
    <div>
        <PageTitle heading="Badges" subheading="Documentation and examples for badges, our small count and labeling component."/>
        <div class="container demo-spacing">
            <div class="row demo-wrapper">
                <div class="col-lg-12">
                    <exampleAlt title="Basic">
                        <basic/>
                    </exampleAlt>
                </div>
                <div class="col-lg-12">
                    <exampleAlt title="Pills">
                        <pills/>
                    </exampleAlt>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/badges/basic'
    import pills from '../examples-source/elements/badges/pills'

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic,
            pills
        }
    }

</script>