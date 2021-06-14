let playerScore = 0; 
let computerScore = 0; 

function computerPlay() {
    const choice = Math.floor(Math.random() * 3); 
    if (choice === 0) {
        return 'rock'; 
    } else if (choice === 1) {
        return 'paper'; 
    } else {
        return 'scissors'; 
    }
}

function displayScore() {
    const score = document.querySelector(".scoreboard"); 
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
}

function displayResults(announcement) {
    const results = document.querySelector(".results"); 
    results.textContent = announcement; 
}

function draw() {
    displayResults("It's a draw!"); 
}

function computerWins(playerSelection, computerSelection) {
    displayResults(`You lose. ${computerSelection} beats ${playerSelection}.`)
    computerScore++; 
    console.log("computer score: " + computerScore); 
    if (computerScore >= 5) {
        gameOver("You Lose!")
    }
}

function playerWins(playerSelection, computerSelection) {
    displayResults(`You win. ${playerSelection} beats ${computerSelection}.`)
    playerScore++; 
    console.log("player score: " + playerScore); 
    if (playerScore >= 5) {
        gameOver("You Win!")
    }
}

function play(playerSelection) {
    const computerSelection = computerPlay(); 
    playerSelection = playerSelection.toLowerCase(); 

    if (playerSelection === computerSelection) {
        draw("It's a draw!");
        return; 
    }

    if (playerSelection === 'rock' && computerSelection === 'paper' || 
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWins(playerSelection, computerSelection); 
    } else {
        playerWins(playerSelection, computerSelection);     
    }

    displayScore(); 
}

function gameOver(winner) {
    displayResults(winner); 
    computerScore = 0; 
    playerScore = 0; 
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    play("rock")
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    play("paper"); 
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    play("scissors"); 
});

displayScore(); 

/*
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
*/