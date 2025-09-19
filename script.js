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
    const menuButton = document.querySelector('.bttn-all-menu');
    const headerNavLinks = document.querySelectorAll('.gnb-menu-list a');
    const mainMenuLinks = document.querySelectorAll('.main-menu-nav li');
    const subMenus = document.querySelectorAll('.sub-menu');

    // Function to toggle the menu's visibility
    function toggleMenu() {
        menuContainer.classList.toggle('visible');
    }

    // Function to activate a specific submenu
    function showSubMenu(menuId) {
        const targetSubMenuId = menuId + '-sub';

        mainMenuLinks.forEach(mainLink => {
            mainLink.classList.toggle('active', mainLink.dataset.submenu === targetSubMenuId);
        });

        subMenus.forEach(subMenu => {
            subMenu.classList.toggle('active', subMenu.id === targetSubMenuId);
        });
    }

    // Event listener for the main MENU button
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the click from closing the menu immediately
        toggleMenu();
    });

    // Event listeners for header navigation links
    headerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const menuId = e.target.dataset.menu;
            showSubMenu(menuId);
            // If the menu is already open, this click won't close it.
            // If it's closed, it will open to the correct section.
            if (!menuContainer.classList.contains('visible')) {
                toggleMenu();
            }
        });
    });

    // Event listeners for switching sub-menus inside the dropdown
    mainMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menuId = link.dataset.submenu.replace('-sub', '');
            showSubMenu(menuId);
        });
    });

    // Close the dropdown if clicking outside of it
    document.addEventListener('click', (e) => {
        if (menuContainer.classList.contains('visible') && !menuContainer.contains(e.target) && !e.target.closest('#header')) {
            toggleMenu();
        }
    });
});