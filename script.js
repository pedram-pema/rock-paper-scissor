let playerScore = 0;
let computerScore = 0;
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let buttons = document.querySelectorAll(".game-btn");
let board = document.querySelector(".board");
let reset = document.querySelector(".reload-btn");

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
    scoretext.style.display = "none";
    reportBox.style.display = "initial";
    reportBox.innerHTML += `<p><span class="bold">Round ${roundCounter}:</span> ${roundCommentary}</p>`;
    let lastPara = reportBox.lastElementChild;
    let arr = lastPara.textContent.split(" ");
    
    if (arr.includes("You")) {
        lastPara.style.color = "rgb(31, 219, 37)";
    } else if (arr.includes("Computer")) {
        lastPara.style.color = "red";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        ++roundCounter;
        reset.style.display = "initial";
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

reset.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    board.textContent = "";
    reportBox.textContent = "";
    reportBox.style.display = "none";
    scoretext.style.display = "initial";
    counterText.innerHTML = '<p class="round-counter">Ready for<span class="bold"> Round 1?</span></p>';
    roundCounter = 0;
    instructionText.innerHTML = '<p id="instruction-text">Play your hand by selecting one of the options below:</p>'
    reset.style.display = "none";
});

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundCommentary = 'Round tied!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        roundCommentary = 'You won! <span class="bold">Rock</span> beats <span class="bold">Scissors</span>';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        roundCommentary = 'You won! <span class="bold">Paper</span> beats <span class="bold">Rock</span';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        roundCommentary = 'You won! <span class="bold">Scissors</span> beats <span class="bold">Paper</span>';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        roundCommentary = 'Computer won! <span class="bold">Rock</span> beats <span class="bold">Scissors</span>';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        roundCommentary = 'Computer won! <span class="bold">Paper</span> beats <span class="bold">Rock</span>';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        roundCommentary = 'Computer won! <span class="bold">Scissors</span> beats <span class="bold">Paper</span>';
    }
}

// FIX: log message
// FIX: round counter

// TODO: Endgame
// TODO: Replay button