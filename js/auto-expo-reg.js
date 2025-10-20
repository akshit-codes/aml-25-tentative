// Modal feedback logic
function showFeedbackModal(message, title = 'Notice') {
    const modal = document.getElementById('feedbackModal');
    const msg = document.getElementById('modalMessage');
    const modalTitle = document.getElementById('modalTitle');
    if (!modal) return;
    if (msg) msg.textContent = message;
    if (modalTitle) modalTitle.textContent = title;

    // Ensure animation triggers every time
    modal.classList.remove('show');
    void modal.offsetWidth; // force reflow
    modal.classList.add('show');
}

function hideFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) modal.classList.remove('show');
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
const workerUrl = 'https://contact-worker-form.akulgupta0207.workers.dev/submit';

async function uploadData(formData) {
    try {
        const plainData = Object.fromEntries(formData.entries());
        const res = await fetch(workerUrl, { method: 'POST', body: JSON.stringify(plainData), headers: { 'Content-Type': 'application/json' } });
        if (res.ok) {
            // Show success modal
            showFeedbackModal('Submission successful! We will contact you shortly once the tickets are released.', 'Success');

            // Clear the form AFTER modal shows
            setTimeout(() => {
                teamForm.reset();
                membersContainer.innerHTML = '';
            }, 100); // slight delay to avoid transition conflict
        } else {
            showFeedbackModal('Submission failed.', 'Error');
        }
    } catch (err) {
        showFeedbackModal('Submission error: ' + err.message, 'Error');
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const submitBtn = teamForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const formData = new FormData(teamForm);

    uploadData(formData).finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
    });
}

function init() {
    teamForm.addEventListener('submit', handleSubmit);
}

document.addEventListener('DOMContentLoaded', init);
