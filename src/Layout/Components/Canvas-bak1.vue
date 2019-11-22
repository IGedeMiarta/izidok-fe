<template>
	<div class="app-wrapper">
		<canvas id="canvas" v-on:mousedown="handleMouseDown" v-on:mouseup="handleMouseUp" v-on:mousemove="handleMouseMove" width="800px" height="800px"></canvas>
	</div>
</template>

<script>
export default {
        name:'drawing-board',
        data: function () {
            return {
            mouse: {
                current: {
                x: 0,
                y: 0
                },
                previous: {
                x: 0,
                y: 0
                },
                down: false
            }
            }
        },
        computed: {
            currentMouse: function () {
            var c = document.getElementById("canvas");
            var rect = c.getBoundingClientRect();
            
            return {
                x: this.mouse.current.x - rect.left,
                y: this.mouse.current.y - rect.top
            }
            }
        },
        methods: {
            draw: function (event) {
             
            // requestAnimationFrame(this.draw);
            if (this.mouse.down ) {
            var c = document.getElementById("canvas");

            var ctx = c.getContext("2d");
            
            ctx.clearRect(0,0,800,800);
            
        
            ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
            ctx.strokeStyle ="#F63E02";
            ctx.lineWidth = 2;
            ctx.stroke()
            }
            
            },
            handleMouseDown: function (event) {
            this.mouse.down = true;
            this.mouse.current = {
                x: event.pageX,
                y: event.pageY
            }

                    var c = document.getElementById("canvas");
            var ctx = c.getContext("2d");

            ctx.moveTo(this.currentMouse.x, this.currentMouse.y)
            

            },
                handleMouseUp: function () {
            this.mouse.down = false;
            },
            handleMouseMove: function (event) {

            this.mouse.current = {
                x: event.pageX,
                y: event.pageY
            }
            
            this.draw(event)
            
            }
        },
            ready: function () {
                            
            var c = document.getElementById("canvas");
            var ctx = c.getContext("2d");
            ctx.translate(0.5, 0.5);
            ctx.imageSmoothingEnabled= false;
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

$prim: rgb(0, 149, 255);

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	background-color: black;
	color: white;
}

body,
button,
input {
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 400;
}

h1,
h2,
h3,
h4,
h5{
	font-weight: 500;
}

.text-faded {
	opacity: .5;
}

.cursor {
	position: fixed;
	top: 0;
	left: 0;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 3px solid rgb(30, 30, 30);
	pointer-events: none;
	user-select: none;
	mix-blend-mode: difference;
	opacity: 0;
	transition: opacity 1s;
}

canvas {
	width: 100%;
	height: calc(100vh - 60px);
	background-color: #666;
	cursor: none;
	
	&:hover + .cursor {
		opacity: 1;
	}
	
	&:active + .cursor {
		border-color: rgb(60, 60, 60);
	}
}

.controls {
	position: fixed;
	z-index: 5;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background-color: rgb(10, 10, 10);
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
}

.stat {
	font-size: 20px;
	margin-bottom: 15px;
}

.btn-row {
	position: relative;
	margin-bottom: 5px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding: 0 15px;
	border-radius: 4px;
}

.popup {
	position: absolute;
	width: 300px;
	bottom: 58px;
	padding: 30px;
	left: calc(50% - 150px);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	background-color: white;
	color: rgb(30, 30, 30);
	border-radius: 10px 10px 0 0;
	border: 1px solid rgb(220, 220, 220);
	border-bottom-width: 0;
	opacity: 0;
	animation: popup .5s forwards cubic-bezier(.2, 2, .4, 1);
	z-index: 2;
	overflow: hidden;
	max-height: 80vh;
	overflow-y: auto;
	
	.popup-title {
		flex: 0 0 100%;
		text-align: center;
		font-size: 16px;
		color: black;
		opacity: .5;
		margin-bottom: 10px;
	}
	
	button {
		height: 80px;
		width: 80px;
		text-align: center;
		font-size: 14px;
		color: rgba(0, 0, 0, .4);
		
		i {
			display: block;
			font-size: 30px;
			margin-bottom: 5px;
			color: rgba(0, 0, 0, .2);
		}
		
		&.disabled {
			color: rgba(0, 0, 0, .2);
			
			i {
				color: rgba(0, 0, 0, .1);
			}
		}
		
		&.active,
		&:active {
			color: rgba(0, 0, 0, .4);
			
			i {
				color: $prim;
			}
		}
	}
}

@keyframes popup {
	from {
		opacity: 0;
		transform: translateX(40px);
	}
	to {
		opacity: 1;
		transform: none;
	}
}

.welcome-bg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9;
	background-color: $prim;
	display: flex;
	justify-content: center;
	align-items: center;
}

.fade-up {
	opacity: 0;
	animation: fade-up 1s forwards cubic-bezier(.2, 2, .4, 1);
}

.btn {
	display: inline-block;
	margin-top: 10px;
	padding: 10px 20px;
	font-weight: 400;
	font-size: 16px;
	border-radius: 4px;
	background-color: $prim;
	color: white;
	animation-delay: 1s;
	transition: all .15s;
	cursor: pointer;

	&:hover {
		background-color: lighten($prim, 10%);
	}
}

.welcome {
	width: 400px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
		
	h1.fade-up {
		font-weight: 300;
		font-size: 40px;
		animation-delay: .25s;
	}
	
	h2.fade-up {
		font-weight: 400;
		color: rgba(255, 255, 255, .5);
		animation-delay: .5s;
	}
	
	a.fade-up {
		color: rgba(255, 255, 255, .5);
		display: inline-block;
		margin-top: 20px;
		text-decoration: none;
		animation-delay: .75s;
	}
	
	.btn.fade-up {
		background-color: rgba(255, 255, 255, .2);
		color: white;
		margin-top: 60px;
		
		&:hover {
			background-color: rgba(255, 255, 255, .3);
		}
	}
}


@keyframes fade-up {
	from {
		transform: translateY(80px);
		opacity: 0;
	}
	to {
		transform: none;
		opacity: 1;
	}
}

.form {
	flex: 0 0 100%;
	
	input {
		display: block;
		appearance: none;
		border: 0;
		box-shadow: 0;
		outline: 0;
		background-color: rgb(240, 240, 240);
		border-radius: 4px;
		padding: 10px 15px;
		width: 100%;
		margin-bottom: 4px;
	}
}

button {
	appearance: none;
	border: 0;
	border-radius: 0;
	box-shadow: 0;
	width: 40px;
	height: 60px;
	display: inline-block;
	background-color: transparent;
	color: rgb(140, 140, 140);
	font-size: 22px;
	transition: all .15s;
	cursor: pointer;
	outline: 0;
	position: relative;
	
	.size-icon,
	.color-icon {
		position: absolute;
		top: 10px;
		right: 0;
	}
	
	.color-icon {
		width: 5px;
		height: 5px;
		border-radius: 50%;
	}
	
	.size-icon {
		font-size: 6px;
		text-align: right;
	}
		
	&:hover {
		opacity: .8;
	}
	
	&:active,
	&.active{
		color: white;
	}
	
	&.disabled {
		color: rgb(50, 50, 50);
		cursor: not-allowed;
	}
}

.history {
	width: 30px;
	height: 30px;
	background-color: rgb(30, 30, 30);
	border-radius: 50%;
	text-align: center;
	line-height: 30px;
	font-size: 12px;
	overflow: hidden;
	color: rgb(140, 140, 140);
}
	
.color-item {
	position: relative;
	display: inline-block;
	cursor: pointer;
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;

	input {
		position: absolute;
		opacity: 0;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
	}
	
	input:checked + .color {
		opacity: 1;
		border: 2px solid $prim;
	}
	
	.color {
		display: block;
		width: 30px;
		height: 30px;
		background-color: white;
		border-radius: 50%;
		
		&:hover {
			opacity: .8;
		}
	}
}

@keyframes pulsate {
	0%,
	100% {
		transform: none;
	}
	50% {
		transform: scale(1.15);
	}
}

.size-item {
	width: 40px;
	height: 60px;
	display: inline-flex;
	position: relative;
	justify-content: center;
	align-items: center;
	vertical-align: top;
	cursor: pointer;
	
	input {
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
		opacity: 0;
	}
	
	.size {
		background-color: rgb(140, 140, 140);
		display: inline-block;
		border-radius: 50%;
		transition: all .15s;
		transform: translate(-50%, -50%) scale(.6);
		position: absolute;
		top: 50%;
		left: 50%;
		
		&:hover {
			opacity: .8;
		}
	}
	
	input:checked + .size {
		background-color: $prim;
	}
}

.saves {
	flex: 0 0 calc(100% + 60px);
	margin: 30px -30px -30px;
	padding: 30px;
	background-color: rgb(240, 240, 240);
	max-height: 250px;
	overflow-y: auto;
	
	.save-item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>