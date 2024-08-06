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
let scoretext = document.querySelector(".scoretext");
let roundCounter = 0;
let roundCommentary = '';
let reportBox = document.querySelector(".report-box");

function scoreReactor(playerScore, computerScore) {
    if (playerScore > computerScore) {
        instructionText.innerHTML = `<p>You are leading by ${playerScore-computerScore}, Good job!</p>`;
    } else if (computerScore > playerScore) {
        instructionText.innerHTML = `<p>You are loosing by ${computerScore-playerScore}, Hurry up!</p>`;
    } else {
        instructionText.innerHTML = `<p>It's tied, Keep pushing</p`;
    }
    counterText.textContent = `Round ${roundCounter}, Go!`
    counterText.style.fontWeight = "bold";
}

function gameReport(playerScore, computerScore) {
    board.textContent = `You ${playerScore} - ${computerScore} Computer`;
    reportBox.innerHTML += `<p><span class="bold">Round ${roundCounter}:</span> ${roundCommentary}</p>`;
    scoretext.style.display = "none";
    reportBox.style.display = "initial";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        ++roundCounter;
        let computerSelection = getComputerChoice();
        let playerSelection = button.textContent;
        playSingleRound(playerSelection, computerSelection);
        scoreReactor(playerScore, computerScore);
        gameReport(playerScore, computerScore);

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
});

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundCommentary = 'Round tied!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        roundCommentary = 'You won! Rock beats Scissors';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        roundCommentary = 'You won! Paper beats Rock';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        roundCommentary = 'You won! Scissors beats Paper';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        roundCommentary = 'Computer won! Rock beats Scissors';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        roundCommentary = 'Computer won! Paper beats Rock';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        roundCommentary = 'Computer won! Scissors beats Paper';
    }
}

// TODO: Add reset button
// How to make a random event
// Color round recaps