
var counter = 60;
var interval;
var minElement = document.getElementById('min');
var secElement = document.getElementById('sec');

function startCount() {
  let minutes = parseInt(minElement.value) || 0;
  let seconds = parseInt(secElement.value) || 0;
  document.getElementById('startBtn').style.display = 'none';
  counter = minutes * 60 + seconds;
  renderElement(counter);
  interval = setInterval(Decrement, 1000);
}

function Decrement() {
  document.getElementById('stopBtn').style.display = 'initial';
  if (counter <= 0) {
    clearInterval(interval);
    counter = 0;
  } else {
    counter--;
  }
  renderElement(counter);
}

function renderElement(value) {
  if (value <= 0) {
    document.getElementById('msg').innerHTML = "Sorry your Time's up!";
    document.getElementById('stopBtn').style.display = 'initial';
  } else if (value < 10) {
    minElement.style.color = 'red';
    secElement.style.color = 'red';
    document.getElementById('msg').innerHTML = 'HURRY UP!!';
  }
  let min = Math.floor(value / 60);
  let sec = value - min * 60;
  minElement.value = min;
  secElement.value = sec;
}

function stop() {
  document.getElementById('startBtn').style.display = 'initial';
  clearInterval(interval);
}

function reset() {
  minElement.value = '';
  secElement.value = '';
}
