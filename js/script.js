'use strict'

//given an array
const array = [1, 2, 3, 4, 5, 6, 7];

// create a callback function
const filter = (arr, cb) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            result[result.length] = arr[i];
        }
    }
    return result;
};

//we create a function to delete the desired element
const removeElement = (arr, itemToRemove) => {
    return filter(arr, (item) => item !== itemToRemove);
};


const result = removeElement(array, 5);

console.log(result);
