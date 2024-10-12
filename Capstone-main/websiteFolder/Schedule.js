let markets = [];
let inspectionHistory = [];

function addMarket() {
    const marketName = document.getElementById('marketName').value.trim();
    
    if (marketName) {
        markets.push(marketName);
        document.getElementById('marketName').value = ''; // Clear input field
        updateMarketSelect();
        alert(`Market "${marketName}" added successfully!`); // Fixed string interpolation
    } else {
        alert("Please enter a market name.");
    }
}

function updateMarketSelect() {
    const marketSelect = document.getElementById('marketSelect');
    const statusSelect = document.getElementById('statusSelect');
    
    // Clear previous options
    marketSelect.innerHTML = '';
    statusSelect.innerHTML = '';

    // Add options for each market
    markets.forEach(market => {
        const option = new Option(market, market);
        marketSelect.add(option);
        statusSelect.add(option.cloneNode(true)); // Clone to add to both selects
    });
}

function inspectMarket() {
    const selectedMarket = document.getElementById('marketSelect').value;

    if (selectedMarket) {
        alert(`Inspected market "${selectedMarket}".`); // Fixed string interpolation
        inspectionHistory.push(`Inspected ${selectedMarket} on ${new Date().toLocaleString()}`); // Fixed string interpolation
        updateHistoryList();
    } else {
        alert("Please select a market to inspect.");
    }
}

function scheduleInspection() {
    const date = document.getElementById('inspectionDate').value;

    if (date) {
        alert(`Inspection scheduled for ${date}.`); // Fixed string interpolation
    } else {
        alert("Please select a date for the inspection.");
    }
}

function viewHistory() {
    updateHistoryList();
}

function updateHistoryList() {
    const historyList = document.getElementById('historyList');
    
    // Clear the history list
    historyList.innerHTML = '';
    
    // Add each entry to the list
    inspectionHistory.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

function viewStatus() {
    const selectedMarket = document.getElementById('statusSelect').value;

    if (selectedMarket) {
        document.getElementById('statusOutput').textContent = `Status of "${selectedMarket}": Inspected`; // Fixed string interpolation
    } else {
        alert("Please select a market to view its status.");
    }
}

function viewRegisteredMarkets() {
    const registeredMarketsList = document.getElementById('registeredMarketsList');
    
    // Clear the list
    registeredMarketsList.innerHTML = '';
    
    // Add each registered market to the list
    markets.forEach(market => {
        const li = document.createElement('li');
        li.textContent = market;
        registeredMarketsList.appendChild(li);
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
