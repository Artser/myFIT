"use strict";

var anchor = document.querySelector("#header-info__buy");

anchor.addEventListener("click", function(e) {
  e.preventDefault();

  var blockID = anchor.getAttribute("href");

  document.querySelector(blockID).scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,

  //width: 1160,
  updateOnWindowResize: true,
  loop: true,
  loopFillGroupWithBlank: true,
  /*pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },*/

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4
    }
  },

  navigation: {
    nextEl: ".slider__btn--prev",
    prevEl: ".slider__btn--next"
  }
});
