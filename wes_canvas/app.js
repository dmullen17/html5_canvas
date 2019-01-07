const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// Add a flag for drawing
let isDrawing = false;  // I put a boolean value in quotes!!! NEVER DO THAT
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    // console.log(event); // use this to test the 4 event listeners below
    // Wes's Solution was better: he put this in the mousdown event listener
/*    if (lastX === 0 & lastY === 0) {
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }*/
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
/*  lastX = e.offsetX; 
    lastY = e.offsetY;*/
    // Destructuring variable assignment 
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
    hue++; 
    if (hue >= 360) {
        hue = 0;
    }
    
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);// need this in case the mouse leaves the window 


// Wes's Solution was better - he put this in the mousedown event listener rather than the two that I used
/*function reset() {
    isDrawing = false; 
    lastX = 0; 
    lastY = 0;
}
canvas.addEventListener('mouseup', reset); 
canvas.addEventListener('mouseout', reset);*/