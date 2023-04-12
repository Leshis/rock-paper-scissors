const choice = ["rock", "paper", "scissors"];
const tie = "The result is a tie!";
const win = "You win!";
const lose = "Computer wins";
const playerScoreBoard = document.getElementById('playerScore');
const computerScoreBoard = document.getElementById('computerScore');
const endGameTextEl = document.getElementById('endGameText');

let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    return (choice[Math.floor(Math.random() * choice.length)]);
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        endGameTextEl.innerText = tie;
    }
    if ((playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "scissors" && computerChoice === "paper")
        || (playerChoice === "paper" && computerChoice === "rock")) {
        playerScore++;
        updateScore()
        endGameTextEl.innerText = win;
    }
    else {
        computerScore++;
        updateScore();
        endGameTextEl.innerText = lose;
    }

    if (playerScore === 5) {
        endGameTextEl.innerText = "You win overall!";
        endGame();
    } else if (computerScore === 5) {
        endGameTextEl.innerText = "Computer wins overall!";
        endGame();
    }
}

function updateScore(){
    playerScoreBoard.innerText = `Player Score: ${playerScore}`;
    computerScoreBoard.innerText = `Computer Score: ${computerScore}`;
}

function endGame(){
    playerScore = 0;
    computerScore = 0;
}

function checkWinner() {
    if (playerScore > computerScore) {
        return "You win overall!";
    } else if (computerScore > playerScore) {
        return "Computer wins overall!";
    } else {
        return "Tie game!";
    }
}

document.body.addEventListener('click', function (e) {
    playRound(e.target.id, getComputerChoice())
    return e.target.id;
})
