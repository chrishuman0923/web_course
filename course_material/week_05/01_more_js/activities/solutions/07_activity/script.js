var letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '_',
];

var displayElem = document.getElementById('display');
var buttonsElem = document.getElementById('buttons');
var clearButtonElem = document.getElementById('clear');

// 1. Create a for-loop to iterate through the letters array.
for (var i = 0; i < letters.length; i++) {
  // Inside the loop...

  // 2. Create a variable named "letterBtn" equal to $("<button>");
  var letterBtn = document.createElement('button');

  // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
  letterBtn.setAttribute('class', 'letter-button letter letter-button-color');

  // 4. Then give each "letterBtn" a data-attribute called "data-letter".
  letterBtn.setAttribute('data-letter', letters[i]);

  // 5. Then give each "letterBtns" a text equal to "letters[i]".
  letterBtn.textContent = letters[i];

  // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
  buttonsElem.appendChild(letterBtn);
}

// Be sure to test that your code works for this major task, before proceeding to the next one!

// MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
// =================================================================================

var buttons = document.getElementsByClassName('letter-button');

// 7. Create an "on-click" event attached to the ".letter-button" class.
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    // Inside the on-click event...

    // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
    var fridgeMagnet = document.createElement('div');

    // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
    fridgeMagnet.setAttribute('class', 'letter magnet-color');

    // 10. Then give each "fridgeMagnet" a text equal to "this" attribute's "data-letter".
    fridgeMagnet.textContent = this.getAttribute('data-letter');

    // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
    displayElem.appendChild(fridgeMagnet);
  });
}

// Be sure to test that your code works for this major task, before proceeding to the next one!

// MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
// =================================================================================

// 12. Create an "on-click" event attached to the "#clear" button id.
clearButtonElem.addEventListener('click', function () {
  // Inside the on-click event...

  // 13. Empty the "#display" div.
  displayElem.innerHTML = '';
});
