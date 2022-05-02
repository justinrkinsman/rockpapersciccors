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
    if (checkWinner()) {
        playerScore = computerScore = 0;
        updateScore();
    }
    });
});

function playRound(playerChoice, computerPlay) {
    if (playerChoice === computerPlay) {
        return document.getElementById('currentRound').textContent = `Tie game`;
    }
    if (playerChoice === 'Rock') {
        if (computerPlay === 'Paper') {
            return document.getElementById('currentRound').textContent = `You Win! ${playerChoice} beats ${computerPlay} - Player Score: ${++playerScore}`;
        }else{
            return document.getElementById('currentRound').textContent = `You Lose! ${computerPlay} beats ${playerChoice} - Computer Score: ${++computerScore}`;
        }
    }
    if (playerChoice === 'Paper') {
        if (computerPlay == 'Rock') {
            return document.getElementById('currentRound').textContent = `You Win! ${playerChoice} beats ${computerPlay} - Player Score: ${++playerScore}`;
        }else{
            return document.getElementById('currentRound').textContent = `You Lose! ${computerPlay} beats ${playerChoice} - Computer Score: ${++computerScore}`;
        }
    }
    if (playerChoice === 'Scissors') {
        if (computerPlay === 'Paper') {
            return document.getElementById('currentRound').textContent = `You Win! ${playerChoice} beats ${computerPlay} - Player Score: ${++playerScore}`;
        }else{
            return document.getElementById('currentRound').textContent = `You Lose! ${computerPlay} beats ${playerChoice} - Computer Score: ${++computerScore}`;
        }
    }
}

function updateScore() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function checkWinner () {
    if (playerScore === 5 || computerScore === 5) {
        const winner =
            playerScore === 5
                ? `You win! ${playerScore} - ${computerScore}`
                : `You lose! ${computerScore} - ${playerScore}`;
            alert(winner);
            return true;
        }
        return false;
}