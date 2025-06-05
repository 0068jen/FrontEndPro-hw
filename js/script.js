`use strict`
//we request information according to the condition
const yearBirth = +prompt('Please enter your date of birth');

//message if information is not provided
if (!yearBirth) {
    alert(`It's a pity that you didn't want to enter your date of birth.`);
}

const city = prompt('What city do you live in?');

if (!city) {
    alert(`It's a pity that you didn't want to enter your city.`);
}

const sport = prompt('What is your favorite sport?');

if (!sport) {
    alert(`It's a pity that you didn't want to enter your favorite sport`);
}

//condition under which a message with information will be displayed to the user
if (yearBirth && city && sport){
   //calculate the user's age
    const age = 2025 - yearBirth;
    //variable for sports message
    let sportMessage = '';

    switch (sport) {
        case 'Boxing':
            sportMessage = 'Cool! Do you want to become Alexander Usyk?';
            break;
        case 'Football':
            sportMessage = 'Cool! Do you want to become Cristiano Ronaldo?';
            break;
        case 'Tennis':
            sportMessage = 'Cool! Do you want to become Novak Djokovic?';
            break;
        default:
            sportMessage = '';
    }
    //final message taking into account the terms of the assignment
    switch (city) {
        case 'Kyiv':
            alert(`You are ${age} years old! You live in the capital, Kyiv! ${sportMessage}`);
            break;
        case `Washington`:
            alert(`You are ${age} years old! You live in the capital, Washington! ${sportMessage}`);
            break;
        case `London`:
            alert(`You are ${age} years old! You live in the capital, London! ${sportMessage}`);
            break;
        default:
            alert(`You are ${age} years old! You live in city ${city}! ${sportMessage}`);
    }
}

