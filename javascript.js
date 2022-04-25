function computerPlay() {
    let selections = ['Rock','Paper','Scissors']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))