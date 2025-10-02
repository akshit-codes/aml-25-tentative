// Modal feedback logic
function showFeedbackModal(message, title = 'Notice') {
	const modal = document.getElementById('feedbackModal');
	const msg = document.getElementById('modalMessage');
	const modalTitle = document.getElementById('modalTitle');
	if (msg) msg.textContent = message;
	if (modalTitle) modalTitle.textContent = title;
	if (modal) modal.style.display = 'block';
}

function hideFeedbackModal() {
	const modal = document.getElementById('feedbackModal');
	if (modal) modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
	const closeBtn = document.getElementById('closeModalBtn');
	if (closeBtn) closeBtn.onclick = hideFeedbackModal;
});
const membersContainer = document.getElementById('membersContainer');
const teamForm = document.getElementById('teamForm');
const workerUrl = 'https://aml-boeing-worker.chhabra-akshit.workers.dev/';

function renderMembers(size) {
	membersContainer.innerHTML = '';
	for (let i = 1; i <= size; i++) {
		membersContainer.innerHTML += `
            <h4>Member ${i}</h4>

            <div class="form-group">
                <label for="member${i}Name">Full Name:</label>
                <input name="member${i}Name" type="text" required>
            </div>

            <div class="form-group">
                <label for="member${i}Email">Email:</label>
                <input name="member${i}Email" type="text" required>
            </div>

            <div class="form-group">
                <label for="member${i}Phone">Phone:</label>
                <input name="member${i}Phone" type="text" required>
            </div>

            <div class="form-group">
                <label for="member${i}Institution">Institution:</label>
                <input name="member${i}Institution" type="text" required>
            </div>

            <div class="form-group">
                <label for="member${i}Program">Program:</label>
                <select name="member${i}Program" required>
                    <option value="School">School</option>
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                </select>
            </div>

            <div class="form-group">
                <label for="member${i}Year">Year:</label>
                <select name="member${i}Year" required>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div class="form-group">
                <label for="member${i}Dept">Department:</label>
                <input name="member${i}Dept" type="text" required>
            </div>

            <div class="form-group">
                <label for="member${i}ID">ID Upload:</label>
                <div class="file-wrapper">
					<input type="file" name="member${i}ID" accept=".jpg,.png,.pdf" required>
					<small class="file-hint">Max size: 5 MB, JPG/PNG only</small>
				</div>
            </div>
        `;
	}
}

function getTeamSize() {
	const checkedRadio = document.querySelector(
		'input[name="teamSize"]:checked'
	);
	return checkedRadio ? parseInt(checkedRadio.value) : 0;
}

function validateFiles(formData) {
	const abstract = formData.get('abstract');
	if (
		!abstract ||
		abstract.type !== 'application/pdf' ||
		abstract.size > 15 * 1024 * 1024
	) {
		alert('Abstract must be a PDF under 15 MB.');
		return false;
	}

	const photos = formData.get('photos');
	if (
		!photos ||
		photos.name.split('.').pop().toLowerCase() !== 'zip' ||
		photos.size > 50 * 1024 * 1024
	) {
		alert('Photos must be a ZIP file under 50 MB.');
		return false;
	}

	const teamSize = getTeamSize();
	for (let i = 1; i <= teamSize; i++) {
		const idFile = formData.get(`member${i}ID`);
		const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
		if (
			!idFile ||
			!allowedTypes.includes(idFile.type) ||
			idFile.size > 5 * 1024 * 1024
		) {
			alert(`Member ${i} ID must be PDF/JPG/PNG under 5 MB.`);
			return false;
		}
	}

	return true;
}

async function uploadData(formData) {
	try {
		const res = await fetch(workerUrl, { method: 'POST', body: formData });
		if (res.ok) {
			showFeedbackModal('Submission successful!', 'Success');
		} else {
			showFeedbackModal('Submission failed.', 'Error');
		}
	} catch (err) {
		showFeedbackModal('Submission error: ' + err.message, 'Error');
	}
}

function handleSubmit(event) {
	event.preventDefault();
	const formData = new FormData(teamForm);
	if (validateFiles(formData)) {
		uploadData(formData);
	}
}

function init() {
	const teamRadios = document.querySelectorAll('input[name="teamSize"]');
	teamRadios.forEach((radio) => {
		radio.addEventListener('change', () => {
			renderMembers(parseInt(radio.value));
		});
	});

	const size = getTeamSize();
	if (size) renderMembers(size);

	teamForm.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', init);
