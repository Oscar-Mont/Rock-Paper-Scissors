//Make a function that randomly chooses rock paper or scissors
function getComputerChoice() {
    choiceArray = ["rock", "paper", "scissors"];
    let choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice;
}

// //function that asks the user for their choice
// function getPlayerChoice() {
//     let playerChoice = prompt("Choose Rock, Paper or Scissors: ");
//     return playerChoice.toLowerCase();
// }

//function to play a round
function playRound(playSelect) {
    let playerSelection = playSelect;
    let computerSelection = getComputerChoice();
    const resultItem = document.createElement("div");
    resultItem.className = "result-div";
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                resultItem.textContent = "It's a tie! The Player and Computer picked Rock!";
                resultItem.style["background-color"] = "yellow";
                resultList.appendChild(resultItem);
                break;
            case "paper":
                resultItem.textContent = "You loose! Rock looses to Paper.";
                resultItem.style["background-color"] = "red";
                resultList.appendChild(resultItem);
                break;
            case "scissors":
                resultItem.textContent = "It's a tie! The Player and Computer picked";
                resultItem.style["background-color"] = "green";
                resultList.appendChild(resultItem);
                break;
            default:
                console.log("There was a problem. Try again later.");
                break;
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                resultItem.textContent = "It's a tie! The Player and Computer picked Rock!";
                resultItem.style["background-color"] = "yellow";
                resultList.appendChild(resultItem);
                break;
            case "paper":
                resultItem.textContent = "You loose! Rock looses to Paper.";
                resultItem.style["background-color"] = "red";
                resultList.appendChild(resultItem);
                break;
            case "scissors":
                resultItem.textContent = "It's a tie! The Player and Computer picked";
                resultItem.style["background-color"] = "green";
                resultList.appendChild(resultItem);
                break;
            default:
                console.log("There was a problem. Try again later.");
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                resultItem.textContent = "It's a tie! The Player and Computer picked Rock!";
                resultItem.style["background-color"] = "yellow";
                resultList.appendChild(resultItem);
                break;
            case "paper":
                resultItem.textContent = "You loose! Rock looses to Paper.";
                resultItem.style["background-color"] = "red";
                resultList.appendChild(resultItem);
                break;
            case "scissors":
                resultItem.textContent = "It's a tie! The Player and Computer picked";
                resultItem.style["background-color"] = "green";
                resultList.appendChild(resultItem);
                break;
            default:
                console.log("There was a problem. Try again later.");
                break;
        }
    } else {
        console.log("Invalid choice, try again");
    }

}


//Event Listeners to play the game

//variables for buttons
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultList = document.querySelector(".results");


//button event listeners
rockBtn.addEventListener("click", () => {
    playSelect = "rock";
    playRound(playSelect);
})

paperBtn.addEventListener("click", () => {
    playSelect = "paper";
    playRound(playSelect);
})

scissorsBtn.addEventListener("click", () => {
    playSelect = "scissors";
    playRound(playSelect);
})

//results code


