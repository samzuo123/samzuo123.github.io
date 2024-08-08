const slider = document.querySelector('.clients-slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const clients = document.querySelectorAll('.client');
let currentIndex = 0;
let slideWidth = clients[0].offsetWidth + 20; // Add 20 for margin

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < clients.length - 1) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});