const colors = [
  '#FFFFFF',
  '#FFFF00',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#004DFF',
  '#00FF00',
  '#000000',
  '#FF00FF',
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isActive = null;
let currentColor = '';
refs.btnStart.addEventListener('click', () => {
  console.log('Start');

  if (isActive) {
    return;
  }
  isActive = true;

  let intId = setInterval(() => changeColorBody(), 1000);

  function changeColorBody() {
    let currentInd = randomIntegerFromInterval(0, colors.length - 1);
    console.log(currentInd);

    colors.map((el, ind) => {
      if (currentInd === ind) {
        document.body.style.background = el;

        currentColor = el;
        console.log(currentColor);
        // return currentColor;
      }
    });

    refs.btnStop.addEventListener('click', handleBtnStop);
  }

  function handleBtnStop() {
    clearInterval(intId);
    intId = null;
    if (!isActive) {
      return;
    }
    isActive = false;

    document.body.style.background = currentColor;

    console.log('stop');
  }
});
