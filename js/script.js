`use strict`

//variable for name
const userName = prompt(`What's your name?`);
console.log(typeof userName);

//user-defined variable
const ageInput = prompt(`What is your age?`);
//we ask what type of data we received
console.log(typeof ageInput);
//change the string data type to the desired number
const age = Number(ageInput);
//check if we received the correct data type
console.log(typeof age);

//we ask for the user's consent to participate
let isVerified = confirm(`${userName}  do you agree to participate??`);
//we ask what type of data we received
console.log(typeof isVerified);

//user number variable
const userId = 12345678901234567890n;
console.log(typeof userId);

//bonus code variable
let bonusCode = null;

//variable for user's second name
let secondName;

//output an alert with the data received from the user
alert(`
Hello, ${userName}!;
Your Age: ${age};
Your status: ${isVerified};
`);

//let's print all variables to the console along with their types
console.log(`Name:`, userName, typeof userName);

console.log(`Age:`, age, typeof age);

console.log(`Status:`, isVerified, typeof isVerified);

console.log(`User Id:`, userId, typeof userId);

console.log(`Bonus Code:`, bonusCode, typeof bonusCode);

console.log(`SecondName:`, secondName, typeof secondName);
