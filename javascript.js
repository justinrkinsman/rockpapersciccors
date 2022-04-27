function computerPlay() {
    let selections = ['ROCK','PAPER','SCISSORS']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}
let playerScore = 0;
let computerScore = 0;

function playRound() {
    let playerSelection = prompt('Make your Selection:')
    let computerSelection = computerPlay();

    let playerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER');
    let computerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'PAPER') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'SCISSORS') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'ROCK');
    let tieGame = (playerSelection.toUpperCase() == computerSelection); {  
    if (playerWin) {
            return (`You Win: ${playerSelection.toUpperCase()} beats ${computerSelection}. Player Score ${++playerScore}`);
        } else if (computerWin) {
            return (`You Lose: ${computerSelection} beats ${playerSelection.toUpperCase()}. Computer Score ${++computerScore}`);
        } else if (tieGame) {
            return ('Tie Game')
        }
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i} ${playRound()}`);
    }
    if (computerScore < playerScore) {
        console.log(`You win ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose ${computerScore} - ${playerScore}`);
    } else if (computerScore == playerScore) {
        console.log('Tie game');
    }
    console.log(`Game Over`)
}

function scoreCount() {
    for (let i = 0; i <= 5; i++)
    console.log(`Player ${++playerScore}`)
    console.log(`Computer ${++computerScore}`)
    if (computerScore < playerScore) {
        console.log(`You win ${playerScore} - ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose ${computerscore} - ${playerScore}`);
    } else if (computerScore == playerScore) {
        console.log('Tie game');
    } else {
        console.log('Something went wrong...')
    }
}

game()