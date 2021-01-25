const colors = [
  '#FFFFFF',
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

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switchColors = {
  isActive: false,
  intervalId: null,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    // console.log(refs.btnStart);

    this.intervalId = setInterval(() => {
      let currentIndex = randomIntegerFromInterval(0, colors.length - 1);
      // console.log(currentIndex);

      colors.map((el, ind) => {
        if (currentIndex === ind) {
          document.body.style.backgroundColor = el;
          // console.log(el);
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

    // console.log(refs.btnStop);
  },
};

refs.btnStart.addEventListener('click', switchColors.start.bind(switchColors));
refs.btnStop.addEventListener('click', switchColors.stop.bind(switchColors));
