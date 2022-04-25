function computerPlay() {
    let selections = ['Rock','Paper','Scissors']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ('Tie Game');
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function capitalizeFirstLetter(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

const playerSelection = 'Scissors';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))