const choices = ["rock", "paper", "scissors"];
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    playGame(playerChoice);
  });
});

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);

  updateScores(winner);
  displayResult(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateScores(winner) {
  if (winner === "player") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (winner === "computer") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }
}

function displayResult(playerChoice, computerChoice, winner) {
  if (winner === "draw") {
    resultEl.textContent = `It's a draw! You both chose ${playerChoice}.`;
  } else if (winner === "player") {
    resultEl.textContent = `You win! ${playerChoice} beats ${computerChoice}. 🎉`;
  } else {
    resultEl.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}. 🤖`;
  }
}
