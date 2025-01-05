function initializeAllSlideshows() {
  const slideshows = document.querySelectorAll(".slideshow-container");

  slideshows.forEach((slideshow) => {
    let slideIndex = 1;
    const slides = slideshow.querySelectorAll(".mySlides");
    const prev = slideshow.querySelector(".prev");
    const next = slideshow.querySelector(".next");

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      slides[slideIndex - 1].style.display = "block";
    }

    if (prev) {
      prev.addEventListener("click", () => {
        showSlides(--slideIndex);
      });
    }
    if (next) {
      next.addEventListener("click", () => {
        showSlides(++slideIndex);
      });
    }
    showSlides(slideIndex);
  });
}

document.addEventListener("DOMContentLoaded", initializeAllSlideshows);
