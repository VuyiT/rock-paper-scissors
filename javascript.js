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