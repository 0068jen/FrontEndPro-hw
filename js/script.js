`use strict`

//this variable for the username
const userName = 'Ivan';
console.log(typeof userName);

//this variable is for the user's age
const age = 18;
console.log(typeof age);

//this variable is for understanding whether the user is verified
let isVerified = false;
console.log(typeof isVerified);

//this variable for the registration date
const dateRegistration = `12.12.2020`;
console.log(typeof dateRegistration);

//this variable for the user's card number
const bigIntNumberUser = 123855n;
console.log(typeof bigIntNumberUser);

//this variable for the promo code
let promoCode = null;

//this variable for the fallback name
let reservName;
console.log(typeof reservName);

//this variable for the number of bonuses in the account
let bonusNumber = 156;
console.log(typeof bonusNumber);

//output user data to the console
console.log(`
User: ${userName}; 
Age: ${age}; 
Bonus: ${bonusNumber}
`);

console.log(`
verification: ${isVerified}; 
Promo: ${promoCode}; 
Date Registration: ${dateRegistration}
`);

//this variable for the promo code
promoCode = 'HkOJHE1';
console.log(typeof promoCode);

//this variable is for understanding whether the user is verified
isVerified = true;
console.log(typeof isVerified);

console.log(`
Verification: ${isVerified}; 
Promo: ${promoCode}; 
Reserv Name: ${reservName}
`);
