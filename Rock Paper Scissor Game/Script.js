let userScore = 0;
let computerScore = 0;
const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randInd = Math.floor(Math.random() * options.length);
  return options[randInd];
};
//caution! game draw logic
const msg = document.querySelector("#msg");
function gameDraw() {
  msg.innerText = `Game was a Draw. Play again!`;
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
  userScorepara.innerText = userScore;
  computerScorepara.innerText = computerScore;
}
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;

    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

    // Update user score in the UI
  } else {
    computerScore++;
    computerScorepara.innerText = computerScore;

    msg.innerText = `You Lose! Your ${userChoice} was beaten by ${compChoice}`;
    msg.style.backgroundColor = "red";
    // Update computer score in the UI
  }
};

//caution game main logic

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // scissors
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

//optimize Use this for main kam

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  const userChoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playGame(userChoice);
  });
});
//caution results
