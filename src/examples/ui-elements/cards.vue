<template>
    <div>
        <PageTitle heading="Cards" subheading="These cards provide a flexible and extensible content container with multiple variants and options."/>
        <div class="container">
            <cards-1></cards-1>
            <cards-2></cards-2>
            <cards-3></cards-3>
            <cards-7></cards-7>
            <exampleBig title="Posts">
                <cards-4></cards-4>
            </exampleBig>
            <cards-5></cards-5>
            <exampleBig title="Overlay">
                <cards-6></cards-6>
            </exampleBig>
            <cards-8></cards-8>
        </div>
    </div>
</template>

<script>

    import cards1 from '../examples-source/elements/cards/cards-1'
    import cards2 from '../examples-source/elements/cards/cards-2'
    import cards3 from '../examples-source/elements/cards/cards-3'
    import cards4 from '../examples-source/elements/cards/cards-4'
    import cards5 from '../examples-source/elements/cards/cards-5'
    import cards6 from '../examples-source/elements/cards/cards-6'
    import cards7 from '../examples-source/elements/cards/cards-7'
    import cards8 from '../examples-source/elements/cards/cards-8'

    import exampleBig from '../../Layout/Examples/example-alt';

    export default {
        components: {
            exampleBig,

            cards1,
            cards2,
            cards3,
            cards4,
            cards5,
            cards6,
            cards7,
            cards8
        }
    }

</script>