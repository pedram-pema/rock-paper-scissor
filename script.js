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

function scoreReactor(playerScore, computerScore) {
    if (playerScore > computerScore) {
        instructionText.innerHTML = `<p>You are leading by ${playerScore-computerScore}, Good job!</p>`;
    } else if (computerScore > playerScore) {
        instructionText.innerHTML = `<p>You are loosing by ${computerScore-playerScore}, Hurry up!</p>`;
    } else {
        instructionText.innerHTML = `<p>It's tied, Keep pushing</p`;
    }
}

let counterText = document.querySelector(".round-counter");
let instructionText = document.querySelector("#instruction-text");
let scoretext = document.querySelector(".scoretext");
let roundCounter = 0;
let roundCommentary = '';
let reportBox = document.querySelector(".report-box");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        ++roundCounter;
        counterText.textContent = `Round ${roundCounter}, Go!`
        counterText.style.fontWeight = "bold";
        // instructionText.style.display = "none";
        // why scoreReactor doesn't work here?
        scoretext.style.display = "none";
    });
});

/* function gameReport(playerScore, computerScore) {

} */

rock.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "Rock";
    playSingleRound(playerSelection, computerSelection);
    board.textContent = `You ${playerScore} - ${computerScore} Computer`;
    scoreReactor(playerScore, computerScore);
    reportBox.innerHTML += `<p>${roundCommentary}</p>`;

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
    board.textContent = `You ${playerScore} - ${computerScore} Computer`;
    scoreReactor(playerScore, computerScore);
    reportBox.innerHTML += `<p>${roundCommentary}</p>`;

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
    board.textContent = `You ${playerScore} - ${computerScore} Computer`;
    scoreReactor(playerScore, computerScore);
    reportBox.innerHTML += `<p>${roundCommentary}</p>`;

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
        roundCommentary = 'Round tied!';
    } else if (playerSelection === 'Rock' 
                && computerSelection === 'Scissors') {
        playerScore++;
        roundCommentary = 'You Won the round! Rock beats Scissors';
    } else if (playerSelection === 'Paper' 
                && computerSelection === 'Rock') {
        playerScore++;
        roundCommentary = 'You Won the round! Paper beats Rock';
    } else if (playerSelection === 'Scissors' 
                && computerSelection === 'Paper') {
        playerScore++;
        roundCommentary = 'You Won the round! Scissors beats Paper';
    } else if (playerSelection === 'Scissors' 
                && computerSelection === 'Rock') {
        computerScore++;
        roundCommentary = 'You Lost the round! Rock beats Scissors';
    } else if (playerSelection === 'Rock' 
                && computerSelection === 'Paper') {
        computerScore++;
        roundCommentary = 'You Lost the round! Paper beats Rock';
    } else if (playerSelection === 'Paper' 
                && computerSelection === 'Scissors') {
        computerScore++;
        roundCommentary = 'You Lost the round! Scissors beats Paper';
    } else if (playerSelection == undefined) {
        console.log('No second chance this time');
    }
}

// TODO: Create custom event after winner announcement for restart