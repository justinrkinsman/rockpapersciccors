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
rock.addEventListener('click', function rockSelect(e){
    console.log (e.innerText = 'ROCK')
})

let paper = document.createElement('button');
paper.innerHTML = 'Paper';
document.body.appendChild(paper);
paper.addEventListener('click', function paperSelect(e){
    console.log (e.innerText = 'PAPER');
})

let scissors = document.createElement('button');
scissors.innerHTML = 'Scissors';
document.body.appendChild(scissors);
scissors.addEventListener('click', function scissorsSelect(e){
    console.log (e.innerText = "SCISSORS");
})

function playerSelection() {
    if (e.innerText == "ROCK") {
        playerSelection == 'ROCK';
    }else if (e.innerText == 'PAPER'){
        playerSelection == 'PAPER';
    }else if (e.innerText == 'SCISSORS'){
        playerSelection == 'SCISSORS'
    }
};


function playRound() {
    let playerSelection = playerSelection()
    let computerSelection = computerPlay();

    let playerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'ROCK') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'PAPER');
    let computerWin = (playerSelection.toUpperCase() == 'ROCK' && computerSelection == 'PAPER') || (playerSelection.toUpperCase() == 'PAPER' && computerSelection == 'SCISSORS') || (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection == 'ROCK');
    let tieGame = (playerSelection.toUpperCase() == computerSelection); {  
    if (playerWin) {
            console.log (`You Win: ${playerSelection.toUpperCase()} beats ${computerSelection}. Player Score ${++playerScore}`);
        } else if (computerWin) {
            console.log (`You Lose: ${computerSelection} beats ${playerSelection.toUpperCase()}. Computer Score ${++computerScore}`);
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

playRound();