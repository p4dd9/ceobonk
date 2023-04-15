const maxVolume = Number(volumeSlider.getAttribute("max"));
const minVolume = Number(volumeSlider.getAttribute("min"));
const volumeStep = Number(volumeSlider.getAttribute("step"));

const setVolume = (value) => {
  volumeSlider.value = value;
};

const volumUp = () => {
  volumeSlider.value = clampVolume(volumeSlider.valueAsNumber + volumeStep);
};

const volumDown = () => {
  volumeSlider.value = clampVolume(volumeSlider.valueAsNumber - volumeStep);
};

const onVolumeInputRangeChange = (event) => {
  volumeSlider.value = event.target.valueAsNumber;
};

const clampVolume = (num, min = minVolume, max = maxVolume) => {
  return Math.min(Math.max(num, min), max);
};
