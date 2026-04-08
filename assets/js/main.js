/**
 * Mudan Partner - Main Scripts
 * Includes Tailwind configuration and AOS initialization.
 */

// 1. Tailwind Configuration
// This must execute before the Tailwind CDN script loads.
tailwind.config = {
        darkMode: "class",
        theme: {
            extend: {
                colors: {
                    "primary": "#1A365D",
                    "primary-container": "#2A4A7F",
                    "secondary": "#F6AD55",
                    "secondary-container": "#ED8936",
                    "surface": "#F7FAFC",
                    "surface-container": "#EDF2F7",
                    "surface-container-low": "#E2E8F0",
                    "surface-container-lowest": "#FFFFFF",
                    "on-surface": "#1A202C",
                    "on-surface-variant": "#4A5568",
                    "outline": "#A0AEC0"
                },
                fontFamily: {
                    "headline": ["Manrope", "sans-serif"],
                    "body": ["Manrope", "sans-serif"],
                    "label": ["Manrope", "sans-serif"]
                }
        }
    }
};

// 2. Initialize AOS animations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-in-out-cubic',
        });
    }

    // 3. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (menuBtn && mobileMenu && menuIcon) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.textContent = 'menu';
            } else {
                menuIcon.textContent = 'close';
            }
        });

        // Close menu when clicking links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuIcon.textContent = 'menu';
            });
        });
    }
});
