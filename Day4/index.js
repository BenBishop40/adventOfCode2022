const fs = require("fs");
const { parse } = require("path");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
// console.log(input);

// Convertir ttes les valeurs numériques dans un tableau
let inputArray = [];
let finalArray = [];

for (let i = 0; i < input.length; i += 1) {
    let extract = input[i].split("-");
    inputArray.push(extract);
}

for (let i = 0; i < input.length; i += 1) {
    let extract2 = inputArray.toString().split(",");
    finalArray.push(extract2);
}

finalArray = finalArray[0];
console.log(finalArray);

// Part 1 : identifier les overlaps complet
let counterOfPairs = 0;

for (let i = 0; i < finalArray.length; i += 4) {
    let value1 = finalArray[i];
    let value2 = finalArray[i + 1];
    let value3 = finalArray[i + 2];
    let value4 = finalArray[i + 3];

    if (
        (parseInt(value1) <= parseInt(value3) && parseInt(value2) >= parseInt(value4)) ||
        (parseInt(value1) >= parseInt(value3) && parseInt(value2) <= parseInt(value4))
    ) {
        counterOfPairs += 1;
        console.log(value1, value2, value3, value4);
        console.log(i);
        // console.log(counterOfPairs);
    }
}
console.log(counterOfPairs);
