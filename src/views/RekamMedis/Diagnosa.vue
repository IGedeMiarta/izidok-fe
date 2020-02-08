<template>
  <div>
    <div class="row">
      <div class="col-md-4" @click="asyncFind('')">
        <multiselect
          v-model="selectedKodePenyakit"
          :options="kodePenyakit"
          placeholder="Pilih Kode Diagnosis*"
          label="kode"
          track-by="kode"
          open-direction="bottom"
          :multiple="true"
          :loading="isLoading"
          :clear-on-select="false"
          :close-on-select="false"
          :options-limit="10"
          :hide-selected="true"
          @search-change="asyncFind"
        ></multiselect>
      </div>
      <div class="col-md-4" @click="asyncFind('')">
        <multiselect
          v-model="selectedKodePenyakit"
          :options="kodePenyakit"
          :multiple="true"
          placeholder="Pilih Diagnosis*"
          label="description"
          track-by="description"
          :loading="isLoading"
          :hide-selected="true"
          :options-limit="10"
          :limit="3"
          open-direction="bottom"
          :limit-text="limitText"
          @search-change="asyncFind"
        ></multiselect>
      </div>
      <div class="col-md-4">
        <div class="row d-flex justify-content-end mr-2">
          <font-awesome-icon
            icon="eraser"
            class="font-size-xl m-2 grow icon"
            v-on:click="isPen = false; 
              isActive = 'eraser'"
            v-show="!isHidden"
            :class="{ active: isActive === 'eraser' }"
          />
          <font-awesome-icon
            icon="pen-alt"
            class="font-size-xl m-2 grow icon"
            v-on:click="isHidden = false;
              isPen = true;
              updatePostData({key:'diagnosa_is_draw', value: true});
              isActive = 'pen'"
            :class="{ active: isActive === 'pen' }"
          />
          <font-awesome-icon
            icon="keyboard"
            class="font-size-xl m-2 grow icon"
            v-on:click="isHidden = true;
              updatePostData({key:'diagnosa_is_draw', value: false});
              isActive = 'keyboard'"
            :class="{ active: isActive === 'keyboard' }"
          />
        </div>
        <div class="row d-flex justify-content-end mr-2">
          <div>
            <input type="range" class="custom-range" min="1" max="50" v-model.number="penWidth" />
          </div>
        </div>
        <div class="row d-flex justify-content-end mr-2">
          <div>
            <span
              @click="penColor('blue');isColorActive = 'blue'"
              class="dot grow"
              style="background-color: blue;"
              :class="{ color_active: isColorActive === 'blue' }"
            ></span>
            <span
              @click="penColor('red');isColorActive = 'red'"
              class="dot grow"
              style="background-color: red;"
              :class="{ color_active: isColorActive === 'red' }"
            ></span>
            <span
              @click="penColor('#54c756');isColorActive = 'green'"
              class="dot grow"
              style="background-color: #54c756;"
              :class="{ color_active: isColorActive === 'green' }"
            ></span>
            <span
              @click="penColor('#555');isColorActive = 'black'"
              class="dot grow"
              style="background-color: #555;"
              :class="{ color_active: isColorActive === 'black' }"
            ></span>
            <span
              @click="penColor('orange');isColorActive = 'yellow'"
              class="dot grow"
              style="background-color: orange;"
              :class="{ color_active: isColorActive === 'yellow' }"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <label>Catatan :</label>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" v-show="!isHidden">
        <canvas
          id="diagnosa-canvas"
          ref="canvas"
          @mousedown="handleMousedown"
          @mouseup="handleMouseup"
          @mousemove="handleMousemove"
          @touchstart="handleTouchstart"
          @touchend="handleTouchend"
          @touchmove="handleTouchmove"
          width="1000"
          height="500"
        >Your browser does not support the HTML 5 Canvas.</canvas>
        <div class="col-md-4">
          <b-button @click="clear" variant="warning" size="sm" class="m-1">Clear</b-button>
        </div>
      </div>
      <div class="col-md-12" v-show="isHidden">
        <label></label>
        <Editor v-on:update-content="updateContent" />
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import axios from "axios";
import store from "@/store/";
import { mapGetters, mapActions } from "vuex";
import Editor from "./Editor";

export default {
  components: {
    Multiselect,
    Editor
  },
  data() {
    return {
      isHidden: false,
      drawing: false,
      mousePos: { x: 0, y: 0 },
      lastPos: { x: 0, y: 0 },
      ctx: null,
      isLoading: false,
      selectedKodePenyakit: [],
      kodePenyakit: [],
      isPen: true,
      isActive: "pen",
      isColorActive: "black",
      penWidth: 2
    };
  },
  watch: {
    selectedKodePenyakit: function() {
      document.getElementById("box_diagnosa").style.setProperty('border-color', '');
      this.updatePostData({
        key: "kode_penyakit",
        value: this.selectedKodePenyakit
      });
    }
  },
  computed: {
    canvas() {
      return this.$refs.canvas;
    }
  },
  methods: {
    ...mapActions(["updatePostData", "updateCanvas"]),
    updateContent(content) {
      this.updatePostData({ key: "diagnosa_text", value: content });
    },
     handleMousedown(e) {
      this.lastPos = this.getMousePos(e);
      this.ctx.lineWidth = this.penWidth;
      this.drawing = true;
    },
    handleMouseup(e) {
      this.drawing = false;
    },
    handleMousemove(e) {
      this.mousePos = this.getMousePos(e);
      if (this.drawing) {
        this.ctx.beginPath();
        if (this.isPen) {
          this.ctx.globalCompositeOperation = "source-over";
          this.ctx.moveTo(this.lastPos.x, this.lastPos.y);
          this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
          this.ctx.stroke();
        } else {
          this.ctx.globalCompositeOperation = "destination-out";
          this.ctx.arc(
            this.mousePos.x,
            this.mousePos.y,
            this.penWidth,
            0,
            Math.PI * 2,
            false
          );
          this.ctx.fill();
        }
        this.lastPos = this.mousePos;
      }
    },
    handleTouchstart(event) {
      this.mousePos = this.getTouchPos(event);
      let touch = event.touches[0];
      let mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    },
    handleTouchend(event) {
      let mouseEvent = new MouseEvent("mouseup", {});
      this.canvas.dispatchEvent(mouseEvent);
    },
    handleTouchmove(event) {
      let touch = event.touches[0];
      let mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    },
    getMousePos(mouseEvent) {
      const rect = this.canvas.getBoundingClientRect();
      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
      };
    },
    // Get the position of a touch relative to the canvas
    getTouchPos(touchEvent) {
      const rect = this.canvas.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
      };
    },
    limitText(count) {
      return `and ${count} other kode penyakit`;
    },
    asyncFind(query) {
      let self = this;
      this.isLoading = true;

      axios
        .get(store.state.URL_API + "/kode_penyakit/name?query=" + query)
        .then(response => {
          let res = response.data;

          if (!res.status) {
            self.isLoading = false;
            return;
          }

          let kode_penyakit = res.data.kode_penyakit;

          if (kode_penyakit) {
            self.kodePenyakit = kode_penyakit;
          }

          self.isLoading = false;
        })
        .catch(err => {
          self.isLoading = false;
          console.log(err);
          });
    },
    // clearAll() {
    //   this.selectedKodePenyakit = [];
    // },
    penColor(color) {
      this.ctx.strokeStyle = color;
    },
    clear() {
      this.canvas.width = this.canvas.width;
    }
  },
  mounted() {
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "#222222";
    this.ctx.lineWidth = this.penWidth;
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";

    //append data canvas to vuex global state
    this.updateCanvas({ key: "DIAGNOSA", value: this.canvas });
    this.updatePostData({ key: "diagnosa_is_draw", value: true });

    // Get a regular interval for drawing to the screen
    window.requestAnimFrame = (function(callback) {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimaitonFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
    // Prevent scrolling when touching the canvas
    document.body.addEventListener(
      "touchstart",
      function(e) {
        if (e.target == document.getElementById("diagnosa-canvas")) {
          e.preventDefault();
        }
      },
      false
    );
    document.body.addEventListener(
      "touchend",
      function(e) {
        if (e.target == document.getElementById("diagnosa-canvas")) {
          e.preventDefault();
        }
      },
      false
    );
    document.body.addEventListener(
      "touchmove",
      function(e) {
        if (e.target == document.getElementById("diagnosa-canvas")) {
          e.preventDefault();
        }
      },
      false
    );
  }
};
</script>

<style scoped>
canvas {
  /* border: 1px solid rgb(212, 212, 212); */
  cursor: crosshair;
  /* width: 100%; */
}

#diagnosa-canvas {
  touch-action: none;
  /* position: relative; */
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>