/* ==========================================================================
   Sexy Silver – obsah a chování stránky
   Veškerý obsah se mění v objektu CONFIG níže. Později lze CONFIG
   nahradit daty načtenými z Google Sheets (viz funkce init na konci).
   ========================================================================== */

const CONFIG = {
  // URL webové aplikace Google Apps Script (končí na /exec).
  // Pokud je prázdná, data formuláře se jen vypíšou do konzole.
  FORM_ENDPOINT:
    "https://script.google.com/macros/s/AKfycbyYLgf0ooYWeYjOlMfRiO4DddubpMvOfoJrvqhQaQyIYya1bLRi9MJkKtvuyxAp10f5/exec",

  project: {
    author: "Miloslava Dočkalová",
  },

  exhibition: {
    title: "Sexy Silver",
    // Perex pod nadpisem; \n = nový odstavec
    subtitle:
      "Jak vypadá intimita, touha a sexualita ve stáří? Mají lidé žijící v domovech pro seniory dostatek prostoru pro blízkost a soukromí? " +
      "Výstava Sexy Silver výzkumnice a výtvarnice Miloslavy Dočkalové otevírá téma, o kterém se stále příliš málo mluví. " +
      "Prostřednictvím uměleckého výzkumu zve k překonávání stereotypů a novému pohledu na intimitu ve stáří.",
    venue: "Galerie Kreativní Prahy",
    address: "Staroměstské náměstí 4/1, 110 00 Praha",
    // Mapa z Mapy.com: Sdílet → Vložit do webu → zkopírovat URL z atributu src iframu
    mapEmbedUrl: "https://mapy.com/s/dujedovobo",
    // Odkaz „Otevřít v mapách“ pod mapkou (např. sdílecí odkaz z Mapy.com)
    mapLinkUrl: "https://mapy.com/cs/turisticka?source=addr&id=9108273&x=14.4199357&y=50.0866288&z=17",
    // Datum ve formátu RRRR-MM-DD; endDate je volitelný (null = zobrazí se jen „od …“)
    startDate: "2026-11-12",
    endDate: null,
    // Volitelný řádek pod datem (prázdný string = nezobrazí se)
    vernissage: "Vernisáž 12. 11. 2026 v 18 hodin",
    hero: {
      file: "IMG_0283.jpg", // soubor z img/full/ (a img/thumbs/ pro mobily)
      alt: "Růžový telefon s číselníkem na posteli s kyanotypovým povlečením",
    },
    // První odstavec se zobrazí zvýrazněný jako úvodní
    annotation: [
      "Potřeba blízkosti, doteku a soukromí s věkem nemizí. Sexy Silver se věnuje intimitě, touze a sexualitě ve stáří se zaměřením na život v domovech pro seniory. Otevírá otázky, jaký prostor zde tyto potřeby dostávají a co jejich naplňování může bránit.",
      "Projekt vychází z uměleckého výzkumu, který propojuje rozhovory, návštěvy domovů pro seniory a kreativní spolupráci s jejich klientkami a klienty. Výstava přináší různé pohledy na blízkost ve stáří a vybízí k přemýšlení o tom, jak ji ovlivňuje prostředí, v němž žijeme.",
      "Fotografie, objekty (vyřazené lůžkoviny z domovů, starý telefon) a zvukové nahrávky převádějí téma výzkumu do vizuální, hmotné a zvukové podoby. Výstava je pozváním k vnímání zkušeností druhých i k reflexi vlastních představ o stárnutí, tělesnosti a intimitě.",
      "Projekt vznikl jako diplomová práce na Fakultě multimediálních komunikací Univerzity Tomáše Bati ve Zlíně (FMK UTB) a v roce 2025 získal Cenu děkana FMK UTB. Téma intimity a vztahu k vlastnímu tělu autorka dále rozpracovává v rámci doktorského studia.",
    ],
  },

  audio: {
    // Úvodní text je volitelný – prázdný řetězec se nevykreslí
    intro: "Doporučujeme poslouchat ve sluchátkách.",
    // file = cesta k MP3 ve složce audio/; description je volitelný (prázdný se nevykreslí)
    tracks: [
      { title: "Nahrávka 1", description: "", file: "audio/nahravka-1.mp3" },
      { title: "Nahrávka 2", description: "", file: "audio/nahravka-2.mp3" },
      { title: "Nahrávka 3", description: "", file: "audio/nahravka-3.mp3" },
    ],
  },

  galleryTitle: "Z minulých instalací",
  // Soubory musí existovat se stejným názvem v img/thumbs/ i img/full/.
  // caption je volitelný popisek pod fotkou v lightboxu.
  gallery: [
    { file: "IMG_0294.jpg", alt: "Kyanotypie: váza s květinami na stole a růžový nápis POŘÁDEK" },
    { file: "IMG_0307.jpg", alt: "Kyanotypie: portrét staršího muže v pruhované košili s rukou u tváře, doplněný růžovým textem" },
    { file: "IMG_0293.jpg", alt: "Rozostřená kyanotypie zmačkaného povlečení s opakovaným růžovým nápisem ODDĚLENÍ" },
    { file: "IMG_0306.jpg", alt: "Rozostřená kyanotypie postav s růžovými nápisy MUŽI a ŽENY" },
    { file: "IMG_0312.jpg", alt: "Detail kyanotypie s nepravidelnými okraji a sytě modrou strukturou" },
    { file: "JMV_4694.jpg", alt: "Rozhovor návštěvnic na vernisáži před stěnou s ručně psaným růžovým textem" },
  ],

  contact: {
    intro: "Máte dotaz k výstavě nebo se chcete zapojit do výzkumu? Napište nám.",
    email: "info@mapaslasti.cz",
    thesisUrl:
      "https://showcase.fmk.utb.cz/en/arts-management/sexy-silver-intimacy-and-sexuality-of-seniors-in-residential-social-care-facilities/",
    thesisLabel: "Diplomová práce",
    privacyNote:
      "Správkyní osobních údajů je Miloslava Dočkalová (kontakt: info@mapaslasti.cz). Osobní údaje (jméno, e-mail a obsah zprávy) zpracovává výhradně za účelem odpovědi na vaši zprávu, případně vašeho zapojení do výzkumu. Údaje jsou uloženy ve službách Google (Google Workspace / Gmail), nikomu dalšímu je nepředáváme a uchováváme je nejdéle 12 měsíců. Souhlas můžete kdykoli odvolat e-mailem na info@mapaslasti.cz.",
  },
};

const IMG_THUMBS = "img/thumbs/";
const IMG_FULL = "img/full/";

/* --- Pomocné funkce ------------------------------------------------------ */

const $ = (selector) => document.querySelector(selector);

function bind(key, text) {
  document.querySelectorAll(`[data-bind="${key}"]`).forEach((el) => {
    el.textContent = text;
  });
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Jednopísmenné předložky a spojky (v, s, k, z, o, u, a, i) nesmí zůstat na konci řádku
function nbsp(text) {
  return text.replace(/(^|\s)([vskzouaiVSKZOUAI])\s+/g, "$1$2\u00a0");
}

function formatDateRange(from, to) {
  const parse = (s) => {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
  };
  const full = new Intl.DateTimeFormat("cs-CZ", { day: "numeric", month: "long", year: "numeric" });
  const a = parse(from);
  if (!to) return `od ${full.format(a)}`;
  const b = parse(to);
  const noYear = new Intl.DateTimeFormat("cs-CZ", { day: "numeric", month: "long" });
  const start = a.getFullYear() === b.getFullYear() ? noYear.format(a) : full.format(a);
  return `${start} – ${full.format(b)}`;
}

/* --- Render -------------------------------------------------------------- */

function renderExhibition(config) {
  const ex = config.exhibition;
  bind("eyebrow", `Výstava · ${config.project.author}`);
  bind("title", ex.title);
  $("#hero-subtitle").replaceChildren(
    ...ex.subtitle.split("\n").map((text) => el("p", "", nbsp(text)))
  );
  bind("venue", ex.venue);
  bind("address", ex.address);
  bind("dates", formatDateRange(ex.startDate, ex.endDate));
  const vernissage = $("#hero-vernissage");
  if (ex.vernissage) vernissage.textContent = nbsp(ex.vernissage);
  else vernissage.hidden = true;

  const hero = $("#hero-image");
  hero.srcset = `${IMG_THUMBS}${ex.hero.file} 800w, ${IMG_FULL}${ex.hero.file} 1800w`;
  hero.src = IMG_FULL + ex.hero.file;
  hero.alt = ex.hero.alt;

  $("#annotation").replaceChildren(...ex.annotation.map((text) => el("p", "", nbsp(text))));
}

function renderMap(config) {
  const ex = config.exhibition;
  const isSet = (url) => url && !url.includes("[DOPLNIT]");

  // Dokud není URL vyplněná, mapka ani odkaz se nezobrazí
  if (isSet(ex.mapEmbedUrl)) $("#map-frame").src = ex.mapEmbedUrl;
  else $("#map").hidden = true;

  const link = $("#map-link");
  if (isSet(ex.mapLinkUrl)) link.href = ex.mapLinkUrl;
  else link.hidden = true;
}

function renderTracks(config) {
  const intro = config.audio.intro?.trim() ?? "";
  bind("audioIntro", intro);
  document.querySelectorAll('[data-bind="audioIntro"]').forEach((node) => (node.hidden = !intro));
  const list = $("#tracks");
  const artwork = new URL(IMG_THUMBS + config.exhibition.hero.file, location.href).href;

  list.replaceChildren(
    ...config.audio.tracks.map((track, i) => {
      const li = el("li", "track");
      const titleId = `track-title-${i + 1}`;

      const number = el("span", "track__number", String(i + 1).padStart(2, "0"));
      number.setAttribute("aria-hidden", "true");

      const title = el("h3", "track__title", track.title);
      title.id = titleId;

      // Délka se doplní z metadat audia; do té doby zůstane skrytá
      const duration = el("span", "track__duration");
      duration.hidden = true;

      const heading = el("div", "track__heading");
      heading.append(title, duration);

      li.append(number, heading);
      const description = track.description?.trim();
      if (description) li.append(el("p", "track__desc", description));

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.preload = "metadata"; // načte jen hlavičku souboru kvůli délce, ne celé audio
      audio.setAttribute("aria-labelledby", titleId);
      audio.dataset.title = track.title;

      audio.addEventListener("loadedmetadata", () => {
        if (!Number.isFinite(audio.duration)) return;
        duration.textContent = `${Math.max(1, Math.round(audio.duration / 60))} min`;
        duration.hidden = false;
      });

      // U <source> se chyba načtení hlásí na prvku source, ne na audio
      const source = document.createElement("source");
      source.src = track.file;
      source.type = "audio/mpeg";
      source.addEventListener("error", () => {
        if (li.querySelector(".track__error")) return;
        li.append(el("p", "track__error", "Stopu se nepodařilo načíst. Zkontrolujte připojení a zkuste to znovu."));
      });

      audio.append(source, "Váš prohlížeč nepodporuje přehrávání zvuku.");
      li.append(audio);

      return li;
    })
  );

  // Při spuštění jedné stopy pozastavit ostatní (událost play nebublá, proto capture)
  list.addEventListener(
    "play",
    (e) => {
      const current = e.target;
      list.querySelectorAll("audio").forEach((a) => {
        if (a !== current) a.pause();
      });
      const track = current.closest(".track");
      track.classList.add("is-playing");
      track.querySelector(".track__error")?.remove();

      // Název stopy na zamykací obrazovce telefonu
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: current.dataset.title,
          artist: config.project.author,
          album: config.exhibition.title,
          artwork: [{ src: artwork, sizes: "800x800", type: "image/jpeg" }],
        });
      }
    },
    true
  );

  ["pause", "ended"].forEach((type) =>
    list.addEventListener(type, (e) => e.target.closest(".track").classList.remove("is-playing"), true)
  );
}

function renderContact(config) {
  const c = config.contact;
  bind("contactIntro", c.intro);
  bind("privacyNote", c.privacyNote);
  bind("author", config.project.author);

  const email = $("#footer-email");
  email.href = `mailto:${c.email}`;
  email.textContent = c.email;

  const thesis = $("#footer-thesis");
  thesis.href = c.thesisUrl;
  thesis.textContent = c.thesisLabel;

  $("#year").textContent = new Date().getFullYear();
}

/* --- Galerie a lightbox -------------------------------------------------- */

function setupGallery(config) {
  bind("galleryTitle", config.galleryTitle);
  const photos = config.gallery;
  const list = $("#gallery");
  const dialog = $("#lightbox");
  const image = $("#lightbox-image");
  const caption = $("#lightbox-caption");
  const counter = $("#lightbox-counter");
  let index = 0;
  let opener = null;

  list.replaceChildren(
    ...photos.map((photo, i) => {
      const li = document.createElement("li");
      const button = el("button", "gallery__item");
      button.type = "button";
      button.setAttribute("aria-label", `Zvětšit fotografii ${i + 1} z ${photos.length}`);

      const img = document.createElement("img");
      img.src = IMG_THUMBS + photo.file;
      img.alt = photo.alt;
      img.loading = "lazy";
      img.decoding = "async";
      img.width = 800;
      img.height = 800;

      button.append(img);
      button.addEventListener("click", () => open(i, button));
      li.append(button);
      return li;
    })
  );

  function show(i) {
    index = (i + photos.length) % photos.length;
    const photo = photos[index];
    image.classList.add("is-loading");
    image.onload = () => image.classList.remove("is-loading");
    image.src = IMG_FULL + photo.file;
    image.alt = photo.alt;
    caption.textContent = photo.caption || "";
    counter.textContent = `${index + 1} / ${photos.length}`;

    // Přednačíst sousední fotky, aby listování bylo plynulé
    [index + 1, index - 1].forEach((n) => {
      new Image().src = IMG_FULL + photos[(n + photos.length) % photos.length].file;
    });
  }

  function open(i, trigger) {
    opener = trigger;
    show(i);
    document.documentElement.classList.add("is-locked");
    dialog.showModal();
  }

  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("is-locked");
    image.removeAttribute("src");
    opener?.focus();
  });

  $("#lightbox-close").addEventListener("click", () => dialog.close());
  $("#lightbox-prev").addEventListener("click", () => show(index - 1));
  $("#lightbox-next").addEventListener("click", () => show(index + 1));

  // Esc zavírá <dialog> nativně; šipky listují
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });

  // Klik mimo fotku zavře lightbox
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog || e.target.classList.contains("lightbox__figure")) dialog.close();
  });

  // Swipe na mobilu
  let startX = 0;
  let startY = 0;
  dialog.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  dialog.addEventListener("touchend", (e) => {
    if (e.changedTouches.length !== 1) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      show(dx < 0 ? index + 1 : index - 1);
    } else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.5) {
      dialog.close(); // swipe dolů zavírá
    }
  }, { passive: true });
}

/* --- Formulář ------------------------------------------------------------ */

function setupForm() {
  const form = $("#contact-form");
  const submit = $("#f-submit");
  const status = $("#form-status");

  const checks = [
    { el: $("#f-name"), error: $("#f-name-error"), valid: (el) => el.value.trim() !== "" },
    { el: $("#f-email"), error: $("#f-email-error"), valid: (el) => el.value.trim() !== "" && el.validity.valid },
    { el: $("#f-message"), error: $("#f-message-error"), valid: (el) => el.value.trim() !== "" },
    { el: $("#f-consent"), error: $("#f-consent-error"), valid: (el) => el.checked },
  ];

  // Původní aria-describedby (např. poučení u souhlasu), ke kterému se přidává chybová hláška
  checks.forEach((c) => (c.describedBy = c.el.getAttribute("aria-describedby") || ""));

  function setStatus(text, type) {
    status.textContent = text;
    status.className = "form__status" + (type ? ` is-${type}` : "");
  }

  function markField(check, ok) {
    check.error.hidden = ok;
    check.el.setAttribute("aria-invalid", String(!ok));
    const ids = [check.describedBy, ok ? "" : check.error.id].filter(Boolean).join(" ");
    if (ids) check.el.setAttribute("aria-describedby", ids);
    else check.el.removeAttribute("aria-describedby");
  }

  function validate() {
    let firstInvalid = null;
    checks.forEach((check) => {
      const ok = check.valid(check.el);
      markField(check, ok);
      if (!ok && !firstInvalid) firstInvalid = check.el;
    });
    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  // Po opravě pole schovat chybu
  checks.forEach((check) => {
    check.el.addEventListener(check.el.type === "checkbox" ? "change" : "input", () => {
      if (check.valid(check.el)) markField(check, true);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("", null);
    if (!validate()) return;

    const formData = new FormData(form);

    // Honeypot vyplněný = bot; tváříme se, že je vše v pořádku
    if (formData.get("website")) {
      form.reset();
      setStatus("Děkujeme, zpráva byla odeslána.", "success");
      return;
    }

    const data = new URLSearchParams({
      typ: formData.get("type"),
      jmeno: formData.get("name").trim(),
      email: formData.get("email").trim(),
      zprava: formData.get("message").trim(),
      souhlas: $("#f-consent").checked ? "ano" : "",
      website: formData.get("website") || "",
    });

    submit.disabled = true;
    submit.textContent = "Odesílám…";
    setStatus("Odesílám zprávu…", null);

    try {
      const endpoint = CONFIG.FORM_ENDPOINT;
      if (!endpoint) {
        console.log("[Sexy Silver] FORM_ENDPOINT není nastaven, data formuláře:", Object.fromEntries(data));
      } else {
        // Bez vlastních hlaviček → "simple request", žádný CORS preflight
        const res = await fetch(endpoint, { method: "POST", body: data });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!json || json.ok !== true) throw new Error(json?.error || "Neznámá chyba serveru");
      }
      form.reset();
      checks.forEach((check) => check.el.removeAttribute("aria-invalid"));
      setStatus("Děkujeme, zpráva byla odeslána. Ozveme se vám co nejdříve.", "success");
    } catch (err) {
      console.error("[Sexy Silver] Chyba při odesílání formuláře:", err);
      setStatus(
        `Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo napište přímo na ${CONFIG.contact.email}.`,
        "error"
      );
    } finally {
      submit.disabled = false;
      submit.textContent = "Odeslat zprávu";
    }
  });
}

/* --- Start --------------------------------------------------------------- */

function init(config) {
  renderExhibition(config);
  renderTracks(config);
  setupGallery(config);
  renderContact(config);
  setupForm();
  renderMap(config);

  // Obsah se renderuje až teď, proto po načtení znovu doskočit na kotvu (např. #audio)
  if (location.hash) {
    document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }
}

// Pro napojení na Google Sheets později: načíst data (fetch), sestavit z nich
// objekt ve stejném tvaru jako CONFIG a zavolat init(nactenyConfig).
init(CONFIG);
