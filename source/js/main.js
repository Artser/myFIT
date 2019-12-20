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
      slidesPerGroup: 2
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

var iter = 0;
var sliderReview = document.querySelector("#review-wrapper");
var prevRev = document.querySelector("#prev");
var nextRev = document.querySelector("#next");
var sliderItems = sliderReview.querySelectorAll(
  ".review__list .review__item"
);

console.log(sliderItems);

nextRev.addEventListener("click", function() {
  console.log(iter);

  if (sliderItems.length > iter + 1) {
    sliderItems[iter].classList.remove("active");
    iter++;
    sliderItems[iter].classList.add("active");
  } else {
    sliderItems[iter].classList.remove("active");
    iter = 0;
    sliderItems[iter].classList.add("active");
  }
});

prevRev.addEventListener("click", function() {
  console.log(iter);

  if (iter - 1 >= 0) {
    sliderItems[iter].classList.remove("active");
    iter--;
    sliderItems[iter].classList.add("active");
  } else {
    sliderItems[iter].classList.remove("active");
    iter = sliderItems.length - 1;
    sliderItems[iter].classList.add("active");
  }
});
