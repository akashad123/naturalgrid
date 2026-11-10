/* Natural Grid — hero background video.
   The poster <picture> in the markup is what paints first and what stays if
   anything here bails out; this file only decides which single video file, if
   any, is worth fetching on top of it. Deliberately separate from motion.js so
   the hero never waits on the rest of the interaction layer.

   MP4 fallbacks: the repo currently ships WebM/VP9 only. To add the fallback
   for pre-VP9 browsers, drop hero-desktop.mp4 and hero-mobile.mp4 into
   images/hero/ — no code change needed, the markup already points at them.
     ffmpeg -i hero-desktop.webm -c:v libx264 -profile:v main -crf 26 \
            -pix_fmt yuv420p -movflags +faststart -an hero-desktop.mp4
     ffmpeg -i hero-mobile.webm  -c:v libx264 -profile:v main -crf 26 \
            -pix_fmt yuv420p -movflags +faststart -an hero-mobile.mp4 */
(function () {
  "use strict";

  var video = document.querySelector(".hero-bg-video");
  if (!video) return;

  var bg = video.parentNode;

  /* Reduced motion: the poster IS the hero. Removing the element rather than
     hiding it guarantees no video is ever fetched. */
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.remove();
    return;
  }

  /* Same for Save-Data and 2G — a decorative 3 MB download is the first thing
     that should go when someone has told us bandwidth is precious. */
  var conn = navigator.connection || navigator.webkitConnection;
  if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ""))) {
    video.remove();
    return;
  }

  /* iOS only honours muted autoplay if the property, not just the attribute,
     is set before play() is called. */
  video.muted = true;

  /* Fade in whenever frames are actually on screen, so the hand-off from
     poster to video is never a flash of black. Not {once:true}: the same
     listener has to cover the file swap below. */
  video.addEventListener("playing", function () {
    bg.classList.add("is-playing");
  });

  function start() {
    /* Autoplay can still be refused (iOS Low Power Mode, some data savers).
       Nothing to do about it — the poster is already the right thing to show. */
    var started = video.play();
    if (started && typeof started.catch === "function") {
      started.catch(function () {});
    }
  }

  /* Some mobile browsers reject a play() issued this early in the load; retry
     once there is actually something to play. */
  video.addEventListener("canplay", start);

  /* One breakpoint, matching the CSS <source media> on the poster: portrait
     file at 768px and below. */
  var query = window.matchMedia("(max-width: 768px)");

  function use(portrait) {
    var device = portrait ? "mobile" : "desktop";

    /* Dropping the old <source> list and re-loading cancels any transfer still
       in flight, so only ever one video file is being fetched. */
    while (video.firstChild) video.removeChild(video.firstChild);

    /* WebM first: browsers pick the first source they can play, so a VP9-capable
       browser never even looks at the MP4. */
    [["webm", "video/webm"], ["mp4", "video/mp4"]].forEach(function (format) {
      var src = video.getAttribute("data-" + device + "-" + format[0]);
      if (!src) return;
      var source = document.createElement("source");
      source.src = src;
      source.type = format[1];
      video.appendChild(source);
    });

    /* Back to the poster until the new file has frames to show. The poster
       itself is already correct — its <picture> follows the same breakpoint. */
    bg.classList.remove("is-playing");
    video.load();
    start();
  }

  use(query.matches);

  /* Re-run only when the viewport genuinely crosses 768px — a phone rotating,
     or the DevTools device toggle. Without this the hero keeps whichever file
     it picked at load, and the desktop crop drops the turbines out of frame
     in a portrait box. Ordinary resizing and scrolling never fire this, so
     the second file is fetched only if the shape of the screen really changed. */
  if (query.addEventListener) {
    query.addEventListener("change", function (e) {
      use(e.matches);
    });
  } else if (query.addListener) {
    query.addListener(function (e) {
      use(e.matches);
    });
  }
})();
