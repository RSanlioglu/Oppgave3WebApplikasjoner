//Globale variabler som brukes for data og posisjonering
let errorCounter = 0;
let wordPos = 0;
let wordIndex = 0;

const words = ["conspiracy", "act", "supercalifragilisticexpialidocious"]; //Liste med ord

//Henter ut html elementer
const wordOut = document.getElementById("word"); 
const letterOut = document.getElementById("letter");
const wrongOut = document.getElementById("wrongs");
const btnStart = document.querySelector("button");

//Henter ut ord og skriver den ut til bruker. Dersom det ikke er flere ord så skrives det ut en feilmelding
const writeWord = () => {
    (wordIndex < words.length) ? wordOut.innerHTML = words[wordIndex] : wordOut.innerHTML= `Ingen flere ord`;
}

//Funksjon for å bytte ord og endre på indexen for ordet.
const updateWord = () => {
    wordIndex++;
    wordPos = 0; //Starter på 0 siden det er et nytt ord
    writeWord();
}

//Funksjon for å sjekke om brukeren har skrevet riktig bokstav
const checkLetter = (word, wordPos, letterOut) => {
    return word[wordPos] === letterOut;  //Sjekker om bokstaven fra ordet stemmer i samsvar med bokstaven vi har tastet inn
}

//Funksjon som sjekker om ordet er riktig skrevet
const checkIfWordCorrect = (word, wordPos) => {
    return wordPos === word.length; //Dersom vi har kommet til slutten av ordet så er ordet skrevet riktig. Ellers feil
}

//Funksjon som håndterer tastetrykk. Sjekker om det er riktig bokstav eller feil bokstav.
const handleKeyIn = ({key}) => {
    const word = words[wordIndex]; //Henter ut bokstaven vi er i nå
    if(checkLetter(word, wordPos, key)) { //Sjekker om bokstaven og tastetrykket er riktig
        wordPos++;                          //Hvis riktig så går vi til neste bokstav
        if(checkIfWordCorrect(word, wordPos)) {  //Dersom ordet vi har skrevet inn er riktig så oppdaterer vi ordet
            updateWord();
        }
    } else {                                        //Ellers øker vi antall feil
        errorCounter++;
    }
    updateUi(key);
};

//Funksjon som oppdaterer user interface. Tar inn en key (knapp som er tastet inn) som parameter
const updateUi = (key) => {
    //Dersom det er flere ord igjen fra listen så oppdaterer vi UI
    if(wordIndex < words.length) {
        wrongOut.innerHTML = `Antall feil: ${errorCounter}`;                     //Her vises antall feil
        letterOut.innerHTML = `Du har tastet: ${key}`;                           //Her vises tastetrykk
        wordOut.innerHTML = `<span class="green">${words[wordIndex].slice(       //Her vises det at du har tastet inn riktig bokstav. Bokstavene blir grønne
            0,
            wordPos
          )}</span>${words[wordIndex].slice(wordPos)}`;
    }
}


//Funksjon som starter applikasjonen
const startApp = () => {
    btnStart.disabled = true;
    writeWord();
}

//Lytter til alle taster og håndterer dem
window.addEventListener("keyup", handleKeyIn);

//Lytter til at knappen blir klikket.
btnStart.addEventListener("click", startApp);

