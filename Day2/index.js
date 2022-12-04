// Colone 1 > opponent Colonne 2 : me           Score

// A: rock              X : rock                Lost : 0
// B: paper             Y : paper               Draw : 3
// C: scissors          Z : scissors            Win  : 6

// *********************************************************//

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
console.log(input);

let sum = 0;

// console.log(input[0]);
// console.log(input[1]);

// check combinaison manche 1 - derniere ligne  B Z ne porte pas la mention
for (let i = 0; i < input.length; i += 1) {
    if (input[i] == "A X") {
        sum += 4;
    } else if (input[i] == "A Y") {
        sum += 8;
    } else if (input[i] == "A Z") {
        sum += 3;
    } else if (input[i] == "B X") {
        sum += 1;
    } else if (input[i] == "B Y") {
        sum += 5;
    } else if (input[i] == "B Z") {
        sum += 9;
    } else if (input[i] == "C X") {
        sum += 7;
    } else if (input[i] == "C Y") {
        sum += 2;
    } else if (input[i] == "C Z") {
        sum += 6;
    }
}
console.log(sum);

// Colone 1 > opponent Colonne 2 : me           Score

// A: rock              X : lose                Lost : 0
// B: paper             Y : draw                Draw : 3
// C: scissors          Z : win                 Win  : 6

// *********************************************************//

sum = 0;
// check combinaison manche 2
for (let i = 0; i < input.length; i += 1) {
    if (input[i] == "A X") {
        sum += 3;
    } else if (input[i] == "A Y") {
        sum += 4;
    } else if (input[i] == "A Z") {
        sum += 8;
    } else if (input[i] == "B X") {
        sum += 1;
    } else if (input[i] == "B Y") {
        sum += 5;
    } else if (input[i] == "B Z") {
        sum += 9;
    } else if (input[i] == "C X") {
        sum += 2;
    } else if (input[i] == "C Y") {
        sum += 6;
    } else if (input[i] == "C Z") {
        sum += 7;
    }
}
console.log(sum);
