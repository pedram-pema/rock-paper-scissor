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
    let playerChoice = prompt('Select your weapon', '');
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (playerChoice !== 'Rock' && 'Paper' && 'Scissor') {
        console.log("Your weapon of chocie doesn't exist. You must choose 'Rock', 'Paper' or 'Scissor'."); 
        return getPlayerChoice();
    } else {
        return playerChoice;
    }
}

let playerScore = 0;
let computerScore = 0;
//variables above are declared to be used for counting score at the end of match and each round

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Round tied!');
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        return (singleRound(playerSelection, computerSelection));
    } else if (playerSelection === 'Rock'  && computerSelection === 'Scissor') {
        playerScore++;
        return 'You Won the round! Rock beats Scissor';        
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return 'You Won the round! Paper beats Rock';
    } else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        playerScore++;
        return 'You Won the round! Scissor beats Paper';
    } else if (playerSelection === 'Scissor'  && computerSelection === 'Rock') {
        computerScore++;
        return 'You Lost the round! Rock beats Scissor';        
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return 'You Lost the round! Paper beats Rock';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissor') {
        computerScore++;
        return 'You Lost the round! Scissor beats Paper';
    }
}

// WRITE A FUNCTION CALLED GAME() THAT KEEPS A SCORE AND REPORTS WINNER AT THE END
function game() {
    let playerSelection;
    let computerSelection;

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(singleRound(playerSelection, computerSelection));
    console.log(showCommentary());

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(singleRound(playerSelection, computerSelection));
    console.log(showCommentary());

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(singleRound(playerSelection, computerSelection));
    console.log(showCommentary());
    
    if (playerScore === 3) {
        return console.log('MEGA JOB! You won the game.');
    } else if (computerScore === 3) {
        return console.log('CRUSHING DEFEAT! Computer have won.');
    }

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(singleRound(playerSelection, computerSelection));
    console.log(showCommentary());

    if (playerScore === 3) {
        return console.log('MEGA JOB! You won the game.');
    } else if (computerScore === 3) {
        return console.log('CRUSHING DEFEAT! Computer have won.');
    }

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(singleRound(playerSelection, computerSelection));
    console.log(showCommentary());

    if (playerScore === 3) {
        return console.log('MEGA JOB! You won the game.');
    } else if (computerScore === 3) {
        return console.log('CRUSHING DEFEAT! Computer have won.');
    }
}
game();

function showCommentary() {
    if (playerScore > computerScore && playerScore !== 3 && computerScore !== 3) {
        return "You are ahead! Keep it up.";
    } else if (computerScore > playerScore && playerScore !== 3 && computerScore !== 3) {
        return "You are loosing! Do something.";
    } else if (playerScore === computerScore && playerScore !== 3 && computerScore !== 3) {
        return "Score is tied! Hurry up.";
    } else if (playerScore === 3 || computerScore === 3) {
        return 'Final result is:';
    }
}

// live commentory: you are ahaed; sum of all scores and then using comparison to report the game 
// add score to commentary
// use template literals for reporting results scores didn't work. maybe defining a function would work!?