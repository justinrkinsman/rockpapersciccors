function computerPlay() {
    let selections = ['ROCK','PAPER','SCISSORS']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}
let playerSelection = prompt('Make your Selection:')
let computerSelection = computerPlay();

let playerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER');
let computerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'PAPER') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'SCISSORS') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'ROCK');
let tieGame = (playerSelection.toUpperCase() == computerSelection);

function playRound(playerWin, computerWin, tieGame) {  
    if (playerWin) {
            return (`You Win: ${playerSelection.toUpperCase()} beats ${computerSelection}`);
        } else if (computerWin) {
            return (`You Lose: ${computerSelection} beats ${playerSelection.toUpperCase()}`);
        } else if (tieGame) {
            return ('Tie Game')
        }
    }

let winner = playRound(playerWin, computerWin, tieGame);

function game() {
    for (let i = 1; i <= 5; i++) {
        if (playRound(playerWin)) {
            console.log(`Round ${i}- ${winner}`);
        } else if (playRound(computerWin)) {
            console.log(`Round ${i}- ${winner}`);
        } else if (playRound(tieGame)) {
            console.log(`Round ${i}- ${winner}`);
        } 
      }
    console.log(`Game Over`)
}

console.log(game())
