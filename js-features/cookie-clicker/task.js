let cookie = document.getElementById('cookie');
let clickCounter;
let lastClickTime;
let interval;
let clickSpeed;
let flag = true;

cookie.onclick = function() {
  lastClickTime = Date.now();
  clickCounter = document.getElementById('clicker__counter').innerText;
  clickCounter++;
  if(flag === true) {
    cookie.width = 150;
    flag = false;
  }
  else if(flag === false) {
    cookie.width = 200;
    flag = true;
  }
  interval = setInterval(getClickSpeed, 1000);
  updateClickerDisplay();
}

function getClickSpeed() {
    let elapsedTime = (Date.now() - lastClickTime) / 1000;
    if(elapsedTime > 1) {
      clearInterval(interval);
      clickSpeed = 0;
  }
  else {
    clickSpeed = (clickCounter / elapsedTime).toFixed(2);
  }
}

let speedDisplay = document.createElement('div');
cookie.insertAdjacentElement('beforebegin', speedDisplay);

function updateClickerDisplay() {
  document.getElementById('clicker__counter').innerText = clickCounter;
  speedDisplay.textContent = `Скорость клика: ${+clickSpeed}`;
}