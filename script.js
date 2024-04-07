
//Make a function that randomly chooses rock paper or scissors
function getComputerChoice() {
    choiceArray = ["rock", "paper", "scissors"];
    let choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice;
}

//function that asks the user for their choice
function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper or Scissors: ");
    return playerChoice.toLowerCase();
}

//play the round
function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a tie! Rock against Rock")
        } else if (computerSelection === "paper") {
            console.log("You loose! Paper beats rock!")
        } else if (computerSelection === "scissors") {
            console.log("You win! Rock beats Scissors!")
        } else {
            console.log("There was a bug!")
        }
    }
}
