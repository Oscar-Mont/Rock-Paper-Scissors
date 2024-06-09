let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choiceArray = ["rock", "paper", "scissors"];
    let choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice;
}


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
                resultItem.textContent = "You loose! Rock looses to Paper!";
                computerScore += 1;
                resultItem.style["background-color"] = "red";
                resultList.appendChild(resultItem);
                break;
            case "scissors":
                resultItem.textContent = "You win! Rock beats Scissors!";
                playerScore += 1;
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
                resultItem.textContent = "You win! Paper beats Rock!";
                playerScore += 1;
                resultItem.style["background-color"] = "green";
                resultList.appendChild(resultItem);
                break;
            case "paper":
                resultItem.textContent = "It's a tie! the Computer and the Player both picked Paper!";
                resultItem.style["background-color"] = "yellow";
                resultList.appendChild(resultItem);
                break;
            case "scissors":
                resultItem.textContent = "You loose! Paper looses to Scissors!";
                computerScore += 1;
                resultItem.style["background-color"] = "red";
                resultList.appendChild(resultItem);
                break;
            default:
                console.log("There was a problem. Try again later.");
                break;
        }
    } else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                resultItem.textContent = "You loose! Scissors loose to Rock!";
                computerScore += 1;
                resultItem.style["background-color"] = "red";
                resultList.appendChild(resultItem);
                break;
            case "paper":
                resultItem.textContent = "You win! Scissors beat Paper!";
                playerScore += 1;
                resultItem.style["background-color"] = "green";
                resultList.appendChild(resultItem);
                break;
            case "scissors":
                resultItem.textContent = "It's a tie! The Player and Computer picked Scissors!";
                resultItem.style["background-color"] = "yellow";
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


function updateScoreDisplay() {
    const playerScoreDisplay = document.querySelector(".player-score");
    const computerScoreDisplay = document.querySelector(".computer-score");

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`
}

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        const gameOver = document.createElement("div");
        gameOver.style["background-color"] = "blue";
        if (computerScore > playerScore) {
            gameOver.textContent = "Game over! Computer wins! Refresh the page to play again."
        } else {
            gameOver.textContent = "You win! Refresh the page to play again."
        }

        resultList.appendChild(gameOver);

        //disable buttons
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

// || Event Listeners to play the game ||

//variables for buttons and results

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultList = document.querySelector(".results");



//button event listeners
rockBtn.addEventListener("click", () => {
    playSelect = "rock";
    playRound(playSelect);
    updateScoreDisplay();
    checkGameOver();
})

paperBtn.addEventListener("click", () => {
    playSelect = "paper";
    playRound(playSelect);
    updateScoreDisplay();
    checkGameOver();
})

scissorsBtn.addEventListener("click", () => {
    playSelect = "scissors";
    playRound(playSelect);
    updateScoreDisplay();
    checkGameOver();
})



//results code


