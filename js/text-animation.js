const TARGET_TEXT = 'ORCHESTRATING ORIGINS';
const RANDOM_TEXT_FLICKER_INTERVAL_MS = 50;
const HOLD_TIME_MS = 1500;

function startRandomTextAnimation() {
	const textElement = document.getElementById('random-text');
	if (!textElement) return;

	const chars =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
	const textLength = TARGET_TEXT.length;

	function animateText() {
		let textArray = [];
		for (let i = 0; i < textLength; i++) {
			textArray.push(
				chars.charAt(Math.floor(Math.random() * chars.length))
			);
		}

		let step = 0;
		const maxSteps = textLength * 2;
		let settling = true;
		let paused = false;

		const interval = setInterval(() => {
			if (paused) return;

			let progress = Math.floor((step / maxSteps) * textLength);

			for (let i = 0; i < textLength; i++) {
				if (settling) {
					if (i < progress) {
						textArray[i] = TARGET_TEXT.charAt(i);
					} else {
						textArray[i] = chars.charAt(
							Math.floor(Math.random() * chars.length)
						);
					}
				} else {
					if (i < progress) {
						textArray[i] = chars.charAt(
							Math.floor(Math.random() * chars.length)
						);
					} else {
						textArray[i] = TARGET_TEXT.charAt(i);
					}
				}
			}

			textElement.textContent = textArray.join('');
			step++;

			if (step > maxSteps) {
				step = 0;
				if (settling) {
					paused = true;
					setTimeout(() => {
						paused = false;
						settling = false;
					}, HOLD_TIME_MS);
				} else {
					settling = true;
				}
			}
		}, RANDOM_TEXT_FLICKER_INTERVAL_MS);
	}

	animateText();
}

startRandomTextAnimation();
