const sandwich_menu = document.querySelector(".sandwich_menu");
const menu = document.querySelector(".menu");

sandwich_menu.addEventListener('click', () => {
    menu.classList.toggle('active')
})