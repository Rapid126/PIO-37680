# Portfolio – Dawid Filipak

Strona portfolio stworzona jako projekt prezentujący umiejętności frontendowe. Zawiera informacje o autorze, listę danych użytkowników, formularz kontaktowy i dynamiczne komponenty JavaScript (np. pobieranie pogody).

---

## Technologie

- **HTML5**
- **CSS3** (pliki z podziałem na sekcje)
- **JavaScript (Vanilla)**
- **API pogodowe** (przykładowe)
- **Responsywność** – dostosowanie do urządzeń mobilnych (m.in. podstrona 3 kolumny)

---

## Struktura plików

├── index.html
├── kontakt.html
├── lista_danych.html
├── podstrona_3_kolumny.html
├── szczegoly.html
├── Style.css
├── Strona_glowna.css
├── Kontakt.css
├── Lista_danych.css
├── 3kolumny.css
├── Szczegoly.css
├── pogoda.js
├── Lista_danych.js
├── Kontakt.js
├── Szczegoly.js
└── LogoDF.png / Naglowek_tlo.png


---

## Opis podstron

### `index.html` – Strona główna

- Zawiera sekcję powitalną, opis pasji i podejścia do projektowania.
- Wyświetla dynamiczną pogodę w nagłówku (JS + API).
- Menu nawigacyjne do wszystkich podstron.

---

### `kontakt.html` – Formularz kontaktowy

- Formularz z walidacją HTML5.
- Pola: imię, nazwisko, email, firma, stanowisko, temat, wiadomość.
- Checkboxy RODO + newsletter.
- Wyświetla komunikat sukcesu po przesłaniu (JS).
- Stylizowany w `Kontakt.css`, obsługiwany przez `Kontakt.js`.

---

### `lista_danych.html` – Lista użytkowników

- Wyszukiwarka, paginacja, kontener na dane użytkowników.
- Dynamicznie wypełniana przez `Lista_danych.js`.
- Dane mogą być pobierane z API lub mockowane.
- Przycisk przejścia do szczegółów użytkownika (`szczegoly.html`).

---

### `szczegoly.html` – Szczegóły użytkownika

- Wyświetla dane pojedynczego użytkownika.
- Przycisk edycji – pokazuje formularz edytujący dane.
- JS obsługuje zapisywanie i anulowanie zmian (`Szczegoly.js`).

---

### `podstrona_3_kolumny.html` – Treść w 3 kolumnach

- Opis zainteresowań, hobby i celów.
- Trzy kolumny + responsywny układ mobilny (`kolumna-mobile`).
- Stylizowane w `3kolumny.css`.

---

## Pogoda – komponent globalny

- Komponent w nagłówku wszystkich podstron.
- Pobiera dane pogodowe (miasto, temp, ikona).
- Obsługiwany przez `pogoda.js`.

---

## Jak uruchomić projekt

1. Sklonuj repozytorium lub pobierz pliki jako ZIP.
2. Upewnij się, że wszystkie pliki są w tym samym folderze (lub zgodnie z wyżej podaną strukturą).
3. Otwórz `index.html` w przeglądarce.

