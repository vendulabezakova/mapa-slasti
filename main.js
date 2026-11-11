/* ==========================================================================
   Sexy Silver – obsah a chování stránky (česká i anglická verze)
   - SHARED: společné údaje pro obě verze (fotky, formulář, mapa, data, odkazy)
   - CONFIG_CS / CONFIG_EN: texty pro jednotlivé jazyky
   Jazyk se vybírá podle <html lang="…"> (index.html = cs, en/index.html = en).
   Později lze CONFIG nahradit daty načtenými z Google Sheets (viz init na konci).
   ========================================================================== */

const SHARED = {
  // URL webové aplikace Google Apps Script (končí na /exec).
  // Pokud je prázdná, data formuláře se jen vypíšou do konzole.
  FORM_ENDPOINT:
    "https://script.google.com/macros/s/AKfycbyYLgf0ooYWeYjOlMfRiO4DddubpMvOfoJrvqhQaQyIYya1bLRi9MJkKtvuyxAp10f5/exec",

  project: {
    author: "Miloslava Dočkalová",
  },

  exhibition: {
    title: "Sexy Silver",
    venue: "Galerie Kreativní Prahy",
    address: "Staroměstské náměstí 4/1, 110 00 Praha",
    // Mapa z Mapy.com: Sdílet → Vložit do webu → zkopírovat URL z atributu src iframu
    mapEmbedUrl: "https://mapy.com/s/dujedovobo",
    // Odkaz „Otevřít v mapách“ pod mapkou (např. sdílecí odkaz z Mapy.com)
    mapLinkUrl: "https://mapy.com/cs/turisticka?source=addr&id=9108273&x=14.4199357&y=50.0866288&z=17",
    // Datum ve formátu RRRR-MM-DD; endDate je volitelný (null = zobrazí se jen „od …“)
    startDate: "2026-11-12",
    endDate: "2027-01-04",
    // Odkaz na událost na Facebooku pod vernisáží (prázdný string = nezobrazí se).
    // Jen obyčejný odkaz, žádný vložený widget (kvůli cookies).
    facebookEventUrl: "https://www.facebook.com/events/1673226277100060/",
  },

  // Audio je jen v české verzi (anglická sekci s nahrávkami nemá).
  // file = cesta k MP3 ve složce audio/; duration = pevný text délky (prázdný se nevykreslí)
  tracks: [
    { file: "audio/nahravka-1.mp3", duration: "16 min" },
    { file: "audio/nahravka-2.mp3", duration: "11 min" },
    { file: "audio/nahravka-3.mp3", duration: "19 min" },
  ],

  // Soubory: img/full/NAZEV.jpg (lightbox) a img/thumbs/NAZEV.webp (náhled 600 × 600).
  // Alt texty jsou v CONFIG_CS.galleryAlt / CONFIG_EN.galleryAlt ve STEJNÉM POŘADÍ.
  gallery: ["IMG_0294.jpg", "IMG_0307.jpg", "IMG_0293.jpg", "IMG_0306.jpg", "IMG_0312.jpg", "JMV_4694.jpg"],

  contact: {
    email: "info@mapaslasti.cz",
    thesisUrl:
      "https://showcase.fmk.utb.cz/en/arts-management/sexy-silver-intimacy-and-sexuality-of-seniors-in-residential-social-care-facilities/",
  },
};

const CONFIG_CS = {
  lang: "cs",
  locale: "cs-CZ",

  exhibition: {
    eyebrow: "Výstava",
    // Perex pod nadpisem; \n = nový odstavec
    subtitle:
      "Jak vypadá intimita, touha a sexualita ve stáří? Mají lidé žijící v domovech pro seniory dostatek prostoru pro blízkost a soukromí? " +
      "Výstava Sexy Silver výzkumnice a výtvarnice Miloslavy Dočkalové otevírá téma, o kterém se stále příliš málo mluví. " +
      "Prostřednictvím uměleckého výzkumu zve k překonávání stereotypů a novému pohledu na intimitu ve stáří.",
    // Volitelný řádek pod datem (prázdný string = nezobrazí se)
    vernissage: "Vernisáž 12. 11. 2026 v 18 hodin",
    dateFrom: "od",
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
    // Názvy a popisky ve stejném pořadí jako SHARED.tracks; description je volitelný
    tracks: [
      { title: "Nahrávka 1", description: "" },
      { title: "Nahrávka 2", description: "" },
      { title: "Nahrávka 3", description: "" },
    ],
    loadError: "Stopu se nepodařilo načíst. Zkontrolujte připojení a zkuste to znovu.",
    unsupported: "Váš prohlížeč nepodporuje přehrávání zvuku.",
  },

  galleryTitle: "Z minulých instalací",
  galleryAlt: [
    "Kyanotypie: váza s květinami na stole a růžový nápis POŘÁDEK",
    "Kyanotypie: portrét staršího muže v pruhované košili s rukou u tváře, doplněný růžovým textem",
    "Rozostřená kyanotypie zmačkaného povlečení s opakovaným růžovým nápisem ODDĚLENÍ",
    "Rozostřená kyanotypie postav s růžovými nápisy MUŽI a ŽENY",
    "Detail kyanotypie s nepravidelnými okraji a sytě modrou strukturou",
    "Rozhovor návštěvnic na vernisáži před stěnou s ručně psaným růžovým textem",
  ],
  // {n} = pořadí fotky, {total} = počet fotek
  galleryOpenLabel: "Zvětšit fotografii {n} z {total}",

  contact: {
    intro: "Máte dotaz k výstavě nebo se chcete zapojit do výzkumu? Napište nám.",
    thesisLabel: "Diplomová práce",
    privacyNote:
      "Správkyní osobních údajů je Miloslava Dočkalová (kontakt: info@mapaslasti.cz). Osobní údaje (jméno, e-mail a obsah zprávy) zpracovává výhradně za účelem odpovědi na vaši zprávu, případně vašeho zapojení do výzkumu. Údaje jsou uloženy ve službách Google (Google Workspace / Gmail), nikomu dalšímu je nepředáváme a uchováváme je nejdéle 12 měsíců. Souhlas můžete kdykoli odvolat e-mailem na info@mapaslasti.cz.",
  },

  form: {
    submit: "Odeslat zprávu",
    sending: "Odesílám…",
    sendingStatus: "Odesílám zprávu…",
    successShort: "Děkujeme, zpráva byla odeslána.",
    success: "Děkujeme, zpráva byla odeslána. Ozveme se vám co nejdříve.",
    // {email} se nahradí kontaktním e-mailem
    error: "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo napište přímo na {email}.",
  },
};

const CONFIG_EN = {
  lang: "en",
  locale: "en-GB",

  exhibition: {
    eyebrow: "Exhibition",
    subtitle:
      "What do intimacy, desire and sexuality look like in later life? Do people living in residential care homes have enough room for closeness and privacy? " +
      "Sexy Silver, an exhibition by researcher and artist Miloslava Dočkalová, opens up a subject that is still too rarely talked about. " +
      "Through artistic research, it invites visitors to move beyond stereotypes and take a fresh look at intimacy in later life.",
    vernissage: "Opening: 12 November 2026, 6 pm",
    dateFrom: "from",
    annotation: [
      "The need for closeness, touch and privacy does not fade with age. Sexy Silver explores intimacy, desire and sexuality in later life, with a focus on life in residential care homes. It asks how much room these needs are given there and what may stand in the way of meeting them.",
      "The project grew out of artistic research combining interviews, visits to residential care homes and creative collaboration with their residents. The exhibition brings together different perspectives on closeness in later life and invites reflection on how it is shaped by the environment we live in.",
      "Photographs, objects (discarded bed linen from care homes, an old telephone) and sound recordings translate the research into visual, material and sonic form. The exhibition is an invitation to engage with the experiences of others and to reflect on our own ideas about ageing, the body and intimacy.",
      "The project began as a master's thesis at the Faculty of Multimedia Communications, Tomas Bata University in Zlín (FMK UTB), and in 2025 received the FMK UTB Dean's Award. The author is taking the themes of intimacy and the relationship with one's own body further through doctoral research.",
    ],
  },

  // Bez sekce s nahrávkami – odkaz na českou verzi je přímo v en/index.html
  audio: null,

  galleryTitle: "From previous installations",
  galleryAlt: [
    "Cyanotype: a vase of flowers on a table and the word POŘÁDEK (ORDER) in pink",
    "Cyanotype: portrait of an older man in a striped shirt with his hand to his face, accompanied by pink text",
    "Blurred cyanotype of crumpled bed linen with the word ODDĚLENÍ (WARD) repeated in pink",
    "Blurred cyanotype of figures with the words MUŽI (MEN) and ŽENY (WOMEN) in pink",
    "Close-up of a cyanotype with irregular edges and a deep blue texture",
    "Visitors talking at the opening in front of a wall with handwritten pink text",
  ],
  galleryOpenLabel: "Enlarge photograph {n} of {total}",

  contact: {
    intro: "Do you have a question about the exhibition, or would you like to take part in the research? Get in touch.",
    thesisLabel: "Master's thesis",
    privacyNote:
      "The controller of your personal data is Miloslava Dočkalová (contact: info@mapaslasti.cz). Your personal data (name, email address and the content of your message) is processed solely in order to reply to your message or, where relevant, to involve you in the research. The data is stored in Google services (Google Workspace / Gmail), is not shared with anyone else and is kept for no longer than 12 months. You can withdraw your consent at any time by emailing info@mapaslasti.cz.",
  },

  form: {
    submit: "Send message",
    sending: "Sending…",
    sendingStatus: "Sending your message…",
    successShort: "Thank you, your message has been sent.",
    success: "Thank you, your message has been sent. We'll get back to you as soon as possible.",
    error: "Sorry, your message could not be sent. Please try again, or email us directly at {email}.",
  },
};

// Výsledný CONFIG = jazyková verze doplněná o společné údaje
const LANG = document.documentElement.lang.toLowerCase().startsWith("en") ? CONFIG_EN : CONFIG_CS;
const CONFIG = {
  ...LANG,
  FORM_ENDPOINT: SHARED.FORM_ENDPOINT,
  project: SHARED.project,
  exhibition: { ...SHARED.exhibition, ...LANG.exhibition },
  audio: LANG.audio && {
    ...LANG.audio,
    tracks: SHARED.tracks.map((track, i) => ({ ...track, ...LANG.audio.tracks[i] })),
  },
  gallery: SHARED.gallery.map((file, i) => ({ file, alt: LANG.galleryAlt[i] || "" })),
  contact: { ...SHARED.contact, ...LANG.contact },
};

if (LANG.galleryAlt.length !== SHARED.gallery.length) {
  console.warn(`[Sexy Silver] Počet alt textů (${LANG.lang}) neodpovídá počtu fotek v SHARED.gallery.`);
}

// Cesty k obrázkům a audiu se odvozují od umístění main.js, takže fungují i z /en/
const BASE = new URL("./", document.currentScript.src).href;
const IMG_THUMBS = BASE + "img/thumbs/";
const IMG_FULL = BASE + "img/full/";

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

// Jednopísmenné předložky a spojky (v, s, k, z, o, u, a, i) nesmí zůstat na konci řádku (jen čeština)
function nbsp(text) {
  if (CONFIG.lang !== "cs") return text;
  return text.replace(/(^|\s)([vskzouaiVSKZOUAI])\s+/g, "$1$2\u00a0");
}

function formatDateRange(from, to, locale, fromWord) {
  const parse = (s) => {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
  };
  const full = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long", year: "numeric" });
  const a = parse(from);
  if (!to) return `${fromWord} ${full.format(a)}`;
  const b = parse(to);
  const noYear = new Intl.DateTimeFormat(locale, { day: "numeric", month: "long" });
  const start = a.getFullYear() === b.getFullYear() ? noYear.format(a) : full.format(a);
  return `${start} – ${full.format(b)}`;
}

/* --- Render -------------------------------------------------------------- */

function renderExhibition(config) {
  const ex = config.exhibition;
  bind("eyebrow", `${ex.eyebrow} · ${config.project.author}`);
  bind("title", ex.title);
  $("#hero-subtitle").replaceChildren(
    ...ex.subtitle.split("\n").map((text) => el("p", "", nbsp(text)))
  );
  bind("venue", ex.venue);
  bind("address", ex.address);
  bind("dates", formatDateRange(ex.startDate, ex.endDate, config.locale, ex.dateFrom));
  const vernissage = $("#hero-vernissage");
  if (ex.vernissage) vernissage.textContent = nbsp(ex.vernissage);
  else vernissage.hidden = true;

  const event = $("#hero-event");
  const eventUrl = ex.facebookEventUrl?.trim();
  if (eventUrl) {
    event.href = eventUrl;
    event.hidden = false;
  }

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
  const list = $("#tracks");
  if (!config.audio || !list) return; // anglická verze nahrávky nemá
  const intro = config.audio.intro?.trim() ?? "";
  bind("audioIntro", intro);
  document.querySelectorAll('[data-bind="audioIntro"]').forEach((node) => (node.hidden = !intro));
  // Hero fotka je staticky v index.html (img/hero-*.webp) kvůli rychlosti načtení
  const artwork = BASE + "img/hero-800.webp";

  list.replaceChildren(
    ...config.audio.tracks.map((track, i) => {
      const li = el("li", "track");
      const titleId = `track-title-${i + 1}`;

      const number = el("span", "track__number", String(i + 1).padStart(2, "0"));
      number.setAttribute("aria-hidden", "true");

      const title = el("h3", "track__title", track.title);
      title.id = titleId;

      const heading = el("div", "track__heading");
      heading.append(title);
      const duration = track.duration?.trim();
      if (duration) heading.append(el("span", "track__duration", duration));

      li.append(number, heading);
      const description = track.description?.trim();
      if (description) li.append(el("p", "track__desc", description));

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.preload = "none"; // nic se nestahuje, dokud uživatel nespustí přehrávání
      audio.setAttribute("aria-labelledby", titleId);
      audio.dataset.title = track.title;

      // U <source> se chyba načtení hlásí na prvku source, ne na audio
      const source = document.createElement("source");
      source.src = BASE + track.file;
      source.type = "audio/mpeg";
      source.addEventListener("error", () => {
        if (li.querySelector(".track__error")) return;
        li.append(el("p", "track__error", config.audio.loadError));
      });

      audio.append(source, config.audio.unsupported);
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
          artwork: [{ src: artwork, sizes: "800x548", type: "image/webp" }],
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
      button.setAttribute(
        "aria-label",
        config.galleryOpenLabel.replace("{n}", i + 1).replace("{total}", photos.length)
      );

      const img = document.createElement("img");
      // Náhled: čtvercový WebP 600 × 600 se stejným názvem jako fotka (lightbox dál otevírá img/full/*.jpg)
      img.src = IMG_THUMBS + photo.file.replace(/\.jpe?g$/i, ".webp");
      img.alt = photo.alt;
      img.loading = "lazy";
      img.decoding = "async";
      img.width = 600;
      img.height = 600;

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

function setupForm(config) {
  const t = config.form;
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
      setStatus(t.successShort, "success");
      return;
    }

    const data = new URLSearchParams({
      typ: formData.get("type"),
      jmeno: formData.get("name").trim(),
      email: formData.get("email").trim(),
      zprava: formData.get("message").trim(),
      souhlas: $("#f-consent").checked ? "ano" : "",
      website: formData.get("website") || "",
      lang: config.lang,
    });

    submit.disabled = true;
    submit.textContent = t.sending;
    setStatus(t.sendingStatus, null);

    try {
      const endpoint = config.FORM_ENDPOINT;
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
      setStatus(t.success, "success");
    } catch (err) {
      console.error("[Sexy Silver] Chyba při odesílání formuláře:", err);
      setStatus(t.error.replace("{email}", config.contact.email), "error");
    } finally {
      submit.disabled = false;
      submit.textContent = t.submit;
    }
  });
}

/* --- Start --------------------------------------------------------------- */

function init(config) {
  renderExhibition(config);
  renderTracks(config);
  setupGallery(config);
  renderContact(config);
  setupForm(config);
  renderMap(config);

  // Obsah se renderuje až teď, proto po načtení znovu doskočit na kotvu (např. #audio)
  if (location.hash) {
    document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }
}

// Pro napojení na Google Sheets později: načíst data (fetch), sestavit z nich
// objekt ve stejném tvaru jako CONFIG a zavolat init(nactenyConfig).
init(CONFIG);
