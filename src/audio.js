const volumUp = () => {
  volumeSlider.setAttribute(
    "value",
    clampVolume(
      Number(volumeSlider.value) + Number(volumeSlider.getAttribute("step"))
    )
  );
};

const volumDown = () => {
  volumeSlider.setAttribute(
    "value",
    clampVolume(
      Number(volumeSlider.value) - Number(volumeSlider.getAttribute("step"))
    )
  );
};

const onVolumeInputRangeChange = (event) => {
  volumeSlider.setAttribute(
    "value",
    clampVolume((volumeSlider.volume = event.currentTarget.value))
  );
};

const clampVolume = (num) =>
  Math.min(
    Math.max(num, Number(volumeSlider.getAttribute("min"))),
    volumeSlider.getAttribute("max")
  );
