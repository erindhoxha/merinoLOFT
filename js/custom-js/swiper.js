var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Optional parameters
  // If we need pagination
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    772: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-pagination",
  },
});
