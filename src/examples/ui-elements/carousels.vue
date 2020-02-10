<template>
    <div>
        <PageTitle heading="Carousels" subheading="A slideshow component for cycling through elements—images or slides of text—like a carousel."/>
        <div class="container">
            <exampleAlt title="Slideshow">
                <slideshows></slideshows>
            </exampleAlt>
            <exampleAlt title="BootstrapVue Carousel">
                <carousel></carousel>
            </exampleAlt>
        </div>
    </div>
</template>

<script>

    import slideshows from '../examples-source/widgets/carousel/slideshows'
    import carousel from '../examples-source/widgets/carousel/basic'
    import exampleAlt from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleAlt,

            slideshows,
            carousel
        }
    }

</script>