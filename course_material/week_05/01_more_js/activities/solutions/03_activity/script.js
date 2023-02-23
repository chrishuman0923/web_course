// VARIABLES
// ====================================================================

// Here we create variables for the HTML elements we want to interact with
var pbjElem = document.getElementById('pbj');
var grilledCheeseElem = document.getElementById('grilledcheese');
var roastBeefElem = document.getElementById('roastbeef');
var imageDivElem = document.getElementById('image-div');

// Here we create variables for tracking the number of sandwiches eaten
var pbjCounter = 0;
var grilledCheeseCounter = 0;
var roastBeefCounter = 0;

// Here we create variables for the image URLs
var pbjImageUrl = 'https://i1.wp.com/snotapwi.com/wp-content/uploads/2017/03/PBJ-Sandwiches.jpg?resize=590%2C368&ssl=1';
var grilledCheeseImageUrl =
  'http://cdn.funcheap.com/wp-content/uploads/2014/04/The-Perfect-Grilled-Cheese-Sandwich-800-158111.jpg';
var roastBeefImageUrl = 'https://www.cscassets.com/recipes/wide_cknew/wide_25336.jpg';

// FUNCTIONS
// ====================================================================
// Here we create various "on click" events which capture clicks
// Inside each click event is the code to create an alert, update the counter, and show the updated count.
pbjElem.addEventListener('click', function () {
  alert('Mmm... Peanut Butter Jelly Time.');
  pbjCounter++;
  alert("You've eaten " + pbjCounter + ' PB&J sandwiches');

  imageDivElem.innerHTML = "<img src='" + pbjImageUrl + "' />";
});

grilledCheeseElem.addEventListener('click', function () {
  alert('Nom nom nom. Gooey Gooey Grilled Cheese!');
  grilledCheeseCounter++;
  alert("You've eaten " + grilledCheeseCounter + ' grilled cheese sandwiches');

  imageDivElem.innerHTML = "<img src='" + grilledCheeseImageUrl + "' />";
});

roastBeefElem.addEventListener('click', function () {
  alert("No qualms about animal rights here. I'm all about that roast beef.");
  roastBeefCounter++;
  alert("You've eaten " + roastBeefCounter + ' roast beef sandwiches');

  imageDivElem.innerHTML = "<img src='" + roastBeefImageUrl + "' />";
});
