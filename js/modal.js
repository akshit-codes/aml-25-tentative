document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('soldOutModal');
	const modalMessage = document.getElementById('modalMessage');
	const buyButtons = document.querySelectorAll('.buy-now-btn');
	const closeModalBtn = document.getElementById('closeModalBtn');

	function showModal(itemName) {
		modalMessage.textContent = `Apologies, the ${itemName} is currently sold out. Please check back later for availability.`;
		modal.classList.add('show');
	}

	function closeModal() {
		modal.classList.remove('show');
	}
	buyButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const itemName = button.dataset.item;
			showModal(itemName);
		});
	});

	closeModalBtn.addEventListener('click', closeModal);

	window.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});
});
