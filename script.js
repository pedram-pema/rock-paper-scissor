let playerScore = 0;
let computerScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let buttons = document.querySelectorAll("button");
let board = document.querySelector(".board");

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return 'Rock';
    } else if (randomChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

let counterText = document.querySelector(".round-counter");
let instructionText = document.querySelector("#instruction-text");
let roundCounter = 0;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        ++roundCounter;
        counterText.textContent = `Round ${roundCounter}, Go!`
        counterText.style.fontWeight = "bold";
        instructionText.style.display = "none";
    });
});

rock.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Rock";
    playSingleRound(playerSelection, computerSelection);
    board.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore === 5) {
        console.log("Game is decided!");
        setTimeout(() => {
            alert("You won!");
        }, 50);
    } else if (computerScore === 5) {
        console.log("Game is decided");
        setTimeout(() => {
            alert("You lost!");
        }, 50);
    }
});

paper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Paper"
    playSingleRound(playerSelection, computerSelection);
    board.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore === 5) {
        console.log("Game is decided!");
        setTimeout(() => {
            alert("You won!");
        }, 50);
    } else if (computerScore === 5) {
        console.log("Game is decided");
        setTimeout(() => {
            alert("You lost!");
        }, 50);
    }
});

scissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Scissors";
    playSingleRound(playerSelection, computerSelection);
    board.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore === 5) {
        console.log("Game is decided!");
        setTimeout(() => {
            alert("You won!");
        }, 50);
    } else if (computerScore === 5) {
        console.log("Game is decided");
        setTimeout(() => {
            alert("You lost!");
        }, 50);
    }
});

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Round tied! You have to choose a weapon again.');
    } else if (playerSelection === 'Rock' 
                && computerSelection === 'Scissors') {
        playerScore++;
        console.log('You Won the round! Rock beats Scissors');
    } else if (playerSelection === 'Paper' 
                && computerSelection === 'Rock') {
        playerScore++;
        console.log('You Won the round! Paper beats Rock');
    } else if (playerSelection === 'Scissors' 
                && computerSelection === 'Paper') {
        playerScore++;
        console.log('You Won the round! Scissors beats Paper');
    } else if (playerSelection === 'Scissors' 
                && computerSelection === 'Rock') {
        computerScore++;
        console.log('You Lost the round! Rock beats Scissors');
    } else if (playerSelection === 'Rock' 
                && computerSelection === 'Paper') {
        computerScore++;
        console.log('You Lost the round! Paper beats Rock');
    } else if (playerSelection === 'Paper' 
                && computerSelection === 'Scissors') {
        computerScore++;
        console.log('You Lost the round! Scissors beats Paper');
    } else if (playerSelection == undefined) {
        console.log('No second chance this time');
    }
}