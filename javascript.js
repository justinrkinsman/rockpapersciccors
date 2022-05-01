function computerPlay() {
    let selections = ['ROCK','PAPER','SCISSORS']
    let randSel = selections[Math.floor(Math.random()*selections.length)];
    return randSel;
}
let playerScore = 0;
let computerScore = 0;

let rock = document.createElement('button');
rock.innerHTML = 'Rock';
document.body.appendChild(rock);
rock.addEventListener('click', function(e){
    return 'ROCK'
}, playRound());

let paper = document.createElement('button');
paper.innerHTML = 'Paper';
document.body.appendChild(paper);
paper.addEventListener('click', function(e){
    return 'PAPER'
}, playRound());

let scissors = document.createElement('button');
scissors.innerHTML = 'Scissors';
document.body.appendChild(scissors);
scissors.addEventListener('click', function(e){
    return 'SCISSORS'
}, playRound());

function playerChoice() {
    if (rock) {
        return 'ROCK';
    }else if (paper){
        return 'PAPER';
    }else if (scissors){
        return 'SCISSORS';
    }
};

function playRound() {
    let playerSelection = playerChoice();
    let computerSelection = computerPlay();

    let playerWin = (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection == 'PAPER' && computerSelection == 'ROCK') || (playerSelection == 'SCISSORS' && computerSelection == 'PAPER');
    let computerWin = (playerSelection == 'ROCK' && computerSelection == 'PAPER') || (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') || (playerSelection == 'SCISSORS' && computerSelection == 'ROCK');
    let tieGame = (playerSelection == computerSelection); {  
    if (playerWin) {
        console.log (`You Win: ${playerSelection} beats ${computerSelection}. Player Score ${++playerScore}`);
    } else if (computerWin) {
        console.log (`You Lose: ${computerSelection} beats ${playerSelection}. Computer Score ${++computerScore}`);
    } else if (tieGame) {
        console.log ('Tie Game')
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

//playerChoice();