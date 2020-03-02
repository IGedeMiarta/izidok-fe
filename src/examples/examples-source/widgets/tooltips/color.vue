<template>
    <div>
        <b-button id="tooltipPrimaryWrapper" variant="primary">Primary</b-button>
        <b-tooltip @show="showTooltip" ref="tooltipPrimary" target="tooltipPrimaryWrapper">
            This tooltip example has a primary color state!
        </b-tooltip>

        <b-button id="tooltipSecondaryWrapper" variant="secondary">Secondary</b-button>
        <b-tooltip @show="showTooltip" ref="tooltipSecondary" target="tooltipSecondaryWrapper">
            This tooltip example has a primary color state!
        </b-tooltip>

        <b-button id="tooltipFirstWrapper" variant="first">Primary Alt</b-button>
        <b-tooltip @show="showTooltip" ref="tooltipFirst" target="tooltipFirstWrapper">
            This tooltip example has a primary color state!
        </b-tooltip>

        <b-button id="tooltipSecondWrapper" variant="second">Secondary Alt</b-button>
        <b-tooltip @show="showTooltip" ref="tooltipSecond" target="tooltipSecondWrapper">
            This tooltip example has a primary color state!
        </b-tooltip>

        <b-button id="tooltipInfoWrapper" variant="info">Info</b-button>
        <b-tooltip @show="showTooltip" ref="tooltipInfo" target="tooltipInfoWrapper">
            This tooltip example has a primary color state!
        </b-tooltip>

        <b-button id="tooltipSuccessWrapper" variant="success">Success</b-button>
        <b-tooltip @show="showTooltip" ref="tooltipSuccess" target="tooltipSuccessWrapper">
            This tooltip example has a primary color state!
        </b-tooltip>

        <b-button id="tooltipWarningWrapper" variant="warning">Warning</b-button>
        <b-tooltip @show="showTooltip" ref="tooltipWarning" target="tooltipWarningWrapper">
            This tooltip example has a primary color state!
        </b-tooltip>

        <b-button id="tooltipDangerWrapper" variant="danger">Danger</b-button>
        <b-tooltip @show="showTooltip" ref="tooltipDanger" target="tooltipDangerWrapper">
            This tooltip example has a primary color state!
        </b-tooltip>

        <b-button id="tooltipDarkWrapper" variant="dark">Dark</b-button>
        <b-tooltip @show="showTooltip" ref="tooltipDark" target="tooltipDarkWrapper">
            This tooltip example has a primary color state!
        </b-tooltip>
    </div>
</template>

<script>
    export default {
        methods: {
            showTooltip() {
                this.$refs.tooltipPrimary._toolpop.getTipElement().classList.add('tooltip-primary');
                this.$refs.tooltipSecondary._toolpop.getTipElement().classList.add('tooltip-secondary');
                this.$refs.tooltipFirst._toolpop.getTipElement().classList.add('tooltip-first');
                this.$refs.tooltipSecond._toolpop.getTipElement().classList.add('tooltip-second');
                this.$refs.tooltipInfo._toolpop.getTipElement().classList.add('tooltip-info');
                this.$refs.tooltipSuccess._toolpop.getTipElement().classList.add('tooltip-success');
                this.$refs.tooltipWarning._toolpop.getTipElement().classList.add('tooltip-warning');
                this.$refs.tooltipDanger._toolpop.getTipElement().classList.add('tooltip-danger')
                this.$refs.tooltipDark._toolpop.getTipElement().classList.add('tooltip-dark')
            },
        }
    }
</script>