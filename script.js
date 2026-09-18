// Cuff's Coastal Landscaping — minimal site JavaScript.
// Two jobs: toggle the hamburger menu open/closed, and keep the
// footer's copyright year correct without editing it by hand every
// January. (The services accordion uses the native <details> element,
// so it needs no JavaScript at all.)

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
});
