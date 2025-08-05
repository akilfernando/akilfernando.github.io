const body = document.body;
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Function to set the theme
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Set initial theme based on system preference
setTheme(prefersDarkScheme.matches);

// Listen for changes to the system's dark mode setting
prefersDarkScheme.addEventListener('change', (e) => {
    setTheme(e.matches);
});