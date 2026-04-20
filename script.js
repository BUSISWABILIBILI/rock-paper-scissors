const buttons = document.querySelectorAll("button[data-choice]");
const resultDiv = document.getElementById("result");
const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const replayBtn = document.getElementById("replay-btn");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  resultDiv.className = ""; // reset styles

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `Tie! Both chose ${humanChoice}`;
    resultDiv.classList.add("tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    resultDiv.classList.add("win");
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    resultDiv.classList.add("lose");
  }

  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;

  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  buttons.forEach((btn) => (btn.disabled = true));

  if (humanScore > computerScore) {
    resultDiv.textContent = "🎉 You won the game!";
    resultDiv.className = "win";
  } else {
    resultDiv.textContent = "💻 Computer won the game!";
    resultDiv.className = "lose";
  }

  replayBtn.style.display = "block";
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  humanScoreSpan.textContent = 0;
  computerScoreSpan.textContent = 0;

  resultDiv.textContent = "Make your move!";
  resultDiv.className = "";

  buttons.forEach((btn) => (btn.disabled = false));
  replayBtn.style.display = "none";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

replayBtn.addEventListener("click", resetGame);
