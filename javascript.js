const options = document.querySelectorAll('.options');
let playerScore = 0;
let computerScore = 0;
options.forEach((option) => {
    option.addEventListener("click", function () {
    const playerChoice = this.textContent;
    const computerChoice = ['Rock', 'Paper', 'Scissors']
    const computerPlay = computerChoice[Math.floor(Math.random() * 3)];
    playRound(playerChoice, computerPlay)
    updateScore();
    });
});

function playRound(playerChoice, computerPlay) {
    if (playerChoice === computerPlay) {
        return(`Tie game`);
    }
    if (playerChoice === 'Rock') {
        if (computerPlay === 'Paper') {
            return (`You Win! ${playerChoice} beats ${computerPlay} Player Score ${++playerScore}`);
            playerScore++
        }else{
            return (`You Lose! ${computerPlay} beats ${playerChoice} Computer Score ${++computerScore}`);
            computerScore++
        }
    }
    if (playerChoice === 'Paper') {
        if (computerPlay == 'Rock') {
            return (`You Win! ${playerChoice} beats ${computerPlay} Player Score ${++playerScore}`);
            playerScore++
        }else{
            return (`You Lose! ${computerPlay} beats ${playerChoice} Computer Score ${++computerScore}`);
            computerScore++
        }
    }
    if (playerChoice === 'Scissors') {
        if (computerPlay === 'Paper') {
            return (`You Win! ${playerChoice} beats ${computerPlay} Player Score ${++playerScore}`);
            playerScore++
        }else{
            return (`You Lose! ${computerPlay} beats ${playerChoice} Computer Score ${++computerScore}`)
            computerScore++
        }
    }
}

function updateScore() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function checkWinner () {

}


/*function playRound() {
    let playerSelection;
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
}*/

/*function game() {
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


function playerChoice(rock, paper, scissors) {
    if (rock) {
        return 'ROCK';
    }else if (paper){
        return 'PAPER';
    }else if (scissors){
        return 'SCISSORS';
    }
}*/