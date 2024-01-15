const navButton = document.getElementById('nav_button')
const navBar = document.getElementById('nav_bar')

navButton.addEventListener('click', () => {
  navBar.classList.toggle('hidden')
})
