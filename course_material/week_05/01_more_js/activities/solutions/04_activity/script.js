var randomButton = document.getElementById('random-button');
var randomDiv = document.getElementById('random-number');

randomButton.addEventListener('click', function () {
  // Math.random() returns a random number between 0 and 1
  // Math.floor() rounds a number down to the nearest integer
  // Math.random() * 1000 returns a random number between 0 and 1000
  // Math.floor(Math.random() * 1000) returns a random number between 0 and 999
  // Math.floor(Math.random() * 1000) + 1 returns a random number between 1 and 1000
  var randomNumber = Math.floor(Math.random() * 1000) + 1;

  // Set the text content of the randomDiv to the random number
  randomDiv.textContent = randomNumber;
});
