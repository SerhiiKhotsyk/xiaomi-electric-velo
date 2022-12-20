'use strict';

const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    effect: "fade",
    mousewheel: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
});
