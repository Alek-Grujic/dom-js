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
  const guess = Number(document.querySelector('.guess').value);
  // wrong number
  if (!(guess > 0) || !(guess < 21)) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
  }
  // no number
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  // correct number
  if (guess > 0 && guess < 21) {
    if (guess === startingNumber) {
      document.querySelector('.message').textContent = 'Correct number!';
      document.querySelector('.highscore').textContent = score;
      document.querySelector('.number').textContent = guess;
      document.body.style.background = '#60b347';
      document.querySelector('.check').disabled = true;
    }
    // too high
    if (guess > startingNumber) {
      document.querySelector('.message').textContent = 'Too high!';
      document.querySelector('.score').textContent = --score;
    }
    // too low
    if (guess < startingNumber) {
      document.querySelector('.message').textContent = 'Too low!';
      document.querySelector('.score').textContent = --score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  startingNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.body.style.background = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = false;
});
