/* ==========================================================================
   CUBINGSG — Site behaviour
   Mega menu (hover desktop / click mobile) · predictive search · cart · FAQ
   ========================================================================== */
(function () {
  "use strict";

  var D = window.CubingData || null;
  var ICON = (window.CubingIcons && window.CubingIcons.icon) || function () { return ""; };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function money(n) {
    return "$" + (Math.round(n * 100) / 100).toLocaleString("en-SG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  /* ============================================================== MEGA MENU */
  function megaMenu() {
    var triggers = document.querySelectorAll("[data-mega-trigger]");
    var panels = document.querySelectorAll("[data-mega]");
    if (!panels.length) return;

    var openPanel = null;
    var closeTimer = null;

    function open(panel) {
      if (openPanel === panel) return;
      if (openPanel) close(openPanel);
      panel.classList.add("is-open");
      var btn = document.querySelector('[data-mega-trigger="' + panel.dataset.mega + '"]');
      if (btn) btn.setAttribute("aria-expanded", "true");
      openPanel = panel;
    }

    function close(panel) {
      panel.classList.remove("is-open");
      var btn = document.querySelector('[data-mega-trigger="' + panel.dataset.mega + '"]');
      if (btn) btn.setAttribute("aria-expanded", "false");
      if (openPanel === panel) openPanel = null;
    }

    function closeAll() {
      if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
      Array.prototype.forEach.call(panels, close);
    }

    Array.prototype.forEach.call(triggers, function (btn) {
      var panel = document.querySelector('[data-mega="' + btn.dataset.megaTrigger + '"]');
      if (!panel) return;

      btn.addEventListener("mouseenter", function () { open(panel); });
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        panel.classList.contains("is-open") ? close(panel) : open(panel);
      });

      // keyboard
      btn.addEventListener("focus", function () { open(panel); });
      btn.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") { e.preventDefault(); open(panel); var f = panel.querySelector("a,button"); if (f) f.focus(); }
      });
    });

    Array.prototype.forEach.call(panels, function (panel) {
      panel.addEventListener("mouseenter", function () { if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; } });
      panel.addEventListener("mouseleave", function () {
        closeTimer = setTimeout(function () { close(panel); }, 160);
      });
    });

    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(); });
    document.addEventListener("click", function (e) {
      if (!e.target.closest("[data-mega]") && !e.target.closest("[data-mega-trigger]")) closeAll();
    });
    window.addEventListener("scroll", function () { if (window.scrollY > 40) closeAll(); }, { passive: true });
  }

  /* ============================================================ CART BADGE */
  var cartCount = 0;
  function bumpCart() {
    cartCount += 1;
    var n = document.querySelector("[data-cart-count]");
    if (!n) return;
    n.textContent = String(cartCount);
    n.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.45)" },
        { transform: "scale(1)" },
      ],
      { duration: 380, easing: "ease-out" }
    );
  }
  window.addEventListener("cubingsg:addtocart", bumpCart);

  /* ========================================================= SEARCH (Fibo) */
  function search() {
    var form = document.querySelector("[data-search-form]");
    var input = document.querySelector("[data-search-input]");
    var panel = document.querySelector("[data-search-panel]");
    if (!form || !input || !panel || !D) return;

    var cursor = -1;

    function hits(q) {
      if (!q) return [];
      var s = q.toLowerCase().trim();
      var words = s.split(/\s+/);
      return D.products
        .map(function (p) {
          var hay = (p.name + " " + p.brand + " " + p.category + " " + p.chips.join(" ") + " " + p.blurb).toLowerCase();
          var score = 0;
          words.forEach(function (w) { if (hay.indexOf(w) !== -1) score += 2; });
          if (p.name.toLowerCase().indexOf(s) === 0) score += 6;
          else if (p.brand.toLowerCase().indexOf(s) === 0) score += 4;
          if (p.category.toLowerCase().indexOf(s) !== -1) score += 2;
          return { p: p, s: score };
        })
        .filter(function (r) { return r.s > 0; })
        .sort(function (a, b) { return b.s - a.s; })
        .slice(0, 6)
        .map(function (r) { return r.p; });
    }

    function render(q) {
      var list = hits(q);
      cursor = -1;

      if (!q) {
        panel.innerHTML =
          '<div class="search__group-label">Popular searches</div>' +
          ["3x3 magnetic", "beginner cube", "pyraminx", "under $15", "GAN", "mirror cube"]
            .map(function (t) { return '<div class="search__item" data-suggest="' + esc(t) + '"><span class="search__thumb">⌕</span><span class="search__meta"><span class="search__name">' + esc(t) + "</span></span></div>"; })
            .join("");
      } else if (!list.length) {
        panel.innerHTML = '<div class="search__empty">No cubes match &ldquo;' + esc(q) + '&rdquo;. Try &ldquo;3x3&rdquo;, &ldquo;beginner&rdquo; or &ldquo;magnetic&rdquo;.</div>';
      } else {
        panel.innerHTML =
          '<div class="search__group-label">' + list.length + " result" + (list.length > 1 ? "s" : "") + "</div>" +
          list
            .map(function (p) {
              return (
                '<a class="search__item" href="#product-grid">' +
                  '<span class="search__thumb">' + D.iconSvg(p, 24) + "</span>" +
                  '<span class="search__meta">' +
                    '<span class="search__name">' + esc(p.name) + "</span>" +
                    '<span class="search__sub">' + esc(p.brand) + " · " + esc(p.category) + "</span>" +
                  "</span>" +
                  '<span class="search__price">' + money(p.price) + "</span>" +
                "</a>"
              );
            })
            .join("");
      }
      panel.classList.add("is-open");
    }

    function close() { panel.classList.remove("is-open"); cursor = -1; }

    input.addEventListener("input", function () { render(input.value.trim()); });
    input.addEventListener("focus", function () { render(input.value.trim()); });

    input.addEventListener("keydown", function (e) {
      var items = panel.querySelectorAll(".search__item");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!items.length) return;
        if (cursor >= 0) items[cursor].classList.remove("is-active");
        cursor = e.key === "ArrowDown"
          ? (cursor + 1) % items.length
          : (cursor - 1 + items.length) % items.length;
        items[cursor].classList.add("is-active");
        items[cursor].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" && cursor >= 0 && items[cursor]) {
        e.preventDefault();
        input.value = items[cursor].textContent.trim().split(" ")[0] || "";
        close();
        document.getElementById("product-grid").scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "Escape") {
        close();
        input.blur();
      }
    });

    panel.addEventListener("click", function (e) {
      var s = e.target.closest("[data-suggest]");
      if (s) { input.value = s.dataset.suggest; render(s.dataset.suggest); input.focus(); }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      close();
      document.getElementById("product-grid").scrollIntoView({ behavior: "smooth" });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search")) close();
    });
  }

  /* ============================================================== FAQ LIST */
  function faq() {
    document.addEventListener("click", function (e) {
      var q = e.target.closest(".faq__q");
      if (!q) return;
      var item = q.closest(".faq__item");
      var body = item.querySelector(".faq__a");
      var open = item.classList.toggle("is-open");
      body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
      item.querySelector(".faq__q").setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ============================================================== MOBILE NAV */
  function mobileNav() {
    var burger = document.querySelector("[data-burger]");
    var nav = document.querySelector("[data-nav]");
    if (!burger || !nav) return;
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-mobile-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.textContent = open ? "✕" : "☰";
    });
  }

  /* ============================================================== RENDER GRID */
  function renderGrid() {
    var grid = document.querySelector("[data-product-grid]");
    if (!grid || !D) return;
    var show = Number(grid.dataset.limit || 8);
    grid.innerHTML = D.products.slice(0, show)
      .map(function (p) {
        var off = p.was && p.was > p.price ? Math.round(((p.was - p.price) / p.was) * 100) : 0;
        var tint = D.tintFor(p.id);
        return (
          '<article class="prod">' +
            '<div class="prod__media" style="background:linear-gradient(155deg,' + tint[0] + "," + tint[1] + ')">' +
              '<div class="prod__flags">' +
                (off ? '<span class="flag flag--sale">' + off + "% Off</span>" : "") +
                (p.hot ? '<span class="flag flag--hot">Popular</span>' : "") +
                (p.fun ? '<span class="flag flag--new">Fun</span>' : "") +
              "</div>" +
              D.iconSvg(p, 54) +
              '<div class="prod__quick"><button class="btn btn--primary btn--sm" style="width:100%" data-add="' + esc(p.id) + '">Quick add</button></div>' +
            "</div>" +
            '<div class="prod__body">' +
              '<span class="prod__brand">' + esc(p.brand) + "</span>" +
              '<span class="prod__name">' + esc(p.name) + "</span>" +
              '<span class="prod__meta">' + esc(p.chips.join(" · ")) + "</span>" +
              '<span class="prod__price">' +
                '<span class="prod__now">' + money(p.price) + "</span>" +
                (p.was && p.was > p.price ? '<span class="prod__was">' + money(p.was) + "</span>" : "") +
              "</span>" +
            "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function delegateAdds() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-add]");
      if (!b) return;
      var id = b.dataset.add;
      var p = D && D.byId(id);
      window.dispatchEvent(new CustomEvent("cubingsg:addtocart", { detail: { id: id, name: p ? p.name : id } }));
      var old = b.textContent;
      b.textContent = "Added ✓";
      setTimeout(function () { b.textContent = old; }, 1500);
    });
  }

  /* ================================================================= BOOT */
  function boot() {
    megaMenu();
    search();
    faq();
    mobileNav();
    renderGrid();
    delegateAdds();
    void ICON;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();