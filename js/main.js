// Initialize Gamification
window.gamification = new GamificationSystem();

// Dark Mode Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlClassList = document.documentElement.classList;

// Check for saved theme preference or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlClassList.add('dark');
} else {
    htmlClassList.remove('dark');
}

themeToggleBtn.addEventListener('click', () => {
    if (htmlClassList.contains('dark')) {
        htmlClassList.remove('dark');
        localStorage.theme = 'light';
    } else {
        htmlClassList.add('dark');
        localStorage.theme = 'dark';
    }
});

// Routing Logic (Hash based)
const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.nav-link');

function loadPage(pageName) {
    const scrollContainer = document.getElementById('scroll-container');
    const scrollProgressBar = document.getElementById('scroll-progress');
    if (scrollContainer) scrollContainer.scrollTop = 0;
    if (scrollProgressBar) scrollProgressBar.style.width = '0%';

    if (window.appPages && window.appPages[pageName]) {
        const html = window.appPages[pageName];
        mainContent.innerHTML = `<div class="fade-in content-area">${html}</div>`;
        
        // Re-run any scripts that might be in the loaded HTML
        const scripts = mainContent.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    } else {
        mainContent.innerHTML = `
            <div class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center text-red-700 dark:text-red-400 fade-in">
                <i class="fa-solid fa-triangle-exclamation text-4xl mb-3"></i>
                <h3 class="text-xl font-bold mb-2">Ralat</h3>
                <p>Halaman <b>${pageName}</b> tidak dapat dimuatkan. Pastikan anda telah mencipta fail <code>pages/${pageName}.js</code>.</p>
            </div>
        `;
    }
}

// Mobile Sidebar Logic
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobile-overlay');
    if (!sidebar || !mobileOverlay) return;
    
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
        // Open
        sidebar.classList.remove('-translate-x-full');
        mobileOverlay.classList.remove('hidden');
        setTimeout(() => mobileOverlay.classList.remove('opacity-0'), 10);
    } else {
        // Close
        sidebar.classList.add('-translate-x-full');
        mobileOverlay.classList.add('opacity-0');
        setTimeout(() => mobileOverlay.classList.add('hidden'), 300);
    }
}

function handleNavigation() {
    let hash = window.location.hash.replace('#', '');
    if (!hash) hash = 'bab1'; // Default page

    // Update active state in sidebar
    navLinks.forEach(link => {
        link.classList.remove('bg-indigo-50', 'dark:bg-indigo-900/30', 'text-indigo-600', 'dark:text-indigo-400');
        const iconContainer = link.querySelector('div');
        if(iconContainer) iconContainer.classList.remove('bg-indigo-100', 'dark:bg-indigo-900/50');
        
        if (link.getAttribute('href') === `#${hash}`) {
            link.classList.add('bg-indigo-50', 'dark:bg-indigo-900/30', 'text-indigo-600', 'dark:text-indigo-400');
            if(iconContainer) iconContainer.classList.add('bg-indigo-100', 'dark:bg-indigo-900/50');
        }
    });

    loadPage(hash);

    // Close mobile sidebar if open
    if (window.innerWidth < 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    }
}

// Listeners
window.addEventListener('hashchange', handleNavigation);
window.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
    
    // Attach mobile menu listeners
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleSidebar);
    if (mobileOverlay) mobileOverlay.addEventListener('click', toggleSidebar);

    // Reading Progress Logic
    const scrollContainer = document.getElementById('scroll-container');
    const scrollProgressBar = document.getElementById('scroll-progress');
    
    if (scrollContainer && scrollProgressBar) {
        scrollContainer.addEventListener('scroll', () => {
            const scrollTop = scrollContainer.scrollTop;
            const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
            
            if (scrollHeight <= 0) return; // Not scrollable
            
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            scrollProgressBar.style.width = scrollPercentage + '%';
        });
    }
});
