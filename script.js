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


const canvas = document.getElementById('logoCanvas');
        const ctx = canvas.getContext('2d');

        
        ctx.fillStyle = '#3a5a40';
        ctx.beginPath();
        ctx.moveTo(25, 10); 
        ctx.lineTo(45, 40); 
        ctx.lineTo(5, 40); 
        ctx.closePath();
        ctx.fill();

       
        ctx.fillStyle = '#ffcc00';
        ctx.beginPath();
        ctx.arc(25, 15, 10, 0, Math.PI * 2, false);
        ctx.fill();

