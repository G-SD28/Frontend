# 🧩 Zusammenfassung der wichtigsten Konzepte

1. **Element-Selektion**
   - `getElementById()` → gibt ein einzelnes Element oder null zurück
   - `getElementsByClassName()` → gibt eine **live HTMLCollection** zurück
   - `getElementsByTagName()` → ebenfalls eine **live HTMLCollection**
   - `querySelector()` → gibt das **erste** Treffer-Element oder null zurück
   - `querySelectorAll()` → gibt eine **statische NodeList** zurück

2. **Erstellen & Modifizieren von Elementen**
   - `createElement()` → erstellt ein neues Element
   - `textContent` → setzt Text (sicher gegen XSS)
   - `innerText` → setzt sichtbaren Text und berücksichtigt Styling/Layout
   - `innerHTML` → setzt HTML (vorsichtig verwenden!)
   - `setAttribute()` → setzt Attribute
   - `classList.add/remove/toggle()` → verwaltet CSS-Klassen

3. **Einfügen ins DOM**
   - `appendChild()` → fügt eine Node als letztes Child eines Parent-Elements ein
   - `prepend()` → fügt eine oder mehrere Nodes/Texte als erstes Child eines Parent-Elements ein

4. **Event-Handling (Ereignis-Verarbeitung)**
   - `addEventListener()` → Event-Handler anhängen
   - `event.preventDefault()` → Standardverhalten stoppen
   - `event.target` → Element, das das Event ausgelöst hat
   - Das **Event-Objekt** enthält nützliche Zusatzinfos (z. B. Key, Position, Typ …)

5. **Collections (Sammlungen)**
   - **HTMLCollection** → _live_, aktualisiert sich automatisch
   - **NodeList** → _statisch_, Snapshot zum Zeitpunkt der Auswahl
   - Beide sind **keine Arrays**, können aber konvertiert werden (`Array.from()`)

6. **Best Practices**
   - Immer auf mögliche `falsy`-Elemente prüfen
   - `defer` beim Laden von Scripts verwenden
   - Formulareingaben validieren
   - Aussagekräftige Event-Handler-Namen wählen
   - Aus Sicherheitsgründen bei User-input `textContent` statt `innerHTML` verwenden

## 🧾 Häufige Event-Typen

```js
// Hier sind einige Events, die etwas häufiger vorkommen

// 🖱️ Maus-Events
element.addEventListener('click', () => {}); // Einfach-Klick
element.addEventListener('dblclick', () => {}); // Doppelklick
element.addEventListener('mouseenter', () => {}); // Maus betritt Element
element.addEventListener('mouseleave', () => {}); // Maus verlässt Element
element.addEventListener('mouseover', () => {}); // Maus über Element oder Kind
element.addEventListener('mouseout', () => {}); // Maus verlässt Element oder Kind

// ⌨️ Tastatur-Events
input.addEventListener('keydown', (e) => {
  console.log(e.key); // Welche Taste wurde gedrückt
});
input.addEventListener('keyup', () => {});
input.addEventListener('keypress', () => {}); // Veraltet – lieber keydown verwenden

// 🧩 Formular-Events
form.addEventListener('submit', () => {});
input.addEventListener('change', () => {}); // Wert geändert & Fokus verloren
input.addEventListener('input', () => {}); // Wert geändert (in Echtzeit)
input.addEventListener('focus', () => {}); // Element bekommt Fokus
input.addEventListener('blur', () => {}); // Element verliert Fokus

// 🌍 Fenster-Events
window.addEventListener('load', () => {}); // Seite vollständig geladen
window.addEventListener('resize', () => {}); // Fenstergröße geändert
window.addEventListener('scroll', () => {}); // Seite gescrollt
```

## insertAdjacentHTML vs. createElement

### insertAdjacentHTML

- Super schnell für viel statisches Markup
- Sehr nah am finalen HTML → gut für Layout-Demos
- Strings müssen vertrauenswürdig sein (XSS!)
- Kein Rückgabewert der eingefügten Nodes → anschließend selektieren

### createElement / append

- Sehr sicher bei dynamischen/externen Daten (textContent etc.)
- Fein steuerbar, einzelne Nodes vorhanden
- Mehr Zeilen bei komplexen Layouts
