const extensionLayer = document.getElementById("extension-layer");

const hammerWrapper = document.getElementById("hammer-wrapper");
const hammer = document.getElementById("hammer");
const starburst = document.getElementById("starburst");
const volumeSlider = document.getElementById("volume-slider");
const volumeUpIcon = document.getElementById("volumeup");
const volumeDownIcon = document.getElementById("volumedown");

const HAMMER_ANIMATION_CLASSNAME = "animate-hammer";
const HAMMER_CHARGE_ANIMATION_CLASSNAME = "rotate";
const HAMMER_CHARGED_ANIMATION_CLASSNAME = "hammer-charged";
const SHAKE_ANIMATION_CLASSNAME = "shake";

const STARBURST_ANIMATION_CLASSNAME = "animate-star-burst";
const STARBURST_ANIMATION_CHARGED_CLASSNAME = "animate-star-burst-charged";

const RESET_HAMMER_TIMEOUT = 100; // ms
const CHARGE_HAMMER_TIMEOUT = 1250; // ms
const STARBURST_X_OFFSET = 95; // px
const STARBURST_Y_OFFSET = 40; // px

/**
 * https://dev.twitch.tv/docs/extensions/guidelines-and-policies/#2-technical
 * 2.4  Extensions can include audio only if they include controls which allow viewers to adjust the volume, and by default, these controls are set to off/muted.
 */
const VOLUME_INITIAL = 0;

const starBurstAudio = new Audio("assets/bonk.wav");
starBurstAudio.volume = VOLUME_INITIAL;
