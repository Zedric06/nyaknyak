<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="dashboard1.css">
    
</head>
<body>

<!-- Hamburger Menu -->
<div class="hamburger" id="hamburger">&#9776;</div>

<!-- Sidebar -->
<div class="sidebar" id="sidebar">
    <h2>Food and Safety</h2>
    <a href="Dashboard1.html"><i class="fas fa-home"></i><span>Dashboard</span></a>
    <a href="#" class="menu-item" onclick="toggleSubMenu('monitoring-submenu')">
        <i class="fas fa-clipboard-list"></i> <span>Market Monitoring and Compliance</span>
    </a>

    <ul>
    <div class="sub-menu" id="monitoring-submenu">
        <a href="Register.html"><i class="fas fa-registered"></i> <span>Registered Market</span></a>
        <a href="Schedule.html"><i class="fas fa-binoculars"></i> <span>Inspections</span></a>
    </div>
    </ul>

    <a href="#" class="menu-item" onclick="toggleSubMenu('review-submenu')">  
        <i class="fas fa-star"></i> <span>Market Rating Review</span>
    </a>
    <ul>
    <div class="sub-menu" id="review-submenu">
        <a href="Feedback.html"><i class="fas fa-comment"></i> <span>User Feedback</span></a>
    </div>
    </ul>

    <a href="#" class="menu-item" onclick="toggleSubMenu('inspection-submenu')">
        <i class="fas fa-mask"></i> <span>Inspection Results and Overview</span>
    </a>

    <ul>
    <div class="sub-menu" id="inspection-submenu">
        <a href="Reports.html"><i class="fas fa-record-vinyl"></i> <span>Inspection Reports</span></a>
    </div> 
    </ul>

    <a href="#" class="menu-item" onclick="toggleSubMenu('permits-submenu')">
        <i class="fas fa-certificate"></i> <span>Certificates and Permits</span>
    </a>

    <ul>
    <div class="sub-menu" id="permits-submenu">
        <a href="Permits.html"><i class="fas fa-stamp"></i> <span>Permit Application Tracking</span></a>
        <a href="Notification.html"><i class="fas fa-bell"></i> <span>Inspection Notifications</span></a>
    </div>
    </ul>
    
    <a>
        <i class="fas fa-map-marked"></i> <span>Market Category Locator</span>
    </a>
    <a href="#"><i class="fas fa-sign-out-alt"></i> <span>Logout</span></a>

    <!-- Toggle Button -->
    <div class="toggle-btn" id="toggle-btn">
        <i class="fas fa-chevron-left"></i>
    </div>
</div>

<div class="container" id="content">
    <h1>Food Market Safety and Inspection Management Dashboard</h1>

    <!-- Stats Cards -->
    <div class="stats-container">
        <div class="stat-card" style="background-color: #ff6666;">
            <h2>Total Market</h2>
            <span>50</span>
            <i class="fas fa-clipboard-list"></i>
        </div>
        <div class="stat-card" style="background-color: #66b3ff;">
            <h2>Total Approved</h2>
            <span>45</span>
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="stat-card" style="background-color: #ffcc66;">
            <h2>Total Failed</h2> 
            <span>5</span>
            <i class="fas fa-ban"></i>
        </div>
        <div class="stat-card" style="background-color: #ffff66;">
            <h2>Users</h2>
            <span>50</span>
            <i class="fas fa-users"></i>
        </div>
    </div>

    <!-- Charts -->
    <div class="charts-container">
        <div class="chart-card">
            <h3>Admin Monitoring</h3>
            <canvas id="barChart"></canvas>
        </div>
        <div class="chart-card">
            <h3>Admin Inspection</h3>
            <canvas id="doughnutChart"></canvas>
        </div>
    </div>

    <!-- Task Table -->
    <div class="task-table-container">
        <div class="filter">
            <label for="filterStatus">Select:</label>
            <select id="filterStatus">
                <option value="select">Select an Option</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="failed">Failed</option>
            </select>
        </div>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Market 1</td>
                <td>Pending</td>
                <td>Meat</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Market 2</td>
                <td>Approved</td>
                <td>Meat</td>
            </tr>
            </tbody>
        </table>
    </div>
</div>

<footer>
  <p>&copy;Local Government Unit 46</p>
</footer>



<!-- JavaScript -->
<script src="dashboard1.js"></script> 
</body>
</html>
