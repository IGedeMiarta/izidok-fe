<template>
    <div>
        <small class="d-block mb-3">
            <p>First marker is placed at <b>{{ withPopup.lat }}</b>, <b>{{ withPopup.lng }}</b></p>
            <p>Center is at <b>{{ currentCenter }}</b> and the zoom is: <b>{{ currentZoom }}</b></p>
            <b-button variant="primary" size="sm" @click="showLongText">Toggle long popup</b-button>
        </small>
        <div class="mt-5">
            <div style="height: 500px; width: 100%; position: relative; z-index: 5;">
                <l-map
                        :zoom="zoom"
                        :center="center"
                        :options="mapOptions"
                        @update:center="centerUpdate"
                        @update:zoom="zoomUpdate"
                >
                    <l-tile-layer :url="url" :attribution="attribution" />
                    <l-marker :lat-lng="withPopup">
                        <l-popup>
                            <div @click="innerClick">
                                I am a popup
                                <p v-show="showParagraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                                    Donec finibus semper metus id malesuada.
                                </p>
                            </div>
                        </l-popup>
                    </l-marker>
                    <l-marker :lat-lng="withTooltip">
                        <l-tooltip :options="{ permanent: true, interactive: true }">
                            <div @click="innerClick">
                                I am a tooltip
                                <p v-show="showParagraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                                    Donec finibus semper metus id malesuada.
                                </p>
                            </div>
                        </l-tooltip>
                    </l-marker>
                </l-map>
            </div>
        </div>
    </div>
</template>

<script>
    import { latLng } from "leaflet";
    import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

    export default {
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup,
            LTooltip

        },
        data() {
            return {
                zoom: 13,
                center: latLng(47.41322, -1.219482),
                url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                withPopup: latLng(47.41322, -1.219482),
                withTooltip: latLng(47.41422, -1.250482),
                currentZoom: 11.5,
                currentCenter: latLng(47.41322, -1.219482),
                showParagraph: false,
                mapOptions: {
                    zoomSnap: 0.5
                }
            };
        },
        methods: {
            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
            },
            showLongText() {
                this.showParagraph = !this.showParagraph;
            },
            innerClick() {
                alert("Click!");
            }
        }
    }
</script>