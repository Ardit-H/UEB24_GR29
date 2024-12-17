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

