// Selecting elements from the DOM
const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('nav');

// Event listener for the hamburger icon click
hamburgerIcon.addEventListener('click', (e) => {
    // Preventing event propagation to avoid unintended behavior
    e.stopPropagation();
    // Adding a class to show the menu when the hamburger icon is clicked
    headerContent.classList.add('menu-open');
});

// Event listener for the close icon click
closeIcon.addEventListener('click', () => {
    // Removing the class to hide the menu when the close icon is clicked
    headerContent.classList.remove('menu-open');
});

// Event listener for the navigation menu click
nav.addEventListener('click', (e) => {
    // Preventing event propagation to avoid unintended behavior
    e.stopPropagation();
});

// Event listener for a click anywhere on the window
window.addEventListener('click', () => {
    // Removing the class to hide the menu when clicking outside the menu
    headerContent.classList.remove('menu-open');
});
