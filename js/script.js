`use strict`

//create an arrow function with parameters
const generateKey = (length, data) => {
  //variable that will be filled according to the parameters
    let result = '';
    //loop for generating random indices
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * data.length);
        //we add the received characters to our string
        result += data[randomIndex];
    };
    //we return the result to our variable
    return result;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

//we set the parameters to our function
const key = generateKey(5, characters);

//output the value to the console
console.log(key);