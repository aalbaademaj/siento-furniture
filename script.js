const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const previousButton = document.querySelector('.hero-arrow-left');
const nextButton = document.querySelector('.hero-arrow-right');
const favoriteButtons = document.querySelectorAll('.favorite');
const filterButtons = document.querySelectorAll('.gallery-buttons button');
const productCards = document.querySelectorAll('.product-card');

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

// Favorite button funktionalitet
favoriteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const heart = button.querySelector('i');

    heart.classList.toggle('fa-regular');
    heart.classList.toggle('fa-solid');
  });
});

// Gallery filter funktionalitet
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((button) => {
      button.classList.remove('active');
    });

    button.classList.add('active');

    const selectedCategory = button.dataset.category;

    productCards.forEach((product) => {
      const productCategory = product.dataset.category;

      if (selectedCategory === 'all' || selectedCategory === productCategory) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});
