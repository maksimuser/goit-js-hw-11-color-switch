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

refs.btnStop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switchColors = {
  intervalId: null,

  start() {
    // console.dir('start', refs.btnStart);

    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    this.intervalId = setInterval(() => {
      const currentIndex = randomIntegerFromInterval(0, colors.length - 1);
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
    // console.dir('stop', refs.btnStop);

    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;

    clearInterval(this.intervalId);
    this.intervalId = null;
  },
};

refs.btnStart.addEventListener('click', switchColors.start.bind(switchColors));
refs.btnStop.addEventListener('click', switchColors.stop.bind(switchColors));
