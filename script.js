const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const previousButton = document.querySelector('.hero-arrow-left');
const nextButton = document.querySelector('.hero-arrow-right');
const favoriteButtons = document.querySelectorAll('.favorite');
const filterButtons = document.querySelectorAll('.gallery-buttons button');
const productCards = document.querySelectorAll('.product-card');
const loadMoreButton = document.querySelector('.load-more');

let currentSlide = 0;

let selectedCategory = 'all';
let productsToShow = 6;

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

// Visa produkter baserat på vald kategori och antal att visa
function showProducts() {
  let visibleProducts = 0;

  productCards.forEach((product) => {
    const productCategory = product.dataset.category;

    if (selectedCategory === 'all' || selectedCategory === productCategory) {
      if (visibleProducts < productsToShow) {
        product.style.display = 'block';
        visibleProducts++;
      } else {
        product.style.display = 'none';
      }
    } else {
      product.style.display = 'none';
    }
  });
}

// Gallery filter funktionalitet
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((button) => {
      button.classList.remove('active');
    });

    button.classList.add('active');

    selectedCategory = button.dataset.category;

    showProducts();
  });
});

showProducts();

loadMoreButton.addEventListener('click', () => {
  if (loadMoreButton.textContent === 'Show More') {
    productsToShow += 4;
    loadMoreButton.textContent = 'Show Less';
  } else {
    productsToShow = 6;
    loadMoreButton.textContent = 'Show More';
  }
  showProducts();
});
