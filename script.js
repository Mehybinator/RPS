let ComputerChoices = ["Rock", "Paper", "Scissor"];
let UserChoices = ["Rock", "Paper", "Scissor"];

let ComputerScore = 0;
let UserScore = 0;

const winner = document.querySelector(".winner")
winner.textContent = "";

const hscoreresult = document.querySelector(".hscoreresult")
hscoreresult.textContent = UserScore;

const pscoreresult = document.querySelector(".pscoreresult")
pscoreresult.textContent = ComputerScore;

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const input = document.querySelector("input");
  const hResult = document.querySelector(".hResult");
  const pResult = document.querySelector(".pResult");

  const myItem = input.value;
  input.value = "";
  let choice = parseInt(myItem);
  if (choice < 0 || choice > 2) {
    hResult.textContent = "Wrong input"
    console.log("wrong input");
    return;
  }
  hResult.textContent = choice;
  let cpuChoice = getComputerChoice();
  pResult.textContent = cpuChoice;

  playround(choice, cpuChoice);
});

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playround(human, computer) {
  if (UserChoices[human] === ComputerChoices[computer]) {
    console.log("Tie,Same picks,Try Again!");
  } else if (
    (UserChoices[human] === "Rock" &&
      ComputerChoices[computer] === "Scissor") ||
    (UserChoices[human] === "Paper" &&
      ComputerChoices[computer] === "Rock") ||
    (UserChoices[human] === "Scissor" &&
      ComputerChoices[computer] === "Paper")
  ) {
    console.log("User Won!");
    UserScore++;
    if (UserScore === 3) {
      winner.textContent = "Human Won!"
      button.disabled = true;
    }
    hscoreresult.textContent = UserScore;
    console.log(`UserScore: ${UserScore},ComputerScore:${ComputerScore}`);
  } else if (
    (UserChoices[human] === "Scissor" &&
      ComputerChoices[computer] === "Rock") ||
    (UserChoices[human] === "Rock" &&
      ComputerChoices[computer] === "Paper") ||
    (UserChoices[human] === "Paper" &&
      ComputerChoices[computer] === "Scissor")
  ) {
    console.log("Computer Won!");
    ComputerScore++;
    if (ComputerScore === 3) {
      winner.textContent = "CPU Won!"
      button.disabled = true;
    }
    pscoreresult.textContent = ComputerScore;
    console.log(`UserScore: ${UserScore},ComputerScore:${ComputerScore}`);
  } else {
    console.log("WTF just happend!");
  }
}
