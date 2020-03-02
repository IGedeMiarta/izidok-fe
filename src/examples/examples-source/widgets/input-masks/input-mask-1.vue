<template>
    <div>
        <b-row>
            <b-col md="6">
                <div class="mb-3">
                    <input class="form-control" id="time-and-date-ex" type="text" placeholder="27/10/2016 23:15"
                           v-mask="'##/##/#### ##:##'"
                           v-model="models.timeAndDate"
                    />
                </div>
                <div class="mb-3">
                    <input class="form-control" id="us-phone-number-ex" type="text" placeholder="+1(999)-999-9999"
                           v-mask="'+1(###)-###-####'"
                           v-model="models.usPhoneNumber"
                    />
                </div>
                <div class="mb-3">
                    <input class="form-control" id="phone-number-ex" type="text" placeholder="(999) 999-9999"
                           v-mask="'(###) ###-####'"
                           v-model="models.phoneNumber"
                    />
                </div>
            </b-col>
            <b-col md="6">
                <div class="mb-3">
                    <input class="form-control" id="time-ex" type="text" placeholder="11:23:15"
                           v-mask="'##:##:##'"
                           v-model="models.timeWithSeconds"
                    />
                </div>
                <div class="mb-3">
                    <input class="form-control" id="credit-cart-ex" type="text" placeholder="4444 4444 4444 4444"
                           v-mask="'#### #### #### ####'"
                           v-model="models.cardNumber"
                    />
                </div>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    import Vue from 'vue'
    import VueMask from 'v-mask';

    Vue.use(VueMask);

    export default {
        data: function () {
            return {
            dynamicMask: '###.###.###/###',
            models: {
                timeAndDate: '',
                timeWithSeconds: '',
                cardNumber: '',
                phoneNumber: '',
                dynamicMask: '',
                usPhoneNumber: ''
            }
        }},

        methods: {}
    }
</script>