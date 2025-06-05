`use strict`

//ask the user what time it is
const hour = +prompt('What time is it?');

//convert hours to seconds
const second = hour * 3600;

//we display the result to the user
alert(`${hour}  hours-this is ${second} seconds`);