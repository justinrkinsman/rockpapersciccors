let playerSelection = prompt('Make your selection:') //Player's selection is stored in a variable//
let computerSelection = computerPlay() //Stores computer's selection in variable

function computerPlay() { //Determines computer's selection//
    let selections = ['ROCK', 'PAPER', 'SCISSORS']
    let randsel = selections[Math.floor(Math.random()*selections.length)];
    return randsel;
}