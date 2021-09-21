const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;
ctx.strokStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
let closepth = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    console.log("creating path in", x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    console.log("creating line in", x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    if (closepth) {
      ctx.closePath();
    }
  }
}

function onMouseDown(event) {
  startPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    console.log("space");
    closepth = true;
  }
});
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    console.log("spaceUp");
    closepth = false;
  }
});
