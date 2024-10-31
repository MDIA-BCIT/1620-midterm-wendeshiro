/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/



let usersPassword = "12345"; //User's password set before

function passwordInputChecking(usersInput) {
    if (usersInput === "forgot") {
        console.log("Here is a hint"); //If the user's input is "forgot", log out "Here is a hint"
    } else if (usersInput === "reset") {
        console.log("Let's reset your account"); //If the user's input is "reset", log out "Let's reset your account"
    } else if (usersInput === usersPassword) {
        console.log("Access Granted!"); //If the user's input matches the password exactly, log out "Access Granted!"
    } else if (usersInput !== usersPassword) {
        console.log("Access Denied!"); //If the user's input does not match, log out "Access Denied!"
    }
}

passwordInputChecking("12345");
passwordInputChecking("54321");
passwordInputChecking("forgot");
passwordInputChecking("reset");


function passwordSetChecking(usersSet) {
    if (usersSet === "forgot" || usersSet === "reset") {
        console.log("Access Granted! This password you set should not be used because it glitches the system"); //If the password set = "forgot" or "reset", log out this text.
    }
    if (usersSet.length < 5) {
        console.log("Your password is too short!"); //If the password is less than 5 characters, log out this text.
    }
}

passwordSetChecking("forgot");
passwordSetChecking("reset");
passwordSetChecking("123");
