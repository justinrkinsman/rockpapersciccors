function computerPlay() {
    let selections = ['ROCK','PAPER','SCISSORS']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}


function playRound() {
    let playerSelection = prompt('Make your Selection:')
    let computerSelection = computerPlay();

    let playerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER');
    let computerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'PAPER') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'SCISSORS') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'ROCK');
    let tieGame = (playerSelection.toUpperCase() == computerSelection); {  
    if (playerWin) {
            return (`You Win: ${playerSelection.toUpperCase()} beats ${computerSelection}`);
        } else if (computerWin) {
            return (`You Lose: ${computerSelection} beats ${playerSelection.toUpperCase()}`);
        } else if (tieGame) {
            return ('Tie Game')
        }
    }
}

/*function winner() {
    if (playerSelection.toUpperCase() == 'ROCK') {
        if (computerSelection == 'SCISSORS') {
            return (`You Win: ${playerSelection.toUpperCase()} beats ${computerSelection}`)
        } else if (computerSelection == 'PAPER'){
            return (`You Lose: ${computerSelection} beats ${playerSelection.toUpperCase}`)
}
    }
}*/

/*let winner = playRound();*/

function game(playerWin, computerWin, tieGame) {
    for (let i = 1; i <= 5; i++) {
        if (playRound(playerWin)) {
            console.log(`Round ${i} ${playRound()}`);
        } else if (playRound(computerWin)) {
            console.log(`Round ${i} ${playRound}`);
        } else if (playRound(tieGame)) {
            console.log(`Round ${i} ${playRound}`);
        } 
      }
    console.log(`Game Over`)
}

console.log(game())






/*let playerSelection = prompt('Make your selection:') //Player's selection is stored in a variable//
let computerSelection = computerPlay() //Stores computer's selection in variable
let playerWin = 

function computerPlay() { //Determines computer's selection//
    let selections = ['ROCK', 'PAPER', 'SCISSORS']
    let randsel = selections[Math.floor(Math.random()*selections.length)];
    return randsel;
}

function playRound(playerSelection, computerSelection) {

}

console.log(playRound(playerSelection, computerSelection));*/