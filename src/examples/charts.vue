<template>
    <div>
        <PageTitle heading="Vue ApexCharts" subheading="Create modern and interactive charts that can be used standalone or integrated in various other elements."/>

        <div class="container">
            <light></light>
            <dark></dark>
        </div>
    </div>
</template>

<script>

    import light from './examples-source/widgets/charts/light'
    import dark from './examples-source/widgets/charts/dark'

    export default {
        components: {

            light,
            dark
        }
    }

</script>