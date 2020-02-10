<template>
    <div>
        <b-button id="popoverPrimaryWrapper" variant="primary">Primary</b-button>
        <b-popover @show="showPopover" triggers="hover" placement="top" ref="popoverPrimary" target="popoverPrimaryWrapper">
            This popover example has a primary color state!
        </b-popover>

        <b-button id="popoverSecondaryWrapper" variant="secondary">Secondary</b-button>
        <b-popover @show="showPopover" triggers="hover" placement="top" ref="popoverSecondary" target="popoverSecondaryWrapper">
            This popover example has a primary color state!
        </b-popover>

        <b-button id="popoverFirstWrapper" variant="first">Primary Alt</b-button>
        <b-popover @show="showPopover" triggers="hover" placement="top" ref="popoverFirst" target="popoverFirstWrapper">
            This popover example has a primary color state!
        </b-popover>

        <b-button id="popoverSecondWrapper" variant="second">Secondary Alt</b-button>
        <b-popover @show="showPopover" triggers="hover" placement="top" ref="popoverSecond" target="popoverSecondWrapper">
            This popover example has a primary color state!
        </b-popover>

        <b-button id="popoverInfoWrapper" variant="info">Info</b-button>
        <b-popover @show="showPopover" triggers="hover" placement="top" ref="popoverInfo" target="popoverInfoWrapper">
            This popover example has a primary color state!
        </b-popover>

        <b-button id="popoverSuccessWrapper" variant="success">Success</b-button>
        <b-popover @show="showPopover" triggers="hover" placement="top" ref="popoverSuccess" target="popoverSuccessWrapper">
            This popover example has a primary color state!
        </b-popover>

        <b-button id="popoverWarningWrapper" variant="warning">Warning</b-button>
        <b-popover @show="showPopover" triggers="hover" placement="top" ref="popoverWarning" target="popoverWarningWrapper">
            This popover example has a primary color state!
        </b-popover>

        <b-button id="popoverDangerWrapper" variant="danger">Danger</b-button>
        <b-popover @show="showPopover" triggers="hover" placement="top" ref="popoverDanger" target="popoverDangerWrapper">
            This popover example has a primary color state!
        </b-popover>

        <b-button id="popoverDarkWrapper" variant="dark">Dark</b-button>
        <b-popover @show="showPopover" triggers="hover" placement="top" ref="popoverDark" target="popoverDarkWrapper">
            This popover example has a primary color state!
        </b-popover>
    </div>
</template>

<script>
    export default {
        methods: {
            showPopover() {
                this.$refs.popoverPrimary._toolpop.getTipElement().classList.add('popover-primary');
                this.$refs.popoverSecondary._toolpop.getTipElement().classList.add('popover-secondary');
                this.$refs.popoverFirst._toolpop.getTipElement().classList.add('popover-first');
                this.$refs.popoverSecond._toolpop.getTipElement().classList.add('popover-second');
                this.$refs.popoverInfo._toolpop.getTipElement().classList.add('popover-info');
                this.$refs.popoverSuccess._toolpop.getTipElement().classList.add('popover-success');
                this.$refs.popoverWarning._toolpop.getTipElement().classList.add('popover-warning');
                this.$refs.popoverDanger._toolpop.getTipElement().classList.add('popover-danger')
                this.$refs.popoverDark._toolpop.getTipElement().classList.add('popover-dark')
            },
        }
    }
</script>