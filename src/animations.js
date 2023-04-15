let isBonking = false;
let bonkTimeout;
let chargeTimeout;
let isChargedBonk = false;

const onBonkRelease = () => {
  clearTimeout(chargeTimeout);
  animate(isChargedBonk);
  hammer.classList.remove(HAMMER_CHARGE_ANIMATION_CLASSNAME);
  isChargedBonk = false;
  chargeTimeout = null;
  document.getElementById("hammer-wrapper").classList.remove("hammer-charged");
  document.addEventListener("mouseup", onMouseUp, {
    once: true,
  });
};

const onHammerBonkStart = () => {
  addOrReplaceClassName(hammer, HAMMER_CHARGE_ANIMATION_CLASSNAME);
  chargeTimeout = setTimeout(() => {
    addOrReplaceClassName(
      document.getElementById("hammer-wrapper"),
      "hammer-charged"
    );
    isChargedBonk = true;
  }, 1250);
};

const animate = (charged) => {
  if (isBonking) {
    return;
  }
  playStarBurstSound();
  spawnStarBurst(charged);
  animateHammer();

  if (charged) {
    addOrReplaceClassName(extensionLayer, "shake");
  }
};

const addOrReplaceClassName = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
    element.offsetWidth = element.offsetWidth; // force reflow
    element.classList.add(className);
  } else {
    element.classList.add(className);
  }
};

const spawnStarBurst = (charged) => {
  const animationClassName = charged
    ? STARBURST_ANIMATION_CHARGED_CLASSNAME
    : STARBURST_ANIMATION_CLASSNAME;
  starburst.style.left = `calc(${hammer.style.left} - ${STARBURST_X_OFFSET}px) `;
  starburst.style.top = `calc(${hammer.style.top} + ${STARBURST_Y_OFFSET}px) `;
  starburst.classList.add(animationClassName);
  starburst.addEventListener(
    "animationend",
    () => {
      starburst.classList.remove(animationClassName);
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

const moveHammer = (event) => {
  hammer.style.left = `${event.clientX - hammer.width / 2}px`;
  hammer.style.top = `${event.clientY - hammer.height / 2}px`;
};
