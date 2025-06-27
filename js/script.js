`use strict`

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1 Find the sum and number of positive elements.

let sumPosElem = 0;
let amountPosElem = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        sumPosElem += arr[i];
        amountPosElem++;
    }
};
console.log(`Sum:`, sumPosElem, `amount:`, amountPosElem);

//2.Find the minimum element of the array and its ordinal number.

// let min = 0;
// let minIndex = 0;
//
// for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//         minIndex = i
//     }
// };
// console.log(`minimal number`, min, `index of minimal number`, minIndex);

//3. Find the maximum element of the array and its ordinal number.

// let max = 0;
// let maxIndex = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//         maxIndex = i
//     }
// };
// console.log(`maximal number`, max, `index of maximal number`, maxIndex);

//4.Determine the number of negative elements.

// let quantityNegativeNum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         quantityNegativeNum++
//     }
// };
// console.log(quantityNegativeNum);

//5.Find the number of positive odd elements.

// let oddElem = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         oddElem++
//     }
// };
// console.log(oddElem);

//6.Find the number of positive even elements.

// let evenElem = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         evenElem++
//     }
// };
// console.log(evenElem);

//7.Find the sum of positive even elements.

// let sumEvenElem = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] >= 0) {
//         sumEvenElem += arr[i]
//
//     }
// };
//
// console.log(sumEvenElem);

//8.Find the sum of positive odd elements.

// let sumOddElem = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] >= 0) {
//         sumOddElem += arr[i]
//
//     }
// };
//
// console.log(sumOddElem);

//9.Find the product of positive elements.

// let multipliedPosElem = 1;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         multipliedPosElem *= arr[i];
//     }
// }
// console.log(multipliedPosElem);

//10.Find the largest element in the array and set all other elements to zero.

// let max = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// };
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== max) {
//         arr[i] = 0
//     }
// };
// console.log(arr);
