const swiper = new Swiper(".productSwiper", {
  // 輪播循環
  loop: true,
  // 手機板
  slidesPerView: 1.8,
  spaceBetween: 16,

  //  rwd-md
  breakpoints: {
    576: {
      slidesPerView: 3.4,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3.9,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5.4,
      spaceBetween: 24,
    },
  },

  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
