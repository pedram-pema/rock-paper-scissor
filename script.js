let playerScore = 0;
let computerScore = 0;
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let buttons = document.querySelectorAll(".game-btn");
let board = document.querySelector(".board");
let reset = document.querySelector(".reload-btn");
let main = document.querySelector("main");
let interactive = document.querySelector(".interactive");

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
        instructionText.innerHTML = `<p>You are leading by ${playerScore-computerScore}, Keep it up!</p>`;
    } else if (computerScore > playerScore) {
        instructionText.innerHTML = `<p>You are loosing by ${computerScore-playerScore}, Choose wisely!</p>`;
    } else {
        instructionText.innerHTML = `<p>It's tied, Keep pushing</p`;
    }
    counterText.textContent = `Get ready for round ${roundCounter+1}!`
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

function resetState() {
    playerScore = 0;
    computerScore = 0;
    board.textContent = "";
    reportBox.textContent = "";
    reportBox.style.display = "none";
    scoretext.style.display = "initial";
    counterText.innerHTML = '<p class="round-counter">Ready for<span class="bold"> Round 1?</span></p>';
    roundCounter = 0;
    instructionText.innerHTML = '<p id="instruction-text">Play your hand by selecting one of the options below:</p>'
}

function endGame(playerScore, computerScore) {
    interactive.style.display = "none";
    board.style.display = "none";

    let endGameDiv = document.createElement('div');
    endGameDiv.style.minHeight = "170px";
    let announcePara = document.createElement("p");
    let reactorPara = document.createElement("p");

    endGameDiv.appendChild(reactorPara);
    endGameDiv.appendChild(announcePara);
    endGameDiv.style.padding = "25px";
    endGameDiv.style.textAlign = "center"
    endGameDiv.style.fontSize = "24px";
    endGameDiv.style.fontWeight = "bold";
    let replayBtn = document.createElement("button");
    replayBtn.classList.add("btn-style");
    replayBtn.textContent = "Replay";
    endGameDiv.appendChild(replayBtn);
    main.appendChild(endGameDiv);
    
    if (playerScore === 5) {
        endGameDiv.style.backgroundColor = "white";
        endGameDiv.style.color = "gold"
        reactorPara.textContent = "Wow! Great job"
        announcePara.textContent = `You won ${playerScore} - ${computerScore}`;
    } else {
        endGameDiv.style.backgroundColor = "black";
        endGameDiv.style.color = "red"
        reactorPara.textContent = "Oops! Game over"
        announcePara.textContent = `Computer won ${computerScore} - ${playerScore}`;
    }
    replayBtn.addEventListener("click", () => {
        main.removeChild(endGameDiv);
        interactive.style.display = "flex";
        reset.disabled = true;
        board.style.display = "initial";
        resetState();
    });
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        ++roundCounter;
        reset.style.display = "initial";
        reset.disabled = false;
        let computerSelection = getComputerChoice();
        let playerSelection = button.textContent;
        playSingleRound(playerSelection, computerSelection);
        scoreReactor(playerScore, computerScore);
        gameReport(playerScore, computerScore);

        if (playerScore === 5 || computerScore === 5) {
            setTimeout(() => {
                endGame(playerScore, computerScore);
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
    console.log("clicked");
    reset.disabled = true;
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