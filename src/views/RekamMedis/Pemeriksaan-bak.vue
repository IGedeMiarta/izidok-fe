<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-3">
            <select id="namaOrgan" class="form-control">
                <option selected>Pilih Organ...</option>
                <option>Dada, Organ</option>
            </select>
        </div>
        <div class="form-group col-md-3">
            <input type="text" class="form-control" id="subNamaOrgan">
        </div>
      </div>
    </form>
    <div class="col-md-12">
      <canvas ref="canvas" id='drawing-pad' width="1000" height='300'>	</canvas>
    </div>
    <div>
      <button @click='resetCanvas'>Reset Canvas</button>
      <button @click='saveImage'>Save Image</button>
      <button @click='replay'>Replay</button>
    </div>
    <hr>
    <img ref="img" src="" id='canvas-image'>
    <small>Right click to save image.</small>
  </div>
</template>

<script>
export default {
	data(){
    return{
      canvas: null,
      context: null,
      isDrawing: false,
      startX: 0,
      startY: 0,
	  points: [],
	  mousePos: {x:0, y:0}
    }
  },
  mounted(){
    var vm = this
    vm.canvas = vm.$refs.canvas
    vm.context = vm.canvas.getContext("2d");
    vm.canvas.addEventListener('mousedown', vm.mousedown);
    vm.canvas.addEventListener('mousemove', vm.mousemove)
	document.addEventListener('mouseup', vm.mouseup);
	vm.canvas.addEventListener("touchstart", function (e) {
			vm.mousePos = vm.getTouchPos(vm.canvas, e);
			var touch = e.touches[0];
			var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
			});
			vm.canvas.dispatchEvent(mouseEvent);
	}, false);
	vm.canvas.addEventListener("touchend", function (e) {
		var mouseEvent = new MouseEvent("mouseup", {});
		vm.canvas.dispatchEvent(mouseEvent);
	}, false);
	vm.canvas.addEventListener("touchmove", function (e) {
		var touch = e.touches[0];
		var mouseEvent = new MouseEvent("mousemove", {
			clientX: touch.clientX,
			clientY: touch.clientY
		});
		vm.canvas.dispatchEvent(mouseEvent);
	}, false);
	vm.document.body.addEventListener("touchstart", function (e) {
		if (e.target == vm.canvas) {
			e.preventDefault();
		}
	}, false);
	vm.document.body.addEventListener("touchend", function (e) {
		if (e.target == vm.canvas) {
			e.preventDefault();
		}
	}, false);
	vm.document.body.addEventListener("touchmove", function (e) {
		if (e.target == vm.canvas) {
			e.preventDefault();
		}
	}, false);
  },
  methods:{
    mousedown(e){
      var vm = this
      var rect = vm.canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      
      vm.isDrawing = true;
      vm.startX = x;
      vm.startY = y;
      vm.points.push({
        x: x,
        y: y
      });
    },
    mousemove(e){
      var vm = this
      var rect = vm.canvas.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      
      if (vm.isDrawing) {
        vm.context.beginPath();
        vm.context.moveTo(vm.startX, vm.startY);
        vm.context.lineTo(x, y);
        vm.context.lineWidth = 1;
        vm.context.lineCap = 'round';
        vm.context.strokeStyle = "#666";
        vm.context.stroke();
        
        vm.startX = x;
        vm.startY = y;  
        
        vm.points.push({
          x: x,
          y: y
        });
      }
    },
    mouseup(e){
      var vm = this
      vm.isDrawing = false;
      if (vm.points.length > 0) {
        localStorage['points'] = JSON.stringify(vm.points);    
      }
    },
    resetCanvas(){
      var vm = this
      vm.canvas.width = vm.canvas.width;
      vm.points.length = 0; // reset points array
    },
    saveImage(){
      var vm = this
      var dataURL = vm.canvas.toDataURL();
      var img = vm.$refs.img;
      img.src = dataURL;
    },
    replay(){
      var vm = this
      vm.canvas.width = vm.canvas.width;
      
      // load localStorage
      if (vm.points.length === 0) {
        if (localStorage["points"] !== undefined) {
          vm.points = JSON.parse(localStorage["points"]);
        }
      }
      
      var point = 1;
      setInterval(function(){
        drawNextPoint(point);
        point += 1;
      },10);
      
      function drawNextPoint(index) {    
      if (index >= vm.points.length) {
        return;
      }
        var startX = vm.points[index-1].x;
        var startY = vm.points[index-1].y;
        
        var x = vm.points[index].x;
        var y = vm.points[index].y;
        
        vm.context.beginPath();
        vm.context.moveTo(startX, startY);
        vm.context.lineTo(x, y);
        vm.context.lineWidth = 1;
        vm.context.lineCap = 'round';
        vm.context.strokeStyle = "rgba(0,0,0,1)";
        vm.context.stroke();
      }
	},
	getTouchPos(canvasDom, touchEvent) {
		var rect = canvasDom.getBoundingClientRect();
		return {
			x: touchEvent.touches[0].clientX - rect.left,
			y: touchEvent.touches[0].clientY - rect.top
		};
	}
  }
}
</script>

<style scoped>
	canvas {
		/* border: 1px solid #666; */
		cursor:crosshair;
    width: 100%
		}
	body {
		padding: 2em;
		}
</style>