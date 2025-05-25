'use strict';

let name = prompt('Whats your name?');

let isSee = confirm(`${name}, do you want to see the greeting?`);

if (isSee) {
    alert(`Hello, ${name}! How are you?`);
}