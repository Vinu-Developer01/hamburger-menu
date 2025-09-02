const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector('.header-content');
const closeIcon = document.querySelector('.close-icon')
const goToTop = document.querySelector('.go-to-top')
const mainContent = document.querySelector('.main-content')
const nav = document.querySelector('.nav-bar')

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    headerContent.classList.add('menu-open')
})
closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})
window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})
nav.addEventListener('click', (e) => {
    e.stopPropagation();
})
goToTop.addEventListener('click', () => {
    mainContent.scrollTo(0, 0)
})
