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


let feedbackList = [];

// Handle feedback submission
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const market = document.getElementById('market-name').value;
    const name = document.getElementById('user-name').value.trim();
    const feedback = document.getElementById('user-feedback').value.trim();
    const rating = parseInt(document.getElementById('user-rating').value);

    // Check for empty fields
    if (!market || !name || !feedback || !rating) {
        alert("Please fill in all fields.");
        return;
    }

    // Store feedback
    feedbackList.push({ market, name, feedback, rating });
    
    // Reset form
    document.getElementById('feedback-form').reset();

    // Update analytics display
    updateAnalytics();
});

// Update analytics display
function updateAnalytics() {
    const analyticsDiv = document.getElementById('analytics-results');
    
    if (feedbackList.length === 0) {
        analyticsDiv.innerHTML = '<p>No feedback available.</p>';
        return;
    }

    const marketFeedback = {};
    
    // Organize feedback by market
    feedbackList.forEach(entry => {
        if (!marketFeedback[entry.market]) {
            marketFeedback[entry.market] = { totalRating: 0, count: 0, entries: [] };
        }
        marketFeedback[entry.market].totalRating += entry.rating;
        marketFeedback[entry.market].count++;
        marketFeedback[entry.market].entries.push(entry);
    });

    // Generate analytics output
    let output = '';
    for (const market in marketFeedback) {
        const avgRating = (marketFeedback[market].totalRating / marketFeedback[market].count).toFixed(2);
        output += `<h3>${market}</h3>`;
        output += `<p>Average Rating: ${avgRating} out of 5 (${marketFeedback[market].count} reviews)</p>`;
        output += `<div class='feedback-entry'>`;
        marketFeedback[market].entries.forEach(entry => {
            output += `<p><strong>${entry.name}</strong>: ${entry.feedback} (${entry.rating} Stars)</p>`;
        });
        output += `</div>`;
    }

    analyticsDiv.innerHTML = output; 
}
