// 360 preview section wrapper & img element
const preview = document.getElementById("car_preview");
const previewImg = document.getElementById("preview_img");

handleOnDown = (e) => {
	preview.dataset.mouseDownAt = e.clientX;
};

handleOnMove = (e) => {
	if (preview.dataset.mouseDownAt === "0") return;

	// Calculate movement percentage
	const mouseDelta = parseFloat(preview.dataset.mouseDownAt) - e.clientX;
	const maxDelta = window.innerWidth / 2;
	const percentage = (mouseDelta / maxDelta) * -100;
	const nextPercentage =
		parseFloat(preview.dataset.prevPercentage) + percentage;

	// Simplify movement percentage
	const imageNumberUnconstrained = Math.floor(
		(360 * (nextPercentage / 100)) / 10
	);

	// Clamp image number between 1 and 36 (a number for each 10 degree image)
	const imageNumber = (((imageNumberUnconstrained % 36) + 36) % 36) + 1;

    // Update image source
	previewImg.src = `/images/360_assets/white${imageNumber}.webp`;

	preview.dataset.percentage = nextPercentage;
};

handleOnUp = () => {
	preview.dataset.mouseDownAt = "0";
	preview.dataset.prevPercentage = preview.dataset.percentage;
};

// Listen for events on desktop and touch screen devices
preview.onmousedown = (e) => handleOnDown(e);
preview.ontouchstart = (e) => handleOnDown(e.touches[0]);

preview.onmousemove = (e) => handleOnMove(e);
preview.ontouchmove = (e) => handleOnMove(e.touches[0]);

preview.onmouseup = (e) => handleOnUp(e);
preview.ontouchend = (e) => handleOnUp(e.touches[0]);
