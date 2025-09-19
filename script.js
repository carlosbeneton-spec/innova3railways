document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. LOGIC FOR PAGE TABS ---
    const tabLinks = document.querySelectorAll('.tab-list a');
    const tabPanels = document.querySelectorAll('.contents .tab-panel');

    tabLinks.forEach(link => {
        link.addEventListener('click', event => {
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

    // --- 2. LOGIC FOR DYNAMIC DROPDOWN MENU ---
    const menuContainer = document.getElementById('dropdown-menu');
    const headerNavLinks = document.querySelectorAll('.gnb-menu-list a[data-menu]');
    let hideMenuTimeout;

    // Function to show the menu and position the correct panel
    function showMenu(triggerLink) {
        clearTimeout(hideMenuTimeout); // Cancel any pending hide command
        menuContainer.classList.add('visible');

        // Hide all panels first
        document.querySelectorAll('.dropdown-panel').forEach(p => p.style.display = 'none');

        // Find the matching panel
        const panelId = triggerLink.dataset.menu;
        const targetPanel = document.querySelector(`.dropdown-panel[data-menu-panel="${panelId}"]`);

        if (targetPanel) {
            // Calculate position
            const linkRect = triggerLink.getBoundingClientRect();
            const headerRect = document.getElementById('header').getBoundingClientRect();
            
            // Position the panel's left edge to align with the link's left edge
            targetPanel.style.left = `${linkRect.left - headerRect.left}px`;
            targetPanel.style.display = 'block';
        }
    }

    // Function to hide the menu
    function hideMenu() {
        // Delay hiding to allow moving mouse from link to panel
        hideMenuTimeout = setTimeout(() => {
            menuContainer.classList.remove('visible');
        }, 200);
    }

    // Add mouseover event to each header link that has a menu
    headerNavLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            showMenu(link);
        });
    });

    // Keep menu open when hovering over the header or the dropdown itself
    document.getElementById('header').addEventListener('mouseleave', hideMenu);
    menuContainer.addEventListener('mouseenter', () => clearTimeout(hideMenuTimeout));
});