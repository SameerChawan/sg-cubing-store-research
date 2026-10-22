/* ==========================================================================
   CUBINGSG — Cube Finder Engine
   4-step wizard + "Surprise Me!" + quick presets.
   Scoring: size 40 | persona 26 | budget 20 | feel 14
   ========================================================================== */
(function () {
  "use strict";

  var D = window.CubingData;

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function money(n) {
    return "$" + (Math.round(n * 100) / 100).toLocaleString("en-SG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  /* ------------------------------------------------------------ scoring */
  function score(p, ans) {
    var s = 0;
    if (p.size.indexOf(ans.size) !== -1) s += 40;
    if (p.persona.indexOf(ans.persona) !== -1) s += 26;

    var d = Math.abs(p.tier - parseInt(ans.tier, 10));
    s += d === 0 ? 20 : d === 1 ? 12 : 4;

    if (p.feel.indexOf(ans.feel) !== -1) s += 14;
    if (p.hot) s += 2;
    if (p.fun && (ans.size === "specialty" || ans.size === "event")) s += 3;
    return s;
  }

  function rank(ans) {
    return D.products
      .map(function (p) { return { p: p, s: score(p, ans) }; })
      .sort(function (a, b) { return b.s - a.s; });
  }

  /* ------------------------------------------------------------- render */
  function resultBlock(item) {
    var p = item.p || item;
    var was = "";
    if (p.was && p.was > p.price) {
      var off = Math.round(((p.was - p.price) / p.was) * 100);
      was =
        " <s>" + money(p.was) + "</s> " +
        '<span style="color:var(--green);font-size:12px;font-weight:800">Save ' + off + "%</span>";
    }

    var chips = p.chips
      .map(function (c) {
        var hot = /ball-core|maglev|magdrive|competition|wca|uv|bluetooth/i.test(c);
        return '<span class="chip' + (hot ? " chip--hot" : "") + '">' + esc(c) + "</span>";
      })
      .join("");

    return (
      '<div class="result-hero">' +
        '<div class="result-hero__art">' + D.iconSvg(p, 118) + "</div>" +
        "<div>" +
          '<div class="result-hero__eyebrow">' + esc(p.brand) + " · " + esc(p.category) + "</div>" +
          "<h3>" + esc(p.name) + "</h3>" +
          '<div class="result-hero__price">' + money(p.price) + was + "</div>" +
          '<div class="chips">' + chips + "</div>" +
          '<p class="result-hero__why">' + esc(p.blurb) + "</p>" +
          '<div class="result-hero__actions">' +
            '<button class="btn btn--primary" data-add="' + esc(p.id) + '">Add to cart</button>' +
            '<button class="btn btn--ghost" data-restart>Start over</button>' +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function altBlock(items) {
    if (!items.length) return "";
    return (
      '<div class="alt-title">Other strong matches</div><div class="alt-grid">' +
        items
          .map(function (it) {
            var p = it.p || it;
            return (
              '<button class="alt" data-add="' + esc(p.id) + '">' +
                '<span class="alt__art">' + D.iconSvg(p, 34) + "</span>" +
                "<span>" +
                  '<span class="alt__name">' + esc(p.name) + "</span>" +
                  '<span class="alt__desc">' + esc(p.blurb.split(".")[0]) + ".</span>" +
                  '<span class="alt__price">' + money(p.price) + "</span>" +
                "</span>" +
              "</button>"
            );
          })
          .join("") +
      "</div>"
    );
  }

  /* --------------------------------------------------------------- init */
  function init(root) {
    if (!D || root.dataset.finderReady) return;
    root.dataset.finderReady = "1";

    var answers = {};
    var idx = 0;
    var history = [];

    var shell = el("div", "finder__shell");

    /* intro */
    shell.appendChild(
      el(
        "div",
        "finder__intro",
        '<h2>Find your next cube</h2>' +
          "<p>Answer four quick questions and we will match you to the right puzzle — with the reasoning, not just the product.</p>"
      )
    );

    /* progress rail */
    var rail = el("div", "finder__steps");
    D.steps.forEach(function (s) {
      var n = el("div", "finder__step");
      n.innerHTML =
        '<div class="finder__step-bar"><span></span></div>' +
        '<div class="finder__step-label">' + esc(s.label) + "</div>";
      rail.appendChild(n);
    });
    shell.appendChild(rail);

    /* panels */
    var stage = el("div", "finder__stage");
    shell.appendChild(stage);

    D.steps.forEach(function (s, i) {
      var p = el("div", "finder__panel");
      p.dataset.step = String(i);
      p.innerHTML =
        '<h3 class="finder__q">' + esc(s.title) + "</h3>" +
        '<div class="opt-grid">' +
          s.options
            .map(function (o) {
              return (
                '<button class="opt" data-key="' + s.key + '" data-v="' + esc(o.v) + '">' +
                  '<span class="opt__ico">' + o.i + "</span>" +
                  '<span class="opt__txt">' +
                    '<span class="opt__title">' + esc(o.t) + "</span>" +
                    '<span class="opt__desc">' + esc(o.d) + "</span>" +
                  "</span>" +
                  '<span class="opt__check"><svg viewBox="0 0 24 24"><use href="#u-check"/></svg></span>' +
                "</button>"
              );
            })
            .join("") +
        "</div>";
      stage.appendChild(p);
    });

    /* quick presets */
    var presetWrap = el("div");
    presetWrap.innerHTML =
      '<div class="alt-title" style="text-align:center">Or pick a common scenario</div>' +
      '<div class="pills">' +
        [
          ["competition", "Best 3x3 for competition"],
          ["upgrade", "Upgrade 3x3 for an intermediate solver"],
          ["kidstart", "My kid is just starting out"],
          ["smart", "A smart cube that connects to an app"],
          ["nextcube", "A 4x4 for when 3x3 feels easy"],
          ["budgetpremium", "A budget 3x3 that still feels premium"],
        ]
          .map(function (p) {
            return '<button class="pill" data-preset="' + p[0] + '">' + esc(p[1]) + "</button>";
          })
          .join("") +
      "</div>" +
      '<div style="text-align:center;margin-top:16px">' +
        '<button class="btn btn--ghost btn--sm" data-surprise>🎲 Surprise me</button>' +
      "</div>";
    stage.appendChild(presetWrap);

    /* footer controls */
    var nav = el("div", "finder__nav");
    nav.innerHTML =
      '<button class="btn btn--ghost btn--sm finder__back" data-back>&larr; Back</button>' +
      '<span class="finder__spacer"></span>' +
      '<span class="finder__note" style="margin:0">All recommendations are in stock in Singapore.</span>';
    shell.appendChild(nav);

    /* result */
    var result = el("div", "finder__result");
    stage.appendChild(result);

    root.appendChild(shell);

    /* ------------------------------------------------------- behaviour */
    function paintRail() {
      var nodes = rail.children;
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].classList.toggle("is-current", i === idx);
        nodes[i].classList.toggle("is-done", i < idx);
      }
    }

    function show(i) {
      idx = i;
      result.classList.remove("is-active");
      var panels = stage.querySelectorAll(".finder__panel");
      for (var k = 0; k < panels.length; k++) panels[k].classList.toggle("is-active", Number(panels[k].dataset.step) === i);
      presetWrap.style.display = i === 0 ? "" : "none";
      rail.style.display = i === 0 ? "" : "none";
      nav.style.display = i === 0 ? "none" : "";
      paintRail();

      // restore prior picks
      for (var j = 0; j < panels.length; j++) {
        var key = panels[j].dataset.step;
        void key;
      }
      var cur = stage.querySelector('.finder__panel[data-step="' + i + '"]');
      if (cur) {
        var stepKey = D.steps[i].key;
        var picked = answers[stepKey];
        var opts = cur.querySelectorAll(".opt");
        for (var m = 0; m < opts.length; m++) {
          opts[m].classList.toggle("is-picked", opts[m].dataset.v === String(picked));
        }
      }
    }

    function reveal() {
      var ranked = rank(answers);
      var top = ranked[0];
      var alts = ranked.slice(1, 4);
      result.innerHTML = resultBlock(top) + altBlock(alts);
      rail.style.display = "none";
      presetWrap.style.display = "none";
      nav.style.display = "none";
      Array.prototype.forEach.call(stage.querySelectorAll(".finder__panel"), function (n) {
        n.classList.remove("is-active");
      });
      result.classList.add("is-active");
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function pick(key, v) {
      answers[key] = v;
      history.push(key);
      if (idx < D.steps.length - 1) {
        setTimeout(function () { show(idx + 1); }, 190);
      } else {
        setTimeout(reveal, 190);
      }
    }

    shell.addEventListener("click", function (e) {
      var opt = e.target.closest(".opt");
      if (opt) { pick(opt.dataset.key, opt.dataset.v); return; }

      var back = e.target.closest("[data-back]");
      if (back && idx > 0) { show(idx - 1); return; }

      var rs = e.target.closest("[data-restart]");
      if (rs) {
        answers = {}; history = [];
        result.classList.remove("is-active");
        result.innerHTML = "";
        show(0);
        return;
      }

      var pr = e.target.closest("[data-preset]");
      if (pr) {
        var preset = D.presets[pr.dataset.preset];
        if (preset) { Object.keys(preset).forEach(function (k) { answers[k] = preset[k]; }); reveal(); }
        return;
      }

      if (e.target.closest("[data-surprise]")) {
        // weight toward the fun/unusual shelf
        var pool = D.products.filter(function (p) { return p.fun; });
        var all = D.products.slice();
        var pickFrom = (Math.random() < 0.62 && pool.length) ? pool : all;
        var choice = pickFrom[Math.floor(Math.random() * pickFrom.length)];
        answers = { persona: "intermediate", size: choice.size[0], tier: String(choice.tier), feel: choice.feel[0] };
        reveal();
        var n = result.querySelector(".result-hero__eyebrow");
        if (n) {
          var tag = el("div", "finder__note");
          tag.style.textAlign = "center";
          tag.innerHTML = "🎲 <strong style=\"color:var(--green)\">Surprise pick</strong> — this one is not on any speedcuber&rsquo;s wishlist. Good.";
          n.parentNode.insertBefore(tag, result.querySelector(".chips"));
        }
        return;
      }

      var add = e.target.closest("[data-add]");
      if (add) {
        var id = add.dataset.add;
        var p = D.byId(id);
        window.dispatchEvent(new CustomEvent("cubingsg:addtocart", { detail: { id: id, name: p ? p.name : id } }));
        add.textContent = "Added ✓";
        add.disabled = true;
        add.style.opacity = ".65";
        setTimeout(function () {
          add.textContent = "Add to cart";
          add.disabled = false;
          add.style.opacity = "";
        }, 1600);
      }
    });

    show(0);
  }

  function boot() {
    var nodes = document.querySelectorAll("[data-cube-finder]");
    for (var i = 0; i < nodes.length; i++) init(nodes[i]);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();