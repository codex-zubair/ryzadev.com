/* Ryza Dev - interactions */
(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Render published apps from apps.js */
  var grid = document.getElementById("appsGrid");
  var apps = window.RYZA_APPS || [];
  if (grid) {
    if (!apps.length) {
      grid.innerHTML = '<p class="apps-empty">Apps coming soon.</p>';
    } else {
      grid.innerHTML = apps
        .map(function (app) {
          return (
            '<a class="app-card reveal" href="' + app.url + '" target="_blank" rel="noopener">' +
              '<img class="app-icon" src="' + app.icon + '" alt="' + app.name + ' icon" loading="lazy" ' +
                'onerror="this.style.display=\'none\'" />' +
              "<h3>" + app.name + "</h3>" +
              "<p>" + app.desc + "</p>" +
              '<span class="app-link">View on Play Store &rarr;</span>' +
            "</a>"
          );
        })
        .join("");
    }
  }

  /* Sticky header state */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }
})();
