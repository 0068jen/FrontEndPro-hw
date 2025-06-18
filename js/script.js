`use strict`

//array of numbers
const numbers = [1, 2, 3, -1, -2, -3];

//we create a callback function that will iterate over our array and if
// there is no data in the array, it will return an error
const natNum = (arr, callback) => {
    const exampleArr = []

    if (arr.length === 0) {
        return 'array is empty'
    };

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) ) {
            exampleArr.push(arr[i]);
        };
    };
    return exampleArr
};

//function into which we enter the necessary parameters
let filteredNum = natNum(numbers, item => {
    return item >= 0});

if (filteredNum.length === 0) {
    filteredNum = null
};

console.log(filteredNum);