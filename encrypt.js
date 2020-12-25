"use strict";

const chars = {
    "a": "185",
    "b": "751",
    "c": "50",
    "d": "547",
    "e": "544",
    "f": "594",
    "g": "958",
    "h": "16",
    "i": "700",
    "j": "485",
    "k": "697",
    "l": "683",
    "m": "506",
    "n": "11",
    "o": "783",
    "p": "692",
    "q": "682",
    "r": "155",
    "s": "599",
    "t": "830",
    "u": "945",
    "w": "836",
    "x": "325",
    "y": "949",
    "z": "184",
    " ": "8665"
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let newStr = "";
let checksum = 0;

readline.question('Wiadomość: ', input => {
    console.time("Encryption");
    for (let i = 0; i < input.length; i++) {
        newStr += chars[input.charAt(i).toLowerCase()] + "_";
        checksum += chars[input.charAt(i).toLowerCase()] * 1;
    };
    checksum += input.length * 2;
    newStr += checksum;
    console.log(newStr);
    readline.close();
    console.timeEnd("Encryption");
});
