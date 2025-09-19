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

    // --- 2. LOGIC FOR FULL-SCREEN MENU ---
    const menuOverlay = document.getElementById('full-screen-menu');
    const menuButton = document.querySelector('.bttn-all-menu');
    const closeButton = document.getElementById('close-menu-btn');
    const headerNavLinks = document.querySelectorAll('.gnb-menu-list a');
    
    const mainMenuLinks = document.querySelectorAll('.main-menu-nav li');
    const subMenus = document.querySelectorAll('.sub-menu');

    // Function to open the menu
    function openMenu() {
        menuOverlay.classList.add('visible');
    }

    // Function to close the menu
    function closeMenu() {
        menuOverlay.classList.remove('visible');
    }
    
    // Open menu when header links or MENU button are clicked
    menuButton.addEventListener('click', openMenu);
    headerNavLinks.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page jump
        
        // Activate the correct sub-menu before opening
        const targetSubMenuId = link.dataset.menu + '-sub';
        
        mainMenuLinks.forEach(mainLink => {
            if (mainLink.dataset.submenu === targetSubMenuId) {
                mainLink.classList.add('active');
            } else {
                mainLink.classList.remove('active');
            }
        });
        
        subMenus.forEach(subMenu => {
            if (subMenu.id === targetSubMenuId) {
                subMenu.classList.add('active');
            } else {
                subMenu.classList.remove('active');
            }
        });

        openMenu();
    }));

    // Close menu with the close button
    closeButton.addEventListener('click', closeMenu);

    // Logic to switch sub-menus inside the overlay
    mainMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Deactivate all
            mainMenuLinks.forEach(item => item.classList.remove('active'));
            subMenus.forEach(item => item.classList.remove('active'));

            // Activate clicked one
            link.classList.add('active');
            const targetSubMenu = document.getElementById(link.dataset.submenu);
            if (targetSubMenu) {
                targetSubMenu.classList.add('active');
            }
        });
    });
});