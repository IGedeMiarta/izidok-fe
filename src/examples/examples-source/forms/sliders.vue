<template>
    <div>
        <b-row>
            <b-col md="12">
                <div class="pt-4 px-5 mb-5">
                    <vue-slider ref="slider" v-model="demo.default.value" v-bind="demo.default"></vue-slider>
                    <b class="d-block text-center my-3">
                        <small>Value: </small>
                        {{ demo.default.value }}
                    </b>
                </div>
                <div class="pt-4 px-5 mb-5">
                    <vue-slider ref="slider1" v-bind="demo.demo1" v-model="demo.demo1.value"></vue-slider>
                    <b class="d-block text-center my-3">
                        <small>Value: </small>
                        {{ demo.demo1.value }}
                    </b>
                    <div class="text-center">
                        <b-button-group>
                            <b-button size="sm" variant="outline-primary" @click="setValue('demo1', 21)">set value = 21</b-button>
                            <b-button size="sm" variant="outline-primary" @click="setIndex('slider1', 2)">set index = 2</b-button>
                            <b-button size="sm" variant="outline-primary" @click="setDisabled('demo1')">set disabled</b-button>
                            <b-button size="sm" variant="outline-primary" @click="getValue('slider1')">getValue()</b-button>
                            <b-button size="sm" variant="outline-primary" @click="getIndex('slider1')">getIndex()</b-button>
                        </b-button-group>
                    </div>
                </div>
                <div class="pt-4 px-5 mb-5">
                    <vue-slider ref="slider4" v-bind="demo.demo4" v-model="demo.demo4.value"></vue-slider>
                    <b class="d-block text-center my-3">
                        <small>Value: </small>
                        {{ demo.demo4.value }}
                    </b>
                    <div class="text-center">
                        <b-button-group>
                            <b-button size="sm" variant="outline-primary" @click="setValue('demo4', ['10-02', '10-12'])">set value = ["10-02", "10-12"]</b-button>
                            <b-button size="sm" variant="outline-primary" @click="setIndex('slider4', [3, 10])">set index = [3, 10]</b-button>
                            <b-button size="sm" variant="outline-primary" @click="getValue('slider4')">getValue()</b-button>
                            <b-button size="sm" variant="outline-primary" @click="getIndex('slider4')">getIndex()</b-button>
                        </b-button-group>
                    </div>
                </div>
                <div class="pt-4 px-5 mb-5">
                    <vue-slider ref="slider9" v-bind="demo.demo9" v-model="demo.demo9.value"></vue-slider>
                    <b class="d-block text-center my-3">
                        <small>Value: </small>
                        {{ demo.demo9.value }}
                    </b>
                    <div class="text-center">
                        <b-button-group>
                            <b-button size="sm" variant="outline-primary" @click="setValue('demo9', [0, 30])">set value = [0, 30]</b-button>
                            <b-button size="sm" variant="outline-primary" @click="demo.demo9.fixed = !demo.demo9.fixed">switch fixed</b-button>
                            <b-button size="sm" variant="outline-primary" @click="getValue('slider9')">getValue()</b-button>
                            <b-button size="sm" variant="outline-primary" @click="getIndex('slider9')">getIndex()</b-button>
                        </b-button-group>
                    </div>
                </div>
            </b-col>
            <b-col md="12">
                <div class="pt-4 px-5 mb-5">
                    <vue-slider ref="slider2" v-bind="demo.demo2" v-model="demo.demo2.value"></vue-slider>
                    <b class="d-block text-center my-3">
                        <small>Value: </small>
                        {{ demo.demo2.value }}
                    </b>
                    <div class="text-center">
                        <b-button-group>
                            <b-button size="sm" variant="outline-primary" @click="setValue('demo2', '2016-10-06')">set value = 2016-10-06</b-button>
                            <b-button size="sm" variant="outline-primary" @click="setIndex('slider2', 3)">set index = 3</b-button>
                            <b-button size="sm" variant="outline-primary" @click="getValue('slider2')">getValue()</b-button>
                            <b-button size="sm" variant="outline-primary" @click="getIndex('slider2')">getIndex()</b-button>
                        </b-button-group>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>

    import vueSlider from 'vue-slider-component';

    export default {
        components: {
            vueSlider
        },
        data: () => ({

            demo: {
                default: {
                    value: 0,
                    width: 'auto',
                    height: 6,
                    dotSize: 16,
                    eventType: 'auto',
                    min: 0,
                    max: 100,
                    interval: 1,
                    startAnimation: false,
                    tooltipMerge: true,
                    processDragable: false,
                    minRange: null,
                    maxRange: null,
                    fixed: false,
                    debug: process && process.env && process.env.NODE_ENV !== 'production',
                    disabled: false,
                    show: true,
                    enableCross: true,
                    realTime: false,
                    tooltip: 'always',
                    clickable: true,
                    tooltipDir: 'top',
                    piecewise: false,
                    lazy: false,
                    useKeyboard: true,
                    reverse: false,
                    speed: 0.5,
                    focusStyle: null,
                    bgStyle: null,
                    sliderStyle: null,
                    tooltipStyle: null,
                    processStyle: null,
                    piecewiseStyle: null,
                    disabledStyle: null
                },
                demo1: {
                    value: 1,
                    width: 280,
                    height: 8,
                    dotSize: 20,
                    min: 1,
                    max: 25,
                    interval: 4,
                    disabled: false,
                    show: true,
                    speed: 0.3,
                    reverse: false,
                    lazy: true,
                    tooltip: 'always',
                    piecewise: true
                },
                demo2: {
                    value: '2016-10-01',
                    width: '80%',
                    tooltip: 'always',
                    disabled: false,
                    piecewise: true,
                    piecewiseLabel: true,
                    style: {
                        marginLeft: '10%'
                    },
                    data: [
                        '2016-10-01',
                        '2016-10-02',
                        '2016-10-03',
                        '2016-10-04',
                        '2016-10-05',
                        '2016-10-06',
                        '2016-10-07'
                    ],
                    piecewiseStyle: {
                        backgroundColor: '#f4f5fd',
                        visibility: 'visible',
                        width: '12px',
                        height: '12px'
                    },
                    piecewiseActiveStyle: {
                        backgroundColor: '#4191ff'
                    },
                    labelActiveStyle: {
                        color: '#4191ff'
                    }
                },
                demo3: {
                    value: [0, 100],
                    width: '100%',
                    height: 8,
                    dotSize: 16,
                    min: 0,
                    max: 500,
                    disabled: false,
                    show: true,
                    useKeyboard: true,
                    tooltip: 'always',
                    formatter: '¥{value}',
                    enableCross: false,
                    mergeFormatter: '¥{value1} ~ ¥{value2}',
                    bgStyle: {
                        backgroundColor: '#fff',
                        boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
                    },
                    tooltipStyle: {
                        backgroundColor: '#666',
                        borderColor: '#666'
                    },
                    processStyle: {
                        backgroundColor: '#999'
                    }
                },
                demo4: {
                    value: ['10-01', '10-05'],
                    width: '100%',
                    height: 4,
                    dotSize: 14,
                    min: 1,
                    max: 100,
                    interval: 3,
                    disabled: false,
                    show: true,
                    tooltip: 'always',
                    piecewise: true,
                    data: [
                        '10-01',
                        '10-02',
                        '10-03',
                        '10-04',
                        '10-05',
                        '10-06',
                        '10-07',
                        '10-08',
                        '10-09',
                        '10-10',
                        '10-11',
                        '10-12',
                        '10-13',
                        '10-14',
                        '10-15',
                        '10-16',
                        '10-17',
                        '10-18',
                        '10-19',
                        '10-20'
                    ]
                },
                demo6: {
                    value: [0, 200],
                    width: '100%',
                    height: 8,
                    dotSize: 20,
                    min: 0,
                    max: 200,
                    disabled: false,
                    show: true,
                    tooltip: 'always',
                    tooltipDir: ['bottom', 'top'],
                    piecewise: false,
                    style: {
                        marginBottom: '30px'
                    },
                    bgStyle: {
                        backgroundColor: '#fff',
                        boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
                    },
                    sliderStyle: [{
                        backgroundColor: '#f05b72'
                    }, {
                        backgroundColor: '#4191ff'
                    }],
                    tooltipStyle: [{
                        backgroundColor: '#f05b72',
                        borderColor: '#f05b72'
                    }, {
                        backgroundColor: '#4191ff',
                        borderColor: '#4191ff'
                    }],
                    processStyle: {
                        backgroundImage: '-webkit-linear-gradient(left, #f05b72, #4191ff)'
                    }
                },
                demo7: {
                    width: '100%',
                    show: true,
                    value: [0, 20],
                    min: 0,
                    max: 100,
                    disabled: false,
                    tooltipMerge: false,
                    tooltip: 'always'
                },
                demo8: {
                    width: '100%',
                    show: true,
                    value: 0,
                    min: 0,
                    max: 100,
                    piecewiseLabel: true,
                    tooltip: false
                },
                demo9: {
                    value: [0, 20],
                    min: 0,
                    max: 100,
                    interval: 1,
                    fixed: true,
                    processDragable: true
                },
            },
            diy_tooltip: '',
            diy_label: ''
        }),
        methods: {

            format(value) {
                return value === null ? 'null' : (typeof value === 'string' ? `"${value}"` : value)
            },
            setDisabled(name) {
                let obj = this.demo[name]
                obj.disabled = !obj.disabled
            },
            setTooltip(name) {
                let obj = this.demo[name]
                obj.tooltip = obj.tooltip === 'hover' ? 'always' : 'hover'
            },
            setValue(name, num) {
                let obj = this.demo[name]
                obj.value = num
            },
            setIndex(name, num) {
                let slider = this.$refs[name]
                slider.setIndex(num)
            },
            getValue(name) {
                let slider = this.$refs[name]
                alert(slider.getValue())
            },
            getIndex(name) {
                let slider = this.$refs[name]
                alert(slider.getIndex())
            },
        }
    }

</script>