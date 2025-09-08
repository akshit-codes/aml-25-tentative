gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- Main application logic ---
let threeObjects;

function init() {
	const container = document.getElementById('canvas-container');

	// Initialize the Three.js scene
	threeObjects = initThreeScene(container);

	// Setup scroll animations
	setupScrollAnimations(threeObjects);

	// Start random text animation
	startRandomTextAnimation();

	// Handle window resizing
	window.addEventListener('resize', onWindowResize);

	// Start the animation loop
	animate();
}

function animate() {
	requestAnimationFrame(animate);
	const { accretionDisk, starfield, renderer, scene, camera } = threeObjects;

	// Animate the 3D objects
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
