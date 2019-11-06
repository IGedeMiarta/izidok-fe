<template>
    <div>
        <PageTitle heading="Notifications" subheading="Show beautiful, animated growl like notifications on your pages screens."/>
        <div class="container demo-wrapper">
            <exampleAlt>
                <notifications></notifications>
            </exampleAlt>
            <exampleBig title="SweetAlert2">
                <sweetAlert></sweetAlert>
            </exampleBig>
        </div>
    </div>
</template>

<script>

    import notifications from '../examples-source/widgets/notifications/notifications'
    import sweetAlert from '../examples-source/widgets/notifications/sweet-alerts/sweet-alerts'

    import exampleBig from '../../Layout/Examples/example-alt';
    import exampleAlt from '../../Layout/Examples/example-big';

    export default {
        components: {
            notifications,
            exampleBig,
            sweetAlert,
            exampleAlt
        }
    }

</script>