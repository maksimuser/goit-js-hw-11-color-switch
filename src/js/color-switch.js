const colors = [
  // '#FFFFFF',
  '#FFFF00',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

let isActive = null;

refs.btnStart.addEventListener('click', () => {
  console.log('Start');

  if (isActive) {
    return;
  }
  isActive = true;

  let currentColor = '';

  let intId = setInterval(() => {
    console.log('change bgc body');

    let currentInd = randomIntegerFromInterval(0, colors.length - 1);
    console.log(currentInd);

    colors.map((el, ind) => {
      if (currentInd === ind) {
        currentColor = el;
        console.log(currentColor);
        return currentColor;
      }
    });

    refs.btnStop.addEventListener('click', () => {
      isActive = false;

      clearInterval(intId);
      document.body.style.background = currentColor;

      console.log('stop');
    });
  }, 1000);
});

function handleBtnStop() {}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
