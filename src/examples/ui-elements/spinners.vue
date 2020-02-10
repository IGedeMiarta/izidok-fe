<template>
    <div>
        <PageTitle heading="Spinners" subheading="Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript."/>
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-12">
                    <exampleAlt2 title="Border">
                        <spinnerBorder></spinnerBorder>
                    </exampleAlt2>
                </div>
                <div class="col-md-12">
                    <exampleAlt2 title="Grow">
                        <spinnerGrow></spinnerGrow>
                    </exampleAlt2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import spinnerBorder from '../examples-source/elements/spinners/border'
    import spinnerGrow from '../examples-source/elements/spinners/grow'

    import exampleAlt2 from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt2,

            spinnerBorder,
            spinnerGrow,
        }
    }

</script>