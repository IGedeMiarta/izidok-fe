<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-3">
          <select
            @change="organChanged"
            v-model="selectedOrgan"
            id="namaOrgan"
            class="form-control"
          >
            <option disabled></option>
            <option :value="null" disabled>Pilih Organ...</option>
            <option
              v-bind:key="organ.id"
              v-for="organ in dataOrgans"
              :value="organ.id"
            >{{ organ.nama +', '+ organ.sub_nama}}</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <input type="text" class="form-control" id="subNamaOrgan" />
        </div>
        <div class="form-group col-md-2" style="text-align:left">
          <span @click="penColor('blue')" class="dot" style="background-color: blue;"></span>
          <span @click="penColor('red')" class="dot" style="background-color: red;"></span>
          <span @click="penColor('#54c756')" class="dot" style="background-color: #54c756;"></span>
          <span @click="penColor('#555')" class="dot" style="background-color: #555;"></span>
          <span @click="penColor('orange')" class="dot" style="background-color: orange;"></span>
        </div>
        <div class="form-group col-md-2">
          <b-button v-on:click="isHidden = false" variant="success" size="sm" class="m-1">Pen</b-button>
          <b-button v-on:click="isHidden = true" variant="danger" size="sm" class="m-1">Text</b-button>
        </div>
      </div>
    </form>
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
          <!-- <b-button id="saveImage" @click="toDataUrl" variant="primary" size="sm" class="m-1">Save</b-button> -->
          <!-- <b-button @click="drawBackground('ini url')" variant="primary" size="sm" class="m-1">Image</b-button> -->
        </div>
      </div>
      <div v-show="isHidden" class="col-md-4">
        <div id="img_organ"></div>
      </div>
      <div v-show="isHidden" class="col-md-8">
        <Editor id="editor" v-on:update-content="updateContent" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import Editor from "./Editor";

export default {
  name: "Pemeriksaan",
  components: {
    Editor
  },
  data() {
    return {
      isHidden: false,
      drawing: false,
      mousePos: { x: 0, y: 0 },
      lastPos: { x: 0, y: 0 },
      ctx: null,
      selectedOrgan: null
    };
  },
  computed: {
    canvas: function() {
      return this.$refs.canvas;
    },
    ...mapGetters(["dataOrgans"])
  },
  methods: {
    ...mapActions(["updateNotePemeriksaan"]),
    updateContent(content) {
      this.updateNotePemeriksaan(content);
    },
    toDataUrl() {
      var dataURL = this.canvas.toDataURL("image/png");
      console.log(dataURL);
      alert("Check your console to get downloaded image...");
    },
    organChanged() {
      let self = this;

      let organ_id = self.selectedOrgan;

      axios
        .get("http://localhost:9000/api/v1/organ/" + organ_id, {
          headers: {
            Authorization:
              "Bearer RnkySmZJRUg5bHYzODNpS1d1UnV4ajJ0ZFpGSVhrVlVUTVNzY0N1Qg==",
            "Content-Type": "application/json"
          }
        })
        .then(function(response) {
          let res = response.data.data;
          self.clear();
          self.drawBackground(res.gambar);
        })
        .catch(err => console.log(err));
    },
    drawBackground(image_url) {
      let self = this;
      var canvas = document.getElementById("note-canvas"),
        ctx = canvas.getContext("2d"),
        img_organ = document.getElementById("img_organ");

      let backgroundURL = image_url;

      var background = new Image();
      background.crossOrigin = "Anonymous";
      background.src = backgroundURL;

      //remove existing image
      if (img_organ.hasChildNodes()) {
        img_organ.innerHTML = '';
      }

      background.onload = function() {
        if (self.isHidden) {
          img_organ.appendChild(background);
        } else {
          ctx.drawImage(background, 0, 0);
        }
      };
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
    penColor(color) {
      var canvas = document.getElementById("note-canvas"),
        ctx = canvas.getContext("2d");
      ctx.strokeStyle = color;
    }
  },
  mounted() {
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "#222222";

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
}

#note-canvas {
  touch-action: none;
  /* position: absolute; */
  /* display: none; */
}

#editor {
  /* display: none; */
}

.dot {
  margin-right: 5px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}
</style>