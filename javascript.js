function computerPlay() {
    let selections = ['ROCK','PAPER','SCISSORS']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == computerSelection) {
        return ('Tie Game');
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'SCISSORS') {
        return (`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}`);
    } else if (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'PAPER') {
        return (`You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`);
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'ROCK') {
        return (`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}`);
    } else if (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'SCISSORS') {
        return (`You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`);
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'PAPER') {
        return (`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection}`);
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'ROCK') {
        return (`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
    }
}

let playerSelection = prompt('Make your selection:')
const computerSelection = computerPlay();

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(playerSelection, computerSelection);
    }
}

console.log(playRound(playerSelection, computerSelection))