const swiper = new Swiper(".productSwiper", {
  // 輪播循環
  loop: true,
    autoplay: {
    delay: 1500, // 每秒切換一次（單位：毫秒）
    disableOnInteraction: false, // 使用者滑動後仍會繼續自動播放
    pauseOnMouseEnter: true, // 新版 Swiper v9+ 可用此屬性
  },
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
