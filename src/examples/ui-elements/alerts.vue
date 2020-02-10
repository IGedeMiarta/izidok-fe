<template>
    <div>
        <PageTitle heading="Alerts"
                   subheading="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."/>
        <div class="container">
            <exampleAlt title="Basic">
                <basic></basic>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import basic from '../examples-source/elements/alerts/basic'

    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            basic
        }
    }

</script>