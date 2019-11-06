<template>
    <div>
        <PageTitle heading="Lists" subheading="List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within."/>
        <div class="container">
            <exampleAlt title="Basic">
                <listBasic></listBasic>
            </exampleAlt>
            <listBasic2></listBasic2>
            <progressList></progressList>
            <exampleBig>
                <ListBoxes></ListBoxes>
            </exampleBig>
            <exampleBig>
                <listBoxesExpanded></listBoxesExpanded>
            </exampleBig>
        </div>
    </div>
</template>

<script>

    import listBoxesExpanded from '../examples-source/elements/lists/list-boxes-expanded'
    import progressList from '../examples-source/elements/lists/progress-list'
    import listBasic from '../examples-source/elements/lists/list-1'
    import listBasic2 from '../examples-source/elements/lists/list-2'
    import ListBoxes from '../examples-source/elements/lists/list-boxes.vue'
    import exampleAlt from '../../Layout/Examples/example-alt';
    import exampleBig from '../../Layout/Examples/example-big';


    export default {
        components: {
            exampleAlt,
            exampleBig,

            listBasic,
            listBasic2,
            listBoxesExpanded,
            progressList,
            ListBoxes
        }
    }

</script>