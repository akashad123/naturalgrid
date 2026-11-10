/* Natural Grid — gallery page: full-screen image viewer.
   A native <dialog> opened with showModal(), so the browser moves focus into
   it, keeps Tab inside, closes it on Escape, makes the page behind inert and
   returns focus to the thumbnail afterwards. */
(function () {
  "use strict";

  const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  let currentIndex = 0;

  function renderLightbox() {
    const item = galleryItems[currentIndex];
    const img = item.querySelector("img");
    lightboxImg.src = item.dataset.full || img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
  }

  function openLightbox(index) {
    currentIndex = index;
    renderLightbox();
    lightbox.showModal();
    document.body.style.overflow = "hidden";
  }

  function moveLightbox(direction) {
    currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    renderLightbox();
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));

  // A click on the dark area around the image closes the viewer
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });

  lightbox.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") moveLightbox(-1);
    else if (e.key === "ArrowRight") moveLightbox(1);
  });

  // However it closed (button, Escape, backdrop click), let the page scroll again
  lightbox.addEventListener("close", () => {
    document.body.style.overflow = "";
  });
})();
