/* Natural Grid — About page "care after installation" slider. */
(function () {
  "use strict";

  const energySlides = document.querySelectorAll(".energy-slider .energy-card");
  const energyBgs = document.querySelectorAll(".energy-bg img");
  const [prevSlideBtn, nextSlideBtn] = document.querySelectorAll(".energy-nav button");
  let activeSlide = 0;

  function goToSlide(index) {
    energySlides[activeSlide].classList.remove("is-active");
    energyBgs[activeSlide].classList.remove("is-active");
    activeSlide = (index + energySlides.length) % energySlides.length;
    energySlides[activeSlide].classList.add("is-active");
    energyBgs[activeSlide].classList.add("is-active");
  }

  prevSlideBtn.addEventListener("click", () => goToSlide(activeSlide - 1));
  nextSlideBtn.addEventListener("click", () => goToSlide(activeSlide + 1));
})();
