const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const previousButton = document.querySelector('.hero-arrow-left');
const nextButton = document.querySelector('.hero-arrow-right');

let currentSlide = 0;

// Hero funktioner, slides och indikatorer

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });

  slides[index].classList.add('active');
  indicators[index].classList.add('active');

  currentSlide = index;
}

function nextSlide() {
  let nextIndex = currentSlide + 1;

  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }

  showSlide(nextIndex);
}

function previousSlide() {
  let previousIndex = currentSlide - 1;

  if (previousIndex < 0) {
    previousIndex = slides.length - 1;
  }

  showSlide(previousIndex);
}

nextButton.addEventListener('click', nextSlide);
previousButton.addEventListener('click', previousSlide);

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
  });
});

setInterval(nextSlide, 6000);
