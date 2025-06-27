'use strict';

//1. shift
//
const array = [`key`, 10, -20, 30, 40, `Nan`];

const shift = (arr) => {
    const firstElem = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    arr.length = arr.length - 1;

    return firstElem;
};

const shifted = shift(array);

console.log(shifted);

console.log(array);

//2. reverse

// const array = [`key`, 10, -20, 30, 40, `Nan`];
//
// const reverse = (arr) => {
//     const middle = parseInt(arr.length / 2);
//
//     for (let i = 0; i < middle; i++) {
//         let temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// };
//
// const arr = reverse(array);
//
// console.log(arr);

