const navPlaceholder = document.getElementById('nav-placeholder');
if (!navPlaceholder) {
	console.error('Could not find element with id "nav-placeholder"');
} else {
	const path = window.location.pathname;
	const pageName = path.split('/').pop();
	const isIndex = pageName === 'index.html' || pageName === '';
	const basePath = isIndex ? '.' : '..';

	const navLinksArray = [
		{ href: `${basePath}/index.html`, text: 'Home' },
		{ href: `${basePath}/pages/merch.html`, text: 'Merch' },
		{ href: `${basePath}/pages/team.html`, text: 'Team' },
		{ href: `${basePath}/pages/events.html`, text: 'Events' },
		// {
		// 	href: `${basePath}/pages/boeing-event.html`,
		// 	text: 'Boeing Aeromodelling',
		// },
		{ href: 'https://amalthea-2025.vercel.app/', text: 'Tech Expo' },
		{ href: `${basePath}/pages/auto-expo.html`, text: 'Auto Expo' },
	];

	const navLinksHTML = navLinksArray
		.map(
			(link) => `<a href="${link.href}" class="nav-link">${link.text}</a>`
		)
		.join('');

	const navHTML = `
    <header class="fixed-nav">
		<a href="${basePath}/index.html" class="nav-logo"><img src="${basePath}/images/aml_logo.png" alt="Amalthea Logo"
				class="aml-logo-img" /></a>
        <a href="https://iitgn.ac.in" class="iitgn-logo">
            <img src="${basePath}/images/iitgn_logo.png" alt="IITGN Logo" class="iitgn-logo-img" />
        </a>
		<div class="hamburger" id="hamburger-menu">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<nav class="nav-links" id="navLinks">
			${navLinksHTML}
		</nav>
	</header>
    `;

	navPlaceholder.innerHTML = navHTML;

	const hamburger = document.getElementById('hamburger-menu');
	const navLinks = document.getElementById('navLinks');

	if (hamburger && navLinks) {
		hamburger.addEventListener('click', function () {
			navLinks.classList.toggle('open');
		});
	}
}
