<template>
    <google-map :center="center" :zoom="7" style="width: 100%; height: 500px">
        <google-marker v-for="m in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></google-marker>
    </google-map>
</template>

<script>
    import Vue from 'vue'
    import * as VueGoogleMaps from 'vue2-google-maps'

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc'
        },
        // Demonstrating how we can customize the name of the components
        installComponents: false,
    });

    export default {
        components: {
            'google-map': VueGoogleMaps.Map,
            'google-marker': VueGoogleMaps.Marker
        },
        data: () => ({
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 3,
            center2: [47.413220, -1.219482],
            bounds: null,

            center: {
                lat: 4.0,
                lng: 4.0
            },
            markers: [{
                position: {
                    lat: 3.0,
                    lng: 3.0
                }
            }, {
                position: {
                    lat: 18.0,
                    lng: 18.0
                }
            }]
        }),
    }
</script>