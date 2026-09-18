// Cuff's Coastal Landscaping — minimal site JavaScript.
// Three jobs: toggle the hamburger menu open/closed, keep the
// footer's copyright year correct without editing it by hand every
// January, and pick the right map zoom level for the screen size.
// (The services/FAQ accordions use the native <details> element, so
// they need no JavaScript at all.)

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu after tapping a link, so it doesn't stay open
    // after the page scrolls to a section.
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // The map's on-screen box is much bigger on desktop than on
  // mobile, so it needs a more zoomed-in level to show the same
  // sized area on mobile, or the same zoomed-in level would show a
  // much wider region on desktop than intended. Swap to the
  // desktop-tuned zoom once there's room for it.
  var mapFrame = document.querySelector(".map-embed iframe");
  if (mapFrame && window.matchMedia("(min-width: 700px)").matches) {
    mapFrame.src = mapFrame.dataset.srcDesktop;
  }
});
