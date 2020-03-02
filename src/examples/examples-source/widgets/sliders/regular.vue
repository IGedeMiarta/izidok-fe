<template>
    <div class="py-3">

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
                    direction: 'horizontal',
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
                        backgroundColor: '#ccc',
                        visibility: 'visible',
                        width: '12px',
                        height: '12px'
                    },
                    piecewiseActiveStyle: {
                        backgroundColor: '#3498db'
                    },
                    labelActiveStyle: {
                        color: '#3498db'
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
                demo5: {
                    value: 0,
                    width: 4,
                    height: 300,
                    dotSize: 22,
                    eventType: 'auto',
                    min: 0,
                    max: 100,
                    interval: 1,
                    disabled: false,
                    show: true,
                    tooltip: 'always',
                    piecewise: false,
                    style: {
                        display: 'inline-block',
                        marginLeft: '30px'
                    },
                    class: 'star-slider',
                    direction: 'vertical',
                    speed: 0.5,
                    processStyle: {
                        backgroundColor: '#fff'
                    }
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
                        backgroundColor: '#3498db'
                    }],
                    tooltipStyle: [{
                        backgroundColor: '#f05b72',
                        borderColor: '#f05b72'
                    }, {
                        backgroundColor: '#3498db',
                        borderColor: '#3498db'
                    }],
                    processStyle: {
                        backgroundImage: '-webkit-linear-gradient(left, #f05b72, #3498db)'
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
            dragStart() {
                this.demo.demo5.speed = 0
            },
            dragEnd() {
                this.demo.demo5.speed = 0.5
            },

        }
    }
</script>