function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  return "scissors";
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("Tie round!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(
        "You win this round! " + humanChoice + " beats " + computerChoice,
      );
    } else {
      computerScore++;
      console.log(
        "Computer wins this round! " + computerChoice + " beats " + humanChoice,
      );
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }

  for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("Final Score:");
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("Game ended in a tie!");
  }
}

playGame();
