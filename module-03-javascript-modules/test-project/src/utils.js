// # Hilfsfunktion: Daten aus localStorage lesen und als Array zurückgeben
// Falls nichts gespeichert ist, wird ein leeres Array zurückgegeben
const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];

// Hilfsfunktion: Daten als JSON-String in localStorage speichern
const writeToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export { getFromStorage, writeToStorage };
