  `use strict`

  //1. Output the numbers from 20 to 30 through a gap, using a step of 0.5 (20 20.5 21 21.5….).

  for (let i = 20; i <= 30; i = i + 0.5) {
      console.log(i);
  };

  //2.One dollar costs 27 hryvnias. Output the data with the calculation of the cost of 10, 20, 30... 100 dollars.

  // const dollar = 27;
  //
  // for (let i = 0; i <= 100; i = i + 10) {
  //     console.log(`${i} dollar = ${i * dollar} hryvnias`);
  // };

  //3. Given an integer. Print all integers from 1 to 100 whose square does not exceed the number N.

  // let number = +prompt('Enter a number');
  //
  // for (let i = 1; i <= 100; i++) {
  //     if (number % 1 === 0 && i ** 2 < number) {console.log(i)}
  // };

  //4.Given an integer. Find out if it is prime (a prime number is a number greater than 1 that has no other divisors than 1 and itself).

  // let num = +prompt(`Enter a whole number`);
  //
  // if (num <= 1) {
  //     console.log(`${num} is not a prime number`);
  // } else {
  //     let prime = true;
  //     for (let i = 2; i < num; i++) {
  //         if (num % i === 0) {
  //             prime = false;
  //             break;
  //         }
  //     }
  //     if (prime) {
  //         console.log(`${num} is a prime number`);
  //     } else {
  //         console.log(`${num} is not a prime number`);
  //     }
  // };

  //5.Given a certain number, determine whether this number can be obtained by raising the number 3 to a certain power.
  // (For example, the numbers 9, 81 can be obtained, but 13 cannot.)

  // let num = +prompt(`Enter a number`);
  //
  // let temp = num;
  //
  // while (temp % 3 === 0) {
  //     temp = temp / 3;
  // };
  //
  // if (temp === 1) {
  //     console.log(`${num}  can be obtained as 3^n`);
  // } else {
  //     console.log(`${num}  cannot be obtained as 3^n`);
  // };



