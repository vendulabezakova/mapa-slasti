# Sexy Silver — výstava | mapaslasti.cz

Web k výstavě **Sexy Silver** autorky Miloslavy Dočkalové, výzkumného a výstavního projektu o intimitě a sexualitě seniorek a seniorů v domovech pro seniory.

Web slouží návštěvníkům přímo na výstavě: QR kód v instalaci vede na stránku s informacemi o výstavě, audiostopami k poslechu v telefonu, fotkami a kontaktním formulářem. Později na doméně vznikne web projektu **Mapa slastí**.

🌐 **[mapaslasti.cz](https://mapaslasti.cz)**

---

## Co web obsahuje

- **Výstava:** název, místo, termín a vernisáž, mapa místa konání
- **Anotace** výstavy
- **Audiostopy:** přehrávače optimalizované pro mobil (při spuštění jedné stopy se ostatní pozastaví)
- **Z výstavy:** fotogalerie s lightboxem (šipky, Esc, swipe na mobilu)
- **Kontaktní formulář:** obecný dotaz nebo zájem o zapojení do výzkumu / mapování slasti

---

## Technologie

Web je záměrně postavený bez frameworků: čisté HTML, CSS a JavaScript. Žádné závislosti, žádný build proces, snadné nasazení přes FTP.

| Vrstva | Technologie |
|---|---|
| Markup | HTML5 (sémantické značky, přístupnost) |
| Styly | CSS3 (custom properties, grid, mask-image, mobile-first) |
| Logika | Vanilla JavaScript |
| Fonty | Oswald, Inter (hostované lokálně ve fonts/) |
| Audio | Nativní HTML5 `<audio>` |
| Mapa | Mapy.com (iframe) |
| Analytika | Google Analytics 4 (načte se až po souhlasu v cookie liště) |
| Backend formuláře | Google Apps Script |
| Úložiště zpráv | Google Sheets |
| Notifikace | MailApp (Apps Script) |
| Hosting | Webglobe (Webhosting Start) |
| SSL | Let's Encrypt (automatické prodlužování) |

### Design

Vizuál vychází přímo z výstavy: sytá kyanotypová modrá, výrazná růžová typografie a hodně bílé. Hero fotka na desktopu vybíhá k pravému okraji a do ztracena přechází přes `mask-image`, na mobilu se ztrácí směrem dolů. Barvy, fonty a mezery jsou definované jako CSS proměnné v `:root`.

### Kontaktní formulář

Formulář odesílá data přes `fetch` (POST, `URLSearchParams`, bez CORS preflightu) na webovou aplikaci v Google Apps Script, která:

1. zapíše zprávu jako řádek do Google tabulky (datum, typ zprávy, jméno, e-mail, text, souhlas),
2. pošle e-mailovou notifikaci s `reply-to` nastaveným na odesílatele, takže jde rovnou odpovědět.

Ochrana:

- **Honeypot:** skryté pole, které vyplní jen boti. Takové zprávy se tiše zahodí, bot vidí úspěch.
- **Ochrana tabulky:** hodnoty začínající `=`, `+`, `-` nebo `@` se ukládají jako text, aby nešlo do tabulky vložit vzorec.
- Validace povinných polí a souhlasu se zpracováním osobních údajů i na straně serveru.

---

## Analytika (GA4) a cookie lišta

- Measurement ID je v `main.js` v `SHARED.gaId`. Prázdný string = analytika i cookie lišta jsou vypnuté.
- **Režim „basic“ Consent Mode v2:** `gtag.js` se nenačte vůbec, dokud návštěvník v liště nedá **Přijmout**. Výchozí stav všech souhlasů je `denied`, po přijetí se nastaví jen `analytics_storage: granted` (reklamní zůstávají `denied`).
- Volba se ukládá do `localStorage` pod klíčem `ss-consent` (`granted` / `denied`). Odkaz **Nastavení cookies** v patičce lištu znovu otevře. Po odmítnutí se smažou případné `_ga` cookies.
- Na `localhost` se GA nenačítá – události se jen vypisují do konzole (`[Sexy Silver] GA4 událost: …`).

### Vlastní události

| Událost | Parametry | Kdy |
|---|---|---|
| `audio_play` | `track` | první spuštění nahrávky během návštěvy |
| `audio_progress` | `track`, `percent` (25 / 50 / 75 / 100) | pozice přehrávání dosáhne milníku (každý jednou za návštěvu) |
| `audio_listen` | `track`, `listen_seconds` | skutečně přehrané sekundy (bez přetáčení) – odesílá se při pauze, dohrání, zamčení telefonu / odchodu ze stránky |
| `generate_lead` | `form_type`, `lang` | úspěšně odeslaný kontaktní formulář |
| `click_map` | – | klik na „Otevřít v mapách“ |
| `lang_switch` | `to` (`cs` / `en`) | přepnutí jazyka |

### Nastavení v GA4 (Admin)

1. **Vlastní definice → Vlastní dimenze** (rozsah: událost): `track`, `percent`, `form_type`, `lang`, `to`.
2. **Vlastní definice → Vlastní metriky** (rozsah: událost, jednotka: sekundy): `listen_seconds`.
3. **Události → označit jako klíčovou událost:** `generate_lead`.
4. **Uchovávání dat:** 14 měsíců. Google Signals vypnuté.

Analýzy (Průzkumy): volný formát *track × počet událostí `audio_play` × součet `listen_seconds`*, trychtýř `audio_play → audio_progress 25 → 50 → 75 → 100` pro jednotlivé nahrávky.
