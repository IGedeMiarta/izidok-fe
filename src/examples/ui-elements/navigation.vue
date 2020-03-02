<template>
    <div>
        <PageTitle heading="Navigation" subheading="Powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin."/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <exampleAlt title="Lists">
                        <navigationLists></navigationLists>
                    </exampleAlt>
                </div>
                <div class="col-lg-12">
                    <exampleAlt title="Grids">
                        <navigationGrid></navigationGrid>
                    </exampleAlt>
                    <exampleAlt title="Bullets">
                        <navigationBullets></navigationBullets>
                    </exampleAlt>
                </div>
            </div>
            <exampleAlt2 title="Menus">
                <menus></menus>
            </exampleAlt2>
            <exampleAlt2 title="Navbars">
                <navbars></navbars>
            </exampleAlt2>
        </div>
    </div>
</template>

<script>

    import menus from '../examples-source/elements/navigation/menus'
    import navbars from '../examples-source/elements/navigation/navbars'
    import navigationLists from '../examples-source/elements/navigation/navigation-lists'
    import navigationGrid from '../examples-source/elements/navigation/navigation-grid'
    import navigationBullets from '../examples-source/elements/navigation/navigation-bullets'
    import exampleAlt from '../../Layout/Examples/example-big';
    import exampleAlt2 from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,
            exampleAlt2,

            menus,
            navbars,
            navigationLists,
            navigationGrid,
            navigationBullets,
        }
    }

</script>