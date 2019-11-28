<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-3">
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
        <div class="form-group col-md-4">
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
        <div class="form-group col-md-2" style="text-align:left">
          <span @click="penColor('blue')" class="dot" style="background-color: blue;"></span>
          <span @click="penColor('red')" class="dot" style="background-color: red;"></span>
          <span @click="penColor('#54c756')" class="dot" style="background-color: #54c756;"></span>
          <span @click="penColor('#555')" class="dot" style="background-color: #555;"></span>
          <span @click="penColor('orange')" class="dot" style="background-color: orange;"></span>
        </div>
        <div class="form-group col-md-2">
          <b-button v-on:click="isHidden = false;updatePostData({key:'diagnosa_is_draw', value: true});" variant="success" size="sm" class="m-1">Pen</b-button>
          <b-button v-on:click="isHidden = true;updatePostData({key:'diagnosa_is_draw', value: false});" variant="danger" size="sm" class="m-1">Text</b-button>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col-md-2">
        <label>Catatan :</label>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" v-show="!isHidden">
        <canvas
          id="note-canvas"
          ref="canvas"
          @mousedown="handleMousedown"
          @mouseup="handleMouseup"
          @mousemove="handleMousemove"
          @touchstart="handleTouchstart"
          @touchend="handleTouchend"
          @touchmove="handleTouchmove"
          width="700"
          height="500"
        >Your browser does not support the HTML 5 Canvas.</canvas>
        <div class="col-md-4">
          <b-button @click="clear" variant="primary" size="sm" class="m-1">Clear</b-button>
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
      kodePenyakit: []
    };
  },
  watch: {
    selectedKodePenyakit: function() {
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
    handleMousedown(event) {
      this.drawing = true;
      this.lastPos = this.getMousePos(event);
    },
    handleMouseup(event) {
      this.drawing = false;
    },
    handleMousemove(event) {
      this.mousePos = this.getMousePos(event);
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
    renderCanvas() {
      if (this.drawing) {
        this.ctx.moveTo(this.lastPos.x, this.lastPos.y);
        this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
        this.ctx.stroke();
        this.lastPos = this.mousePos;
      }
    },
    drawLoop() {
      window.requestAnimFrame(this.drawLoop);
      this.renderCanvas();
    },
    clear() {
      this.canvas.width = this.canvas.width;
    },
    limitText(count) {
      return `and ${count} other kode penyakit`;
    },
    asyncFind(query) {
      let self = this;
      this.isLoading = true;

      axios
        .get(store.state.URL_API + "/kode_penyakit/name/" + query, {
          headers: {
            Authorization: "Bearer " + store.state.BEARER_TOKEN,
            "Content-Type": "application/json"
          }
        })
        .then(function(response) {
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
        .catch(err => console.log(err));
    },
    clearAll() {
      this.selectedKodePenyakit = [];
    },
    penColor(color) {
      this.ctx.strokeStyle = color;
    }
  },
  mounted() {
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "#222222";
    this.ctx.lineWith = 2;

    //append data canvas to vuex global state
    this.updateCanvas({ key: "DIAGNOSA", value: this.canvas });
    this.updatePostData({key:'diagnosa_is_draw', value: true});

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

    this.drawLoop();

    // Prevent scrolling when touching the canvas
    document.body.addEventListener(
      "touchstart",
      function(e) {
        if (e.target == document.getElementById("note-canvas")) {
          e.preventDefault();
        }
      },
      false
    );
    document.body.addEventListener(
      "touchend",
      function(e) {
        if (e.target == document.getElementById("note-canvas")) {
          e.preventDefault();
        }
      },
      false
    );
    document.body.addEventListener(
      "touchmove",
      function(e) {
        if (e.target == document.getElementById("note-canvas")) {
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
  border: 1px solid rgb(212, 212, 212);
  cursor: crosshair;
  /* width: 100%; */
}

#note-canvas {
  touch-action: none;
  /* position: relative; */
}

.dot {
  margin-right: 5px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>