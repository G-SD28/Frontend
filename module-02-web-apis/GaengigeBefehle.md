# 🧩 DOM-Kurzübersicht

## 1. Element-Selektion

- `getElementById()` → gibt ein einzelnes Element oder `null` zurück
- `getElementsByClassName()` → gibt eine **live HTMLCollection** zurück
- `getElementsByTagName()` → gibt ebenfalls eine **live HTMLCollection** zurück
- `querySelector()` → gibt das **erste** passende Element oder `null` zurück
- `querySelectorAll()` → gibt eine **statische NodeList** zurück

---

## 2. Erstellen & Modifizieren von Elementen

- `createElement()` → erstellt ein neues Element
- `textContent` → setzt Textinhalt; HTML wird nicht interpretiert, daher sicherer bei User-Input
- `innerText` → setzt sichtbaren Text und berücksichtigt Styling/Layout
- `innerHTML` → setzt HTML; vorsichtig verwenden bei User-Input
- `setAttribute()` → ändert oder ersetzt beliebige Attribute
- `classList.add/remove/toggle()` → moderne Variante: ändert oder ersetzt die `class`-Attribut-Zeichenkette
- `className` → ändert oder ersetzt die `class`-Attribut-Zeichenkette

---

## 3. Einfügen ins DOM

- `appendChild()` → fügt **eine Node** als letztes Child eines Parent-Elements ein
- `append()` → fügt eine oder mehrere Nodes/Texte als letztes Child ein
- `prepend()` → fügt eine oder mehrere Nodes/Texte als erstes Child ein
- `insertAdjacentHTML()` → fügt einen HTML-String an einer bestimmten Position relativ zu einem Element ein

---

## 4. Event-Handling

- `addEventListener()` → Event-Handler anhängen
- `event.preventDefault()` → Standardverhalten stoppen
- `event.target` → Element, das das Event ursprünglich ausgelöst hat
- `event.currentTarget` → Element, an dem der Event-Listener hängt
- Das **Event-Objekt** enthält nützliche Zusatzinfos, z. B. Taste, Mausposition, Event-Typ usw.

---

## 5. Collections

- **HTMLCollection** → meistens _live_, aktualisiert sich automatisch
- **NodeList** → kann statisch oder live sein
- `querySelectorAll()` gibt eine **statische NodeList** zurück
- Beide sind **keine echten Arrays**, können aber konvertiert werden, z. B. mit `Array.from()`

---

## 6. Best Practices

- Immer auf mögliche `null`-Werte prüfen, bevor man mit Elementen arbeitet
- `defer` beim Laden von Scripts verwenden
- Formulareingaben validieren
- Aussagekräftige Event-Handler-Namen wählen
- Bei User-Input aus Sicherheitsgründen `textContent` statt `innerHTML` verwenden
- `innerHTML` und `insertAdjacentHTML()` nur mit vertrauenswürdigem HTML verwenden

---

# 🧾 Einige Event-Typen

```js
// 🖱️ Maus-Events
element.addEventListener('click', () => {}); // Einfach-Klick
element.addEventListener('dblclick', () => {}); // Doppelklick
element.addEventListener('mouseenter', () => {}); // Maus betritt Element
element.addEventListener('mouseleave', () => {}); // Maus verlässt Element
element.addEventListener('mouseover', () => {}); // Maus über Element oder Kind
element.addEventListener('mouseout', () => {}); // Maus verlässt Element oder Kind

// ⌨️ Tastatur-Events
input.addEventListener('keydown', (e) => {
  console.log(e.key); // Welche Taste wurde gedrückt?
});
input.addEventListener('keyup', () => {});
input.addEventListener('keypress', () => {}); // Veraltet – lieber keydown verwenden

// 🧩 Formular-Events
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
input.addEventListener('change', () => {}); // Wert geändert & Fokus verloren
input.addEventListener('input', () => {}); // Wert geändert (in Echtzeit)
input.addEventListener('focus', () => {}); // Element bekommt Fokus
input.addEventListener('blur', () => {}); // Element verliert Fokus

// 🌍 Fenster-Events
window.addEventListener('load', () => {}); // Seite vollständig geladen
window.addEventListener('resize', () => {}); // Fenstergröße geändert
window.addEventListener('scroll', () => {}); // Seite gescrollt
```

---

# `insertAdjacentHTML()` vs. `createElement()`

## `insertAdjacentHTML()`

`insertAdjacentHTML()` fügt einen HTML-String direkt an einer bestimmten Position relativ zu einem vorhandenen Element ein.

```js
element.insertAdjacentHTML(position, htmlString);
```

Es gibt vier mögliche Positionen:

```js
element.insertAdjacentHTML('beforebegin', '<p>Vor dem Element</p>');
element.insertAdjacentHTML('afterbegin', '<p>Als erstes Child im Element</p>');
element.insertAdjacentHTML('beforeend', '<p>Als letztes Child im Element</p>');
element.insertAdjacentHTML('afterend', '<p>Nach dem Element</p>');
```

## Vorteile

- Schnell und praktisch für viel statisches Markup
- Sehr nah am finalen HTML → gut für Layout-Demos
- Oft lesbarer als viele einzelne `createElement()`-Aufrufe
- Bestehende Inhalte des Elements werden nicht komplett ersetzt

## Nachteile

- HTML wird als String geschrieben
- Gefährlich bei User-Input, weil dadurch XSS möglich ist
- Kein direkter Rückgabewert der eingefügten Nodes
- Man muss eingefügte Elemente anschließend erneut selektieren, wenn man sie direkt weiterverwenden möchte

## Wichtig: Vorsicht bei User-Input

```js
const userInput = '<img src=x onerror=alert("Hacked!")>';

element.insertAdjacentHTML('beforeend', userInput); // gefährlich
```

Besser bei User-Input:

```js
const p = document.createElement('p');
p.textContent = userInput;
element.append(p);
```

---

# `createElement()` / `append()`

Mit `createElement()` erstellt man Elemente Schritt für Schritt als echte DOM-Nodes.

```js
const li = document.createElement('li');
li.textContent = 'Neuer Eintrag';

list.append(li);
```

## Vorteile

- Sehr sicher bei dynamischen oder externen Daten
- Gut kontrollierbar
- Eingefügte Nodes sind direkt als Variablen verfügbar
- Besonders sinnvoll, wenn danach noch Events, Klassen oder Attribute gesetzt werden sollen

## Nachteile

- Mehr Code bei komplexen Layouts
- Weniger nah am finalen HTML

---

# Faustregel

- Für **vertrauenswürdiges, statisches Markup**: `insertAdjacentHTML()`
- Für **User-Input oder externe Daten**: `createElement()` + `textContent`
- Für einfache Texteinfügungen: `textContent`
- Für HTML aus Strings: nur verwenden, wenn die Quelle wirklich vertrauenswürdig ist

---
