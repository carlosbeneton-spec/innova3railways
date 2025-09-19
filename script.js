document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. LOGIC FOR PAGE TABS ---
    const tabLinks = document.querySelectorAll('.tab-list a');
    const tabPanels = document.querySelectorAll('.contents .tab-panel');

    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            tabLinks.forEach(item => item.parentElement.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            link.parentElement.classList.add('active');
            const targetPanel = document.querySelector(link.getAttribute('href'));
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // --- 2. LOGIC FOR DROPDOWN MENU ---
    const menuContainer = document.getElementById('dropdown-menu');
    const menuTriggers = document.querySelectorAll('.gnb-menu-list a, .bttn-all-menu');

    // Function to toggle the menu's visibility
    function toggleMenu() {
        menuContainer.classList.toggle('visible');
    }
    
    // Add click listener to all triggers
    menuTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    });

    // Close the dropdown if clicking outside of the header/menu area
    document.addEventListener('click', (e) => {
        if (menuContainer.classList.contains('visible') && !e.target.closest('#header')) {
            toggleMenu();
        }
    });
});