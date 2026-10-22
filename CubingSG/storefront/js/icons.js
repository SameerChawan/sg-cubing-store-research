/* ==========================================================================
   CUBINGSG — SVG Sprite (event tile icons + feature card art + UI glyphs)
   Injected once per page by <script src="js/icons.js"></script>
   Event icons replicate the DailyPuzzles reference grid (Image 1):
   solid neon-green geometry with card-coloured internal cuts.
   ========================================================================== */
(function () {
  "use strict";

  var CARD = "#0d133d"; // used for internal cuts so icons read as solid shapes

  var sprite = `
<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false"><defs>

  <!-- ============================ EVENT TILE ICONS ============================ -->

  <!-- ALL PUZZLES : mixed cluster -->
  <symbol id="i-all" viewBox="0 0 48 48">
    <g fill="currentColor">
    <rect x="3" y="3" width="21" height="21" rx="5"/>
    <g>
      <rect x="29" y="3.5" width="4.6" height="4.6" rx="1.3"/><rect x="35.5" y="3.5" width="4.6" height="4.6" rx="1.3"/><rect x="42" y="3.5" width="3" height="4.6" rx="1.3"/>
      <rect x="29" y="10" width="4.6" height="4.6" rx="1.3"/><rect x="35.5" y="10" width="4.6" height="4.6" rx="1.3"/><rect x="42" y="10" width="3" height="4.6" rx="1.3"/>
      <rect x="29" y="16.5" width="4.6" height="4.6" rx="1.3"/><rect x="35.5" y="16.5" width="4.6" height="4.6" rx="1.3"/><rect x="42" y="16.5" width="3" height="4.6" rx="1.3"/>
    </g>
    <g>
      <rect x="3" y="29" width="4.6" height="4.6" rx="1.2"/><rect x="9.5" y="29" width="4.6" height="4.6" rx="1.2"/><rect x="16" y="29" width="4.6" height="4.6" rx="1.2"/><rect x="22.5" y="29" width="3" height="4.6" rx="1.2"/>
      <rect x="3" y="35.5" width="4.6" height="4.6" rx="1.2"/><rect x="9.5" y="35.5" width="4.6" height="4.6" rx="1.2"/><rect x="16" y="35.5" width="4.6" height="4.6" rx="1.2"/><rect x="22.5" y="35.5" width="3" height="4.6" rx="1.2"/>
      <rect x="3" y="42" width="4.6" height="3.2" rx="1.2"/><rect x="9.5" y="42" width="4.6" height="3.2" rx="1.2"/><rect x="16" y="42" width="4.6" height="3.2" rx="1.2"/><rect x="22.5" y="42" width="3" height="3.2" rx="1.2"/>
    </g>
    <rect x="29" y="29" width="16" height="16" rx="4"/>
    <path d="M29 37h16M37 29v16" stroke="${CARD}" stroke-width="1.5"/>
    </g>
  </symbol>

  <!-- 2x2 -->
  <symbol id="i-2x2" viewBox="0 0 48 48">
    <g fill="currentColor">
    <rect x="6" y="6" width="16" height="16" rx="4.5"/>
    <rect x="26" y="6" width="16" height="16" rx="4.5"/>
    <rect x="6" y="26" width="16" height="16" rx="4.5"/>
    <rect x="26" y="26" width="16" height="16" rx="4.5"/>
    </g>
  </symbol>

  <!-- 3x3 -->
  <symbol id="i-3x3" viewBox="0 0 48 48">
    <g fill="currentColor">
      <circle cx="11" cy="11" r="4.6"/><circle cx="24" cy="11" r="4.6"/><circle cx="37" cy="11" r="4.6"/>
      <circle cx="11" cy="24" r="4.6"/><circle cx="24" cy="24" r="4.6"/><circle cx="37" cy="24" r="4.6"/>
      <circle cx="11" cy="37" r="4.6"/><circle cx="24" cy="37" r="4.6"/><circle cx="37" cy="37" r="4.6"/>
    </g>
  </symbol>

  <!-- 4x4 -->
  <symbol id="i-4x4" viewBox="0 0 48 48">
    <g fill="currentColor">
      <rect x="4" y="4" width="8.5" height="8.5" rx="2.4"/><rect x="14.5" y="4" width="8.5" height="8.5" rx="2.4"/>
      <rect x="25" y="4" width="8.5" height="8.5" rx="2.4"/><rect x="35.5" y="4" width="8.5" height="8.5" rx="2.4"/>
      <rect x="4" y="14.5" width="8.5" height="8.5" rx="2.4"/><rect x="14.5" y="14.5" width="8.5" height="8.5" rx="2.4"/>
      <rect x="25" y="14.5" width="8.5" height="8.5" rx="2.4"/><rect x="35.5" y="14.5" width="8.5" height="8.5" rx="2.4"/>
      <rect x="4" y="25" width="8.5" height="8.5" rx="2.4"/><rect x="14.5" y="25" width="8.5" height="8.5" rx="2.4"/>
      <rect x="25" y="25" width="8.5" height="8.5" rx="2.4"/><rect x="35.5" y="25" width="8.5" height="8.5" rx="2.4"/>
      <rect x="4" y="35.5" width="8.5" height="8.5" rx="2.4"/><rect x="14.5" y="35.5" width="8.5" height="8.5" rx="2.4"/>
      <rect x="25" y="35.5" width="8.5" height="8.5" rx="2.4"/><rect x="35.5" y="35.5" width="8.5" height="8.5" rx="2.4"/>
    </g>
  </symbol>

  <!-- PYRAMINX : triangle subdivided into 9 -->
  <symbol id="i-pyraminx" viewBox="0 0 48 48">
    <polygon points="24,3 44.5,45 3.5,45" fill="currentColor"/>
    <g stroke="${CARD}" stroke-width="1.7" stroke-linecap="round">
      <path d="M17.3 17.7h13.4M10.6 32.1h26.8"/>
      <path d="M17.3 17.7 24 32.1M30.7 17.7 24 32.1"/>
      <path d="M10.6 32.1 17.3 45M24 32.1 17.3 45M24 32.1 30.7 45M37.4 32.1 30.7 45"/>
    </g>
  </symbol>

  <!-- SKEWB : square face with inner diamond -->
  <symbol id="i-skewb" viewBox="0 0 48 48">
    <rect x="6" y="6" width="36" height="36" rx="6" fill="currentColor"/>
    <polygon points="24,14 34,24 24,34 14,24" fill="${CARD}"/>
    <polygon points="24,17 31,24 24,31 17,24" fill="currentColor"/>
  </symbol>

  <!-- MEGAMINX : faceted pentagon -->
  <symbol id="i-megaminx" viewBox="0 0 48 48">
    <polygon points="24,4 43.4,18.5 35.9,41.6 12.1,41.6 4.6,18.5" fill="currentColor"/>
    <g stroke="${CARD}" stroke-width="1.7" stroke-linejoin="round">
      <polygon points="24,15 33.6,22 29.4,33.7 18.6,33.7 14.4,22"/>
      <path d="M24 4v11M43.4 18.5 33.6 22M35.9 41.6 29.4 33.7M12.1 41.6 18.6 33.7M4.6 18.5 14.4 22"/>
    </g>
  </symbol>

  <!-- SQUARE-1 : pinwheel layer -->
  <symbol id="i-square1" viewBox="0 0 48 48">
    <rect x="5" y="5" width="38" height="38" rx="5" fill="currentColor"/>
    <g stroke="${CARD}" stroke-width="1.8" stroke-linecap="round">
      <path d="M24 5v16M24 27v16M5 24h16M27 24h16"/>
      <path d="M24 21 36 12M27 24 40 36M24 27 12 36M21 24 8 12"/>
    </g>
    <circle cx="24" cy="24" r="4.4" fill="${CARD}"/>
  </symbol>

  <!-- CLOCK : dial with pointer -->
  <symbol id="i-clock" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20.5" fill="currentColor"/>
    <g stroke="${CARD}" stroke-width="1.7" stroke-linecap="round">
      <path d="M24 4v5M24 39v5M4 24h5M39 24h5"/>
      <path d="m10 10 3.4 3.4M34.6 34.6 38 38M38 10l-3.4 3.4M13.4 34.6 10 38"/>
    </g>
    <path d="M24 12c4.6 4.4 6.8 8.4 6.8 12 0 3.8-3 6.6-6.8 6.6s-6.8-2.8-6.8-6.6c0-3.6 2.2-7.6 6.8-12z" fill="${CARD}"/>
    <path d="M24 14.4c3.5 3.6 5.1 6.8 5.1 9.6 0 2.9-2.2 5-5.1 5s-5.1-2.1-5.1-5c0-2.8 1.6-6 5.1-9.6z" fill="currentColor"/>
  </symbol>

  <!-- ========================= FEATURE CARD WATERMARK ========================= -->
  <symbol id="wm-cube" viewBox="0 0 100 100">
    <g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round">
      <path d="M15 32 50 12l35 20-35 20z"/>
      <path d="M15 32v36l35 20 35-20V32"/>
      <path d="M50 52v36"/>
    </g>
  </symbol>

  <!-- ========================= FEATURE CARD ART ========================= -->

  <!-- ALL PRODUCTS : three wireframe puzzle outlines -->
  <symbol id="f-all" viewBox="0 0 150 62">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round">
      <rect x="2" y="9" width="42" height="42" rx="6"/>
      <path d="M23 9v42M2 30h42"/>
      <polygon points="97,7 118,52 76,52"/>
      <path d="M87 30h20M82 41h30M97 7v45"/>
      <rect x="122" y="9" width="26" height="42" rx="5"/>
      <path d="M135 9v42M122 30h26M135 22l9 8M135 38l-9-8"/>
    </g>
  </symbol>

  <!-- BEST SELLERS : ribbon banner -->
  <symbol id="f-best" viewBox="0 0 150 62">
    <g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
      <path d="M6 16h22v30H6l8-15z"/>
      <path d="M144 16h-22v30h22l-8-15z"/>
      <rect x="34" y="11" width="82" height="40" rx="5"/>
    </g>
    <text x="75" y="40" text-anchor="middle" fill="currentColor"
          font-family="Inter, Segoe UI, sans-serif" font-size="24" font-weight="900" letter-spacing="1.5">BEST</text>
  </symbol>

  <!-- NEW! : shopping bag with smile -->
  <symbol id="f-new" viewBox="0 0 150 62">
    <g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">
      <path d="M6 20h44l-4 34a5 5 0 0 1-5 4.4H15A5 5 0 0 1 10 54z"/>
      <path d="M18 20v-4a10 10 0 0 1 20 0v4"/>
    </g>
    <g fill="currentColor">
      <circle cx="20" cy="33" r="2.6"/><circle cx="36" cy="33" r="2.6"/>
    </g>
    <path d="M20 42c3.6 4 12.4 4 16 0" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
    <text x="122" y="45" text-anchor="middle" fill="currentColor"
          font-family="Inter, Segoe UI, sans-serif" font-size="34" font-weight="900" letter-spacing="0.5">NEW!</text>
  </symbol>

  <!-- ACCESSORIES & LIFESTYLE : backpack + lube + tee -->
  <symbol id="f-acc" viewBox="0 0 150 62">
    <g fill="none" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round">
      <path d="M10 26a10 10 0 0 1 20 0v24a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z"/>
      <path d="M15 26v-4a5 5 0 0 1 10 0v4"/>
      <rect x="12" y="38" width="16" height="12" rx="3"/>
      <path d="M52 8h8v6l4 4v32a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V18l4-4z"/>
      <path d="M48 30h16"/>
      <path d="M84 18h32l-4 8v28a4 4 0 0 1-4 4H92a4 4 0 0 1-4-4V26z"/>
      <path d="M92 18v-4a8 8 0 0 1 16 0v4"/>
    </g>
  </symbol>

  <!-- ============================== UI GLYPHS ============================== -->
  <symbol id="u-search" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></g></symbol>
  <symbol id="u-user" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></g></symbol>
  <symbol id="u-heart" viewBox="0 0 24 24"><path d="M12 20s-7.5-4.7-7.5-10a4.5 4.5 0 0 1 7.5-3.3A4.5 4.5 0 0 1 19.5 10c0 5.3-7.5 10-7.5 10z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></symbol>
  <symbol id="u-cart" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3h2.2l2.3 11.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.5L21 7H6"/><circle cx="9.5" cy="20" r="1.4"/><circle cx="17.5" cy="20" r="1.4"/></g></symbol>
  <symbol id="u-chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="u-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="u-arrow" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></g></symbol>

</defs></svg>`;

  function mount() {
    if (document.getElementById("cubingsg-sprite")) return;
    var holder = document.createElement("div");
    holder.id = "cubingsg-sprite";
    holder.setAttribute("aria-hidden", "true");
    holder.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
    holder.innerHTML = sprite;
    document.body.insertBefore(holder, document.body.firstChild);
  }

  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);

  window.CubingIcons = {
    sprite: sprite,
    mount: mount,
    icon: function (id, cls) {
      return '<svg class="' + (cls || "") + '" aria-hidden="true" focusable="false"><use href="#' + id + '"/></svg>';
    },
  };
})();