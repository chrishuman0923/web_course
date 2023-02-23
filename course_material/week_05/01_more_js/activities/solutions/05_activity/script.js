var randomButton = document.getElementById('random-button');
var randomDiv = document.getElementById('random-number');

randomButton.addEventListener('click', function () {
  // Create an empty string to hold the lotto number
  var lottoNumber = '';

  // Loop 9 times
  for (var i = 0; i < 9; i++) {
    // Generate a random number between 1 and 9
    var random = Math.floor(Math.random() * 9) + 1;

    // Add the random number to the lottoNumber
    lottoNumber = random + lottoNumber;
  }

  // Create a line break element
  var lineBreak = document.createElement('br');

  // Prepend the line break and lotto number to the randomDiv
  randomDiv.prepend(lineBreak, lottoNumber);
});
