'use strict';

//indexOf

const array = ['Vika', 'Artem', 'Victor', 'Yura'];

const indexOf = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
};

console.log(indexOf(array, 'Artem'));

console.log(indexOf(array, 'Petro'));

//LastIndexOf

// const array = ['Vika', 'Artem', 'Victor', 'Yura', 'Artem'];
//
// const lastIndexOf = (arr, value) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// };
//
// console.log(lastIndexOf(array, 'Artem'));
//
// console.log(lastIndexOf(array, 'Petro'));

//Find

// const array = ['Vika', 'Artem', 'Victor', 'Yura'];
//
// const find = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             return arr[i];
//         }
//     }
//     return undefined;
// };
//
// const found = find(array, (element) => element === 'Artem');
//
// console.log(found);

//findIndex

// const array = ['Vika', 'Artem', 'Victor', 'Yura'];
//
// const findIndex = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             return i;
//         }
//     }
//     return -1;
// };
//
// const found = findIndex(array, (element) => element === 'Yura');
//
// console.log(found);

//includes

// const array = ['Vika', 'Artem', 'Victor', 'Yura'];
//
// const indexOf = (arr, value) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return true;
//         }
//     }
//     return false;
// };
//
// console.log(indexOf(array, 'Artem'));
//
// console.log(indexOf(array, 'Petro'));

//every

// const every = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (!callback(arr[i], i, arr)) {
//             return false;
//         }
//     }
//     return true;
// };
//
// const numbers = [5, 10, 10.5, 12];
//
// const ttt = every(numbers, number => number >= 3);
//
// console.log(ttt);

//some

// const some = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             return true;
//         }
//     }
//     return false;
// };
//
// const numbers = [5, 10, 10.5, 12];
//
// const ttt = some(numbers, number => number >= 11);
//
// console.log(ttt);
