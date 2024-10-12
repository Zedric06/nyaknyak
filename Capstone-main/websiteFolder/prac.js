function toggleSubMenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.classList.toggle('open'); // Toggle open class
}

document.getElementById('toggle-button').onclick = function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); // Toggle sidebar visibility
};
