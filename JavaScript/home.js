const sandwich_menu = document.getElementsByClassName("sandwich_menu")[0]
const menu = document.getElementsByClassName("menu")[0]

sandwich_menu.addEventListener('click', () => {
    menu.classList.toggle('active')
})