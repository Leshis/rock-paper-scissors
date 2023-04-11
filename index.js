const choice = ["Rock", "Paper", "Scissors"];
const playerChoice = "rock"
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return (choice[Math.floor(Math.random()*3)]);
}

function getPlayerChoice(){
    return window.prompt("Enter your selection");
}

function playRound(playerChoice, computerChoice){

    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()){
        return "The result is a tie!"
    } 

    if(playerChoice.toLowerCase() === "rock"){
        if(computerChoice.toLowerCase() === "scissors"){
            playerScore++;
            return "You win!";
        } else{
            computerScore++;
            return "Computer wins!";
        }
    }

    if(playerChoice.toLowerCase() === "scissors"){
        if(computerChoice.toLowerCase() === "paper"){
            playerScore++;
            return "You win!";
        } else{
            computerScore++;
            return "Computer wins";
        }
    }

    if(playerChoice.toLowerCase() === "paper"){
        if(computerChoice.toLowerCase() === "rock"){
            playerScore++;
            return "You win!";
        } else{
            computerScore++;
            return "Computer wins";
        }
    }
}

function checkWinner(){
    if(playerScore > computerScore){
        return "You win overall!";
    }else if(computerScore > playerScore){
        return "Computer wins overall!";
    }else{
        return "Tie game!";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    console.log(checkWinner());
}

game();