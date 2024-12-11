// Rock-Paper-Scissors Game

const choices = ["Rock", "Paper", "Scissors"];

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(`You: ${userChoice}, Computer: ${computerChoice}`);

  if (userChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

playGame("Rock"); // Change the input to "Paper" or "Scissors" to test
