document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('hamburger-menu');
	const navLinks = document.getElementById('navLinks');

	if (hamburger && navLinks) {
		hamburger.addEventListener('click', function () {
			navLinks.classList.toggle('open');
		});
	}
});
