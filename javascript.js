function computerPlay() {
    let selections = ['ROCK','PAPER','SCISSORS']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}
let playerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER');
let computerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'PAPER') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'SCISSORS') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'ROCK');
let tieGame = (playerSelection.toUpperCase() == computerSelection);

function playRound(playerSelection, computerSelection) {
        if (playerSelection.toUpperCase() == computerSelection) {
            return('Tie Game');
        } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'SCISSORS') {
            return(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}`);
        } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'PAPER') {
            return(`You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`);
        } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'ROCK') {
            return(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}`);
        } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'SCISSORS') {
            return(`You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`);
        } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'PAPER') {
            return(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}`);
        } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'ROCK') {
            return(`You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`);
        }
    }

let playerSelection = prompt('Make your selection:')
const computerSelection = computerPlay();

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}: ${playRound(playerSelection, computerSelection)}`)
    }
    console.log(`Game Over`)
}

console.log(game())

/*
When the player makes a selection
play 1 round for each selection
ends at round 5
keep score
declare winner after last round
*/