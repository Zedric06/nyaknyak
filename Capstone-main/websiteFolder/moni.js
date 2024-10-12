document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const complianceTable = document.getElementById('complianceTable').getElementsByTagName('tbody')[0];

    // Sample data
    const complianceData = [
        { id: 1, name: 'Market 1', status: 'Pending' },
        { id: 2, name: 'Market 2', status: 'Approved' },
        { id: 3, name: 'Market 3', status: 'Failed' },
        { id: 4, name: 'Market 4', status: 'Approved' },
        { id: 5, name: 'Market 5', status: 'Failed' },
    ];

    // Function to load data into the table
    const loadTableData = (data) => {
        complianceTable.innerHTML = '';
        data.forEach(item => {
            const row = complianceTable.insertRow();
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.status}</td>
            `;
        });
    };

    // Filter table data based on search input
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredData = complianceData.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        );
        loadTableData(filteredData);
    });

    // Initial load
    loadTableData(complianceData);
});
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

toggleBtn.addEventListener('click', function () {
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
});



