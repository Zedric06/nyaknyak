<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="prac.css">
</head>
<body>
<div class="sidebar" id="sidebar">
    <h2>Food and Safety</h2>
    <a href="Dashboard1.html"><i class="fas fa-home"></i><span>Dashboard</span></a>
    
    <!-- Market Monitoring and Compliance with Submenu -->
    <a href="#" class="menu-item" onclick="toggleSubMenu('monitoring-submenu')">
        <i class="fas fa-store"></i> <span>Market Monitoring and Compliance</span>
    </a>
    <div class="sub-menu" id="monitoring-submenu">
        <a href="monitor-overview.html"><i class="fas fa-eye"></i> <span>Overview</span></a>
        <a href="monitor-reports.html"><i class="fas fa-file-alt"></i> <span>Reports</span></a>
        <a href="monitor-alerts.html"><i class="fas fa-bell"></i> <span>Alerts</span></a>
    </div>

    <!-- Market Rating and Review with Submenu -->
    <a href="#" class="menu-item" onclick="toggleSubMenu('review-submenu')">
        <i class="fas fa-star"></i> <span>Market Rating and Review</span>
    </a>
    <div class="sub-menu" id="review-submenu">
        <a href="review-feedback.html"><i class="fas fa-comments"></i> <span>User Feedback</span></a>
        <a href="review-analytics.html"><i class="fas fa-chart-line"></i> <span>Analytics</span></a>
        <a href="review-config.html"><i class="fas fa-cog"></i> <span>Configuration</span></a>
    </div>

    <a href="inspect.html"><i class="fas fa-binoculars"></i><span>Market Inspection Results</span></a>
    
    <a href="permit.html"><i class="fas fa-certificate"></i><span>Market Certificates and Permits</span></a>
    
    <a href="#" class="menu-item" onclick="toggleSubMenu('locator-submenu')">
        <i class="fas fa-map"></i><span>Market Locator</span>
    </a>
    <div class="sub-menu" id="locator-submenu">
        <a href="locator-functionality.html"><i class="fas fa-search"></i> <span>Locator Functionality</span></a>
        <a href="locator-categories.html"><i class="fas fa-tags"></i> <span>Categories</span></a>
    </div>

    <a href="#"><i class="fas fa-sign-out-alt"></i> <span>Logout</span></a>
</div>
<button id="toggle-button">Toggle Sidebar</button>
<script src="prac.js"></script>
</body>
</html>