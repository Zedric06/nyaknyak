let applications = [];

// Handle form submission
document.getElementById('permit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const market = document.getElementById('market-name').value.trim();
    const applicant = document.getElementById('applicant-name').value.trim();
    const date = document.getElementById('application-date').value;
    const permit = document.getElementById('permit-type').value.trim();

    // Validate input fields
    if (!market || !applicant || !date || !permit) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new application entry
    const applicationEntry = { market, applicant, date, permit };
    applications.push(applicationEntry);

    // Reset form fields
    document.getElementById('permit-form').reset();

    // Display submitted applications
    displayApplications();
});

// Function to display submitted applications
function displayApplications() {
    const applicationsContainer = document.getElementById('applications-container');
    applicationsContainer.innerHTML = ''; // Clear previous entries

    if (applications.length === 0) {
        applicationsContainer.innerHTML = '<p>No applications submitted yet.</p>';
        return;
    }

    applications.forEach((application, index) => {
        const applicationDiv = document.createElement('div');
        applicationDiv.classList.add('application-entry');
        applicationDiv.innerHTML = `
            <strong>Market:</strong> ${application.market} <br>
            <strong>Applicant:</strong> ${application.applicant} <br>
            <strong>Date:</strong> ${application.date} <br>
            <strong>Permit:</strong> ${application.permit}
        `;
        applicationsContainer.appendChild(applicationDiv);
    });
}
// Sidebar Toggle Functionality
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const hamburger = document.getElementById('hamburger');

function toggleSidebar() {
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');

    // Toggle button icon
    const icon = toggleBtn.querySelector('i');
    if (sidebar.classList.contains('collapsed')) {
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
    } else {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
    }
}

toggleBtn.addEventListener('click', toggleSidebar);
hamburger.addEventListener('click', toggleSidebar);

function toggleSubMenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.classList.toggle('open'); // Toggle open class
}

document.getElementById('toggle-button').onclick = function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); // Toggle sidebar visibility
};