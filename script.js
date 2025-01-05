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

document.addEventListener('DOMContentLoaded', () => {
    const backToTopLink = document.getElementById('backToTopLink');

    // Kontrollojmë scroll-in dhe shfaqim/fshehim linkun
    window.addEventListener('scroll', () => {
        console.log('Vlera e scrollY: ', window.scrollY);
      if (window.scrollY > 400) {
        backToTopLink.style.display = 'block'; // Shfaq linkun
      } else {
        backToTopLink.style.display = 'none'; // Fshi linkun
      }
    });

    // Funksion për të shkuar në fillim të faqes me fallback
    backToTopLink.addEventListener('click', (event) => {
      event.preventDefault();
      if ('scrollBehavior' in document.documentElement.style) {
        // Smooth scrolling në shfletues modernë
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Fallback për shfletues më të vjetër
        window.scrollTo(0, 0);
      }
    });
  });
