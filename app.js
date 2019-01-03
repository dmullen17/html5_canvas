// Draw a line 
var c = document.getElementById('draw');
/*var c2D = c.getContext('2d');

c2D.moveTo(0, 0);
c2D.lineTo(200, 100);
c2D.stroke();

// Draw a Circle 
c2D.beginPath();
c2D.arc(95, 50, 40, 0, 2 * Math.PI);
c2D.stroke();*/

/*// Lets see what happens onclick 
c.addEventListener('click', function(event) {
    console.log(event);
    console.log(this);
    // looks like what we want is event.clientX and event.clientY
    console.log(event.clientX); 
    console.log(event.clientY);
    // we could add an event listener for an ondrag event and constantly return the coordinates
})*/

// Want to add an event Listener that returns coordinates on drag
// mousedown, mousemove, and mouseup seem promising 
function showCoords(event) {
    console.log(event.clientX);
    console.log(event.clientY);
}

/*
c.addEventListener('mousedown', showCoords);
c.addEventListener('mousemove', showCoords);*/ // this is good but we need to toggle it on mouseup / mousedown.  Lets try ondrag instead 

// c.addEventListener('ondrag', showCoords); // doesn't work

// I don't think this is a good solution but let's see if it works: 
/*c.addEventListener('click', c.addEventListener('mousemove', showCoords));*/
// it doesn't work

// Lets try to create the rainbow canvas effect first 
function drawCircle(x, y, color) {
    var c2D = c.getContext('2d');
    c2D.beginPath();
    c2D.arc(x, y, 40, 0, 2 * Math.PI);
    c2D.fillStyle = color;
    c2D.fill();
    // c2D.stroke();
    // this works - we want to remove the border from the objects though - we can do this by removing c2D.stroke() which draws a shape by filling in it's outline 
}

c.addEventListener('mousemove', function(event) {
    drawCircle(event.clientX, event.clientY, 'green');
})

// Now we need a reset button 
document.addEventListener('keypress', function(event) {
    // console.log(event); we want event.code === 'Space'
    if (event.code === 'Space') {
        var canvas = document.getElementById('draw');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, 1200, 640);
    }
})