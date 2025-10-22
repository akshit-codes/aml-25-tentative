const eventsContainer = document.getElementById('main');

events = [
	{
		name: 'Cube Open 2025',
		image: 'cubing',
		desc: 'Get ready to twist, turn, and solve at Cube Open, an official WCA-sanctioned speedcubing competition hosted at IIT Gandhinagar during Amalthea 2025. Join cubers from across the country to compete in official events like 2×2, 3×3, 4×4, Blindfolded, and more, all under standard WCA rules. Whether you’re a beginner or a record-setter, test your skills, meet fellow enthusiasts, and earn official WCA rankings in an exciting, high-energy atmosphere.',
		venue: 'Jibaben Auditorium',
		time: '8AM onwards',
		rb_link:
			'https://www.worldcubeassociation.org/competitions/AMLIITGandhinagarOpen2025/register',
		rg_link:
			'https://www.worldcubeassociation.org/competitions/AMLIITGandhinagarOpen2025',
	},
	{
		name: 'BrainWiz',
		image: 'brainwiz',
		desc: 'Test your intellect in BrainWiz, Amalthea’s flagship Olympiad-style competition for students of classes 9-12th. This multi-disciplinary challenge combines logic, problem-solving, and general awareness to identify the brightest young minds in the country. The contest begins with an online round and culminates in an exciting on-campus finale at IIT Gandhinagar, offering participants the perfect stage to showcase their analytical brilliance.',
		venue: 'AB1/101, AB1/102',
		time: '10AM - 1PM',
		rb_link: 'brainwiz.pdf',
		rg_link: 'https://forms.gle/Vth8xcbkdVpCKxdu6',
	},
];

function createEventCard(member) {
	return `
            <section class="scroll-section">
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
						<a href="../public/${member.rb_link}" target="_blank"
							class="btn">View Rulebook</a>
						<a href="${member.rg_link}"
							target="_blank" class="btn primary">Register Now</a>
					</div>
				</div>
			</div>
		</section>
        `;
}

events.forEach((member) => {
	eventsContainer.innerHTML += createEventCard(member);
});
