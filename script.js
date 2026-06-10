const buttons = document.querySelectorAll('nav button');
const pages = document.querySelectorAll('.page');
let urlInterval = null;

function animateURL(targetWord) {
    clearInterval(urlInterval);

    let currentPath = window.location.pathname;
    
    if (currentPath === '/' || currentPath.endsWith('index.html')) {
        currentPath = '';
    } else if (currentPath.startsWith('/')) {
        currentPath = currentPath.substring(1);
    }

    urlInterval = setInterval(() => {
        if (currentPath.length > 0 && !targetWord.startsWith(currentPath)) {
            currentPath = currentPath.slice(0, -1);
            window.history.pushState({}, '', currentPath ? '/' + currentPath : '/');
        } 
        else if (currentPath.length < targetWord.length) {
            currentPath = targetWord.substring(0, currentPath.length + 1);
            window.history.pushState({}, '', '/' + currentPath);
        } 
        else {
            clearInterval(urlInterval);
        }
    }, 40);
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) return;

        const targetPageId = button.id.replace('navto', '');
        const targetPage = document.getElementById(targetPageId);

        animateURL(targetPageId);

        buttons.forEach(btn => {
            if (btn.classList.contains('active')) {
                btn.animate([
                    { outline: '4px solid #00FF66' },
                    { outline: '0px solid rgba(0, 255, 102, 0)' }
                ], { duration: 200, fill: 'forwards' });
                btn.classList.remove('active');
            }
        });

        button.classList.add('active');
        button.animate([
            { outline: '0px solid rgba(0, 255, 102, 0)' },
            { outline: '4px solid #00FF66' }
        ], { duration: 200, fill: 'forwards' });

        let currentPage = null;
        pages.forEach(page => {
            if (window.getComputedStyle(page).display === 'block') {
                currentPage = page;
            }
        });

        if (currentPage && targetPage && currentPage !== targetPage) {
            const fadeOut = currentPage.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], { duration: 200, easing: 'ease-in-out' });

            fadeOut.onfinish = () => {
                currentPage.style.display = 'none';
                targetPage.style.display = 'block';
                targetPage.style.opacity = '0';
                
                targetPage.animate([
                    { opacity: 0 },
                    { opacity: 1 }
                ], { duration: 200, easing: 'ease-in-out' }).onfinish = () => {
                    targetPage.style.opacity = '1';
                };
            };
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    let currentPath = window.location.pathname;

    if (currentPath === '/' || currentPath.endsWith('index.html')) {
        currentPath = 'about';
    } else {
        currentPath = currentPath.substring(1);
    }

    const targetPage = document.getElementById(currentPath);
    const targetButton = document.getElementById(`navto${currentPath}`);

    if (targetPage && targetButton) {
        pages.forEach(page => {
            page.style.display = 'none';
            page.style.opacity = '0';
        });
        targetPage.style.display = 'block';
        targetPage.style.opacity = '1';

        buttons.forEach(btn => btn.classList.remove('active'));
        targetButton.classList.add('active');
        targetButton.animate([
            { outline: '0px solid rgba(0, 255, 102, 0)' },
            { outline: '4px solid #00FF66' }
        ], { duration: 0, fill: 'forwards' });
    }

    handleNavResponsive();
});

const navMapping = {
    'navtoabout': { text: 'About', icon: '👤' },
    'navtoprojects': { text: 'Projects', icon: '📁' },
    'navtocontact': { text: 'Contact', icon: '✉️' },
    'navtosocials': { text: 'Socials', icon: '🌐' }
};

function handleNavResponsive() {
    const isMobile = window.innerWidth <= 600;

    buttons.forEach(button => {
        const mapping = navMapping[button.id];
        if (mapping) {
            button.textContent = isMobile ? mapping.icon : mapping.text;
        }
    });
}

window.addEventListener('resize', handleNavResponsive);