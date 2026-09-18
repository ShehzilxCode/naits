/* =============================================================
   NAITSMUSIC — MAIN
   Renders content from js/content.js, then wires motion.
   ============================================================= */
(() => {
  "use strict";

  const S = window.SITE;
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const YEAR = new Date().getFullYear();

  /* ---------------------------------------------------------
     ICONS
  --------------------------------------------------------- */
  const ICONS = {
    spotify:   "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
    apple:     "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z",
    youtube:   "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    soundcloud: "M1 13.4h1.6v5.2H1zM4.2 11.2h1.6v7.4H4.2zM7.4 9.6H9v9H7.4zM10.6 8.2h1.6v10.4h-1.6zM13.8 6.2c.9-.6 2-.9 3.1-.9 3.1 0 5.6 2.3 5.9 5.3 1.7.3 3.2 1.8 3.2 3.7 0 2.2-1.7 4.3-4 4.3h-8.2z",
    facebook:  "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    linktree:  "m13.736 5.853 4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.74-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2.226V8.121h5.909l-4.2-4.004 2.324-2.381 4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z",
    tiktok:    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  };
  const icon = (id) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[id] || ""}"/></svg>`;
  const PLATFORM_LABEL = { spotify: "Spotify", apple: "Apple Music", youtube: "YouTube", soundcloud: "SoundCloud" };

  /* ---------------------------------------------------------
     PLACEHOLDER IMAGERY
     Procedural "lit room" SVG so empty slots still look art-directed.
     Replace by setting `image` in content.js.
  --------------------------------------------------------- */
  function rng(seed) {
    let t = seed * 9301 + 49297;
    return () => { t = (t * 9301 + 49297) % 233280; return t / 233280; };
  }
  function placeholderSVG(w, h, seed, letter, figure) {
    const r = rng(seed + 1);
    let lx = 25 + r() * 50, ly = 15 + r() * 45;
    const warm = r() > 0.4;
    const c = warm ? "217,160,102" : "170,178,196";
    let a = 0.18 + r() * 0.18;
    // Portrait slots: a single warm key light, upper third, like a backlit set
    if (figure) { lx = 54; ly = 30; a = 0.4; }
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
      `<defs>` +
      `<radialGradient id="g" cx="${lx}%" cy="${ly}%" r="80%"><stop offset="0" stop-color="rgb(${c})" stop-opacity="${a}"/><stop offset=".35" stop-color="rgb(${c})" stop-opacity="${a * 0.35}"/><stop offset=".7" stop-color="rgb(${c})" stop-opacity="${a * 0.08}"/><stop offset="1" stop-color="rgb(${c})" stop-opacity="0"/></radialGradient>` +
      `<linearGradient id="v" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#111"/><stop offset="1" stop-color="#050505"/></linearGradient>` +
      `<linearGradient id="b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="rgb(${c})" stop-opacity="0"/><stop offset=".5" stop-color="rgb(${c})" stop-opacity=".13"/><stop offset="1" stop-color="rgb(${c})" stop-opacity="0"/></linearGradient>` +
      `<filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".75" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .10"/></feComponentTransfer></filter>` +
      `</defs>` +
      `<rect width="100%" height="100%" fill="url(#v)"/>` +
      `<rect width="100%" height="100%" fill="url(#g)"/>` +
      `<rect x="${lx - 11}%" y="0" width="22%" height="100%" fill="url(#b)"/>` +
      (figure ? "" : `<text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle" font-family="Impact,Arial Narrow,sans-serif" font-size="${Math.min(w, h) * 0.9}" fill="none" stroke="rgba(242,237,228,.07)" stroke-width="2">${letter}</text>`) +
      `<rect width="100%" height="100%" filter="url(#n)"/>` +
      `</svg>`;
    // encodeURIComponent leaves ' ( ) untouched — escape them so the url() stays valid
    const data = encodeURIComponent(svg).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
    return `url('data:image/svg+xml;charset=utf-8,${data}')`;
  }
  let phSeed = 3;
  function setImage(el, src, { label = "Image", size = "", letter = "N", badge = true, figure = false } = {}) {
    if (src) { el.style.backgroundImage = `url('${src}')`; return; }
    const w = 800, h = figure ? 1000 : 800;
    el.style.backgroundImage = placeholderSVG(w, h, phSeed++, letter, figure);
    if (badge) {
      const b = document.createElement("span");
      b.className = "ph-badge";
      b.textContent = `${label} · ${size}`.replace(/ · $/, "");
      (el.parentElement || el).appendChild(b);
    }
  }

  /* ---------------------------------------------------------
     RENDER
  --------------------------------------------------------- */
  function render() {
    $$("[data-artist-name]").forEach(n => n.textContent = S.artist.name);
    $$("[data-artist-short]").forEach(n => n.textContent = S.artist.short);
    $$("[data-artist-handle]").forEach(n => n.textContent = S.artist.handle);
    $$("[data-artist-tagline]").forEach(n => n.textContent = S.artist.tagline);
    $$("[data-year]").forEach(n => n.textContent = YEAR);
    document.title = `${S.artist.name} — Official`;

    // Socials
    $$('[data-socials="icons"]').forEach(box => {
      box.innerHTML = S.socials.map(s =>
        `<a class="social-icon" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}" data-cursor="small">${icon(s.id)}</a>`).join("");
    });
    $$('[data-socials="text"]').forEach(box => {
      box.innerHTML = S.socials.map(s =>
        `<a class="social-text" href="${s.url}" target="_blank" rel="noopener" data-cursor="small">${icon(s.id)}<span>${s.label}</span></a>`).join("");
    });

    // Hero
    setImage($(".hero__img"), S.hero.image, { label: "Artist photo", size: "1600×2000", figure: true });
    if (S.hero.position) $(".hero__img").style.backgroundPosition = S.hero.position;
    if (S.hero.filter) $(".hero__img").style.filter = S.hero.filter;
    $("[data-hero-listen]").href = S.hero.listenUrl;
    $("[data-hero-watch]").href = S.hero.watchUrl;

    // Ticker
    const feat = S.releases.find(r => r.featured) || S.releases[0];
    const tickerItems = [
      `<b>${S.artist.name}</b>`, `New single`, `<i>${feat.title}</i>`, `Out now`, S.artist.location || `Listen everywhere`, `<i>${S.artist.handle}</i>`,
    ];
    $("#ticker").innerHTML = Array(4).fill(tickerItems.map(t => `<span class="ticker__item">${t}</span>`).join("")).join("");

    // Featured release
    const platforms = (links, withLabel = true) => Object.entries(links || {}).map(([k, url]) =>
      `<a class="platform" href="${url}" target="_blank" rel="noopener" aria-label="${PLATFORM_LABEL[k] || k}" data-cursor="small">${icon(k)}<span>${PLATFORM_LABEL[k] || k}</span></a>`).join("");

    $("#featured").innerHTML = `
      <div class="featured__art" data-cursor="listen">
        <div class="featured__disc"></div>
        <div class="featured__sleeve"></div>
        <span class="featured__art-cap">Artwork — ${feat.title}${feat.with ? ` with ${feat.with}` : ""}</span>
      </div>
      <div class="featured__info">
        <div class="featured__kicker"><span class="dot"></span>Latest release</div>
        <h3 class="featured__title" data-split>${feat.title}</h3>
        <div class="featured__meta">
          <span>Format<b>${feat.type || ""}</b></span>
          <span>Released<b>${feat.date || ""}</b></span>
          ${feat.with ? `<span>With<b>${feat.with}</b></span>` : ""}
          ${feat.label ? `<span>${feat.label}</span>` : ""}
        </div>
        ${feat.description ? `<p class="featured__desc" data-reveal>${feat.description}</p>` : ""}
        ${feat.tracklist ? `<ol class="tracklist">${feat.tracklist.map((t, i) => {
          const track = typeof t === "string" ? { title: t } : t;
          return `<li><i>${String(i + 1).padStart(2, "0")}</i><span>${track.title}</span><span>${track.duration || "--:--"}</span></li>`;
        }).join("")}</ol>` : ""}
        <div class="platforms">${platforms(feat.links)}</div>
      </div>`;
    setImage($(".featured__sleeve"), feat.image, { label: "Artwork", size: "1400×1400", letter: "N" });

    // Discography
    const others = S.releases.filter(r => r !== feat);
    $("#disco").innerHTML = others.map((r, i) => `
      <div class="disco__row" data-index="${i}">
        <span class="disco__no">${String(others.length - i).padStart(2, "0")}</span>
        <span class="disco__title"><span class="disco__thumb"></span><a class="disco__name" href="${(r.links && (r.links.spotify || Object.values(r.links)[0])) || "#"}" target="_blank" rel="noopener" data-cursor="small">${r.title}${r.with ? `<small class="disco__with">with ${r.with}</small>` : ""}</a></span>
        <span class="disco__sub"><span class="disco__type">${r.type || ""}</span><span class="disco__year">${r.date || ""}</span></span>
        <span class="disco__year disco__year--desktop">${r.date || ""}</span>
        <span class="disco__links">${platforms(r.links)}</span>
      </div>`).join("");
    $$(".disco__thumb").forEach((t, i) => setImage(t, others[i].image, { badge: false, letter: String(others.length - i) }));

    // Videos
    const [v0, ...vRest] = S.videos;
    const videoHTML = (v, i, feature) => `
      <a class="video ${feature ? "video--feature" : "video--small"}" href="${v.url}" data-video="${v.url}" data-cursor="play" aria-label="Play ${v.title}">
        <div class="video__img"${v.position ? ` style="background-position:${v.position}"` : ""}></div>
        <div class="video__bars"></div>
        <span class="video__corner video__corner--l">● ${feature ? "Now showing" : "Video"}</span>
        <span class="video__corner video__corner--r">${v.year}</span>
        <div class="video__play">
          <svg class="video__play-ring" viewBox="0 0 100 100" aria-hidden="true">
            <defs><path id="ring-${i}" d="M50,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"/></defs>
            <text><textPath href="#ring-${i}">PLAY · WATCH · PLAY · WATCH · </textPath></text>
          </svg>
        </div>
        <div class="video__meta">
          <div><span class="video__kind">${v.kind || ""}</span><h3 class="video__title">${v.title}</h3></div>
          <div class="video__tc"><b>${v.duration || ""}</b>${v.year}</div>
        </div>
      </a>`;
    $("#videoFeature").innerHTML = v0 ? videoHTML(v0, 0, true) : "";
    $("#videoGrid").innerHTML = vRest.map((v, i) => videoHTML(v, i + 1, false)).join("");
    $$(".video").forEach((el, i) => setImage($(".video__img", el), S.videos[i].image, { label: "Video thumbnail", size: "1920×1080", letter: "▶" }));

    // About
    const em = (s) => s.replace(/\*(.+?)\*/g, "<em>$1</em>");
    $("#aboutLead").innerHTML = em(S.about.lead);
    $("#aboutBody").innerHTML = S.about.body.map(p => `<p data-reveal>${em(p)}</p>`).join("");
    const facts = $("#aboutFacts");
    facts.style.gridTemplateColumns = `repeat(${S.about.facts.length}, auto)`;
    facts.innerHTML = S.about.facts.map(f => `<dt>${f.k}</dt>`).join("") + S.about.facts.map(f => `<dd>${f.v}</dd>`).join("");
    setImage($(".about__img"), S.about.image, { label: "Portrait", size: "1600×2000", figure: true });
    $("#aboutCap").textContent = S.about.imageCaption || "";

    // Archive
    $("#archiveGrid").innerHTML = S.archive.map((a, i) => `
      <figure class="arch" data-cursor="view">
        <div class="arch__img"></div>
        <span class="arch__no">${String(i + 1).padStart(2, "0")}</span>
        <figcaption class="arch__cap"><i>${a.caption}</i><span>${a.year || ""}</span></figcaption>
      </figure>`).join("");
    $$(".arch__img").forEach((el, i) => setImage(el, S.archive[i].image, { label: S.archive[i].caption, size: "", letter: String(i + 1) }));

    // Contact
    const words = S.contact.headline.trim().split(/\s+/);
    const last = words.pop();
    $("#contactTitle").innerHTML = `<span data-split>${words.join(" ")}</span> <em data-split>${last}</em>`;
    $("#contactGrid").innerHTML = S.contact.channels.map(c => {
      let value;
      if (!c.value) value = `<span class="contact__value contact__value--todo">Add email</span>`;
      else if (c.url) value = `<a class="contact__value" href="${c.url}" target="_blank" rel="noopener" data-cursor="small">${c.value}</a>`;
      else value = `<a class="contact__value" href="mailto:${c.value}" data-copy="${c.value}" data-cursor="small">${c.value}</a>`;
      return `
      <div class="contact__item">
        <span class="contact__label">${c.label}</span>
        ${value}
        <span class="contact__copied">Copied</span>
      </div>`;
    }).join("");

    // Footer + Now playing
    $("#footerLinks").innerHTML = S.footer.links.map(l => `<a class="footer__link" href="${l.url}" target="_blank" rel="noopener" data-cursor="small">${l.id ? icon(l.id) : ""}<span>${l.label}</span></a>`).join("");
    const np = $("#nowPlaying");
    np.href = "#music";
    $(".np__label", np).textContent = feat.preview ? "Play preview" : "Now playing";
    $$("[data-artist-location]").forEach(n => n.textContent = S.artist.location || "");
    $(".np__title", np).textContent = `${S.nowPlaying.title}${S.nowPlaying.meta ? " — " + S.nowPlaying.meta : ""}`;
  }

  /* ---------------------------------------------------------
     TEXT SPLITTING (word-level masks)
  --------------------------------------------------------- */
  function split(el) {
    if (el.dataset.splitDone) return $$(".w > *", el);
    const frag = document.createDocumentFragment();
    const pushWord = (node) => {
      const w = document.createElement("span"); w.className = "w";
      const inner = document.createElement("span");
      if (typeof node === "string") inner.textContent = node; else inner.appendChild(node);
      w.appendChild(inner); frag.appendChild(w);
    };
    const pushSpace = () => { const s = document.createElement("span"); s.className = "sp"; frag.appendChild(s); };
    Array.from(el.childNodes).forEach(node => {
      if (node.nodeType === 3) {
        const parts = node.textContent.split(/(\s+)/);
        parts.forEach(p => { if (!p) return; if (/^\s+$/.test(p)) pushSpace(); else pushWord(p); });
      } else pushWord(node);
    });
    el.innerHTML = ""; el.appendChild(frag);
    el.classList.add("split"); el.dataset.splitDone = "1";
    const words = $$(".w > *", el);
    gsap.set(words, { yPercent: 110 });
    return words;
  }

  /* ---------------------------------------------------------
     SMOOTH SCROLL
  --------------------------------------------------------- */
  let lenis = null;
  function initScroll() {
    gsap.registerPlugin(ScrollTrigger);
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      lenis.scrollTo(id === "#home" ? 0 : target, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) });
    });
  }

  /* ---------------------------------------------------------
     NAV
  --------------------------------------------------------- */
  const nav = $("#nav"), menu = $("#menu"), burger = $("#burger");
  let menuOpen = false;

  function initNav() {
    gsap.set(".menu__link span", { yPercent: 110 });
    const np = $("#nowPlaying");
    lenis.on("scroll", ({ scroll, direction, limit }) => {
      nav.classList.toggle("is-scrolled", scroll > 40);
      nav.classList.toggle("is-hidden", !menuOpen && direction === 1 && scroll > 400);
      np.classList.toggle("is-visible", np.classList.contains("is-playing") || (scroll > window.innerHeight * 0.85 && scroll < limit - 160));
    });

    $$("main > section[id]").forEach(sec => {
      ScrollTrigger.create({
        trigger: sec, start: "top 45%", end: "bottom 45%",
        onToggle: (self) => {
          if (!self.isActive) return;
          $$(".nav__link").forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === `#${sec.id}`));
        },
      });
    });

    burger.addEventListener("click", () => (menuOpen ? closeMenu() : openMenu()));
  }
  function openMenu() {
    menuOpen = true;
    menu.classList.add("is-open"); burger.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true"); menu.setAttribute("aria-hidden", "false");
    nav.classList.remove("is-hidden");
    lenis.stop();
    gsap.timeline()
      .to(".menu__bg", { yPercent: 100, duration: 0.9, ease: "expo.inOut" }, 0)
      .to(".menu__link span", { yPercent: 0, duration: 1, stagger: 0.06, ease: "expo.out" }, 0.45)
      .to(".menu__foot", { opacity: 1, duration: 0.6 }, 0.8);
  }
  function closeMenu() {
    if (!menuOpen) return;
    menuOpen = false;
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false"); menu.setAttribute("aria-hidden", "true");
    lenis.start();
    gsap.timeline({ onComplete: () => menu.classList.remove("is-open") })
      .to(".menu__foot", { opacity: 0, duration: 0.3 }, 0)
      .to(".menu__link span", { yPercent: 110, duration: 0.6, stagger: 0.03, ease: "expo.in" }, 0)
      .to(".menu__bg", { yPercent: 0, duration: 0.8, ease: "expo.inOut" }, 0.25);
  }

  /* ---------------------------------------------------------
     INTRO
  --------------------------------------------------------- */
  function initIntro() {
    const intro = $(".intro");
    const wordEl = $(".intro__word");
    wordEl.innerHTML = S.artist.name.split("").map(ch => `<span>${ch}</span>`).join("");
    const letters = $$("span", wordEl);
    const count = $(".intro__count");
    const heroWords = $$(".hero__title [data-split]").flatMap(split);
    gsap.set(letters, { yPercent: 110, opacity: 0 });
    gsap.set(".nav", { opacity: 0 });
    gsap.set(".hero__tag", { opacity: 0, y: 24 });
    gsap.set([".hero__corner", ".hero__ctas .btn", ".scroll-hint"], { opacity: 0, y: 14 });

    const heroIn = gsap.timeline({ defaults: { ease: "expo.out" } })
      .to(heroWords, { yPercent: 0, duration: 1.4, stagger: 0.12 }, 0)
      .fromTo(".hero__img", { scale: 1.14 }, { scale: 1.02, duration: 2.6, ease: "power2.out" }, 0)
      .to(".hero__tag", { opacity: 1, y: 0, duration: 1.1 }, 0.5)
      .to(".hero__ctas .btn", { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 0.7)
      .to([".hero__corner", ".scroll-hint"], { opacity: 1, y: 0, duration: 1 }, 0.9)
      .to(".nav", { opacity: 1, duration: 1 }, 0.9);

    // Deep link (#music etc.): skip the intro and land on the section
    const deepLink = location.hash.length > 1 && $(location.hash);
    if (deepLink) {
      intro.remove();
      heroIn.progress(1);
      requestAnimationFrame(() => lenis.scrollTo(deepLink, { immediate: true, force: true }));
      return;
    }

    // Reduced motion (e.g. Windows "Animation effects" off): still show the
    // title card, but static — a hold and a fade instead of the choreography.
    if (reduced) {
      gsap.set(letters, { yPercent: 0, opacity: 1 });
      gsap.set(".intro__line", { scaleX: 1, backgroundColor: "#d9a066" });
      count.textContent = "100";
      heroIn.progress(1);
      gsap.to(intro, { opacity: 0, duration: 0.6, delay: 1.2, onComplete: () => intro.remove() });
      return;
    }

    lenis.stop(); window.scrollTo(0, 0);
    const c = { v: 0 };
    gsap.timeline({ defaults: { ease: "expo.out" }, onComplete: () => { intro.remove(); lenis.start(); } })
      .to(letters, { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.05 }, 0.25)
      .to(c, { v: 100, duration: 1.5, ease: "power2.inOut", onUpdate: () => count.textContent = String(Math.round(c.v)).padStart(2, "0") }, 0.2)
      .to(".intro__line", { scaleX: 1, duration: 1.3, ease: "expo.inOut" }, 0.3)
      .to(".intro__line", { backgroundColor: "#d9a066", duration: 0.6 }, 1.3)
      .to(letters, { yPercent: -110, duration: 0.7, stagger: 0.035, ease: "expo.in" }, 1.85)
      .to([".intro__line", ".intro__meta"], { opacity: 0, duration: 0.4 }, 2.0)
      .to(intro, { yPercent: -100, duration: 1.1, ease: "expo.inOut" }, 2.25)
      .add(heroIn, 2.55);
  }

  /* ---------------------------------------------------------
     SCROLL MOTION
  --------------------------------------------------------- */
  function initMotion() {
    const mm = gsap.matchMedia();

    // Word reveals (everything except hero, which the intro owns)
    $$("[data-split]").filter(el => !el.closest(".hero")).forEach(el => {
      const words = split(el);
      if (reduced) { gsap.set(words, { yPercent: 0 }); return; }
      gsap.to(words, {
        yPercent: 0, duration: 1.3, stagger: 0.05, ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });

    // Soft reveals
    $$("[data-reveal]").filter(el => !el.closest(".hero")).forEach(el => {
      if (reduced) return;
      gsap.set(el, { opacity: 0, y: 24 });
      gsap.to(el, { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
    });

    // Rows / figures fade-up in sequence
    const batch = (sel, opts = {}) => {
      const els = $$(sel);
      if (!els.length) return;
      if (reduced) return;
      gsap.set(els, { opacity: 0, y: 40 });
      ScrollTrigger.batch(els, {
        start: "top 92%", once: true,
        onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.2, stagger: 0.08, ease: "expo.out", ...opts }),
      });
    };
    batch(".disco__row"); batch(".tracklist li", { stagger: 0.05 }); batch(".platforms .platform", { stagger: 0.05 });
    batch(".contact__item"); batch(".video--small");

    // Image "curtain" reveals
    [".featured__sleeve", ".about__img", ".video--feature"].forEach(sel => {
      const el = $(sel); if (!el || reduced) return;
      gsap.fromTo(el, { clipPath: "inset(100% 0 0 0)" }, {
        clipPath: "inset(0% 0 0 0)", duration: 1.6, ease: "expo.inOut",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    });
    if (!reduced) {
      // opacity only: the disc's transform belongs to the CSS hover
      gsap.from(".featured__disc", { opacity: 0, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: ".featured", start: "top 75%", once: true } });
    }

    // Archive figures reveal
    $$(".arch").forEach((el, i) => {
      if (reduced) return;
      gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, {
        clipPath: "inset(0 0 0% 0)", duration: 1.4, ease: "expo.inOut", delay: (i % 3) * 0.08,
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    });

    // Ticker
    if (!reduced) gsap.to("#ticker", { xPercent: -50, ease: "none", duration: 40, repeat: -1 });

    // Parallax & scrubbed motion (desktop + tablet only)
    mm.add("(min-width: 861px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(".hero__img", { yPercent: 10, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.to(".hero__title", { yPercent: -70, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.to([".hero__bottom", ".hero__corner"], { opacity: 0, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "55% top", scrub: true } });

      gsap.to(".about__img", { yPercent: -10, ease: "none", scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: true } });
      gsap.fromTo(".about__giant span", { xPercent: 4 }, { xPercent: -28, ease: "none", scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: true } });

      $$(".arch__img").forEach((img, i) => {
        gsap.fromTo(img, { yPercent: i % 2 ? 8 : -8 }, { yPercent: i % 2 ? -8 : 8, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });
      $$(".video__img").forEach(img => {
        gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });

      gsap.fromTo(".footer__giant", { yPercent: 40 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom bottom", scrub: true } });
      gsap.fromTo(".featured__art", { yPercent: 6 }, { yPercent: -6, ease: "none", scrollTrigger: { trigger: ".featured", start: "top bottom", end: "bottom top", scrub: true } });
    });

    mm.add("(max-width: 860px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(".hero__img", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      gsap.fromTo(".about__giant span", { xPercent: 2 }, { xPercent: -40, ease: "none", scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: true } });
      gsap.fromTo(".footer__giant", { yPercent: 30 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: ".footer", start: "top bottom", end: "bottom bottom", scrub: true } });
    });
  }

  /* ---------------------------------------------------------
     CURSOR, MAGNETIC, PREVIEW
  --------------------------------------------------------- */
  function initCursor() {
    if (!finePointer || reduced) return;
    document.body.classList.add("no-cursor");
    const cur = $(".cursor"), dot = $(".cursor__dot"), ring = $(".cursor__ring"), label = $(".cursor__label");
    const dx = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" }), dy = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const rx = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" }), ry = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });
    const LABELS = { play: "Play", view: "View", listen: "Listen" };

    gsap.set(cur, { opacity: 0 });
    let seen = false;
    window.addEventListener("mousemove", (e) => {
      if (!seen) { seen = true; gsap.set([dot, ring], { x: e.clientX, y: e.clientY }); gsap.to(cur, { opacity: 1, duration: 0.4 }); }
      dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
    }, { passive: true });
    document.addEventListener("mouseover", (e) => {
      const t = e.target.closest("[data-cursor]");
      cur.classList.remove("is-label", "is-small", "is-hidden");
      if (!t) return;
      const mode = t.dataset.cursor;
      if (LABELS[mode]) { label.textContent = (mode === "listen" && t.closest(".is-playing-track")) ? "Pause" : LABELS[mode]; cur.classList.add("is-label"); }
      else if (mode === "small") cur.classList.add("is-small");
      else if (mode === "hide") cur.classList.add("is-hidden");
    });
    document.addEventListener("mouseleave", () => gsap.to(cur, { opacity: 0, duration: 0.3 }));
    document.addEventListener("mouseenter", () => gsap.to(cur, { opacity: 1, duration: 0.3 }));
  }

  function initHovers() {
    if (!finePointer || reduced) return;
    // GSAP owns the transform on these (parallax), so hover scale goes through GSAP too
    $$(".video").forEach(v => {
      const img = $(".video__img", v);
      v.addEventListener("mouseenter", () => gsap.to(img, { scale: 1, duration: 1.4, ease: "expo.out" }));
      v.addEventListener("mouseleave", () => gsap.to(img, { scale: 1.04, duration: 1.2, ease: "expo.out" }));
    });
    $$(".arch").forEach(a => {
      const img = $(".arch__img", a);
      a.addEventListener("mouseenter", () => gsap.to(img, { scale: 1.05, duration: 1.4, ease: "expo.out" }));
      a.addEventListener("mouseleave", () => gsap.to(img, { scale: 1, duration: 1.2, ease: "expo.out" }));
    });
  }

  function initMagnetic() {
    if (!finePointer || reduced) return;
    $$("[data-magnetic]").forEach(el => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" }), yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.3); yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
      });
      el.addEventListener("mouseleave", () => { xTo(0); yTo(0); });
    });
  }

  function initDiscoPreview() {
    if (!finePointer || reduced) return;
    const pv = $("#discoPreview");
    const px = gsap.quickTo(pv, "x", { duration: 0.7, ease: "power3" }), py = gsap.quickTo(pv, "y", { duration: 0.7, ease: "power3" });
    $$(".disco__row").forEach(row => {
      row.addEventListener("mouseenter", () => {
        pv.style.backgroundImage = $(".disco__thumb", row).style.backgroundImage;
        gsap.to(pv, { opacity: 1, scale: 1, rotate: 0, duration: 0.6, ease: "expo.out" });
      });
      row.addEventListener("mouseleave", () => gsap.to(pv, { opacity: 0, scale: 0.9, rotate: -4, duration: 0.5, ease: "expo.out" }));
    });
    $(".disco").addEventListener("mousemove", (e) => { px(e.clientX + 40); py(e.clientY); });
  }

  /* ---------------------------------------------------------
     VIDEO MODAL
  --------------------------------------------------------- */
  function initVideo() {
    const modal = $("#modal"), embed = $("#modalEmbed");
    const ytId = (url) => {
      const m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/);
      return m ? m[1] : null;
    };
    const open = (url, title) => {
      const id = url && ytId(url);
      embed.innerHTML = id
        ? `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1" title="${title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
        : `<div class="modal__placeholder">${title}<br>Add a YouTube link in content.js<br>to play here</div>`;
      modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
      lenis.stop();
    };
    const close = () => {
      modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
      setTimeout(() => embed.innerHTML = "", 500);
      lenis.start();
    };
    document.addEventListener("click", (e) => {
      const v = e.target.closest("[data-video]");
      if (!v) return;
      const url = v.dataset.video;
      if (url && url !== "#" && !ytId(url)) return; // non-YouTube: follow the link normally
      e.preventDefault();
      open(url, $(".video__title", v).textContent);
    });
    $$("[data-close]").forEach(el => el.addEventListener("click", close));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { close(); closeMenu(); } });
  }

  /* ---------------------------------------------------------
     PREVIEW PLAYER
     Plays 30s previews (release.preview) through one <audio>.
     Featured vinyl, discography thumbnails and the Now Playing
     strip all drive the same player.
  --------------------------------------------------------- */
  function initPlayer() {
    const feat = S.releases.find(r => r.featured) || S.releases[0];
    const others = S.releases.filter(r => r !== feat);
    const np = $("#nowPlaying"), npTitle = $(".np__title", np), npLabel = $(".np__label", np), npBar = $(".np__bar", np);
    const audio = new Audio();
    audio.preload = "none";
    let current = null;
    const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

    function setState(playing) {
      np.classList.toggle("is-playing", playing);
      $$(".is-playing-track").forEach(e => e.classList.remove("is-playing-track"));
      if (playing && current && current.el) current.el.classList.add("is-playing-track");
      npLabel.textContent = playing ? "Now playing · 30s preview" : current ? "Paused · tap to resume" : "Play preview";
      if (!playing) np.classList.toggle("is-visible", lenis && lenis.scroll > window.innerHeight * 0.85);
      else np.classList.add("is-visible");
    }
    function toggle(track) {
      if (!track.preview) return;
      if (current && current.preview === track.preview) { audio.paused ? audio.play().catch(() => {}) : audio.pause(); return; }
      current = track;
      audio.src = track.preview;
      npTitle.textContent = track.title + (track.with ? ` — with ${track.with}` : "");
      npBar.style.transform = "scaleX(0)";
      audio.play().catch(() => {});
    }

    audio.addEventListener("play", () => setState(true));
    audio.addEventListener("pause", () => setState(false));
    audio.addEventListener("ended", () => { setState(false); npBar.style.transform = "scaleX(0)"; });
    audio.addEventListener("timeupdate", () => {
      if (!audio.duration) return;
      npBar.style.transform = `scaleX(${audio.currentTime / audio.duration})`;
      $(".np__time", np).textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
    });
    audio.addEventListener("error", () => { if (current && current.url) window.open(current.url, "_blank"); setState(false); });

    const featArt = $(".featured__art");
    if (feat.preview) {
      featArt.addEventListener("click", () => toggle({ ...feat, el: featArt, url: feat.links && feat.links.spotify }));
      featArt.classList.add("has-preview");
    }
    $$(".disco__row").forEach((row, i) => {
      const r = others[i]; if (!r.preview) return;
      const thumb = $(".disco__thumb", row);
      thumb.classList.add("has-preview"); thumb.setAttribute("data-cursor", "listen");
      thumb.addEventListener("click", (e) => { e.preventDefault(); toggle({ ...r, el: row, url: r.links && r.links.spotify }); });
    });
    np.addEventListener("click", (e) => {
      e.preventDefault();
      toggle(current || { ...feat, el: featArt, url: feat.links && feat.links.spotify });
    });
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space" && current && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) { e.preventDefault(); toggle(current); }
    });
  }

  /* ---------------------------------------------------------
     CONTACT COPY
  --------------------------------------------------------- */
  function initContact() {
    $$("[data-copy]").forEach(a => {
      a.addEventListener("click", () => {
        if (!navigator.clipboard) return;
        navigator.clipboard.writeText(a.dataset.copy).then(() => {
          const item = a.closest(".contact__item");
          item.classList.add("is-copied");
          setTimeout(() => item.classList.remove("is-copied"), 1800);
        }).catch(() => {});
      });
    });
  }

  /* ---------------------------------------------------------
     BOOT
  --------------------------------------------------------- */
  render();
  initScroll();
  initNav();
  initMotion();
  initIntro();
  initCursor();
  initHovers();
  initMagnetic();
  initDiscoPreview();
  initVideo();
  initPlayer();
  initContact();
  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
