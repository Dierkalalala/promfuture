const modalMenu = document.getElementsByClassName('modal-menu')[0]
function burgerTrigger(el) {
    el.classList.toggle('open')
    if(modalMenu.classList.contains('active')){
        modalMenu.classList.add('disappear')
        setTimeout('modalMenu.classList.toggle(\'active\')', 1000)
        setTimeout('modalMenu.classList.remove(\'disappear\')', 980)
        return false
    }
    modalMenu.classList.toggle('active')
}
