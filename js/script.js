`use strict`

//asking for username
const userName = prompt(`What is your name?`);

//ask for the user's age
const ageInput = prompt(`What is your age?`);

//convert string to number
const age = Number(ageInput);

//we ask the user if they want to receive notifications
let notifications = confirm('Do you want to receive notifications?');

//assign ids to the user
const userId = 1234567890123456789n;

//assign the value of the user's last login
let lastLogin = null;

//let's assign a nickname
let nickname;

//let's adopt our favorite technologies
let favoriteTech = [`FrontEnd`, `Javascript`, `Node.js`];

//assign settings
let settings = {
    theme: 'dark',
    autoLogin: false
};

//output the obtained values to a common object
let session = {
    name: userName,
    age: age,
    notifications: notifications,
    userId: userId,
    lastLogin: lastLogin,
    nickname: nickname,
    favoriteTech: favoriteTech,
    settings: settings,
};

//output a message to the user
alert(`Hello ${userName}! Your ID: ${userId}!`);

//output user data to the console
console.log(session);

//check the data type in the console
console.log(typeof userName);
console.log(typeof ageInput);
console.log(typeof age);
console.log(typeof notifications);
console.log(typeof userId);
console.log(typeof lastLogin);
console.log(typeof nickname);
console.log(typeof favoriteTech);
console.log(typeof settings);
console.log(typeof session);




