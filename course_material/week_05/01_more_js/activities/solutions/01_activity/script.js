// cSpell:disable

var userChoiceText = document.getElementById('userchoice-text');
var computerChoiceText = document.getElementById('computerchoice-text');
var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById('losses-text');
var tiesText = document.getElementById('ties-text');

var computerChoices = ['r', 'p', 's'];

var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function (event) {
  var userGuess = event.key;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  if (userGuess === 'r' || userGuess === 'p' || userGuess === 's') {
    if (userGuess === 'r' && computerGuess === 's') {
      wins++;
    } else if (userGuess === 'r' && computerGuess === 'p') {
      losses++;
    } else if (userGuess === 's' && computerGuess === 'r') {
      losses++;
    } else if (userGuess === 's' && computerGuess === 'p') {
      wins++;
    } else if (userGuess === 'p' && computerGuess === 'r') {
      wins++;
    } else if (userGuess === 'p' && computerGuess === 's') {
      losses++;
    } else {
      ties++;
    }

    userChoiceText.textContent = 'You chose: ' + userGuess;
    computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
    winsText.textContent = wins;
    lossesText.textContent = losses;
    tiesText.textContent = ties;
  }
};
