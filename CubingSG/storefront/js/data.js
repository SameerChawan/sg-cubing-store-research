/* ==========================================================================
   CUBINGSG — Catalog data (shared by predictive search + Cube Finder)
   Pricing benchmarked against SG market (Oct 2026): SGD.
   persona: beginner | intermediate | competitive | parent
   size:    3x3 | 2x2 | big | event | specialty
   tier:    1 (<$15)  2 ($15-35)  3 ($40-110)
   feel:    fast | controlled | tactile
   ========================================================================== */
(function () {
  "use strict";

  var PRODUCTS = [
    {
      id: "moyu-rs3m-v5",
      name: "MoYu RS3M V5 3x3 (Magnetic, Ball-Core, UV)",
      brand: "MoYu",
      price: 32,
      was: 37,
      icon: "🧊",
      category: "3x3 Speed Cubes",
      blurb: "Tournament-grade ball-core feel without the flagship invoice. The default recommendation for anyone who already solves the beginner method and wants to get serious.",
      chips: ["20M Ball-Core", "UV Coated", "Hand-tuned"],
      hot: true,
      persona: ["intermediate", "competitive", "parent"],
      size: ["3x3"],
      tier: 2,
      feel: ["fast", "controlled"],
    },
    {
      id: "yujihao-rs3",
      name: "YuQi Hao RS3 M V5 3x3 (Magnetic, 9-step tension)",
      brand: "YuQi Hao",
      price: 12.5,
      was: 15,
      icon: "🧊",
      category: "3x3 Speed Cubes",
      blurb: "The single best value cube on the planet. Dual adjustment lets you dial spring tension in seconds without disassembly — which is exactly why it survives first-time buyers.",
      chips: ["Magnetic", "9-level tension", "No tools needed"],
      hot: true,
      persona: ["beginner", "parent"],
      size: ["3x3"],
      tier: 1,
      feel: ["fast"],
    },
    {
      id: "dayan-guhong-pro",
      name: "DaYan GuHong Pro M 3x3 (MagLev, 55mm)",
      brand: "DaYan",
      price: 24,
      was: 29,
      icon: "🧊",
      category: "3x3 Speed Cubes",
      blurb: "Silent MagLev internals — no spring rattle, no plastic-on-plastic grind. The cube you forget you are holding. Excellent first 'proper' upgrade.",
      chips: ["MagLev", "Silent", "Factory lubed"],
      persona: ["intermediate", "parent"],
      size: ["3x3"],
      tier: 2,
      feel: ["controlled"],
    },
    {
      id: "moyu-weilong-v10",
      name: "MoYu WeiLong WRM V10 3x3 (20-Magnet Ball-Core, MagLev, UV)",
      brand: "MoYu",
      price: 58,
      was: 66,
      icon: "🧊",
      category: "3x3 Speed Cubes",
      blurb: "Sits permanently on the world-record charts. If you compete, this is the cube you will actually be holding at a WCA event.",
      chips: ["20M Ball-Core", "MagLev", "UV", "Competition spec"],
      persona: ["competitive"],
      size: ["3x3"],
      tier: 3,
      feel: ["fast", "tactile"],
    },
    {
      id: "gan-16-maglev",
      name: "GAN 16 Max 3x3 (MagDrive, Magnetic, UV Coated)",
      brand: "GAN",
      price: 98,
      was: 118,
      icon: "🧊",
      category: "3x3 Speed Cubes",
      blurb: "MagDrive self-aligning rails. Featherweight and impossibly smooth. The flagship when money is not the constraint.",
      chips: ["MagDrive", "3rd-gen MagLev", "UV", "Flagship"],
      persona: ["competitive"],
      size: ["3x3"],
      tier: 3,
      feel: ["controlled", "fast"],
    },
    {
      id: "gan-12-maglev",
      name: "GAN 12 MagLev 3x3 (Magnetic, Third-Generation MagLev)",
      brand: "GAN",
      price: 62,
      was: 72,
      icon: "🧊",
      category: "3x3 Speed Cubes",
      blurb: "The most decorated cube in WCA history. Silky-smooth MagLev travel with full magnetic control — a near-endless favourite.",
      chips: ["3rd-gen MagLev", "20M", "WCA-winning"],
      persona: ["competitive"],
      size: ["3x3"],
      tier: 3,
      feel: ["controlled"],
    },
    {
      id: "qiyi-m-pro-2x2",
      name: "QiYi M Pro 2x2 (Magnetic, 4.5-inch)",
      brand: "QiYi",
      price: 8.5,
      was: 11,
      icon: "🎲",
      category: "2x2 Pocket Cubes",
      blurb: "Pocket-sized, hand-sized price. The standard 2x2 in every Singapore cubing club. Trivial to learn, genuinely fun to master.",
      chips: ["Magnetic", "Pocket size", "Beginner friendly"],
      persona: ["beginner", "parent"],
      size: ["2x2"],
      tier: 1,
      feel: ["fast"],
    },
    {
      id: "yujihao-mini-2x2",
      name: "YuQi Hao QiFa 2x2 (Magnetic, 4.5-inch)",
      brand: "YuQi Hao",
      price: 11,
      was: 13,
      icon: "🎲",
      category: "2x2 Pocket Cubes",
      blurb: "Magnetic 2x2 at a price that embarrasses the big brands. Great for kids who lose things — replaceable, cheap, still fast.",
      chips: ["Magnetic", "4.5-inch", "Great value"],
      persona: ["beginner", "parent"],
      size: ["2x2"],
      tier: 1,
      feel: ["tactile"],
    },
    {
      id: "sengso-mosheng-4x4",
      name: "Sengso Mosheng 4x4 (Magnetic, 3-inch)",
      brand: "Sengso",
      price: 14,
      was: 18,
      icon: "🧊",
      category: "4x4+ Speed Cubes",
      blurb: "The classic 4x4 to buy when a 3x3 stops being enough. Even layer alignment means no getting lost halfway through a solve.",
      chips: ["Magnetic", "Even layers", "Silent"],
      persona: ["intermediate"],
      size: ["big"],
      tier: 1,
      feel: ["controlled"],
    },
    {
      id: "moyu-aochuang-4x4",
      name: "MoYu AoChuang WRM 4x4 (Magnetic, UV Coated)",
      brand: "MoYu",
      price: 38,
      was: 44,
      icon: "🧊",
      category: "4x4+ Speed Cubes",
      blurb: "Proper 4x4 performance with corner-cutting edge control. The step-up once you want to compete in the WCA 4x4 event.",
      chips: ["Magnetic", "UV", "Competition spec"],
      persona: ["competitive"],
      size: ["big"],
      tier: 2,
      feel: ["fast", "tactile"],
    },
    {
      id: "qiyi-mirror-blocks",
      name: "QiYi Mirror Blocks 3x3 (Shape-Shifting Cube)",
      brand: "QiYi",
      price: 12,
      was: 15,
      icon: "🪞",
      category: "Shape Mods",
      blurb: "Solid-colour mirror cube. There is no colour to memorise — you solve it blindfolded by touch. Genuinely mind-bending, and a brilliant first 'wow' cube.",
      chips: ["Shape mod", "Blindfold-able", "Glow stickers"],
      persona: ["beginner", "intermediate", "parent"],
      size: ["specialty"],
      tier: 1,
      feel: ["tactile"],
      fun: true,
    },
    {
      id: "qiyi-pyraminx",
      name: "QiYi Smart Cube Pyraminx (Magnetic, Stickerless)",
      brand: "QiYi",
      price: 9,
      was: 12,
      icon: "🔺",
      category: "WCA Events",
      blurb: "Only four pieces, one turn each. The easiest WCA event to enter and a brilliant first 'official event' for a child.",
      chips: ["Magnetic", "WCA event", "4 pieces"],
      persona: ["beginner", "parent"],
      size: ["event"],
      tier: 1,
      feel: ["tactile"],
      fun: true,
    },
    {
      id: "yujihao-ygm350",
      name: "YuQi Hao YGM350 3x3 (Magnetic, UV)",
      brand: "YuQi Hao",
      price: 25,
      was: 29,
      icon: "🧊",
      category: "3x3 Speed Cubes",
      blurb: "A very quiet, very controlled magnetic cube from one of the most consistent budget manufacturers. Underrated and cheap.",
      chips: ["Magnetic", "UV", "Silent"],
      persona: ["beginner", "intermediate", "parent"],
      size: ["3x3"],
      tier: 2,
      feel: ["controlled"],
    },
    {
      id: "moyu-ai-smart",
      name: "MoYu AI Smart Cube 3x3 (Bluetooth 5.1, Magnetic, UV)",
      brand: "MoYu",
      price: 36,
      was: 42,
      icon: "📱",
      category: "Smart Cubes",
      blurb: "Tracks every turn over Bluetooth and shows your cube in 3D on a phone. Turns learning into something a child will not put down.",
      chips: ["Bluetooth 5.1", "App control", "Magnetic", "UV"],
      persona: ["beginner", "parent"],
      size: ["specialty"],
      tier: 2,
      feel: ["tactile"],
    },
    {
      id: "qiyi-clock",
      name: "QiYi Magic Clock (Magnetic, Aluminium Body)",
      brand: "QiYi",
      price: 28,
      was: 34,
      icon: "🕐",
      category: "WCA Events",
      blurb: "Sixteen independent clock faces and two sets of hands. A serious WCA event that looks like desk jewellery.",
      chips: ["Magnetic", "WCA event", "Aluminium"],
      persona: ["intermediate"],
      size: ["event"],
      tier: 2,
      feel: ["tactile"],
    },
    {
      id: "moyu-megaminx-sticky",
      name: "MoYu AoChuang Megaminx (Magnetic, Stickerless)",
      brand: "MoYu",
      price: 7.5,
      was: 10,
      icon: "🛐",
      category: "WCA Events",
      blurb: "The WCA Megaminx event in every beginner's hands. Twelve faces, and somehow easier than a 3x3 the moment it clicks.",
      chips: ["Magnetic", "WCA event", "Stickerless"],
      persona: ["beginner", "parent"],
      size: ["event"],
      tier: 1,
      feel: ["fast"],
      fun: true,
    },
    {
      id: "qiyi-ice-amber",
      name: "QiYi Ice Amber Mirror Block 3x3 (Shape-Shifting)",
      brand: "QiYi",
      price: 13,
      was: 16,
      icon: "🟨",
      category: "Shape Mods",
      blurb: "Amber acrylic that lights up under UV. Beautiful object, brain-bending puzzle, and a gift that never gets thrown away.",
      chips: ["Shape mod", "UV reactive", "Acrylic"],
      persona: ["intermediate", "parent"],
      size: ["specialty"],
      tier: 1,
      feel: ["tactile"],
      fun: true,
    },
  ];

  /* Finder question set ------------------------------------------------- */
  var STEPS = [
    {
      key: "persona",
      label: "Who is it for?",
      title: "Who are you shopping for?",
      options: [
        { v: "beginner", t: "A complete beginner", d: "Learning the method for the first time. Needs to be forgiving, quiet and hard to break.", i: "🌱" },
        { v: "intermediate", t: "An intermediate solver", d: "Solving comfortably but chasing faster times. Wants control and tuning.", i: "⚡" },
        { v: "competitive", t: "A competitive speedcuber", d: "Competes in WCA events. Wants ball-core, MagLev and UV — no compromises.", i: "🏆" },
        { v: "parent", t: "A parent buying a gift", d: "You want something that works immediately and will not end up in a drawer.", i: "🎁" },
      ],
    },
    {
      key: "size",
      label: "Which puzzle?",
      title: "What kind of puzzle are you after?",
      options: [
        { v: "3x3", t: "The classic 3x3", d: "The competition standard. Roughly 80% of everything we sell.", i: "🧊" },
        { v: "2x2", t: "A 2x2 pocket cube", d: "One quarter of the pieces. Fits in a pocket, solves in seconds.", i: "🎲" },
        { v: "big", t: "A 4x4 or bigger", d: "More pieces, more challenge, and a genuine next step up.", i: "🧱" },
        { v: "event", t: "A WCA event cube", d: "Pyraminx, Megaminx, Skewb, Square-1 or Clock. Official competition events.", i: "🔺" },
        { v: "specialty", t: "Something unusual", d: "Shape mods, smart cubes, novelty puzzles. The 'gift that surprises' shelf.", i: "✨" },
      ],
    },
    {
      key: "tier",
      label: "Budget",
      title: "What is your budget?",
      options: [
        { v: "1", t: "Under $15 SGD", d: "The value tier. Genuinely excellent cubes live here — you lose nothing essential.", i: "💰" },
        { v: "2", t: "$15 – $35 SGD", d: "The performance sweet spot. Ball-core and MagLev become affordable here.", i: "💎" },
        { v: "3", t: "$40 – $110 SGD", d: "Flagship territory. Competition-spec internals and flagship engineering.", i: "👑" },
      ],
    },
    {
      key: "feel",
      label: "Turning feel",
      title: "What turning feel do you prefer?",
      options: [
        { v: "fast", t: "Light and fast", d: "Low friction, snaps into place. Rewards fast fingers.", i: "💨" },
        { v: "controlled", t: "Smooth and controlled", d: "Effortless, silent, forgiving. Great for learning and for long sessions.", i: "🎯" },
        { v: "tactile", t: "Crisp and magnetic", d: "A definite click into position. Maximum confidence at speed.", i: "🧲" },
      ],
    },
  ];

  var PRESETS = {
    competition: { persona: "competitive", size: "3x3", tier: "3", feel: "fast" },
    upgrade: { persona: "intermediate", size: "3x3", tier: "2", feel: "controlled" },
    kidstart: { persona: "beginner", size: "3x3", tier: "1", feel: "controlled" },
    smart: { persona: "parent", size: "specialty", tier: "2", feel: "tactile" },
    nextcube: { persona: "intermediate", size: "big", tier: "2", feel: "fast" },
    budgetpremium: { persona: "beginner", size: "3x3", tier: "2", feel: "tactile" },
  };

  /* Map a product to the right puzzle-type glyph from the icon sprite.
     Explicit overrides beat the category default.                        */
  var ICON_OVERRIDE = {
    "qiyi-pyraminx": "i-pyraminx",
    "moyu-megaminx-sticky": "i-megaminx",
    "qiyi-clock": "i-clock",
    "moyu-ai-smart": "i-square1",
    "qiyi-mirror-blocks": "i-skewb",
    "qiyi-ice-amber": "i-skewb",
  };
  var ICON_BY_CAT = {
    "3x3 Speed Cubes": "i-3x3",
    "2x2 Pocket Cubes": "i-2x2",
    "4x4+ Speed Cubes": "i-4x4",
    "WCA Events": "i-all",
    "Shape Mods": "i-skewb",
    "Smart Cubes": "i-square1",
  };

  /* Deterministic brand tint so the grid does not read as one flat blue wall. */
  var TINTS = [
    ["#16204f", "#0a0f2e"],
    ["#1b1c4d", "#0b0f2c"],
    ["#14284f", "#0a1229"],
    ["#221747", "#100c26"],
    ["#123040", "#0a1826"],
    ["#241a3f", "#110d24"],
  ];
  function tintFor(id) {
    var n = 0;
    for (var i = 0; i < id.length; i++) n = (n * 31 + id.charCodeAt(i)) >>> 0;
    return TINTS[n % TINTS.length];
  }

  function iconFor(p) {
    return ICON_OVERRIDE[p.id] || ICON_BY_CAT[p.category] || "i-all";
  }

  window.CubingData = {
    products: PRODUCTS,
    steps: STEPS,
    presets: PRESETS,
    iconFor: iconFor,
    tintFor: tintFor,
    iconSvg: function (p, size) {
      var s = size || 46;
      return (
        '<svg width="' + s + '" height="' + s + '" viewBox="0 0 48 48" ' +
        'style="color:var(--green);opacity:.92" aria-hidden="true"><use href="#' + iconFor(p) + '"/></svg>'
      );
    },
    byId: function (id) {
      for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i];
      return null;
    },
  };
})();