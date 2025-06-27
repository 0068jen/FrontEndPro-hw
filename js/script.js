`use strict`
//first task

const simpleTypesArray = [42, 'hello', true, false, null, undefined, 15, 30, 1, null, NaN];

function f(array) {
    let sum = 0

    let count = 0

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] ===  `number` && !isNaN(array[i])) {
            count = count + 1;
            sum = sum + array[i];
        }

    }
    return sum / count;
}

const ttt = f(simpleTypesArray);

console.log(ttt);

//second task
//
// const doMath = (x, znak, y) => {
//     x = Number(x);
//     y = Number(y);
//
//     if (isNaN(x) || isNaN(y)) {
//         return 'error x and y are not numbers';
//     }
//
//     switch (znak) {
//         case '+':
//             return x + y;
//         case '-':
//             return x - y;
//         case '*':
//             return x * y;
//         case '/':
//             return x / y ;
//         case '%':
//             return x % y ;
//         case '^':
//             return x ** y;
//         default:
//             return 'unknown sign';
//     }
// }
//
// const num1 = prompt('First number');
//
// const operator = prompt('mathematical operation sign (+, -, *, /, %, ^):');
//
// const num2 = prompt(`Second number`);
//
// const result = doMath(num1, operator, num2);
//
// console.log(`Result`, result);
//
// let userResult = alert(`Result ${result}`);

//third task my version
// let mainArray = []
// const pushToArray = (value) => {
//     let innerArray = []
//     innerArray.push(value)
//     mainArray.push(innerArray)
// }
// let data = prompt(`Number`)
// pushToArray(data)
// console.log(mainArray)

//my version + chat
// const fill2DArray = () => {
//     const rows = +prompt('enter the number of rows (main array)');
//
//     if (isNaN(rows) || rows <= 0) {
//         return 'please enter a number';
//     }
//
//     const result = [];
//
//     for (let i = 0; i < rows; i++) {
//         const cols = +prompt(`enter the number of elements in row ${i + 1}`);
//
//         if (isNaN(cols) || cols <= 0) {
//             return 'please enter a number';
//         }
//
//         const innerArray = [];
//
//         for (let j = 0; j < cols; j++) {
//             const value = prompt(`enter a value for element [${i}][${j}]`);
//             innerArray.push(value);
//         }
//
//         result.push(innerArray);
//     }
//
//     return result;
// };
//
// const userArray = fill2DArray();
// console.log('result:', userArray);

//fourth task

// const processString = (str, charsToRemove, callback) => {
//     if (typeof str !== 'string' || !Array.isArray(charsToRemove) || typeof callback !== 'function') {
//         return 'Error: invalid input';
//     }
//
//     return callback(str, charsToRemove);
// };
//
// const removeChars = (str, charsToRemove) => {
//     let result = '';
//     for (let char of str) {
//         if (!charsToRemove.includes(char)) {
//             result += char;
//         }
//     }
//     return result;
// };
//
// const inputString = prompt('Enter the string:');
// const chars = prompt('Enter characters to remove (comma-separated):');
// const charsToRemove = chars.split(',');
//
// const result = processString(inputString, charsToRemove, removeChars);
//
// console.log('Result:', result);
// alert(`Result: ${result}`);







