"use strict";

const chars = {
    "185": "a",
    "751": "b",
    "50": "c",
    "547": "d",
    "544": "e",
    "594": "f",
    "958": "g",
    "16": "h",
    "700": "i",
    "485": "j",
    "697": "k",
    "682": "l",
    "506": "m",
    "11": "n",
    "783": "o",
    "692": "p",
    "682": "q",
    "155": "r",
    "599": "s",
    "830": "t",
    "945": "u",
    "836": "w",
    "325": "x",
    "949": "y",
    "184": "z",
    "8665": " "
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let newStr = "";
let checksum = 0;

readline.question('Wiadomość: ', input => {
    console.time("Decryption");
    const processed = input.split("_");
    for (let i = 0; i < processed.length - 1; i++) {
        newStr += chars[processed[i]];
        checksum += processed[i] * 1;
    };
    checksum += newStr.length * 2;
    if (checksum == processed[processed.length - 1]) {
        // verification succedded
        console.log(newStr);
    } else {
        // verification failed
        console.error("Checksum is not valid! Your message may be edited by someone else!");
        console.log(`Expected checksum: ${checksum}    Reciven checksum: ${processed[processed.length - 1]}`);
    }
    readline.close();
    console.timeEnd("Decryption");
});