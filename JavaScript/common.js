const nav_button = document.getElementById("nav-button");
const nav_bar = document.getElementById("nav-bar");

nav_button.addEventListener('click', () => {
    nav_bar.classList.toggle('hidden');
});