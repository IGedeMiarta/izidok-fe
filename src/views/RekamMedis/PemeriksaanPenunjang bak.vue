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
            :class="{ active_tool: isActive === 'eraser' }"
          />
          <font-awesome-icon
            icon="pen-alt"
            class="font-size-xl m-2 grow icon"
            v-on:click="isHidden = false;
              isPen = true;
              updatePostData({key:'pemeriksaan_penunjang_is_draw', value: true});
              isActive = 'pen'"
            :class="{ active_tool: isActive === 'pen' }"
          />
          <font-awesome-icon
            icon="keyboard"
            class="font-size-xl m-2 grow icon"
            v-on:click="isHidden = true;
              updatePostData({key:'pemeriksaan_penunjang_is_draw', value: false});
              isActive = 'keyboard'"
            :class="{ active_tool: isActive === 'keyboard' }"
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
      <b-button variant="dark" @click="$refs.cameraInput.click()">
        <span class="btn-wrapper--icon">
          <font-awesome-icon icon="camera" />
        </span>
        <span class="btn-wrapper--label">Dari Kamera</span>
      </b-button>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        style="display:none"
        ref="cameraInput"
        @change="onImageCaptured"
      />
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
    <div class="row" v-if="selectedFiles.length > 0">
      <div class="col-md-6">
        <label>Hasil Pemeriksaan Penunjang</label>
      </div>
    </div>
    <div v-for="(item, index) in selectedFiles" :key="item.name" class="row file-upload">
      <div class="col-md-4">
        <label>{{item.name}}</label>
      </div>
      <div class="col-md-2">
        <label>{{item.size / 1000}} KB</label>
      </div>
      <div class="col-md-3">
        <!-- <b-progress :value="fileProgress[item.name]" :max="100" :label="`${fileProgress[item.name]}%`" show-value animated></b-progress> -->
        <b-progress :max="100">
          <b-progress-bar
            :value="fileProgress[item.name]"
            :label="`${Math.round(fileProgress[item.name])}%`"
          ></b-progress-bar>
        </b-progress>
      </div>
      <div class="col-md-3">
        <div class="row d-flex justify-content-end mr-2">
          <font-awesome-icon
            icon="download"
            class="font-size-xl grow icon"
            style="margin-right:20px"
            @click="downloadFile(item)"
          />
          <font-awesome-icon
            icon="eye"
            class="font-size-xl grow icon"
            style="margin-right:20px"
            @click="readFile(item)"
          />
          <font-awesome-icon
            icon="trash"
            class="font-size-xl grow icon"
            @click="removeFile(item, index)"
          />
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
import { ImageCompressor, getImageSize } from "compressor-img";

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
      selectedFiles: [],
      fileProgress: [],
      promises: [],
      uploadedFiles: [],
      compressedIndex: 0
      // progress: null
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

    //check is last item on loop
    isLastItem(index) {
      if (index === this.selectedFiles.length - 1) {
        return true;
      }
      return false;
    },
    //convert b64 to blob
    b64toBlob(b64Data, contentType, sliceSize) {
      contentType = contentType || "";
      sliceSize = sliceSize || 512;

      var byteCharacters = atob(b64Data);
      var byteArrays = [];

      for (
        var offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
      }

      var blob = new Blob(byteArrays, { type: contentType });
      return blob;
    },
    //check image files or not
    isFileImage(file) {
      const acceptedImageTypes = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/jpg"
      ];
      return file && acceptedImageTypes.includes(file["type"]);
    },
    //prepare formData
    async prepareUpload(filename, file, index) {
      let formData = new FormData();
      formData.append(filename, file);

      this.promises.push(
        axios.post("http://localhost:9001/api/v1/test-upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: progressEvent => {
            let progress = (progressEvent.loaded * 100) / progressEvent.total;
            this.$set(this.fileProgress, filename, progress);
          }
        })
      );

      if (this.isLastItem(index)) {
        const uploads = await Promise.all(this.promises)
          .then(values => {
            values.map(item => {
              console.log(item);
              if (!item.data.status) {
                return this.$swal({
                  type: "error",
                  title: "Oops...",
                  text: item.data.message
                }).then(() => {
                  this.removeFile(file, index);
                });
              }

              this.uploadedFiles.push(item.data);
            });

            this.updatePostData({
              key: "pemeriksaan_penunjang",
              value: this.uploadedFiles
            });

            return values;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    //compress if file images
    compressImage(file, index) {
      if (this.isFileImage(file)) {
        let reader = new FileReader();
        reader.onloadend = () => {
          let imageCompressor = new ImageCompressor({
            onSuccess: response => {
              let ImageURL = response.compressed;
              let block = ImageURL.split(";");
              let contentType = block[0].split(":")[1];
              let realData = block[1].split(",")[1];
              let blob = this.b64toBlob(realData, contentType);
              this.prepareUpload(file.name, blob, index);
            },
            scale: 70,
            quality: 70,
            originalImage: reader.result
          });
        };
        reader.readAsDataURL(file);
      } else {
        this.prepareUpload(file.name, file);
      }
    },
    //on file selected handler
    onFileSelected(event) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.selectedFiles.push(event.target.files[i]);
      }

      if (!this.selectedFiles.length > 0) {
        return;
      }

      Object.values(this.selectedFiles).forEach((file, index) => {
        this.compressImage(file, index);
      });
    },
    //camera handler
    onImageCaptured(event) {
      //handle image from camera or from disk here...
    },
    //download selected file
    downloadFile(file) {
      const data = window.URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = data;
      link.download = file.name;
      link.click();
      setTimeout(function() {
        window.URL.revokeObjectURL(data);
      }, 100);
    },
    //view selected file
    readFile(file) {
      const data = window.URL.createObjectURL(file);
      window.open(data);
    },
    removeFile(file, index) {
      this.selectedFiles.splice(index, 1);
      let filename = file.name;
      filename = filename.split(" ").join("_");
      filename = filename.split(".").join("_");

      let removeIndex = this.uploadedFiles
        .map(item => {
          return item.name;
        })
        .indexOf(filename);

      this.uploadedFiles.splice(removeIndex, 1);

      this.updatePostData({
        key: "pemeriksaan_penunjang",
        value: this.uploadedFiles
      });

      // console.log(this.selectedFiles);
      // console.log(this.uploadedFiles);
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