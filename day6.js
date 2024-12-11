// Number Guessing Game

const target = Math.floor(Math.random() * 100) + 1;

function guessNumber(guess) {
  if (guess === target) {
    console.log("Correct! You guessed the number.");
  } else if (guess < target) {
    console.log("Too low. Try again.");
  } else {
    console.log("Too high. Try again.");
  }
}

guessNumber(50); // Change the number to test
