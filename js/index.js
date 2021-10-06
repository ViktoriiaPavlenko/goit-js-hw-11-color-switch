const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  bodyRef: document.querySelector('body'),
  startButton: document.querySelector('[data-action="start"]'),
  stopButton: document.querySelector('[data-action="stop"]')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startButton.addEventListener('click', onStartButtonClick)
refs.stopButton.addEventListener('click', onStopButtonClick)

let intervalId = null;
let isActive = false;

function onStartButtonClick() {
  if (isActive) {
    return
  }
  isActive = true
  intervalId = setInterval(changeBodyBgc, 1000)
}

function onStopButtonClick() {
  clearInterval(intervalId);
  isActive = false;
}

function changeBodyBgc() {
  refs.bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
}