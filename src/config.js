const extensionLayer = document.getElementById("extension-layer");

const hammerWrapper = document.getElementById("hammer-wrapper");
const hammer = document.getElementById("hammer");
const starburst = document.getElementById("starburst");
const volumeSlider = document.getElementById("volume-slider");
const volumeUpIcon = document.getElementById("volumeup");
const volumeDownIcon = document.getElementById("volumedown");

const HAMMER_ANIMATION_CLASSNAME = "animate-hammer";
const HAMMER_CHARGE_ANIMATION_CLASSNAME = "rotate";
const STARBURST_ANIMATION_CLASSNAME = "animate-star-burst";
const STARBURST_ANIMATION_CHARGED_CLASSNAME = "animate-star-burst-charged";

const RESET_HAMMER_TIMEOUT = 100; // ms
const STARBURST_X_OFFSET = 75; // px
const STARBURST_Y_OFFSET = 50; // px

/**
 * https://dev.twitch.tv/docs/extensions/guidelines-and-policies/#2-technical
 * 2.4  Extensions can include audio only if they include controls which allow viewers to adjust the volume, and by default, these controls are set to off/muted.
 */
const VOLUME_INITIAL = 0;

const starBurstAudio = new Audio("assets/starburst.mp3");
starBurstAudio.volume = VOLUME_INITIAL;
