let isBonking = false;
let bonkTimeout;
let hammer = document.getElementById("hammer");
let starburst = document.getElementById("starburst");

document.addEventListener("DOMContentLoaded", () => {
  hammer.style.transition = "transform 0.1s";

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX - hammer.width / 2;
    const y = event.clientY - hammer.height / 2;

    hammer.style.left = x + "px";
    hammer.style.top = y + "px";
  });

  hammer.addEventListener("click", bonkHammer);
});

function bonkHammer() {
  if (isBonking) {
    clearTimeout(bonkTimeout); // clear the previous timeout
    isBonking = false; // allow the user to bonk again
    return; // hammer is already being bonked, ignore click
  }

  starburst.style.left = `calc(${hammer.style.left} - 75px) `;
  starburst.style.top = `calc(${hammer.style.top} + 5px) `;

  starburst.classList.add("animate-star-burst");
  starburst.addEventListener(
    "animationend",
    () => {
      starburst.classList.remove("animate-star-burst");
    },
    { once: true }
  );

  // play bonk sound
  let audio = new Audio("assets/bonk_hammer_noise.mp3");
  audio.volume = 0.05;
  audio.play();

  // animate hammer
  hammer.style.transform = "rotate(-55deg)";

  // reset hammer after 500 ms
  bonkTimeout = setTimeout(() => {
    hammer.style.transform = "";
    isBonking = false;
  }, 50);

  isBonking = true;
}
