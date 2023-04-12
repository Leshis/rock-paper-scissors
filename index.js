const choice = ["Rock", "Paper", "Scissors"];
const tie = "The result is a tie!";
const win = "You win!";
const lose = "Computer wins";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return (choice[Math.floor(Math.random() * choice.length)]);
}

function getPlayerChoice() {
    return window.prompt("Enter your selection");
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return tie;
    }
    if ((playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors")
        || (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper")
        || (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock")) {
        playerScore++;
        return win;
    }
    computerScore++;
    return lose;
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

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    console.log(checkWinner());
}

game();