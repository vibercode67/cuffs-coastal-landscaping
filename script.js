// Cuff's Coastal Landscaping — minimal site JavaScript.
// Three jobs: toggle the hamburger menu open/closed, keep the footer's
// copyright year correct without editing it by hand every January,
// and animate the Services/FAQ accordions open and closed smoothly. (They're still
// real <details>/<summary> elements underneath — this just adds a
// transition on top instead of the instant native snap-open.)

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

  // Animate every <details> inside the given container: click the
  // summary, and instead of the instant native open/close, the inner
  // .accordion-panel's max-height transitions (see the CSS). The
  // <details> element's own open/closed state still tracks correctly
  // underneath — closing just waits for the animation to finish
  // before actually setting details.open = false, so screen readers
  // don't announce it as closed until it visually is.
  function animateAccordions(containerSelector) {
    var container = document.querySelector(containerSelector);
    if (!container) return;

    container.querySelectorAll("details").forEach(function (details) {
      var summary = details.querySelector("summary");
      var panel = details.querySelector(".accordion-panel");
      if (!summary || !panel) return;

      summary.addEventListener("click", function (e) {
        e.preventDefault();

        if (details.open) {
          panel.style.maxHeight = panel.scrollHeight + "px";
          requestAnimationFrame(function () {
            panel.style.maxHeight = "0px";
          });
          panel.addEventListener(
            "transitionend",
            function handler() {
              details.open = false;
              panel.removeEventListener("transitionend", handler);
            },
            { once: true }
          );
        } else {
          details.open = true;
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }

  animateAccordions(".service-groups");
  animateAccordions(".faq-list");
});
