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
  loop: true,
  //loopFillGroupWithBlank: true,


  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4
    }
  },

  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev"
  }
});
