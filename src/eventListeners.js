const onMouseMove = (event) => moveHammer(event);
const onMouseClick = () => animate();
const onVolumeChange = (event) => onVolumeInputRangeChange(event);
const disableDefaultBehaviour = () => false;
const onVolumeUpClick = volumUp;
const onVolumeDownClick = volumDown;
