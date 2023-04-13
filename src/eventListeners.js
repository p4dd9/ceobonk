const onMouseMove = (event) => moveHammer(event);
const onMouseClick = () => animate();
const onVolumeChange = (event) => {
  starBurstAudio.volume = event.currentTarget.value / 1000;
};
const disableDefaultBehaviour = () => false;
