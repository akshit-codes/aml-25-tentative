const RANDOM_TEXT_LENGTH = 20;
const RANDOM_TEXT_FLICKER_COUNT = 3;
const RANDOM_TEXT_FLICKER_INTERVAL_MS = 50;

function startRandomTextAnimation() {
	const textElement = document.getElementById('random-text');
	if (!textElement) return;

	const chars =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
	let textArray = [];
	for (let i = 0; i < RANDOM_TEXT_LENGTH; i++) {
		textArray.push(chars.charAt(Math.floor(Math.random() * chars.length)));
	}
	textElement.textContent = textArray.join('');

	setInterval(() => {
		for (let i = 0; i < RANDOM_TEXT_FLICKER_COUNT; i++) {
			const randomIndex = Math.floor(Math.random() * RANDOM_TEXT_LENGTH);
			const randomChar = chars.charAt(
				Math.floor(Math.random() * chars.length)
			);
			textArray[randomIndex] = randomChar;
		}
		textElement.textContent = textArray.join('');
	}, RANDOM_TEXT_FLICKER_INTERVAL_MS);
}
