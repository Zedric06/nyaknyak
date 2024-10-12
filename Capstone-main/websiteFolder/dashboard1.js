// Bar Chart Initialization
const barChartCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barChartCtx, {
    type: 'bar',
    data: {
        labels: ['Markets', 'Approved', 'Failed', 'Users'],
        datasets: [{
            label: 'Number of Applications',
            data: [50, 45, 5, 50], // Example data matching your stats
            backgroundColor: [
                '#ff6666', '#66b3ff', '#ffcc66', '#ffff66'
            ],
            borderColor: [
                '#ff3333', '#3399ff', '#ff9933', '#ffff33'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Doughnut Chart Initialization
const doughnutChartCtx = document.getElementById('doughnutChart').getContext('2d');
const doughnutChart = new Chart(doughnutChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Markets', 'Approved', 'Failed', 'Users'],
        datasets: [{
            label: 'Application Status',
            data: [50, 45 , 5, 50], // Example data matching your stats
            backgroundColor: [
                '#ff6666', '#66b3ff', '#ffcc66', '#ffff66'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
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
