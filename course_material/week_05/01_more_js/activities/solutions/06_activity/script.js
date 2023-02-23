var computerPickElem = document.getElementById('computer-pick');
var resultElem = document.getElementById('result');
var buttons = document.querySelectorAll('button');

function handleClick(event) {
  var computerGuess = Math.floor(Math.random() * 3) + 1;
  var buttonClicked = event.target.textContent;

  computerPickElem.textContent = computerGuess;

  if (Number(buttonClicked) === computerGuess) {
    resultElem.textContent = 'You win!';
  } else {
    resultElem.textContent = 'You lose!';
  }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleClick);
}
