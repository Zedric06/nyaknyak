/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function toggleSidebar() {
    let sidebar = document.getElementById("sidebarnav");
    let content = document.getElementById("content");


    sidebar.style.width = sidebar.style.width === "200px" ? "0px" : "200px";
    content.style.marginLeft = content.style.marginLeft === "200px" ? "0px" : "200px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
  }