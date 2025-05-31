`use strict`

//I create a structure according to the condition
let user = {
    name: 'John',
    age: 32,
    isOnline: false,
    friends: ['Jen', 'Alice', 'Andrew'],
    settings: {
        theme: 'dark',
        notifications: false
    }
}

//get the name of the first friend from the array
let firstFriendName = (user.friends[0])

//get the value of notifications
let notificationsEnabled = (user.settings.notifications)

//output the required values to the console
console.log(user.name)

console.log(user.friends.length)

console.log(user.friends[0])

console.log(user.settings.theme)

console.log(user.settings.notifications)
