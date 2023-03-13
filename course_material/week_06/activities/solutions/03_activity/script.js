var lapElem = document.getElementById('lap');
var lapsElem = document.getElementById('laps');
var stopElem = document.getElementById('stop');
var resetElem = document.getElementById('reset');
var startElem = document.getElementById('start');
var displayElem = document.getElementById('display');

var intervalId;
var clockRunning = false;
var time = 0;
var lap = 1;

function reset() {
  time = 0;
  lap = 1;

  displayElem.textContent = '00:00';
  lapsElem.textContent = '';
}

function start() {
  console.log('starting');

  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}

function stop() {
  console.log('stopping');
  clearInterval(intervalId);
  clockRunning = false;
}

function recordLap() {
  var converted = timeConverter(time);

  var newLap = document.createElement('p');
  newLap.textContent = 'Lap ' + lap + ' : ' + converted;
  lapsElem.appendChild(newLap);

  lap++;
}

function count() {
  time++;

  var converted = timeConverter(time);
  console.log(converted);

  displayElem.textContent = converted;
}

function timeConverter(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (minutes === 0) {
    minutes = '00';
  } else if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return minutes + ':' + seconds;
}

startElem.addEventListener('click', start);
stopElem.addEventListener('click', stop);
resetElem.addEventListener('click', reset);
lapElem.addEventListener('click', recordLap);
