const eventsContainer = document.getElementById('main');

const events = {
	cubing: {
		name: 'Cube Open 2025',
		image: 'cubing',
		desc: "Get ready to twist, turn, and solve at Cube Open, an official WCA-sanctioned speedcubing competition hosted at IIT Gandhinagar during Amalthea 2025. Join cubers from across the country to compete in official events like 2×2, 3×3, 4×4, Blindfolded, and more, all under standard WCA rules. Whether you're a beginner or a record-setter, test your skills, meet fellow enthusiasts, and earn official WCA rankings in an exciting, high-energy atmosphere.",
		venue: 'Jibaben Auditorium',
		time: '8AM onwards',
		rb_link:
			'https://www.worldcubeassociation.org/competitions/AMLIITGandhinagarOpen2025/register',
		rg_link:
			'https://www.worldcubeassociation.org/competitions/AMLIITGandhinagarOpen2025',
	},
	brainwiz: {
		name: 'BrainWiz',
		image: 'brainwiz',
		desc: "Test your intellect in BrainWiz, Amalthea's flagship Olympiad-style competition for students of classes 9-12th. This multi-disciplinary challenge combines logic, problem-solving, and general awareness to identify the brightest young minds in the country. The contest begins with an online round and culminates in an exciting on-campus finale at IIT Gandhinagar, offering participants the perfect stage to showcase their analytical brilliance.",
		venue: 'AB1/101, AB1/102',
		time: '10AM - 1PM',
		rb_link: '../public/brainwiz.pdf',
		rg_link: 'https://forms.gle/Vth8xcbkdVpCKxdu6',
	},
	wire2win: {
		name: 'Wire2Win',
		image: 'w2w',
		desc: "Dive into the world of circuits at Wire2Win, Amalthea's electrifying electrical engineering challenge hosted at IIT Gandhinagar. Test your practical skills as you debug, design, and troubleshoot real electrical setups in a live lab environment. Tackle hands-on problem statements, work under pressure, and showcase your technical finesse as you bring faulty circuits back to life. Whether you're a circuit enthusiast or just love the buzz of the lab, Wire2Win is your stage to spark innovation and prove your engineering prowess.",
		venue: 'Electrical Lab',
		time: '10AM onwards',
		rb_link: '../public/wire2win.pdf',
		rg_link:
			'https://unstop.com/o/gch5Jmd?lb=vfBJXMIX&utm_medium=Share&utm_source=vivekcha24503&utm_campaign=Competitions',
	},
	boeing: {
		name: 'Boeing Aeromodelling',
		image: 'boeing',
		desc: "Are you ready to take your passion for flight to the next level? The Boeing Aeromodelling Competition at Amalthea 2025, IIT Gandhinagar, is your opportunity to design, build, and fly your own remote-controlled aircraft. Compete with the brightest minds from across the country, showcase your innovation, and experience the thrill of aviation engineering in action. Whether you're a seasoned builder or a first-time flyer, this competition is the perfect platform to learn, network, and win amazing prizes. Meet industry experts, connect with fellow enthusiasts, and make memories at one of India's most exciting tech summits. Don't just dream of flying - make it real at Amalthea 2025!",
		venue: 'IIT Gandhinagar',
		time: '10AM onwards',
		rb_link: '../public/boeing.pdf',
		rg_link:
			'https://unstop.com/o/nIZuSV8?lb=mtewJhc&utm_medium=Share&utm_source=amaltgan2430&utm_campaign=Competitions',
	},
	bushido: {
		name: 'Bushido',
		image: 'bushido',
		desc: 'An official e-sports competition featuring competitive events across multiple platforms, including Valorant (5-player teams), BGMI, Clash Royale, and Chess (following Lichess Fair Play rules). Compete online for prizes and test your skills in fast-paced, high-stakes matches and tournaments. This all-day event brings the thrill of professional competitive gaming to Amalthea 2025.',
		venue: 'Online',
		time: 'All Day',
		rb_link: '../public/bushido.pdf',
		rg_link:
			'https://docs.google.com/forms/d/e/1FAIpQLScVoK3RZJcpb7hO86hQjyo2nHI3F7vDL_u7WnhWfBlJYJUk6A/viewform?usp=header',
	},
	bridge_a_thon: {
		name: 'Bridge-a-thon',
		image: 'bridge',
		desc: 'Bridge-a-thon is an exciting civil engineering design event where teams build a bridge using only provided materials to withstand heavy loads. The final score is based on the Efficiency = Maximum Load Supported / Weight of the Bridge, rewarding both structural understanding and material efficiency. Teams are given complete creative freedom to design any type of bridge to maximize their efficiency score.',
		venue: 'Multipurpose Hall',
		time: '10 AM onwards',
		rb_link: '../public/bridge.pdf',
		rg_link: 'https://forms.gle/uTcYPv9oNFXevezZ7',
	},
	citython: {
		name: 'Citython',
		image: 'citython',
		desc: 'Citython is an urban planning and design competition presented by GUDM (Gujarat Urban Development Mission). Participants choose between two major problem statements: creating a master plan for IIT Gandhinagar or solving a complex road network problem to optimize traffic flow and safety. Teams must justify their innovative solutions using data analysis and detailed visualizations.',
		venue: 'AB11/102',
		time: '10 AM onwards',
		rb_link: '../public/citython.pdf',
		rg_link: 'https://forms.gle/BkqE6Kjgac9z4nPd7',
	},
	drift: {
		name: 'Drift',
		image: 'drift',
		desc: 'Drift is a turbo-charged RC racing competition in collaboration with MRC Hobbies. Design or bring a wireless remote-controlled car, powered only by an electric motor, and race it against opponents on a challenging drift track with sharp turns and obstacles. Teams of 2-5 members will test their driving skill and vehicle innovation to compete for a prize pool of INR 50,000/-.',
		venue: 'Behind Kyzeel Hostel',
		time: '10 AM onwards',
		rb_link: '../public/drift.pdf',
		rg_link: 'https://forms.gle/vNtHs2DAscghfQe29',
	},
	netzero: {
		name: 'NetZero',
		image: 'netzero',
		desc: "NetZero is a two-round case study event focused on solving core environmental challenges facing the world today. Participants choose one of four problem statements based on topics like photovoltaics, energy infrastructure, or digitalization's environmental footprint. Teams must ideate a practical, scalable solution to push forward a sustainable, net-zero future.",
		venue: 'AB11/102',
		time: '10 AM onwards',
		rb_link: '../public/netzero.pdf',
		rg_link:
			'https://unstop.com/o/Fj6k1O5?lb=UsF6PH7L&utm_medium=Share&utm_source=ankit24110258&utm_campaign=Competitions',
	},
	overarch: {
		name: 'OverArch',
		image: 'overarch',
		desc: 'OverArch is a structural case study competition focused on Engineering at Extreme Altitudes. Participants are challenged to design a theoretical disaster-resilient arch bridge for a high-altitude Himalayan pass (above 3,000 meters). The design must withstand critical loads like seismic activity, avalanches, and high wind speeds, culminating in a showcase on November 9th.',
		venue: 'AB11/101',
		time: '10 AM onwards',
		rb_link: '../public/overarch.pdf',
		rg_link: 'https://forms.gle/Bd8V3RuLCu4jpi3w6',
	},
	quakecraft: {
		name: 'QuakeCraft',
		image: 'quake',
		desc: 'QuakeCraft is a thrilling structural design challenge that tests creativity and engineering intuition. Teams must design and build straw towers (Height: 650-700 mm) that adhere to specific dimensional constraints. The goal is to demonstrate maximum resilience by withstanding simulated seismic activity on a shaking table and progressive loading until structural collapse.',
		venue: 'Multipurpose Hall',
		time: '10 AM onwards',
		rb_link: '../public/quake.pdf',
		rg_link: 'https://forms.gle/qT1oJvvLBKgbWjv18',
	},
	rereact: {
		name: 'Re-React',
		image: 'rereact',
		desc: 'Re-React is a chemical case study event focused on industrial waste management and circular economy. Participants choose a real-world problem statement (e.g., polyurethane foam or waste sulfuric acid) and ideate an innovative, low-cost chemical or process-based solution. The goal is to strategically re-react the industrial waste to utilize it back into the industry.',
		venue: 'AB11/102',
		time: '10 AM onwards',
		rb_link: '../public/rereact.pdf',
		rg_link:
			'https://unstop.com/o/EdZOM4X?lb=UsF6PH7L&utm_medium=Share&utm_source=ankit24110258&utm_campaign=Competitions',
	},
	gamejam: {
		name: 'Game Jam',
		image: 'gamejam',
		desc: "Unleash your creativity and technical skills in this intense game development competition! Participants form teams to design, code, and create a fully functional video game from scratch within a tight, fixed time limit (typically 48 hours). The event is centered around a secret theme revealed at the start, and it tests the team's ability to handle teamwork, rapid prototyping, game art, and coding under pressure.",
		venue: 'Online',
		time: '48-Hour Event',
		rb_link: 'https://itch.io/jam/game-jam-2025-ad',
		rg_link: 'https://itch.io/jam/game-jam-2025-ad',
	},
	odoo: {
		name: 'Odoo x Amalthea',
		image: 'odoo',
		desc: 'Join the Odoo x Amalthea Hackathon, a 24-hour coding marathon where talent meets technology! This multi-stage challenge begins with an 8-hour virtual round on a surprise problem statement. Top teams advance to the offline final to craft groundbreaking solutions to real-world problems. Compete for a prize pool of over ₹105,000, Odoo goodies, and a chance at a CTC of up to 8 LPA for exceptional performers.',
		venue: 'AB10/103, AB10/201, AB10/202',
		time: '48-Hour Event',
		rb_link:
			'https://www.odoo.com/event/odoo-x-amalthea-iit-gn-hackathon-2025-8850/register',
		rg_link:
			'https://www.odoo.com/event/odoo-x-amalthea-iit-gn-hackathon-2025-8850/register',
	},
};

const eventsList = [
	events.boeing,
	events.drift,
	events.cubing,
	events.bushido,
	events.odoo,
	events.brainwiz,
	events.wire2win,
	events.rereact,
	events.quakecraft,
	events.bridge_a_thon,
	events.citython,
	events.overarch,
	events.gamejam,
	events.netzero,
];

function createEventCard(member) {
	return `
            <section class="scroll-section">
            <div class="center-container">
				<div class="content-card event-card">
					<div class="event-image-wrapper">
						<img src="../images/events/${member.image}.png" alt="${member.name}" class="event-image" />
					</div>
					
					<div class="event-content">
						<h2 class="event-title">${member.name}</h2>
						<p class="event-description">
							${member.desc}
						</p>
	
						<ul class="event-details">
							<li><b>Venue:</b> ${member.venue}</li>
							<li><b>Time:</b> ${member.time}</li>
						</ul>
	
						<div class="btn-row">
							<a href="${member.rb_link}" target="_blank"
								class="btn">View Rulebook</a>
							<a href="${member.rg_link}"
								target="_blank" class="btn primary">Register Now</a>
						</div>
					</div>
				</div>
			</div>
		</section>
        `;
}

eventsList.forEach((member) => {
	eventsContainer.innerHTML += createEventCard(member);
});
