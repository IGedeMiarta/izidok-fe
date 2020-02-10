<template>
    <div>
        <PageTitle heading="Icons" subheading="Over 3000 icons available in the two packages we included: Fontawesome and MaterialIcons."/>
        <div class="container">
            <exampleIcons title="FontAwesome Icons" desc="Over 1500 pixel perfect icons available, each designed from scratch, forged from years of experience.">
                <fontAwesomeIcons></fontAwesomeIcons>
            </exampleIcons>
            <exampleIcons title="Material Icons" desc="Material icons are delightful, beautifully crafted symbols for common actions and items.">
                <MaterialIcons></MaterialIcons>
            </exampleIcons>
        </div>
    </div>
</template>

<script>

    import fontAwesomeIcons from '../examples-source/elements/icons/fontawesome-icons'
    import MaterialIcons from '../examples-source/elements/icons/material-icons'
    import exampleIcons from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleIcons,

            fontAwesomeIcons,
            MaterialIcons
        }
    }

</script>