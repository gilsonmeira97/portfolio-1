const menuToggle = document.querySelector('.menu-toggle')
const menuList = document.querySelector('.main-ul')
const menuBar = document.querySelectorAll('.bar')

menuToggle.addEventListener('click', function() {
    menuList.classList.toggle('open')
    menuBar.forEach( element => element.classList.toggle('active'))
    
})