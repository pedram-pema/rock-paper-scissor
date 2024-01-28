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

function getPlayerChoice() {
    let playerChoice = prompt('Choose your weapon between Rock, Paper or Scissors!', '');
    switch(playerChoice) {
        case null:
            return;
        case '':
            console.log("You haven't selected anything! \nChoose a weapon first.");
            return getPlayerChoice();
    }
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (playerChoice === 'Rock' 
        || playerChoice === 'Paper' 
        || playerChoice === 'Scissors') {
        return playerChoice;
    } else if (playerChoice !== 'Rock' 
                || playerChoice !== 'Paper' 
                || playerChoice !== 'Scissors') {
        console.log("Your weapon of choice doesn't exist. \nYou must choose between 'Rock', 'Paper' or 'Scissors'."); 
        return getPlayerChoice();
    }
}

let playerScore = 0;
let computerScore = 0;
/* variables above are declared to be used for counting score at the end of match and each round.
Each win is counted as one point for the winner.
 */

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