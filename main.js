/* ==========================================================================
   Sexy Silver – obsah a chování stránky
   Veškerý obsah se mění v objektu CONFIG níže. Později lze CONFIG
   nahradit daty načtenými z Google Sheets (viz funkce init na konci).
   ========================================================================== */

const CONFIG = {
  project: {
    author: "Miloslava Dočkalová",
  },

  exhibition: {
    title: "Sexy Silver",
    // Perex pod nadpisem; \n = nový odstavec
    subtitle:
      "Jak může vypadat intimita a sexualita seniorů v domovech pro seniory? A proč je důležité se o tom bavit?\n" +
      "Přijďte nahlédnout a zažít interaktivní výstavu výzkumnice a výtvarnice Miloslavy Dočkalové, která se tomuto tématu věnuje.",
    venue: "[DOPLNIT] Název galerie / místa, Praha",
    address: "[DOPLNIT] Ulice 123, 110 00 Praha 1",
    // Mapa z Mapy.com: Sdílet → Vložit do webu → zkopírovat URL z atributu src iframu
    mapEmbedUrl: "https://mapy.com/s/dujedovobo",
    // Odkaz „Otevřít v mapách“ pod mapkou (např. sdílecí odkaz z Mapy.com)
    mapLinkUrl: "https://mapy.com/cs/turisticka?source=addr&id=9108273&x=14.4199357&y=50.0866288&z=17",
    // Datum ve formátu RRRR-MM-DD
    dateFrom: "2026-11-15", // [DOPLNIT]
    dateTo: "2027-01-31",   // [DOPLNIT]
    // Volitelný řádek pod datem (prázdný string = nezobrazí se)
    vernissage: "Vernisáž 12. 11. 2026 v 18 hodin",
    hero: {
      file: "IMG_0283.jpg", // soubor z img/full/ (a img/thumbs/ pro mobily)
      alt: "Růžový telefon s číselníkem na posteli s kyanotypovým povlečením",
    },
    annotation: [
      "[DOPLNIT] Úvodní odstavec anotace. O čem je Sexy Silver – intimita, touha a blízkost ve stáří a v prostředí domovů pro seniory.",
      "[DOPLNIT] Druhý odstavec. Jak výzkum probíhal: rozhovory, návštěvy domovů, spolupráce s klientkami, klienty a personálem.",
      "[DOPLNIT] Třetí odstavec. Co výstava ukazuje – kyanotypie, objekty, zvukové nahrávky – a jak ji procházet.",
      "[DOPLNIT] Čtvrtý odstavec. Autorka, spolupracovníci, partneři a podpora projektu.",
    ],
  },

  audio: {
    intro: "[DOPLNIT] Doporučujeme poslouchat ve sluchátkách. Stopy můžete pouštět v libovolném pořadí.",
    // file = cesta k MP3 ve složce audio/; description je volitelný
    tracks: [
      { title: "[DOPLNIT] Název první stopy", description: "[DOPLNIT] Krátký popis stopy.", file: "audio/01.mp3" },
      { title: "[DOPLNIT] Název druhé stopy", description: "", file: "audio/02.mp3" },
      { title: "[DOPLNIT] Název třetí stopy", description: "[DOPLNIT] Krátký popis stopy.", file: "audio/03.mp3" },
      { title: "[DOPLNIT] Název čtvrté stopy", description: "", file: "audio/04.mp3" },
    ],
  },

  // Soubory musí existovat se stejným názvem v img/thumbs/ i img/full/.
  // caption je volitelný popisek pod fotkou v lightboxu.
  gallery: [
    { file: "IMG_0283.jpg", alt: "Růžový telefon s číselníkem na posteli s kyanotypovým povlečením" },
    { file: "IMG_0291.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "IMG_0293.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "IMG_0294.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "IMG_0305.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "IMG_0306.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "IMG_0307.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "IMG_0308.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "IMG_0310.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "IMG_0312.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "IMG_0315.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "JMV_2635.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "JMV_2637.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "JMV_4669.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "JMV_4676.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "JMV_4694.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "JMV_4754.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "JMV_4833.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "JMV_4837.jpg", alt: "[DOPLNIT] Popis fotografie" },
    { file: "JMV_4838.jpg", alt: "[DOPLNIT] Popis fotografie" },
  ],

  contact: {
    intro: "[DOPLNIT] Máte dotaz k výstavě nebo se chcete zapojit do výzkumu? Napište nám.",
    email: "doplnit@mapaslasti.cz",                  // [DOPLNIT]
    instagram: "https://www.instagram.com/doplnit/", // [DOPLNIT]
    instagramLabel: "@doplnit",                      // [DOPLNIT]
    privacyNote:
      "[DOPLNIT] Osobní údaje (jméno, e-mail a obsah zprávy) zpracovává Miloslava Dočkalová výhradně za účelem odpovědi na vaši zprávu, případně vašeho zapojení do výzkumu. Údaje nepředáváme třetím stranám a uchováváme je nejdéle [DOPLNIT] měsíců. Souhlas můžete kdykoli odvolat e-mailem.",
  },
};

// URL pro odeslání formuláře (např. Formspree, Google Apps Script, vlastní PHP skript).
// Pokud je prázdná, data se jen vypíšou do konzole.
const FORM_ENDPOINT = "";

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
  const a = parse(from);
  const b = parse(to);
  const full = new Intl.DateTimeFormat("cs-CZ", { day: "numeric", month: "long", year: "numeric" });
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
  bind("dates", formatDateRange(ex.dateFrom, ex.dateTo));
  const vernissage = $("#hero-vernissage");
  if (ex.vernissage) vernissage.textContent = nbsp(ex.vernissage);
  else vernissage.hidden = true;

  const hero = $("#hero-image");
  hero.srcset = `${IMG_THUMBS}${ex.hero.file} 800w, ${IMG_FULL}${ex.hero.file} 1800w`;
  hero.src = IMG_FULL + ex.hero.file;
  hero.alt = ex.hero.alt;

  $("#annotation").replaceChildren(...ex.annotation.map((text) => el("p", "", text)));
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
  bind("audioIntro", config.audio.intro);
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

      li.append(number, title);
      if (track.description) li.append(el("p", "track__desc", track.description));

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.preload = "none";
      audio.src = track.file;
      audio.setAttribute("aria-labelledby", titleId);
      audio.dataset.title = track.title;
      audio.textContent = "Váš prohlížeč nepodporuje přehrávání zvuku.";
      li.append(audio);

      audio.addEventListener("error", () => {
        if (li.querySelector(".track__error")) return;
        li.append(el("p", "track__error", "Stopu se nepodařilo načíst. Zkontrolujte připojení a zkuste to znovu."));
      });

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

  const ig = $("#footer-instagram");
  ig.href = c.instagram;
  ig.textContent = `Instagram ${c.instagramLabel}`;

  $("#year").textContent = new Date().getFullYear();
}

/* --- Galerie a lightbox -------------------------------------------------- */

function setupGallery(config) {
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

    const data = {
      type: formData.get("type"),
      typeLabel: $("#f-type").selectedOptions[0].textContent,
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      message: formData.get("message").trim(),
      consent: true,
      sentAt: new Date().toISOString(),
    };

    submit.disabled = true;
    submit.textContent = "Odesílám…";
    setStatus("Odesílám zprávu…", null);

    try {
      if (!FORM_ENDPOINT) {
        console.log("[Sexy Silver] FORM_ENDPOINT není nastaven, data formuláře:", data);
      } else {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
