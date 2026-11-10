/* Natural Grid — site navigation, shared by every page.
   Mobile menu open/close, and on small screens the Services dropdown opens
   as a tap-to-toggle accordion instead of on hover. */
(function () {
  "use strict";

  var menuToggle = document.querySelector(".menu-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", open);
    });

    mainNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        document.body.classList.remove("nav-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var navDropToggle = document.querySelector(".nav-dropdown-toggle");
  var navDropdown = document.querySelector(".nav-dropdown");
  var mobileNav = window.matchMedia("(max-width: 1024px)");

  if (navDropToggle && navDropdown) {
    var setExpanded = function (open) {
      navDropToggle.setAttribute("aria-expanded", String(open));
    };

    /* Mobile: tap "Services" to open/close its sub-list (accordion) */
    navDropToggle.addEventListener("click", function () {
      if (mobileNav.matches) {
        setExpanded(navDropdown.classList.toggle("is-open"));
      }
    });

    /* Desktop: CSS shows the sub-list while focus is inside the dropdown
       (:focus-within), so report that state to screen readers too */
    navDropdown.addEventListener("focusin", function () {
      if (!mobileNav.matches) setExpanded(true);
    });
    navDropdown.addEventListener("focusout", function (e) {
      if (!mobileNav.matches && !navDropdown.contains(e.relatedTarget)) setExpanded(false);
    });
  }
})();
