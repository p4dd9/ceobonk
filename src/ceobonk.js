let isBonking = false;
let bonkTimeout;

/* Hammer config */
const RESET_HAMMER_TIMEOUT = 300; // ms
const HAMMER_ANIMATION_CLASSNAME = "animate-hammer";

/* Starburst config */
const STARBURST_ANIMATION_CLASSNAME = "animate-star-burst";
const STARBURST_X_OFFSET = 75; // px
const STARBURST_Y_OFFSET = 50; // px

/* DOM elements */
const hammer = document.getElementById("hammer");
const starburst = document.getElementById("starburst");

/* DOM Media elements */
const starBurstAudio = new Audio("assets/bonk_hammer_noise.mp3");

/* DOM event linster interaction */
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("click", onMouseClick);
});

const onMouseMove = (event) => {
  hammer.style.left = `${event.clientX - hammer.width / 2}px`;
  hammer.style.top = `${event.clientY - hammer.height / 2}px`;
};

const onMouseClick = () => {
  if (isBonking) {
    return;
  }

  animateStarBurst();
  playStarBurstSound();
  animateHammer();

  bonkTimeout = setTimeout(resetHammer, RESET_HAMMER_TIMEOUT);
};

const animateStarBurst = () => {
  starburst.style.left = `calc(${hammer.style.left} - ${STARBURST_X_OFFSET}px) `;
  starburst.style.top = `calc(${hammer.style.top} + ${STARBURST_Y_OFFSET}px) `;
  starburst.classList.add(STARBURST_ANIMATION_CLASSNAME);
  starburst.addEventListener("animationend", starBurstAnimationEnd, {
    once: true,
  });
};

const starBurstAnimationEnd = () => {
  starburst.classList.remove(STARBURST_ANIMATION_CLASSNAME);
};

const animateHammer = () => {
  isBonking = true;
  hammer.classList.add(HAMMER_ANIMATION_CLASSNAME);
};

const resetHammer = () => {
  hammer.classList.remove(HAMMER_ANIMATION_CLASSNAME);
  isBonking = false;
};

const playStarBurstSound = () => {
  starBurstAudio.volume = 0.05;
  starBurstAudio.play();
};
