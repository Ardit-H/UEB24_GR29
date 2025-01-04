// videos function
const butonat = document.querySelectorAll('#videoButton');

butonat.forEach(button => {
    button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-video');
        const video = document.getElementById(videoId);

        if(video.paused){
            video.play();
            button.textContent = 'Pause';
        }
        else{
            video.pause();
            button.textContent = 'Play';
        }
    });
});

var canvas = document.getElementById('logoCanvas');
var ctx = canvas.getContext('2d');


var centerX = 250, centerY = 250;
var innerRadius = 60; 
var arrowLength = 100; 
var arrowWidth = 20; 
var squareSize = 60; 


ctx.beginPath();
ctx.arc(centerX, centerY, 220, 0, 2 * Math.PI);
ctx.lineWidth = 6;
ctx.strokeStyle = '#FFFFFF';
ctx.stroke();


ctx.beginPath();
ctx.rect(centerX - squareSize / 2, centerY - squareSize / 2, squareSize, squareSize);
ctx.fillStyle = '#FFFFFF'; 
ctx.fill();
ctx.lineWidth = 6;
ctx.strokeStyle = '#FFFFFF';
ctx.stroke();


function drawTriangle(baseX, baseY, direction) {
    var height = 60; 
    var width = squareSize; 
    ctx.beginPath();

    if (direction === 'N') {
       
        ctx.moveTo(baseX, baseY - 180); 
        ctx.lineTo(baseX - width / 2, baseY); 
        ctx.lineTo(baseX + width / 2, baseY); 
    } else if (direction === 'S') {
        
        ctx.moveTo(baseX, baseY + 180); 
        ctx.lineTo(baseX - width / 2, baseY); 
        ctx.lineTo(baseX + width / 2, baseY); 
    } else if (direction === 'E') {
        
        ctx.moveTo(baseX + 180, baseY); 
        ctx.lineTo(baseX, baseY - width / 2); 
        ctx.lineTo(baseX, baseY + width / 2); 
    } else if (direction === 'W') {
        
        ctx.moveTo(baseX - 180, baseY); 
        ctx.lineTo(baseX, baseY - width / 2); 
        ctx.lineTo(baseX, baseY + width / 2); 
    }

    ctx.closePath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF'; 
    ctx.fill();
}


drawTriangle(centerX, centerY - squareSize / 2, 'N');

drawTriangle(centerX, centerY + squareSize / 2, 'S');

drawTriangle(centerX + squareSize / 2, centerY, 'E');

drawTriangle(centerX - squareSize / 2, centerY, 'W');