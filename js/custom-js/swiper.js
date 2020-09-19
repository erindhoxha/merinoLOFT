var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
        // Optional parameters
    // If we need pagination

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-pagination'
      },
  });