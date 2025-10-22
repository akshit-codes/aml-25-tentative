const PARTICLES_DISK_COUNT = 10000;
const PARTICLES_STAR_COUNT = 10000;
const ACCRETION_DISK_RADIUS_MIN = 1.5;
const ACCRETION_DISK_RADIUS_MAX = 4.0;
const ACCRETION_DISK_Y_VARIANCE = 0.2;
const ACCRETION_DISK_POINT_SIZE = 0.025;
const STARFIELD_SPREAD = 1000;
const STAR_POINT_SIZE = 0.5;
const CAMERA_FOV = 75;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 2000;
const CAMERA_START_Z = 10;
const CAMERA_END_Z = 1.2;
let scene, camera, renderer;
let starfield, accretionDisk, blackHole;
let blackHoleGroup = new THREE.Group();

function initThreeScene(container, showBlackHole = true) {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		CAMERA_FOV,
		window.innerWidth / window.innerHeight,
		CAMERA_NEAR,
		CAMERA_FAR
	);
	renderer = new THREE.WebGLRenderer({
		antialias: true,
		alpha: true,
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	container.appendChild(renderer.domElement);

	let blackHoleGroup = null;
	let accretionDisk = null;

	if (showBlackHole) {
		blackHoleGroup = new THREE.Group();

		const bhGeometry = new THREE.SphereGeometry(1, 32, 32);
		const bhMaterial = new THREE.MeshBasicMaterial({
			color: 0x000000,
			side: THREE.DoubleSide,
		});
		const blackHole = new THREE.Mesh(bhGeometry, bhMaterial);
		blackHoleGroup.add(blackHole);

		const diskGeometry = new THREE.BufferGeometry();
		const diskPositions = [];
		const diskColors = [];
		const color1 = new THREE.Color(
			getComputedStyle(document.documentElement)
				.getPropertyValue('--color-accent-gold')
				.trim()
		);
		const color2 = new THREE.Color(
			getComputedStyle(document.documentElement)
				.getPropertyValue('--color-accent-red')
				.trim()
		);

		for (let i = 0; i < PARTICLES_DISK_COUNT; i++) {
			const radius =
				ACCRETION_DISK_RADIUS_MIN +
				Math.random() *
					(ACCRETION_DISK_RADIUS_MAX - ACCRETION_DISK_RADIUS_MIN);
			const angle = Math.random() * Math.PI * 2;
			const x = Math.cos(angle) * radius;
			const z = Math.sin(angle) * radius;
			const y = (Math.random() - 0.5) * ACCRETION_DISK_Y_VARIANCE;
			diskPositions.push(x, y, z);

			const mixedColor = color1.clone().lerp(color2, Math.random());
			diskColors.push(mixedColor.r, mixedColor.g, mixedColor.b);
		}
		diskGeometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(diskPositions, 3)
		);
		diskGeometry.setAttribute(
			'color',
			new THREE.Float32BufferAttribute(diskColors, 3)
		);

		const diskMaterial = new THREE.PointsMaterial({
			size: ACCRETION_DISK_POINT_SIZE,
			vertexColors: true,
			blending: THREE.AdditiveBlending,
			transparent: true,
			opacity: 0.8,
		});
		accretionDisk = new THREE.Points(diskGeometry, diskMaterial);
		blackHoleGroup.add(accretionDisk);
		scene.add(blackHoleGroup);
	}

	const starGeometry = new THREE.BufferGeometry();
	const starPositions = [];
	for (let i = 0; i < PARTICLES_STAR_COUNT; i++) {
		const x = (Math.random() - 0.5) * STARFIELD_SPREAD;
		const y = (Math.random() - 0.5) * STARFIELD_SPREAD;
		const z = (Math.random() - 0.5) * STARFIELD_SPREAD;
		starPositions.push(x, y, z);
	}
	starGeometry.setAttribute(
		'position',
		new THREE.Float32BufferAttribute(starPositions, 3)
	);
	const starMaterial = new THREE.PointsMaterial({
		size: STAR_POINT_SIZE,
		color: 0xffffff,
		transparent: true,
		opacity: 0.7,
	});
	const starfield = new THREE.Points(starGeometry, starMaterial);
	scene.add(starfield);

	camera.position.z = CAMERA_START_Z;

	return {
		scene,
		camera,
		renderer,
		blackHoleGroup,
		accretionDisk,
		starfield,
	};
}

function getThreeObjects() {
	return {
		scene,
		camera,
		renderer,
		blackHoleGroup,
		accretionDisk,
		starfield,
	};
}
