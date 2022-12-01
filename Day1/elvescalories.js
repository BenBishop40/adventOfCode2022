const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let tmp = 0;

const sumCalories = [];

for (i = 0; i < input.length; i += 1) {
    if (input[i] != 0) {
        tmp += parseInt(input[i]);
    } else {
        sumCalories.push(tmp);
        tmp = 0;
    }
}

let maximus = Math.max(...sumCalories);
console.log(maximus);

// 2 eme partie exo day one - retrouver les 3 plus gros sumCalories
let maximus3first = sumCalories.sort().reverse();
console.log(maximus3first);

let sum3first = maximus3first[1] + maximus3first[2] + maximus3first[3];
console.log(sum3first);
