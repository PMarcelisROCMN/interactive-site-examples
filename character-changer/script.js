// lijstje van alle letters in het alfabet
let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];


// haal een willekeurig character uit de lijst
function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

// Maak een lijstje van 10 willekeurige characters en voeg daar de uiteindelijke letter aan toe
function changeCharacter(finalLetter, node) {

    let characters = [];

    // for loop waarbij er 10 verschillende characters worden opgehaald
    for (let i = 0; i < 10; i++) {
        characters.push(getRandomCharacter());
    }

    // voeg de laatste letter toe aan het lijstje
    characters.push(finalLetter);

    // loop door de verschillende letters heen en voeg deze toe aan de node
    for (let i = 0; i < characters.length; i++) {
        setTimeout(() => {
            node.innerHTML = characters[i];
        }, 100 * i);

    }
}

function createLetter(letter){
    const p = document.createElement('p');
    document.body.appendChild(p);
    changeCharacter(letter, p);
}

createLetter('p');
createLetter('e');
createLetter('t');
createLetter('e');
createLetter('r');