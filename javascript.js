// COMPUTER CHOICE
// The function randomly returns "rock", "paper" or "scissors".
// let getComputerChoice = () => {return "rock", "paper", "scissors" randomly}

function getComputerChoice () {
    choice = Math.floor(Math.random() * 3);  // This tells the function to choose between three choices randomly.
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

// HUMAN CHOICE
// A human will the play against the computer.
// The function will take in user input and return it.
// let getHumanChoice = (userChoice) => {return userChoice}

function getHumanChoice (choice) {
    choice = prompt("Choose between 'rock', 'paper', or 'scissors'!");
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log (getHumanChoice())

// PLAYER SCORE VARIABLES
// The game keeps track of the players' score using score variables.

let humanScore = 0;
let computerScore = 0;