// Cuff's Coastal Landscaping — minimal site JavaScript.
// Just one job: keep the footer's copyright year correct without
// editing it by hand every January. (The FAQ/services accordions use
// the native <details> element, so they need no JavaScript at all.)

document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
