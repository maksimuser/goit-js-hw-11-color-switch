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

let defaultBodyColor = (document.body.style.backgroundColor = '#858585');
console.dir(document.body);

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let currentColor = '';

const switchColors = {
  isActive: false,
  intervalId: null,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      let currentIndex = randomIntegerFromInterval(0, colors.length - 1);

      colors.map((el, ind) => {
        if (currentIndex === ind) {
          document.body.style.backgroundColor = el;
          currentColor = el;
        }
      });
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    if (!this.isActive) {
      return;
    }
    this.intervalId = null;
    this.isActive = false;

    defaultBodyColor = currentColor;
  },
};

refs.btnStart.addEventListener('click', switchColors.start.bind(switchColors));
refs.btnStop.addEventListener('click', switchColors.stop.bind(switchColors));
