document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("click", onMouseClick);
  volumeSlider.addEventListener("input", onVolumeChange);
  hammer.ondragstart = disableDefaultBehaviour;
  volumeUpIcon.ondragstart = disableDefaultBehaviour;
  volumeDownIcon.ondragstart = disableDefaultBehaviour;
  volumeUpIcon.addEventListener("click", onVolumeUpClick);
  volumeDownIcon.addEventListener("click", onVolumeDownClick);
});
