const maxVolume = Number(volumeSlider.getAttribute("max"));
const minVolume = Number(volumeSlider.getAttribute("min"));
const volumeStep = Number(volumeSlider.getAttribute("step"));
const storageAvailable = typeof Storage !== "undefined" ? true : false;

const volumeKey = "ceobonk_volume";

const saveVolumeToLocalStorageIfAvailable = (value) => {
  if (storageAvailable) {
    localStorage.setItem(volumeKey, value);
  }
};

const getVolumeFromLocalStorageIfAvailable = () => {
  if (storageAvailable) {
    return localStorage.getItem(volumeKey) ?? VOLUME_INITIAL;
  }
};

/** initialize volume from localstorage is available */
volumeSlider.value = getVolumeFromLocalStorageIfAvailable();

const setVolume = (value) => {
  volumeSlider.value = value;
  saveVolumeToLocalStorageIfAvailable(value);
};

const volumUp = () => {
  setVolume(clampVolume(volumeSlider.valueAsNumber + volumeStep));
};

const volumDown = () => {
  setVolume(clampVolume(volumeSlider.valueAsNumber - volumeStep));
};

const onVolumeInputRangeChange = (event) => {
  setVolume(event.target.valueAsNumber);
};

const clampVolume = (num, min = minVolume, max = maxVolume) => {
  return Math.min(Math.max(num, min), max);
};

const playBonkSound = () => {
  starBurstAudio.volume = volumeSlider.value / 1000;
  starBurstAudio.play();
};
