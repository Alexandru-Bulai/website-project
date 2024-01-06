const nav_button = document.getElementById("nav_button");
const nav_bar = document.getElementById("nav_bar");

nav_button.addEventListener('click', () => {
    nav_bar.classList.toggle('hidden');
});