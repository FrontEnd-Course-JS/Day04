//Project 01 - Text Analyzer
let text = prompt("Enter Text: ");

let wordsInTheText = text.split(" ");
console.log("wordsInTheText = "+wordsInTheText.length);

let charactersInTheText = text.split("");
console.log("charactersInTheText = "+charactersInTheText.length);

let upperCaseText = text.toUpperCase();
let lowerCaseText = text.toLowerCase();
console.log("upperCaseText = "+upperCaseText);
console.log("lowerCaseText = "+lowerCaseText);


//Project02 - Number Analyzer 
let number;
do {
    number = prompt("Enter number: ")
} while (isNaN(number));
number = Number(number);
let numberx2 = number*2;
console.log("number x 2 = "+numberx2);

let numberRound = Math.round(number);
console.log("numberRound = "+numberRound);

let numberFixed3 = number.toFixed(3);
console.log("numberFixed3 = "+numberFixed3);

console.log(Math.random());



