document.addEventListener('DOMContentLoaded', function() {
    // Select all tab links and tab content panels
    const tabLinks = document.querySelectorAll('.tab-list a');
    const tabPanels = document.querySelectorAll('.contents .tab-panel');

    // Add a click event listener to each tab link
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // --- 1. Deactivate all tabs and panels ---
            // Remove 'active' class from all tab list items
            tabLinks.forEach(function(item) {
                item.parentElement.classList.remove('active');
            });
            // Hide all tab panels
            tabPanels.forEach(function(panel) {
                panel.classList.remove('active');
            });

            // --- 2. Activate the clicked tab and corresponding panel ---
            // Add 'active' class to the clicked tab's parent (the <li>)
            link.parentElement.classList.add('active');
            
            // Get the target panel's ID from the link's href attribute (e.g., "#pavement")
            const targetPanelId = link.getAttribute('href');
            const targetPanel = document.querySelector(targetPanelId);
            
            // Show the corresponding panel
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});