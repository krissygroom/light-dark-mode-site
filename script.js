const toggleSwitch = document.querySelector('input[type="checkbox"]');
// Get elements to change to dark mode
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(colorTheme) {
    image1.src = `img/undraw_proud_coder_${colorTheme}.svg`;
    image2.src = `img/undraw_conceptual_idea_${colorTheme}.svg`;
    image3.src = `img/undraw_feeling_proud_${colorTheme}.svg`;
}

// Toggle theme
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark === 'dark' ? 'rgba(0 0 0 / 50%)' : 'rgba(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark === 'dark' ? 'rgba(255 255 255 / 50%)' : 'rgba(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark === 'dark' ? 'Dark Mode' : 'Light Mode';
    isDark === 'dark' ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark === 'dark' ? imageMode('dark') : imageMode('light');
}


// Switch Theme Dynamically
function switchTheme(event) {
    // if switch is toggled on, then change to dark mode
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode('light');
    }
}

// Event Listener for toggle switch
toggleSwitch.addEventListener('change', switchTheme);


// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode('dark');
    } else {
        toggleSwitch.checked = false;
        toggleDarkLightMode('light');
    }
}
