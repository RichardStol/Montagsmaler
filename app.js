// console.log("Hallo");
const wordEl = document.querySelector(".word");
const oldWordsEl = document.querySelector(".old-words");

// Wortliste
let words = []; // leeres Array
let currentWord ="";
let previousWords=[];

// Datei einlesen mit fetch Funktion (A-Synchrone Funktion, daher .then notwendig)
fetch("words.txt").then(function(response){
    return response.text(); // return gibt wert in funktion zurück, .text auch a-synchronm, daher nochmal .then
}).then(function(text){ // text aus responsive zeile zuvor
    // console.log(text); // String
    words = text.split(",");
    // console.log(words); // Liste (array)
});

// Das hier passiert, wenn wir auf den Button klicken
function onClick(){
    if(currentWord){
    // Wenn wir gerade noch ein Wort anzeige, so fügen wir
    previousWords.push(currentWord); // hängt an Array einen neuen Eintrag dran
    // console.log(previousWords); // Zeigt Array in Konsole

    // Aktualisierung der Website
    oldWordsEl.innerHTML = previousWords.join(", "); // Join verwandelt array wieder in String und fügt Inhalt aus "" hinzu
    }
    // neues Wort generieren und als aktuelles Wort speichern
    currentWord = getRandomWord();
    // console.log("ON CLICK");
    // console.log(getRandomWord()); // gibt in der Console die Funktion getRandomWord aus
    // console.log(currentWord);

    // Danach aktualisieren wir unsere Website, um das neue Wort anzeigen zu können
    wordEl.innerHTML = currentWord;
}

function getRandomNumer(maxNumber){
    // return Math.random() * maxNumber  // Wären Kommazahlen
    return Math.floor(Math.random() * maxNumber); // hier ganze Zahlen
}

function getRandomWord(){
    // return words[0]; // gibt ersten Eintrag aus words array zurück
    return words[getRandomNumer(words.length)];
}