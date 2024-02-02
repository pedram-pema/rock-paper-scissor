function computerSelection() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return 'Rock';
    } else if (randomChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;
/* variables above are declared to be used for counting score at the end of match and each round.
Each win is counted as one point for the winner.
 */

let playerSelection;
function getPlayerChoice() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.value;
        });
    });
}


rock.addEventListener('click', () => {
    rock.value = 'new value';
});

paper.addEventListener('click', () => {

});

scissors.addEventListener('click', () => {

});


function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Round tied! You have to choose a weapon again.');
        playerSelection = getPlayerChoice();
        if (playerSelection == undefined) { //could return null
            let cancelGameRequest = confirm('Do you want to cancel the game?');
            if (cancelGameRequest) {
                console.log('You have canceled the game.')
                return; 
            } else {
                console.log('OK! Continue the game.');  
                playerSelection = getPlayerChoice();
            }
        }
        computerSelection = getComputerChoice();
        return playSingleRound(playerSelection, computerSelection);
    } else if (playerSelection === 'Rock' 
                && computerSelection === 'Scissors') {
        playerScore++;
        return 'You Won the round! Rock beats Scissors';
    } else if (playerSelection === 'Paper' 
                && computerSelection === 'Rock') {
        playerScore++;
        return 'You Won the round! Paper beats Rock';
    } else if (playerSelection === 'Scissors' 
                && computerSelection === 'Paper') {
        playerScore++;
        return 'You Won the round! Scissors beats Paper';
    } else if (playerSelection === 'Scissors' 
                && computerSelection === 'Rock') {
        computerScore++;
        return 'You Lost the round! Rock beats Scissors';        
    } else if (playerSelection === 'Rock' 
                && computerSelection === 'Paper') {
        computerScore++;
        return 'You Lost the round! Paper beats Rock';
    } else if (playerSelection === 'Paper' 
                && computerSelection === 'Scissors') {
        computerScore++;
        return 'You Lost the round! Scissors beats Paper';
    } else if (playerSelection == undefined) {
        return 'No second chance this time';
    }
}

function showCommentary() {
    if (playerScore > computerScore 
        && playerScore !== 3 
        && computerScore !== 3) {
        return `You are ahead ${playerScore}-${computerScore}! Keep it up.`;
    } else if (computerScore > playerScore 
                && playerScore !== 3 
                && computerScore !== 3) {
        return `You are loosing ${playerScore}-${computerScore}! Do something.`;
    } else if (playerScore === computerScore 
                && playerScore !== 3 
                && computerScore !== 3) {
        return `Score is tied ${playerScore}-${computerScore}! Hurry up.`;
    } else if (playerScore === 3 
                || computerScore === 3) {
        return `Final result is: ${playerScore}-${computerScore}!`;
    }
}



// function replay() {
//     game();
// }

// game must react differently to each score