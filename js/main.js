var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 4,
    }
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

const menuBtn = document.querySelector('.menu-button'),
      menu = document.querySelector('.navbar-panel'),
      closeMenu = document.querySelector('.close-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.add('is-active');
});
closeMenu.addEventListener('click', () => {
  menu.classList.remove('is-active');
});