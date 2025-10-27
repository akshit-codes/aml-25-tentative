gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let threeObjects;

function init() {
	const container = document.getElementById('canvas-container');
	threeObjects = initThreeScene(container);
	setupScrollAnimations(threeObjects);
	animateSocialLinks();
	startRandomTextAnimation();
	window.addEventListener('resize', onWindowResize);
	animate();
}

function animate() {
	requestAnimationFrame(animate);
	const { accretionDisk, starfield, renderer, scene, camera } = threeObjects;
	accretionDisk.rotation.y += 0.005;
	starfield.rotation.y += 0.0001;

	// Render the scene
	renderer.render(scene, camera);
}

let resizeTimeout;
function onWindowResize() {
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(() => {
		const { camera, renderer } = threeObjects;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}, 150);
}

// Start the application
init();
