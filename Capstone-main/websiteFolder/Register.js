let markets = [];

// Function to add a market
function addMarket() {
    const marketName = document.getElementById('marketName').value.trim();
    
    if (marketName) {
        markets.push(marketName);
        document.getElementById('marketName').value = ''; // Clear input
        updateMarketList(); // Update the displayed market list
        alert(`Market "${marketName}" added successfully!`);
    } else {
        alert("Please enter a market name.");
    }
}

// Function to update the market list displayed
function updateMarketList() {
    const registeredMarketsList = document.getElementById('registeredMarketsList');
    registeredMarketsList.innerHTML = ''; // Clear existing list

    markets.forEach(market => {
        const li = document.createElement('li');
        li.textContent = market; // Set market name as list item text
        registeredMarketsList.appendChild(li);
    });

    // Show message if no markets are registered
    if (markets.length === 0) {
        const li = document.createElement('li');
        li.textContent = "No markets registered yet.";
        li.style.textAlign = "center"; // Center the message
        registeredMarketsList.appendChild(li);
    }
}

// Function to view registered markets (if you want separate logic)
function viewRegisteredMarkets() {
    if (markets.length === 0) {
        alert("No registered markets to display.");
    } else {
        alert(`Registered Markets: \n- ${markets.join('\n- ')}`);
    }
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

