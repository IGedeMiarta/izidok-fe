<template>
    <div>
        <PageTitle heading="Maps" subheading="We've only included two popular maps solutions because we also don't want bloated code in our apps and sites."/>

        <div class="container">
            <exampleAlt title="Google maps">
                <google></google>
            </exampleAlt>
            <exampleAlt title="Leaflet maps">
                <leaflet></leaflet>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import google from './maps/google-maps'
    import leaflet from './maps/vector-maps'

    import exampleAlt from '../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            leaflet,
            google
        }
    }

</script>