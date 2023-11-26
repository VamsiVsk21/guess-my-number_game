'use strict';
/*
//document.querySelector('.message');
//console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "correct number";
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 21;
console.log(document.querySelector('.guess').value);
*/

// let inputValue = document.querySelector('.guess').value;
// console.log(inputValue);




let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}






// document.querySelector('.number').textContent = secretNumber;
// console.log(secretNumber);



document.querySelector('.check').addEventListener
  ('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
      displayMessage('No number!');
    }

    else if (guess === secretNumber) {
      displayMessage("correct number !");
      document.querySelector('body').style.backgroundColor = "#60b347";
      document.querySelector('.number').style.width = "30rem";
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.highscore').textContent = score;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

    }

    else if (guess > secretNumber) {
      if (score > 1) {
        displayMessage("Too high!");
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage("You lost the game");
        document.querySelector('.score').textContent = 0;
      }
    }

    else if (guess < secretNumber) {
      if (score > 1) {
        displayMessage("Too low!");
        score--;
        document.querySelector('.score').textContent = score;
      }
      else {
        displayMessage("You lost the game");
        document.querySelector('.score').textContent = 0;

      }

    }
  });

document.querySelector('.again').addEventListener
  ('click', function () {

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').value = secretNumber;



  });








