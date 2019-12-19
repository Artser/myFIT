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
  loopFillGroupWithBlank: true,


  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
      slidesPerGroup: 4
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

var tabElement = document.querySelector(".tickets ");
if (tabElement) {
  var tabLinkElements = tabElement.querySelectorAll(".tickets__btn");
  var tabElements = tabElement.querySelectorAll(".tickets__tab");

  var CSS_CLASS_OPEN = "tickets__tab--open";
  var CSS_CLASS_ACTIVE = "tickets__btn--active";

  /**
   * tabLinkElements.forEach((linkElement, index) => {
   *
   * }
   */
  tabLinkElements.forEach(function(linkElement, index) {
    linkElement.addEventListener("click", function(evt) {
      evt.preventDefault();

      tabElements.forEach(function(currentTabElement) {
        currentTabElement.classList.remove(CSS_CLASS_OPEN);
      });
      tabElements[index].classList.add(CSS_CLASS_OPEN);

      tabLinkElements.forEach(function(currentLinkElement) {
        currentLinkElement.classList.remove(CSS_CLASS_ACTIVE);
      });
      linkElement.classList.add(CSS_CLASS_ACTIVE);
    });
  });
}

var swiper2 = new Swiper('.review__list', {
  navigation: {
    nextEl: '.review__list-slider-next',
    prevEl: '.review__list-slider-prev',
  },
});

