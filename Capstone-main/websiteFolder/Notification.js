let markets = [];
let notifications = [];

// Handle form submission
document.getElementById('notification-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const marketName = document.getElementById('market-name').value.trim();
    const notificationMessage = document.getElementById('notification-message').value.trim();

    if (!marketName || !notificationMessage) {
        alert("Please fill in all fields.");
        return;
    }

    // Add market if not already present
    if (!markets.includes(marketName)) {
        markets.push(marketName);
    }

    // Store the notification
    notifications.push({ market: marketName, message: notificationMessage });

    // Reset the form
    document.getElementById('notification-form').reset();

    // Update the notification history display
    displayNotifications();
});

// Function to display notification history
function displayNotifications() {
    const notificationsContainer = document.getElementById('notifications-container');
    notificationsContainer.innerHTML = ''; // Clear previous notifications

    if (notifications.length === 0) {
        notificationsContainer.innerHTML = '<p>No notifications created yet.</p>';
        return;
    }

    notifications.forEach(notification => {
        const notificationDiv = document.createElement('div');
        notificationDiv.classList.add('notification-entry');
        notificationDiv.innerHTML = `
            <strong>Market:</strong> ${notification.market} <br>
            <strong>Notification:</strong> ${notification.message}
        `;
        notificationsContainer.appendChild(notificationDiv);
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