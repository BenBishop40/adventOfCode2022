const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
console.log(input.length);

// connaitre la length de la ligne et diviser en 2 stack
//
let letterFound = [];
for (let k = 0; k < input.length; k += 1) {
    let numOfLetters = input[k].length;
    let semiNumOfLetters = input[k].length / 2;

    let stack1 = input[k].substring(0, semiNumOfLetters);
    let stack2 = input[k].substring(semiNumOfLetters, numOfLetters);

    // identification lettre identique entre stack1 et stack2 et break pour eviter les doublons
    //
    for (let i = 0; i < semiNumOfLetters; i += 1) {
        for (let j = 0; j < semiNumOfLetters; j += 1) {
            if (stack1[i] == stack2[j]) {
                letterFound += stack1[i];
                break;
            }
        }

        if (letterFound.length - 1 == k) {
            break;
        }
    }
}
console.log(letterFound);
console.log(letterFound.length);

// Calcul des priorités
// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
//
const minuscules = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const majuscules = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// let index1 = minuscules.indexOf("z") + 1;
// console.log(index1);
// let index2 = majuscules.indexOf("Z") + 27;
// console.log(index2);

// Recherche valeur par lettre et somme calculée
//
const valueItems = () => {
    let sumItems = 0;

    for (let i = 0; i < letterFound.length; i += 1) {
        for (j = 0; j <= minuscules.length; j += 1) {
            if (letterFound[i] == minuscules[j]) {
                sumItems += minuscules.indexOf(minuscules[j]) + 1;
                break;
            } else if (letterFound[i] == majuscules[j]) {
                sumItems += majuscules.indexOf(majuscules[j]) + 27;
                break;
            }
        }
    }
    console.log(sumItems);
};
valueItems();

// recherche badge - le caractere commun à 3 lignes formant un groupe distinct d'elfs

let badgeFound = [];

for (let i = 0; i < input.length; i += 3) {
    let line1 = input[i];
    let line2 = input[i + 1];
    let line3 = input[i + 2];

    const charIdentified = line1
        .split("")
        .filter((char) => {
            return line2.split("").find((char2) => {
                return char2 === char;
            });
        })
        .filter((char) => {
            return line3.split("").find((char3) => {
                return char3 === char;
            });
        })[0];
    console.log(charIdentified);
    badgeFound.push(charIdentified);
}
console.log(badgeFound);
let sumBadge = 0;

for (let i = 0; i < badgeFound.length; i += 1) {
    for (j = 0; j <= minuscules.length; j += 1) {
        if (badgeFound[i] == minuscules[j]) {
            sumBadge += minuscules.indexOf(minuscules[j]) + 1;
            break;
        } else if (badgeFound[i] == majuscules[j]) {
            sumBadge += majuscules.indexOf(majuscules[j]) + 27;
            break;
        }
    }
}
console.log(sumBadge);
