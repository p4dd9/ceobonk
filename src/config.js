const hammer = document.getElementById("hammer");
const starburst = document.getElementById("starburst");

const HAMMER_ANIMATION_CLASSNAME = "animate-hammer";
const STARBURST_ANIMATION_CLASSNAME = "animate-star-burst";

const RESET_HAMMER_TIMEOUT = 300; // ms
const STARBURST_X_OFFSET = 75; // px
const STARBURST_Y_OFFSET = 50; // px

const starBurstAudio = new Audio("assets/starburst.mp3");
