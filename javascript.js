function computerPlay() {
    let selections = ['Rock','Paper','Scissors']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        return ("You Win");
    } else if (playerSelection !== 'Rock') {
        return ("You Lose");
    }
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))