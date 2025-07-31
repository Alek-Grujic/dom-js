// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let startingNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const input = document.querySelector('.guess').value;
  // no number
  if (input === '') {
    document.querySelector('.message').textContent = 'No number!';
  } else {
    const guess = Number(input);
    // wrong number
    if (guess <= 0 || guess > 20) {
      document.querySelector('.message').textContent =
        'Number must be between 1 and 20!';
    } else {
      // correct number
      if (guess === startingNumber) {
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').textContent = guess;
        document.body.style.background = '#60b347';
        document.querySelector('.check').disabled = true;
      }
      // too high
      else if (guess > startingNumber) {
        document.querySelector('.message').textContent = 'Too high!';
        document.querySelector('.score').textContent = --score;
      }
      // too low
      else if (guess < startingNumber) {
        document.querySelector('.message').textContent = 'Too low!';
        document.querySelector('.score').textContent = --score;
      }
    }
  }
});
// reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  startingNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.body.style.background = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = false;
});
