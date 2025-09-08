gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- Main application logic ---
let threeObjects;

function initStarfieldPage() {
	const container = document.getElementById('canvas-container');
	const threeObjects = initThreeScene(container, false); // no black hole

	function animate() {
		requestAnimationFrame(animate);
		threeObjects.starfield.rotation.y += 0.0001;
		threeObjects.renderer.render(threeObjects.scene, threeObjects.camera);
	}

	animate();

	window.addEventListener('resize', () => {
		threeObjects.camera.aspect = window.innerWidth / window.innerHeight;
		threeObjects.camera.updateProjectionMatrix();
		threeObjects.renderer.setSize(window.innerWidth, window.innerHeight);
	});
}

initStarfieldPage();
