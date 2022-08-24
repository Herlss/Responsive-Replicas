const brgMenu = document.querySelector('.burger-menu')
const controls = document.querySelector('.mobile-controls-panel')
let openMenu = false

brgMenu.addEventListener('click', () => {
    if (!openMenu){
        brgMenu.classList.add('open')
        openMenu = true
        controls.style.display = 'flex'
    }else {
        brgMenu.classList.remove('open')
        openMenu = false
        controls.style.display = 'none'
    }
})