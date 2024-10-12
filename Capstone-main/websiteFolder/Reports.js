let reports = [];

// Handle form submission
document.getElementById('report-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const market = document.getElementById('market-name').value.trim(); // Use the value directly from the input
    const date = document.getElementById('inspection-date').value;
    const inspector = document.getElementById('inspector-name').value.trim();

    // Create a new report entry
    const reportEntry = { market, date, inspector };
    reports.push(reportEntry);

    // Reset the form
    document.getElementById('report-form').reset();

    // Update reports display
    displayReports();
});

// Function to display generated reports
function displayReports() {
    const reportsContainer = document.getElementById('reports-container');
    reportsContainer.innerHTML = ''; // Clear previous reports

    if (reports.length === 0) {
        reportsContainer.innerHTML = '<p>No reports generated yet.</p>';
        return;
    }

    reports.forEach((report, index) => {
        const reportDiv = document.createElement('div');
        reportDiv.classList.add('report-entry');
        reportDiv.innerHTML = `
            <strong>Market:</strong> ${report.market} <br>
            <strong>Date:</strong> ${report.date} <br>
            <strong>Inspector:</strong> ${report.inspector} 
            <button onclick="downloadReport(${index})">Download Report</button>
        `;
        reportsContainer.appendChild(reportDiv);
    });
}

// Function to download report as a text file
function downloadReport(index) {
    const report = reports[index];
    const reportContent = `Inspection Report\n\nMarket: ${report.market}\nDate: ${report.date}\nInspector: ${report.inspector}`;
    
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `Inspection_Report_${report.market}_${report.date}.txt`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
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
