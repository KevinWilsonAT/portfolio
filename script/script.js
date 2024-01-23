let btnMenu = document.getElementById('btn-menu-open')
let menu = document.getElementById('mobile-menu')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('menu-open')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('menu-open')
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('menu-open')
})