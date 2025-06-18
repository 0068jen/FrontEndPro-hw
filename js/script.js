`use strict`

//create an arrow function with the required parameters
const padString = (string, lenghtString, symbolString, symbolSides = false) => {

    //check the parameter conditions
    if (typeof string !== `string`) {
        return `the first parameter is not a string`
    };

    if (typeof lenghtString !== `number` || isNaN(lenghtString)) {
        return `the second parameter is not a number`
    };

    if (typeof symbolString !== `string` || isNaN(symbolString.length !== 1)) {
        return `the third parameter is not a string`
    };

    if (typeof symbolSides !== `boolean` ) {
        return `the fourth parameter is not a boolean`
    };

    //if the length of the string is greater than the second parameter,
    // truncate the string according to the second parameter
    if (lenghtString < string.length) {
        return string.substring(0, lenghtString)
    };

    //calculate how many characters need to be added
    const padLength = lenghtString - string.length;

    let padStr = '';

    for (let i = 0; i < padLength; i++) {
        padStr += symbolString;
    };

    if (symbolSides) {
        return padStr + string;
    } else {
        return string + padStr;
    };
};

console.log(padString(`hardhmwrk`, 20, `|`, ))
console.log(padString(`hardhmwrk`, 20, `|`, true ))
console.log(padString(`hardhmwrk`, 5, `|`, true ))
