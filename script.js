const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const themes = {
    'light': {
        'navBackground': 'rgb(255 255 255 / 50%)',
        'textBoxBackground': 'rgb(0 0 0 / 50%)',
        'icon': 'sun'
    },
    'dark': {
        'navBackground': 'rgb(0 0 0 / 50%)',
        'textBoxBackground': 'rgb(255 255 255 / 50%)',
        'icon': 'moon'
    }
}

// Helper function to capitalize first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Dark Mode Styles
function switchMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
    nav.style.backgroundColor = themes[color].navBackground;
    textBox.style.backgroundColor = themes[color].textBoxBackground;
    toggleIcon.children[0].textContent = `${capitalizeFirstLetter(color)} Mode`;
    toggleIcon.children[1].className = '';
    toggleIcon.children[1].classList.add('fas', `fa-${themes[color].icon}`);
}

// Swithc Theme Dynamically
function switchTheme(event) {
    let color;
    if (event.target.checked) {
        color = Object.keys(themes)[1];
    } else {
        color = Object.keys(themes)[0];
    }
    document.documentElement.setAttribute('data-theme', color);
    localStorage.setItem('theme', color);
    switchMode(color);
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for theme and set the theme accordingly
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme !== Object.keys(themes)[0]) {
        toggleSwitch.checked = true;
        switchMode(currentTheme);
    }
}