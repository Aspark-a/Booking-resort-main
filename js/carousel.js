currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector(
    ".carousel-slides"
  ).style.transform = `translateX(${offset}%)`;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentSlide) {
      slide.classList.add("active");
    }
  });
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Initialize the first slide
showSlide(currentSlide);
