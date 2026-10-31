# Sexy Silver — výstava | mapaslasti.cz

Web k výstavě **Sexy Silver** autorky Minky Dočkalové, výzkumného a výstavního projektu o intimitě a sexualitě seniorek a seniorů v domovech pro seniory.

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
| Fonty | Google Fonts (Oswald, Inter) |
| Audio | Nativní HTML5 `<audio>` |
| Mapa | Mapy.com (iframe) |
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
