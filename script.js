let Choices = ["Rock", "Paper", "Scissor"];

let ComputerScore = 0;
let UserScore = 0;

const winner = document.querySelector(".winner");
const input = document.querySelector("input");
const hResult = document.querySelector(".hResult");
const pResult = document.querySelector(".pResult");
const hscoreresult = document.querySelector(".hscoreresult");
const pscoreresult = document.querySelector(".pscoreresult");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let humanChoice = parseInt(input.value);
  if (isNaN(humanChoice) || humanChoice < 0 || humanChoice > 2) {
    hResult.textContent = "Wrong input"
    console.log("wrong input");
    return;
  }

  let cpuChoice = Math.floor(Math.random() * 3);

  hResult.textContent = humanChoice;
  pResult.textContent = cpuChoice;

  playround(humanChoice, cpuChoice);

  input.value = "";
});

function playround(human, computer) {
  if (Choices[human] === Choices[computer]) {
    console.log("Tie,Same picks,Try Again!");
    return;
  }

  if (
    (Choices[human] === "Rock" &&
      Choices[computer] === "Scissor") ||
    (Choices[human] === "Paper" &&
      Choices[computer] === "Rock") ||
    (Choices[human] === "Scissor" &&
      Choices[computer] === "Paper")
  ) {
    console.log("User Won!");
    UserScore++;
    if (UserScore === 3) {
      winner.textContent = "Human Won!"
      button.disabled = true;
    }
    hscoreresult.textContent = UserScore;
    console.log(`UserScore: ${UserScore},ComputerScore:${ComputerScore}`);
  } else {
    console.log("Computer Won!");
    ComputerScore++;
    if (ComputerScore === 3) {
      winner.textContent = "CPU Won!"
      button.disabled = true;
    }
    pscoreresult.textContent = ComputerScore;
    console.log(`UserScore: ${UserScore},ComputerScore:${ComputerScore}`);
  }
}