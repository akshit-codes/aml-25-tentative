const eventsContainer = document.getElementById('main');
const events = {
	cubing: {
		name: 'Cube Open 2025',
		image: 'cubing',
		desc: "Get ready to twist, turn, and solve at <b>Cube Open</b>, an official <b>WCA-sanctioned speedcubing competition</b> hosted at <b>IIT Gandhinagar</b> during Amalthea 2025. Join cubers from across the country to compete in <b>official events like 2×2, 3×3, 4×4, Blindfolded</b>, and more, all under standard WCA rules. Whether you're a beginner or a record-setter, test your skills, meet fellow enthusiasts, and earn <b>official WCA rankings</b> in an exciting, high-energy atmosphere.",
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
		desc: "Test your intellect in <b>BrainWiz</b>, Amalthea's <b>flagship Olympiad-style competition</b> for students of <b>classes 9-12th</b>. This multi-disciplinary challenge combines <b>logic, problem-solving, and general awareness</b> to identify the brightest young minds in the country. The contest begins with an <b>online round</b> and culminates in an exciting <b>on-campus finale at IIT Gandhinagar</b>, offering participants the perfect stage to showcase their analytical brilliance.",
		venue: 'AB1/101, AB1/102',
		time: '10AM - 1PM',
		rb_link: '../public/brainwiz.pdf',
		rg_link: 'https://forms.gle/Vth8xcbkdVpCKxdu6',
	},
	wire2win: {
		name: 'Wire2Win',
		image: 'w2w',
		desc: "Dive into the world of circuits at <b>Wire2Win</b>, Amalthea's electrifying <b>electrical engineering challenge</b> hosted at <b>IIT Gandhinagar</b>. Test your <b>practical skills</b> as you debug, design, and troubleshoot <b>real electrical setups</b> in a <b>live lab environment</b>. Tackle <b>hands-on problem statements</b>, work under pressure, and showcase your technical finesse as you bring faulty circuits back to life. Whether you're a circuit enthusiast or just love the buzz of the lab, Wire2Win is your stage to spark innovation and prove your engineering prowess.",
		venue: 'Electrical Lab',
		time: '10AM onwards',
		rb_link: '../public/wire2win.pdf',
		rg_link:
			'https://unstop.com/o/gch5Jmd?lb=vfBJXMIX&utm_medium=Share&utm_source=vivekcha24503&utm_campaign=Competitions',
	},
	boeing: {
		name: 'Boeing Aeromodelling',
		image: 'boeing',
		desc: "Are you ready to take your passion for flight to the next level? The <b>Boeing Aeromodelling Competition</b> at <b>Amalthea 2025, IIT Gandhinagar</b>, is your opportunity to <b>design, build, and fly your own remote-controlled aircraft</b>. Compete with the brightest minds from across the country, showcase your innovation, and experience the thrill of <b>aviation engineering</b> in action. Whether you're a seasoned builder or a first-time flyer, this competition is the perfect platform to learn, network, and win amazing prizes. Meet industry experts, connect with fellow enthusiasts, and make memories at one of India's most exciting tech summits. Don't just dream of flying - make it real at Amalthea 2025!",
		venue: 'IIT Gandhinagar',
		time: '10AM onwards',
		rb_link: '../public/boeing.pdf',
		rg_link:
			'https://unstop.com/o/nIZuSV8?lb=mtewJhc&utm_medium=Share&utm_source=amaltgan2430&utm_campaign=Competitions',
	},
	bushido: {
		name: 'Bushido',
		image: 'bushido',
		desc: 'An <b>official e-sports competition</b> featuring competitive events across multiple platforms, including <b>Valorant (5-player teams), BGMI, Clash Royale, and Chess</b> (following Lichess Fair Play rules). Compete <b>online</b> for prizes and test your skills in fast-paced, high-stakes matches and tournaments. This <b>all-day event</b> brings the thrill of professional competitive gaming to Amalthea 2025.',
		venue: 'Online',
		time: 'All Day',
		rb_link: '../public/bushido.pdf',
		rg_link:
			'https://docs.google.com/forms/d/e/1FAIpQLScVoK3RZJcpb7hO86hQjyo2nHI3F7vDL_u7WnhWfBlJYJUk6A/viewform?usp=header',
	},
	bridge_a_thon: {
		name: 'Bridge-a-thon',
		image: 'bridge',
		desc: '<b>Bridge-a-thon</b> is an exciting <b>civil engineering design event</b> where teams build a bridge using <b>only provided materials</b> to withstand heavy loads. The final score is based on the formula: <b>Efficiency = Maximum Load Supported / Weight of the Bridge</b>, rewarding both structural understanding and material efficiency. Teams are given complete creative freedom to design any type of bridge to maximize their efficiency score.',
		venue: 'Multipurpose Hall',
		time: '10 AM onwards',
		rb_link: '../public/bridge.pdf',
		rg_link: 'https://forms.gle/uTcYPv9oNFXevezZ7',
	},
	citython: {
		name: 'Citython',
		image: 'citython',
		desc: '<b>Citython</b> is an <b>urban planning and design competition</b> presented by <b>GUDM (Gujarat Urban Development Mission)</b>. Participants choose between two major problem statements: creating a <b>master plan for IIT Gandhinagar</b> or solving a complex <b>road network problem</b> to optimize traffic flow and safety. Teams must justify their innovative solutions using <b>data analysis and detailed visualizations</b>.',
		venue: 'AB11/102',
		time: '10 AM onwards',
		rb_link: '../public/citython.pdf',
		rg_link: 'https://forms.gle/BkqE6Kjgac9z4nPd7',
	},
	drift: {
		name: 'Drift',
		image: 'drift',
		desc: '<b>Drift</b> is a turbo-charged <b>RC racing competition</b> in collaboration with <b>MRC Hobbies</b>. Design or bring a <b>wireless remote-controlled car</b>, powered only by an electric motor, and race it against opponents on a challenging <b>drift track</b> with sharp turns and obstacles. Teams of <b>2-5 members</b> will test their driving skill and vehicle innovation to compete for a prize pool of <b>INR 50,000/-</b>.',
		venue: 'Behind Kyzeel Hostel',
		time: '10 AM onwards',
		rb_link: '../public/drift.pdf',
		rg_link: 'https://forms.gle/vNtHs2DAscghfQe29',
	},
	netzero: {
		name: 'NetZero',
		image: 'netzero',
		desc: "<b>NetZero</b> is a <b>two-round case study event</b> focused on solving core <b>environmental challenges</b> facing the world today. Participants choose one of four problem statements based on topics like <b>photovoltaics, energy infrastructure, or digitalization's environmental footprint</b>. Teams must ideate a <b>practical, scalable solution</b> to push forward a sustainable, <b>net-zero future</b>.",
		venue: 'AB11/102',
		time: '10 AM onwards',
		rb_link: '../public/netzero.pdf',
		rg_link:
			'https://unstop.com/o/Fj6k1O5?lb=UsF6PH7L&utm_medium=Share&utm_source=ankit24110258&utm_campaign=Competitions',
	},
	overarch: {
		name: 'OverArch',
		image: 'overarch',
		desc: '<b>OverArch</b> is a <b>structural case study competition</b> focused on <b>Engineering at Extreme Altitudes</b>. Participants are challenged to design a theoretical <b>disaster-resilient arch bridge</b> for a <b>high-altitude Himalayan pass (above 3,000 meters)</b>. The design must withstand critical loads like <b>seismic activity, avalanches, and high wind speeds</b>, culminating in a showcase on November 9th.',
		venue: 'AB11/101',
		time: '10 AM onwards',
		rb_link: '../public/overarch.pdf',
		rg_link: 'https://forms.gle/Bd8V3RuLCu4jpi3w6',
	},
	quakecraft: {
		name: 'QuakeCraft',
		image: 'quake',
		desc: '<b>QuakeCraft</b> is a thrilling <b>structural design challenge</b> that tests creativity and engineering intuition. Teams must design and build <b>straw towers (Height: 650-700 mm)</b> that adhere to specific dimensional constraints. The goal is to demonstrate <b>maximum resilience</b> by withstanding simulated <b>seismic activity on a shaking table</b> and progressive loading until structural collapse.',
		venue: 'Multipurpose Hall',
		time: '10 AM onwards',
		rb_link: '../public/quake.pdf',
		rg_link: 'https://forms.gle/qT1oJvvLBKgbWjv18',
	},
	rereact: {
		name: 'Re-React',
		image: 'rereact',
		desc: '<b>Re-React</b> is a <b>chemical case study event</b> focused on <b>industrial waste management</b> and <b>circular economy</b>. Participants choose a <b>real-world problem statement</b> (e.g., polyurethane foam or waste sulfuric acid) and ideate an <b>innovative, low-cost chemical or process-based solution</b>. The goal is to strategically re-react the industrial waste to utilize it back into the industry.',
		venue: 'AB11/102',
		time: '10 AM onwards',
		rb_link: '../public/rereact.pdf',
		rg_link:
			'https://unstop.com/o/EdZOM4X?lb=UsF6PH7L&utm_medium=Share&utm_source=ankit24110258&utm_campaign=Competitions',
	},
	gamejam: {
		name: 'Game Jam',
		image: 'gamejam',
		desc: "Unleash your creativity and technical skills in this intense <b>game development competition</b>! Participants form teams to design, code, and create a <b>fully functional video game from scratch</b> within a tight, fixed time limit (typically <b>48 hours</b>). The event is centered around a <b>secret theme</b> revealed at the start, and it tests the team's ability to handle <b>teamwork, rapid prototyping, game art, and coding</b> under pressure.",
		venue: 'Online',
		time: '48-Hour Event',
		rb_link: 'https://itch.io/jam/game-jam-2025-ad',
		rg_link: 'https://itch.io/jam/game-jam-2025-ad',
	},
	odoo: {
		name: 'Odoo x Amalthea',
		image: 'odoo',
		desc: 'Join the <b>Odoo x Amalthea Hackathon</b>, a <b>24-hour coding marathon</b> where talent meets technology! This multi-stage challenge begins with an <b>8-hour virtual round</b> on a surprise problem statement. Top teams advance to the <b>offline final</b> to craft groundbreaking solutions to real-world problems. Compete for a prize pool of over <b>₹105,000</b>, Odoo goodies, and a chance at a <b>CTC of up to 8 LPA</b> for exceptional performers.',
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
