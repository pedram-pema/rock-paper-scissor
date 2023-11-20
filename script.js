function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return 'Rock';
    } else if (randomChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
}

function getPlayerChoice() {
    let playerChoice = prompt('Choose your weapon between Rock, Paper or Scissor!', '');
        if (playerChoice === '') {
            console.log("You haven't selected anything! \nChoose a weapon first.");
            return getPlayerChoice();
        }
    playerChoice = playerChoice.charAt(0).toUpperCase() + 
    playerChoice.slice(1).toLowerCase();
    if (playerChoice === 'Rock' 
        || playerChoice === 'Paper' 
        || playerChoice === 'Scissor') {
        return playerChoice;
    } else if (playerChoice !== 'Rock' 
                || playerChoice !== 'Paper' 
                    || playerChoice !== 'Scissor') {
        console.log("Your weapon of chocie doesn't exist. \nYou must choose between 'Rock', 'Paper' or 'Scissor'."); 
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
        computerSelection = getComputerChoice();
        return (playSingleRound(playerSelection, computerSelection));
    } else if (playerSelection === 'Rock' 
                && computerSelection === 'Scissor') {
        playerScore++;
        return 'You Won the round! Rock beats Scissor';        
    } else if (playerSelection === 'Paper' 
                && computerSelection === 'Rock') {
        playerScore++;
        return 'You Won the round! Paper beats Rock';
    } else if (playerSelection === 'Scissor' 
                && computerSelection === 'Paper') {
        playerScore++;
        return 'You Won the round! Scissor beats Paper';
    } else if (playerSelection === 'Scissor' 
                && computerSelection === 'Rock') {
        computerScore++;
        return 'You Lost the round! Rock beats Scissor';        
    } else if (playerSelection === 'Rock' 
                && computerSelection === 'Paper') {
        computerScore++;
        return 'You Lost the round! Paper beats Rock';
    } else if (playerSelection === 'Paper' 
                && computerSelection === 'Scissor') {
        computerScore++;
        return 'You Lost the round! Scissor beats Paper';
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playSingleRound(playerSelection, computerSelection));
    console.log(showCommentary());

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playSingleRound(playerSelection, computerSelection));
    console.log(showCommentary());

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playSingleRound(playerSelection, computerSelection));
    console.log(showCommentary());
    
    if (playerScore === 3) {
        return console.log('MEGA JOB! You won the game.');
    } else if (computerScore === 3) {
        return console.log('CRUSHING DEFEAT! Computer have won.');
    }

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playSingleRound(playerSelection, computerSelection));
    console.log(showCommentary());

    if (playerScore === 3) {
        return console.log('MEGA JOB! You won the game.');
    } else if (computerScore === 3) {
        return console.log('CRUSHING DEFEAT! Computer have won.');
    }

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(playSingleRound(playerSelection, computerSelection));
    console.log(showCommentary());

    if (playerScore === 3) {
        return console.log('MEGA JOB! You won the game.');
    } else if (computerScore === 3) {
        return console.log('CRUSHING DEFEAT! Computer have won.');
    }
}
game();

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

// game must react differently to each score
// find a state for when game is cancelled
// use debugger instead of console.log to see values