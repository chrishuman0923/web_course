// We are given an array that holds all of the drinks available
var drinkList = [
  'Coffee: $5',
  'Espresso: $7',
  'Cappuccino: $6',
  'Latte: $4',
  'Tea: $3',
  'Ice Coffee: $6',
  'Ice Espresso: $8',
  'Ice Latte: $6',
  'Ice Tea: $4',
];

// This line of JavaScript "grabs" the main div on the page ("#drink-options");
var drinkDiv = document.getElementById('drink-options');

// We then use a for loop to iterate through all the drinks in drinkList.
// With each iteration, we perform a series of code operations each time.
for (var i = 0; i < drinkList.length; i++) {
  // For each drink in the array, we create a new paragraph to hold that text.
  // A new paragraph will be created with each iteration of the loop.
  var newDrinkP = document.createElement('p');

  // We then assign the the text of this paragraph to be the text in the array.
  newDrinkP.textContent = drinkList[i];

  // We then add the paragraph to the our main div on the page ("#drink-options")
  drinkDiv.appendChild(newDrinkP);
}

/* BONUS IMPLEMENTATION */

// var drinkListAsObjects = [
//   { name: 'Coffee', price: 5 },
//   { name: 'Espresso', price: 7 },
//   { name: 'Cappuccino', price: 6 },
//   { name: 'Latte', price: 4 },
//   { name: 'Tea', price: 3 },
//   { name: 'Ice Coffee', price: 6 },
//   { name: 'Ice Espresso', price: 8 },
//   { name: 'Ice Latte', price: 6 },
//   { name: 'Ice Tea', price: 4 },
// ];

// We then use a for loop to iterate through all the drinks in drinkListAsObjects.
// With each iteration, we perform a series of code operations each time.
// for (var i = 0; i < drinkListAsObjects.length; i++) {
//   // For each drink in the array, we create a new paragraph to hold that text.
//   // A new paragraph will be created with each iteration of the loop.
//   var newDrinkP = document.createElement('p');

//   // We then get the properties of the current object and assign them to new variables for easier use later.
//   var drinkName = drinkListAsObjects[i].name;
//   var drinkPrice = drinkListAsObjects[i].price;

//   // We then assign the the text of this paragraph to be the text in the array.
//   newDrinkP.textContent = drinkName + ': $' + drinkPrice;

//   // We then add the paragraph to the our main div on the page ("#drink-options")
//   drinkDiv.appendChild(newDrinkP);
// }
