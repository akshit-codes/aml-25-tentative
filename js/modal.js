document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('soldOutModal');
	const modalMessage = document.getElementById('modalMessage');
	const buyButtons = document.querySelectorAll('.buy-now-btn');
	const closeModalBtn = document.getElementById('closeModalBtn');

	// Function to show the modal
	function showModal(itemName) {
		modalMessage.textContent = `Apologies, the ${itemName} is currently sold out. Please check back later for availability.`;
		modal.classList.add('show');
	}

	// Function to close the modal
	function closeModal() {
		modal.classList.remove('show');
	}

	// Add event listeners to all "Buy Now" buttons
	buyButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const itemName = button.dataset.item;
			showModal(itemName);
		});
	});

	// Add event listener to the "OK" button in the modal
	closeModalBtn.addEventListener('click', closeModal);

	// Close the modal if the user clicks outside of the content
	window.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});
});
