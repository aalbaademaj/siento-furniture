const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const previousButton = document.querySelector('.hero-arrow-left');
const nextButton = document.querySelector('.hero-arrow-right');
const favoriteButtons = document.querySelectorAll('.favorite');
const filterButtons = document.querySelectorAll('.gallery-buttons button');
const productCards = document.querySelectorAll('.product-card');
const loadMoreButton = document.querySelector('.load-more');
const viewButtons = document.querySelectorAll('.view-product');
const productModal = document.querySelector('.product-modal');
const closeModal = document.querySelector('.close-modal');
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartIcon = document.querySelector('header a[href="#cart"]');
const cartDropdown = document.querySelector('.cart-dropdown');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

let currentSlide = 0;
let selectedCategory = 'all';
let productsToShow = 6;
let cartCount = 0;
let cartItems = [];

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

  let categoryProducts = 0;

  productCards.forEach((product) => {
    const productCategory = product.dataset.category;

    if (selectedCategory === 'all' || selectedCategory === productCategory) {
      categoryProducts++;
    }
  });

  if (categoryProducts <= 6) {
    loadMoreButton.style.display = 'none';
  } else {
    loadMoreButton.style.display = 'block';
  }
}

// Gallery filter funktionalitet
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((button) => {
      button.classList.remove('active');
    });

    button.classList.add('active');

    selectedCategory = button.dataset.category;
    loadMoreButton.textContent = 'Show More';
    productsToShow = 6;

    showProducts();
  });
});

showProducts();

// Load more button funktionalitet
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

// Modal functionality för product view
viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    productModal.style.display = 'flex';
    const product = button.closest('.product-card');
    const productName = product.querySelector('h3').textContent;
    const productImage = product.querySelector('img').src;
    const productDescription = product.querySelector('p').textContent;
    const productPrice = product.querySelector(
      '.product-bottom span',
    ).textContent;

    productModal.querySelector('.modal-title').textContent = productName;
    productModal.querySelector('.modal-image').src = productImage;
    productModal.querySelector('.modal-description').textContent =
      productDescription;
    productModal.querySelector('.modal-price').textContent = productPrice;
  });

  closeModal.addEventListener('click', () => {
    productModal.style.display = 'none';
  });
});

// Cart funktionalitet
// Visa antal produkter
cartCountElement.textContent = cartCount;

// Öppna och stäng kundvagnen
cartIcon.addEventListener('click', (event) => {
  event.preventDefault();
  cartDropdown.classList.toggle('open');
});

// Lägg till produkter i kundvagnen
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.closest('.product-card');

    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector(
      '.product-bottom span',
    ).textContent;

    const cartItem = {
      name: productName,
      price: productPrice,
    };

    cartItems.push(cartItem);

    cartCount++;
    cartCountElement.textContent = cartCount;

    renderCart();
  });
});

// Visa produkterna och totalsumman
function renderCart() {
  cartItemsContainer.innerHTML = '';

  let total = 0;

  cartItems.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');

    const nameElement = document.createElement('span');
    nameElement.textContent = item.name;

    const priceElement = document.createElement('span');
    priceElement.textContent = item.price;

    itemElement.append(nameElement, priceElement);
    cartItemsContainer.appendChild(itemElement);

    const price = Number(item.price.replace(/[^\d,.-]/g, '').replace(',', '.'));

    total += price;
  });

  cartTotal.textContent = `Total: ${total.toLocaleString('sv-SE')} €`;
}

// Menu toggle functinalitet
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
