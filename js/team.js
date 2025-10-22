document.addEventListener('DOMContentLoaded', () => {
	const coreTeam = [
		{
			name: 'Aayush Bhagat',
			role: 'Events and Event Management Core',
			image: 'people/Aayush.png',
		},
		{
			name: 'Akshit Chhabra',
			role: 'Design and Finance Core',
			image: 'people/Akshit.png',
		},
		{
			name: 'Jils Shah',
			role: 'Tech Expo and Marketing Core',
			image: 'people/Jils.png',
		},
		{
			name: 'Kunal Chandola',
			role: 'Sponsorship and CNS Core',
			image: 'people/Kunal.png',
		},
	];

	const coordinators = [
		{
			name: 'Akshat Agarwal',
			role: 'Sponsorship Coordinator',
			image: 'people/Akshat.png',
		},
		{
			name: 'Akul Gupta',
			role: 'Event Management Coordinator',
			image: 'people/Akul.png',
		},
		{
			name: 'Ananya Pawar',
			role: 'Tech Expo Coordinator',
			image: 'people/Ananya.png',
		},
		{
			name: 'Ankit Saha',
			role: 'Events Coordinator',
			image: 'people/Ankit.png',
		},
		{
			name: 'Dhanraj Vispara',
			role: 'Design Coordinator',
			image: 'people/Dhanraj.png',
		},
		{
			name: 'Dhvani Shah',
			role: 'Corporate Communication Coordinator',
			image: 'people/Dhvani.png',
		},
		{
			name: 'DASKR Manognya',
			role: 'Design Coordinator',
			image: 'people/Manognya.png',
		},
		{
			name: 'Nidhi Ramteke',
			role: 'Digital Engagement Coordinator',
			image: 'people/Nidhi.png',
		},
		{
			name: 'Sayeed Ibrahim',
			role: 'Tech Expo & Events Management Coordinator',
			image: 'people/Sayeed.png',
		},
		{
			name: 'Siya Kothari',
			role: 'Sponsorship Coordinator',
			image: 'people/Siya.png',
		},
		{
			name: 'Vikram Aditya',
			role: 'CNS Coordinator',
			image: 'people/Vikram.png',
		},
		{
			name: 'Vinay Kumar',
			role: 'Events Coordinator',
			image: 'people/Vinay.png',
		},
		{
			name: 'Vivek Chaurasia',
			role: 'Outreach and Networking Coordinator',
			image: 'people/Vivek.png',
		},
	];

	coreTeam.sort((a, b) => a.name.localeCompare(b.name));
	coordinators.sort((a, b) => a.name.localeCompare(b.name));

	function createTeamCard(member) {
		return `
            <div class="team-member">
                <img src="../images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p><strong>${member.role}</strong></p>
            </div>
        `;
	}

	const coreTeamContainer = document.getElementById('core-team-container');
	const coordinatorsContainer = document.getElementById(
		'coordinators-container'
	);

	coreTeam.forEach((member) => {
		coreTeamContainer.innerHTML += createTeamCard(member);
	});

	coordinators.forEach((member) => {
		coordinatorsContainer.innerHTML += createTeamCard(member);
	});
});
