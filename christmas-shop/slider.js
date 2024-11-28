const slider = document.querySelector('.slider');
const sliderInner = document.querySelector('.slider-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = 300; // Ширина одного слайда
let currentSlide = 0;

nextButton.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide * slideWidth >= sliderInner.scrollWidth - slider.clientWidth) {
        currentSlide = 0;
    }
    sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

prevButton.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = Math.floor((sliderInner.scrollWidth - slider.clientWidth) / slideWidth);
    }
    sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});