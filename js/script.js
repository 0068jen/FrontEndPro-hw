`use strict`

//ask the user for numbers
const num1 = +prompt('Say the first number');
const num2 = +prompt('Say the second number');
const num3 = +prompt('Say the third number');

//we calculate their arithmetic mean
const averageNum = (num1 + num2 + num3) / 3;

//output a message with the average value
alert(`the average value of the given nбumbers is ${averageNum}`);