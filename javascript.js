// COMPUTER CHOICE
// The function randomly returns "rock", "paper" or "scissors".
// let getComputerChoice = () => {return "rock", "paper", "scissors" randomly}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);  // This tells the function to choose between three choices randomly.
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice());

// HUMAN CHOICE
// A human will the play against the computer.
// The function will take in user input and return it.
// let getHumanChoice = (userChoice) => {return userChoice}

function getHumanChoice(choice) {
    choice = prompt("Choose between 'rock', 'paper', or 'scissors'!");
    return choice;
}
// console.log (getHumanChoice());

// PLAYER SCORE VARIABLES
// The game keeps track of the players' score using score variables.

let humanScore = 0;
let computerScore = 0;

// PLAY A ROUND
// The game is played round-by-round. The following function creates the logic for playing a single round of the game.
// let playRound = (humanChoice, computerChoice) => {play single round; humanScore++ || computerScore++; console.log("The Winner ("You Win!" / "I Win!")";};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log("Player Chose: ", humanChoice);
    console.log("Computer Chose: ", computerChoice);
    switch(humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("It's a Draw!");
                    break;
                case "paper":
                    console.log("You Lose! Paper beats Rock.");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You Win! Rock beats Scissors.");
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log("You Win! Paper beats Rock.");
                    humanScore++;
                    break;
                case "paper":
                    console.log("It's a Draw!");
                    break;
                case "scissors":
                    console.log("You Lose! Scissors beats Paper.");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log("You Lose! Rock Beats Scissors");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You Win! Scissors beats Paper.");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("It's a Draw!");
                    break;
            }
            break;
        default:
            console.log("Invalid Input");
            break;
    }
    console.log("Player Score - ", humanScore, " : ", "Computer Score - ", computerScore);
}

for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); 
    console.log("____________________________");
}

console.log(`Final Player Score: ${humanScore}, Final Computer Score: ${computerScore}`);
if (humanScore > computerScore) {
    console.log("You are the overall winner!");
} else if (humanScore < computerScore) {
    console.log("I am the overall winner!")
} else {
    console.log("It's a tie!")
}