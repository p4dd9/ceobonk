const onMouseMove = (event) => moveHammer(event);
const onMouseDown = () => onHammerBonkStart();
const onMouseUp = () => onBonkRelease();
const onVolumeChange = (event) => onVolumeInputRangeChange(event);
const disableDefaultBehaviour = () => false;
const onVolumeUpClick = volumUp;
const onVolumeDownClick = volumDown;
