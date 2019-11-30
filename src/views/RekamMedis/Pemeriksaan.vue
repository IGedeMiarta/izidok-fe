<template>
  <div>
    <form>
      <div class="form-row">
        <div class="col-md-3">
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
              v-for="organ in organs"
              :value="organ.id"
            >{{ organ.nama +', '+ organ.sub_nama}}</option>
          </select>
        </div>
        <div class="col-md-3">
          <input type="text" class="form-control" id="subNamaOrgan" />
        </div>
        <div
          class="col-md-6 d-flex align-items-center justify-content-start mt-4 mt-xl-0 justify-content-xl-end"
        >
          <div>
            <font-awesome-icon
              icon="pen-alt"
              class="font-size-xl m-2"
              v-on:click="isHidden = false;
              updatePostData({key:'pemeriksaan_is_draw', value: true});
              drawBackground(image_url);"
            />
            <font-awesome-icon
              icon="keyboard"
              class="font-size-xl m-2"
              v-on:click="isHidden = true;
              updatePostData({key:'pemeriksaan_is_draw', value: false});
              drawBackground(image_url);"
            />
          </div>
        </div>
        <div
          class="col-md-12 d-flex align-items-center justify-content-start mt-4 mt-xl-0 justify-content-xl-end"
        >
          <div>
            <span @click="penColor('blue')" class="dot" style="background-color: blue;"></span>
            <span @click="penColor('red')" class="dot" style="background-color: red;"></span>
            <span @click="penColor('#54c756')" class="dot" style="background-color: #54c756;"></span>
            <span @click="penColor('#555')" class="dot" style="background-color: #555;"></span>
            <span @click="penColor('orange')" class="dot" style="background-color: orange;"></span>
          </div>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col-md-12" v-show="!isHidden">
        <canvas
          id="pemeriksaan-canvas"
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
          <b-button @click="clear" variant="primary" size="sm" class="m-1">Clear</b-button>
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
import store from "@/store/";
import { mapGetters, mapActions } from "vuex";
import Editor from "./Editor";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPenAlt, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPenAlt, faKeyboard);

export default {
  name: "Pemeriksaan",
  components: {
    Editor,
    "font-awesome-icon": FontAwesomeIcon
  },
  data() {
    return {
      isHidden: false,
      drawing: false,
      mousePos: { x: 0, y: 0 },
      lastPos: { x: 0, y: 0 },
      ctx: null,
      selectedOrgan: null,
      image_url: null
    };
  },
  computed: {
    ...mapGetters(["organs"]),
    canvas: function() {
      return this.$refs.canvas;
    }
  },
  watch: {
    selectedOrgan: function() {
      this.updatePostData({ key: "organ_id", value: this.selectedOrgan });
    }
  },
  methods: {
    ...mapActions(["updatePostData", "updateCanvas"]),
    updateContent(content) {
      this.updatePostData({ key: "pemeriksaan_text", value: content });
    },
    organChanged() {
      let self = this;

      let organ_id = self.selectedOrgan;

      axios
        .get(store.state.URL_API + "/organ/" + organ_id, {
          headers: {
            Authorization: "Bearer " + store.state.BEARER_TOKEN,
            "Content-Type": "application/json"
          }
        })
        .then(function(response) {
          let res = response.data.data;
          self.image_url = res.gambar;
          self.clear();
          self.drawBackground(self.image_url);
        })
        .catch(err => console.log(err));
    },
    drawBackground(image_url) {
      let self = this;
      var canvas = document.getElementById("pemeriksaan-canvas"),
        ctx = canvas.getContext("2d"),
        img_organ = document.getElementById("img_organ");

      let backgroundURL = image_url;

      var background = new Image();
      background.crossOrigin = "Anonymous";
      background.src = backgroundURL;

      //remove existing image
      if (img_organ.hasChildNodes()) {
        img_organ.innerHTML = "";
      }

      background.onload = function() {
        if (self.isHidden) {
          img_organ.appendChild(background);
        } else {
          var width = background.width,
            height = background.height;

          if (width > 700) {
            width = 0.5 * width;
            height = 0.5 * height;
          }

          ctx.drawImage(background, 0, 0, width, height);
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
      var canvas = document.getElementById("pemeriksaan-canvas"),
        ctx = canvas.getContext("2d");
      ctx.strokeStyle = color;
    }
  },
  mounted() {
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "#222222";

    //append data canvas to vuex global state
    this.updateCanvas({ key: "PEMERIKSAAN", value: this.canvas });
    this.updatePostData({ key: "pemeriksaan_is_draw", value: true });

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
        if (e.target == document.getElementById("pemeriksaan-canvas")) {
          e.preventDefault();
        }
      },
      false
    );
    document.body.addEventListener(
      "touchend",
      function(e) {
        if (e.target == document.getElementById("pemeriksaan-canvas")) {
          e.preventDefault();
        }
      },
      false
    );
    document.body.addEventListener(
      "touchmove",
      function(e) {
        if (e.target == document.getElementById("pemeriksaan-canvas")) {
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
}

#pemeriksaan-canvas {
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