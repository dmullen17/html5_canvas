/* Set up variables */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let direction = false;
let radiusStart = 5; 
let radius = 20;
let radiusEnd = 30;
let hue = 0;

function draw(e) {
    //console.log(drawing);
    if (!drawing) return;
    //console.log('hi');
    //console.log(e); // want e.clientX and e.clientY
    /*radius >= 100 ? radius = 10 : radius ++;*/ // need to reverse the direction 
    
    // Switch the flag if either condition is met.
    /*radius == radiusEnd ? flag = !flag : flag = flag;
    radius == radiusStart ? flag = !flag : flag = flag;*/
    //console.log(flag);
    if (radius >= radiusEnd || radius <= radiusStart) {
        direction = !direction;
    }
    if (direction) {
        radius += .25;
    } else {
        radius -= .25;
    }
    
    hue >= 365 ? hue = 0 : hue ++;
    
    // draw a cirlce
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.fill();
}

canvas.addEventListener('mousedown', () => drawing = true)
canvas.addEventListener('mouseup', () => {drawing = false});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', () => drawing = false);