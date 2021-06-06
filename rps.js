function computerPlay() {
    const choice = Math.floor(Math.random() * 3); 
    if (choice === 0) {
        return 'rock'; 
    } else if (choice === 1) {
        return 'scissors'; 
    } else {
        return 'paper'; 
    }
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); 

    if (playerSelection === computerSelection) {
        return "It's a draw!"; 
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "You lose! Paper beats Rock.";
        } else {
            return "You win! Rock beats Scissors."; 
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return "You lose! Scissors beats Paper.";
        } else {
            return "You win! Paper beats Rock."
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "You lose! Rock beats Scissors.";
        } else {
           return "You win! Scissors beats Paper.";
        }
    }
}

function game() {
    let playerScore = 0; 
    let computerScore = 0; 

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Select Rock, Paper, or Scissors: "); 
        let result = play(playerChoice, computerPlay()); 
        console.log(result); 
        result = result.slice(0, 5); 
        if (result === "You l") {
            computerScore++; 
        } else if (result === 'You w') {
            playerScore++; 
        }
        console.log("Player Score: " + playerScore); 
        console.log("Computer Score: " + computerScore); 
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!"); 
    } else {
        console.log("It's a tie!"); 
    }
}
