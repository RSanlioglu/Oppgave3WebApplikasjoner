// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
    const textArray = text.split(" "); //Legger alle ordene i setningen til en array

    let longestWord = textArray[0]; //Setter første ord som den største for å sammenligne
  
    //For løkke som vil gå gjennom alle ordene og finne lengste ordet
    for(let word of textArray) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
};

console.log(longestWord());
