// "use strict";

//let's build game logic .....

// 1) step to generate a random number between 1 to 20
let number = Math.trunc(Math.random() * 20 + 1);

let scoreValue = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no number
  if (!guess) {
    displayMessage("😕No Number Entered!❎");
  }
  // when your choose correct number
  else if (guess === number) {
    displayMessage("😀Correct Number!✅");

    document.querySelector(".number").textContent = number;
    document.body.style.backgroundColor = "#60b347";

    // settining high score
    if (scoreValue > highScore) {
      highScore = scoreValue;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // when guess is greater
  else if (guess !== number) {
    if (scoreValue > 1) {
      displayMessage(
        guess > number ? "Number is high 📈!" : "Number is low📈!"
      );
      scoreValue--;
      document.querySelector(".score").textContent = scoreValue;
    } else {
      displayMessage("You lost the game😭!");
    }
  }
});

// Implementing Again button logic....

document.querySelector(".again").addEventListener("click", () => {
  scoreValue = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = scoreValue;
  displayMessage("Starting guessing....");
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
