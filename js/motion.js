/* Natural Grid — motion & interaction layer.
   Progressive enhancement: elements are only hidden after JS tags them,
   so the site stays fully visible if scripts fail to load. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============ STICKY HEADER ============ */
  /* Runs before the reduced-motion bail-out below: pinning the nav is
     navigation, not decoration, so it applies to everyone. The header is
     position:fixed in CSS; this only flips it to its compact light state
     once the top bar has scrolled out of the way. */
  var header = document.querySelector(".site-header");
  if (header) {
    var isStuck = false;
    var headerTicking = false;

    var syncHeader = function () {
      var shouldStick = window.scrollY > 24;
      if (shouldStick !== isStuck) {
        isStuck = shouldStick;
        header.classList.toggle("is-stuck", isStuck);
      }
      headerTicking = false;
    };

    window.addEventListener(
      "scroll",
      function () {
        if (!headerTicking) {
          headerTicking = true;
          requestAnimationFrame(syncHeader);
        }
      },
      { passive: true }
    );

    /* Reloading part-way down a page should start in the pinned state */
    syncHeader();
  }

  if (reduceMotion || !("IntersectionObserver" in window)) return;

  /* ============ PAGE TITLES — WORD-BY-WORD RISE ============ */
  /* Splits on regular spaces only, so &nbsp; keeps words together. */
  document.querySelectorAll(".page-title").forEach(function (title) {
    var words = title.textContent.trim().split(" ");
    title.classList.add("split-title");
    title.textContent = "";
    words.forEach(function (word, i) {
      var span = document.createElement("span");
      span.className = "title-word";
      span.textContent = word;
      span.style.setProperty("--word-delay", Math.min(i * 90, 720) + "ms");
      title.appendChild(span);
      if (i < words.length - 1) title.appendChild(document.createTextNode(" "));
    });
  });

  /* ============ HERO IMAGERY — SLOW DRIFT ============ */
  document.querySelectorAll(".hero-bg img").forEach(function (img) {
    img.classList.add("kenburns");
  });

  /* ============ SCROLL REVEAL ============ */
  var revealSelectors = [
    ".hero-content",
    ".hero-featurebar",
    ".page-hero > *",
    ".contact-hero > *",
    ".section-head",
    ".how-head",
    ".how-step",
    ".journey-copy",
    ".stat-card",
    ".project-card",
    ".gallery-item",
    ".calc-inputs",
    ".calc-highlight",
    ".calc-cta",
    ".features-intro",
    ".features-panel",
    ".features-about",
    ".process-steps > *",
    ".precision-copy",
    ".trusted-label",
    ".trusted-marquee",
    ".connect-info",
    ".contact-form",
    ".map-head",
    ".map-embed",
    ".footer-left",
    ".footer-card"
  ];

  var revealTargets = document.querySelectorAll(revealSelectors.join(","));

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  var siblingCount = new Map();
  revealTargets.forEach(function (el) {
    /* Titles animate word-by-word instead — skip the block reveal */
    if (el.classList.contains("split-title")) return;
    var parent = el.parentElement;
    var index = siblingCount.get(parent) || 0;
    siblingCount.set(parent, index + 1);
    el.style.setProperty("--reveal-delay", Math.min(index * 90, 360) + "ms");
    el.setAttribute("data-reveal", "");
    revealObserver.observe(el);
  });

  /* ============ STAT COUNTERS ============ */
  /* Animates numbers like "14", "8+", "100%". Skips values whose suffix
     contains digits ("24–48h") or that don't start with a number ("LN₂"). */
  var counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        counterObserver.unobserve(entry.target);
        runCounter(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-count-to"), 10);
    var suffix = el.getAttribute("data-count-suffix") || "";
    var duration = 1400;
    var start = null;

    function step(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.querySelectorAll(".stat-number").forEach(function (el) {
    var match = el.textContent.trim().match(/^(\d+)([^\d]*)$/);
    if (!match) return;
    el.setAttribute("data-count-to", match[1]);
    el.setAttribute("data-count-suffix", match[2]);
    el.textContent = "0" + match[2];
    counterObserver.observe(el);
  });

  /* ============ CURSOR SHEEN ON CARDS ============ */
  document
    .querySelectorAll(".stat-card, .calc-highlight, .calc-cta, .feature-acc")
    .forEach(function (el) {
      el.classList.add("has-sheen");
      el.addEventListener("mousemove", function (e) {
        var rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", e.clientX - rect.left + "px");
        el.style.setProperty("--my", e.clientY - rect.top + "px");
      });
    });

  /* ============ SCROLL PROGRESS BAR ============ */
  var progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.setAttribute("aria-hidden", "true");
  document.body.appendChild(progressBar);

  var progressTicking = false;
  function updateProgress() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    progressBar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
    progressTicking = false;
  }
  window.addEventListener(
    "scroll",
    function () {
      if (!progressTicking) {
        progressTicking = true;
        requestAnimationFrame(updateProgress);
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", updateProgress);
  updateProgress();
})();
