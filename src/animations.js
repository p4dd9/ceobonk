let isBonking = false;
let bonkTimeout;

const animate = () => {
  if (isBonking) {
    return;
  }

  animateStarBurstWithSound();
  animateHammer();
};

const animateStarBurstWithSound = () => {
  starburst.style.left = `calc(${hammer.style.left} - ${STARBURST_X_OFFSET}px) `;
  starburst.style.top = `calc(${hammer.style.top} + ${STARBURST_Y_OFFSET}px) `;
  starburst.classList.add(STARBURST_ANIMATION_CLASSNAME);
  playStarBurstSound();
  starburst.addEventListener(
    "animationend",
    () => {
      starburst.classList.remove(STARBURST_ANIMATION_CLASSNAME);
    },
    {
      once: true,
    }
  );
};

const animateHammer = () => {
  isBonking = true;
  hammer.classList.add(HAMMER_ANIMATION_CLASSNAME);
  bonkTimeout = setTimeout(() => {
    hammer.classList.remove(HAMMER_ANIMATION_CLASSNAME);
    isBonking = false;
  }, RESET_HAMMER_TIMEOUT);
};

const playStarBurstSound = () => {
  starBurstAudio.volume = 0.05;
  starBurstAudio.play();
};

const moveHammer = (event) => {
  hammer.style.left = `${event.clientX - hammer.width / 2}px`;
  hammer.style.top = `${event.clientY - hammer.height / 2}px`;
};
