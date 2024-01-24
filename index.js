function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function roundResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

const resultElem = document.getElementById("result");

function updateResult(result) {
  if (result === "tie") {
    resultElem.innerHTML = "Tie!";
  } else if (result === "win") {
    resultElem.innerHTML = "You win this round!";
  } else if (result === "lose") {
    resultElem.innerHTML = "You lose this round!";
  }
}

let scores = { player: 0, computer: 0 };
const scoresElem = document.getElementById("score");

function updateScores(result) {
  if (result === "win") {
    scores.player++;
  } else if (result === "lose") {
    scores.computer++;
  }
  if (scores.player === 5 || scores.computer === 5) {
    scoresElem.innerHTML =
      scores.player > scores.computer
        ? "You win the game!"
        : "You lose the game!";
    scores = { player: 0, computer: 0 };
  } else {
    scoresElem.innerHTML = `Player: ${scores.player} Computer: ${scores.computer}`;
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = roundResult(playerSelection, computerSelection);
  updateResult(result);
  updateScores(result);
}
