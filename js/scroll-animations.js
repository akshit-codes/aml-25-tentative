function setupScrollAnimations(threeObjects) {
	const { camera, blackHoleGroup, starfield, accretionDisk } = threeObjects;

	gsap.to('#landing h1', {
		scrollTrigger: {
			trigger: '#random-text-section',
			start: 'top bottom',
			end: 'top center',
			scrub: true,
		},
		opacity: 0,
		ease: 'none',
	});

	gsap.from('#random-text', {
		scrollTrigger: {
			trigger: '#random-text-section',
			start: 'top bottom',
			end: 'top center',
			scrub: true,
		},
		opacity: 0,
		ease: 'none',
	});

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#landing',
			start: 'top top',
			end: 'bottom+=100% top',
			scrub: 1.5,
		},
	});

	tl.to(
		camera.position,
		{
			z: 1.2,
			ease: 'power2.in',
		},
		0
	)
		.to(
			blackHoleGroup.scale,
			{
				x: 3,
				y: 3,
				z: 3,
				ease: 'power2.in',
			},
			0
		)
		.to(
			blackHoleGroup.rotation,
			{
				x: Math.PI / 13,
				z: Math.PI / 2,
				ease: 'power2.in',
			},
			0
		)
		.to(
			starfield.material,
			{
				opacity: 0,
				ease: 'power1.in',
			},
			0
		)
		.to(
			accretionDisk.material,
			{
				opacity: 0,
				ease: 'power1.in',
			},
			0
		);
}
