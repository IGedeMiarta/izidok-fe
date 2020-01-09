<template>
  <div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
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
              updatePostData({key:'pemeriksaan_penunjang_is_draw', value: true});
              isActive = 'pen'"
            :class="{ active: isActive === 'pen' }"
          />
          <font-awesome-icon
            icon="keyboard"
            class="font-size-xl m-2 grow icon"
            v-on:click="isHidden = true;
              updatePostData({key:'pemeriksaan_penunjang_is_draw', value: false});
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
      <div class="col-md-6">
        <label>Deskripsi :</label>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" v-show="!isHidden">
        <canvas
          id="pemeriksaan_penunjang-canvas"
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
    <br />
    <div class="row">
      <div class="col-md-6">
        <label>* Unggah Hasil Pemeriksaan Penunjang (maks. 3 file)</label>
      </div>
    </div>
    <div id="upload-box" class="row justify-content-md-center">
      <b-button variant="dark">
        <span class="btn-wrapper--icon">
          <font-awesome-icon icon="camera" />
        </span>
        <span class="btn-wrapper--label">Dari Kamera</span>
      </b-button>
      <div class="col-md-auto">Atau</div>
      <b-button variant="dark" @click="$refs.fileInput.click()">
        <span class="btn-wrapper--icon">
          <font-awesome-icon icon="folder" />
        </span>
        <span class="btn-wrapper--label">Cari File</span>
      </b-button>
      <input
        type="file"
        @change="onFileSelected"
        style="display:none"
        ref="fileInput"
        multiple="multiple"
      />
    </div>
    <div class="row">
      <div class="col-md-6">
        <label style="font-style:italic">Format yang digunakan: JPEG, JPG, PNG, PDF</label>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-6">
        <label>Hasil Pemeriksaan Penunjang</label>
      </div>
    </div>
    <div v-for="item in selectedFiles" :key="item.name" class="row file-upload">
      <div class="col-md-4">
        <label>{{item.name}}</label>
      </div>
      <div class="col-md-2">
        <label>{{item.size / 1000}} KB</label>
      </div>
      <div class="col-md-3">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 50%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="row d-flex justify-content-end mr-2">
          <font-awesome-icon
            icon="download"
            class="font-size-xl grow icon"
            style="margin-right:20px"
          />
          <font-awesome-icon icon="eye" class="font-size-xl grow icon" style="margin-right:20px" />
          <font-awesome-icon icon="trash" class="font-size-xl grow icon" />
        </div>
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
      isPen: true,
      isActive: "pen",
      isColorActive: "black",
      penWidth: 2,
      selectedFiles: []
    };
  },
  computed: {
    canvas() {
      return this.$refs.canvas;
    }
  },
  methods: {
    ...mapActions(["updatePostData", "updateCanvas"]),
    updateContent(content) {
      this.updatePostData({
        key: "pemeriksaan_penunjang_text",
        value: content
      });
    },

    onFileSelected(event) {
      this.selectedFiles = event.target.files;

      if (!this.selectedFiles.length > 0) {
        return;
      }

      const formData = new FormData();

      for (var i = 0; i < this.selectedFiles.length; i++) {
        let file = this.selectedFiles[i];
        console.log(file);
        formData.append("files[" + i + "]", file, file.name);
      }

      axios
        .post("http://localhost:9001/api/v1/test-upload", formData, {
          onUploadProgress: uploadEvent => {
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100)
            );
          }
        })
        .then(res => {
          console.log(res);
        });
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
    getTouchPos(touchEvent) {
      const rect = this.canvas.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
      };
    },
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
    this.updateCanvas({ key: "PEMERIKSAAN_PENUNJANG", value: this.canvas });
    this.updatePostData({ key: "pemeriksaan_penunjang_is_draw", value: true });

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
        if (
          e.target == document.getElementById("pemeriksaan_penunjang-canvas")
        ) {
          e.preventDefault();
        }
      },
      false
    );
    document.body.addEventListener(
      "touchend",
      function(e) {
        if (
          e.target == document.getElementById("pemeriksaan_penunjang-canvas")
        ) {
          e.preventDefault();
        }
      },
      false
    );
    document.body.addEventListener(
      "touchmove",
      function(e) {
        if (
          e.target == document.getElementById("pemeriksaan_penunjang-canvas")
        ) {
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
  border-radius: 20px;
  cursor: crosshair;
  /* width: 100%; */
}

#pemeriksaan_penunjang-canvas {
  touch-action: none;
  /* position: relative; */
}

#upload-box {
  padding: 25px;
  border: 1px solid rgb(212, 212, 212);
  border-style: dashed;
  margin: 10px;
}

.file-upload {
  padding: 25px;
  border: 1px solid rgb(212, 212, 212);
  background-color: rgb(250, 249, 245);
  margin: 10px;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>