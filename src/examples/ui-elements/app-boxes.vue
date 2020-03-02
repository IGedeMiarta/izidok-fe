<template>
    <div>
        <PageTitle heading="Application widgets"
                   subheading="Examples of app snippets, like chat, file managers or tasks, that can be integrated in other elements, like card boxes."/>
        <div class="row pl-0 pr-0 pl-md-5 pr-md-5 pt-5">
            <div class="col-xl-4">
                <exampleBig>
                    <messengerBox></messengerBox>
                </exampleBig>
            </div>
            <div class="col-xl-4">
                <exampleBig>
                    <tasksBox></tasksBox>
                </exampleBig>
            </div>
            <div class="col-xl-4">
                <exampleBig>
                    <fileBox></fileBox>
                </exampleBig>
            </div>
        </div>
    </div>
</template>

<script>

    import messengerBox from '../examples-source/elements/app-boxes/messenger-box'
    import tasksBox from '../examples-source/elements/app-boxes/tasks-box'
    import fileBox from '../examples-source/elements/app-boxes/file-box'

    import exampleBig from '../../Layout/Examples/example-big';
    
    export default {
        components: {
            exampleBig,

            messengerBox,
            tasksBox,
            fileBox
        }
    }

</script>