<template>
  <div>
    <div class="row">
      <div class="col-md-6" @click="asyncFind('')">
        <multiselect
          v-model="selectedOrgan"
          :options="organs"
          placeholder="Pilih Organ*"
          label="nama"
          track-by="nama"
          open-direction="bottom"
          :multiple="false"
          :loading="isLoading"
          :clear-on-select="true"
          :close-on-select="true"
          :options-limit="10"
          :hide-selected="true"
          @search-change="asyncFind"
        ></multiselect>
      </div>
      <div class="col-md-4 offset-md-2">
        <div class="row d-flex justify-content-end mr-2">
          <font-awesome-icon
            icon="eraser"
            class="font-size-xl m-2 grow icon"
            v-on:click="isPen = false; 
              isActive = 'eraser'"
            v-show="!isHidden"
            :class="{ active: isActive === 'eraser' }"
          />
          <!-- <font-awesome-icon
            icon="pen-alt"
            class="font-size-xl m-2 grow icon"
            v-on:click="isHidden = false;
              isPen = true;
              updatePostData({key:'pemeriksaan_is_draw', value: true});
              isActive = 'pen';
              organChanged()"
            :class="{ active: isActive === 'pen' }"
          /> -->
          <!-- <font-awesome-icon
            icon="keyboard"
            class="font-size-xl m-2 grow icon"
            v-on:click="isHidden = false;
              updatePostData({key:'pemeriksaan_is_draw', value: true});
              isActive = 'keyboard';
              organChanged()"
            :class="{ active: isActive === 'keyboard' }"
          /> -->
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
      <div v-show="isActive == 'keyboard'" class="col-md-12">
        <Editor id="editor" v-on:update-content="updateContent" />
      </div>
      <div class="col-md-4">
        <b-button @click="clear" variant="warning" size="sm" class="m-1">Clear</b-button>
      </div>
    </div>
    <div class="row">
      <div v-show="isHidden" class="col-md-12">
        <div id="img_organ"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store/";
import { mapGetters, mapActions } from "vuex";
import Editor from "./Editor";
import Multiselect from "vue-multiselect";

// comment regarding canvas functionality can be find on Anamnesa.vue

export default {
  name: "Pemeriksaan",
  components: {
    Multiselect,
    Editor
  },
  data() {
    return {
      isHidden: true,
      drawing: false,
      mousePos: { x: 0, y: 0 },
      lastPos: { x: 0, y: 0 },
      ctx: null,
      image_url: null,
      isLoading: false,
      selectedOrgan: [],
      organs: [],
      isPen: true,
      isActive: "keyboard",
      isColorActive: "black",
      penWidth: 2
    };
  },
  computed: {
    canvas: function() {
      return this.$refs.canvas;
    }
  },
  watch: {
    // on organ selected, do something
    selectedOrgan: function() {
      document.getElementById("box_pemeriksaan_fisik").style.setProperty('border-color', '');
      // update the payload
      this.updatePostData({ key: "organ_id", value: this.selectedOrgan.id });
      // to render the image
      this.organChanged();
    }
  },
  methods: {
    ...mapActions(["updatePostData", "updateCanvas"]),
    updateContent(content) {
      this.updatePostData({ key: "pemeriksaan_text", value: content });
    },
    organChanged() {
      // get the image URL
      let self = this;
      self.image_url = self.selectedOrgan.gambar;
      // self.clear();
      self.drawBackground(self.image_url);
    },
    // draw the image
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
        let newSize = { width: background.width, height: background.height };
        if (background.width > 700) {
          newSize = self.resizeImage(background);
        }
        ctx.drawImage(background, 0, 0, newSize.width, newSize.height);

        // if (self.isHidden) {
        //   let img = document.createElement("img");
        //   img.src = backgroundURL;
        //   img.style.height = newSize.height + 'px';
        //   img.style.width = newSize.width + 'px';
        //   // img_organ.appendChild(img);
        // } else {
        //   console.log('draw on canvas pemeriksaan');
        //   ctx.drawImage(background, 0, 0, newSize.width, newSize.height);
        // }
      };
    },
    resizeImage(background) {
      let width = background.width,
        height = background.height,
        screen_width = screen.width;

      width = 0.5 * screen_width;
      height = height * (width / background.width); //0.5 * height;

      return { width, height };
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
    penColor(color) {
      this.ispen = true;
      this.ctx.strokeStyle = color;
    },
    // to get organ datas from backend
    asyncFind(query) {
      let self = this;
      this.isLoading = true;

      console.log(query);

      axios
        .get(store.state.URL_API + "/organ/name?query=" + query, {
          headers: {
            Authorization: "Bearer " + store.state.BEARER_TOKEN,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          let res = response.data;

          if (!res.status) {
            self.isLoading = false;
            return;
          }

          let organs = res.data.organs;

          if (organs) {
            self.organs = organs;
          }

          self.isLoading = false;
        })
        .catch(err => {
          self.isLoading = false;
          console.log(err);
        });
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

/*
#editor {
  display: none;
}
*/
</style>