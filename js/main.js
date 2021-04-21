qs('.start-icon').addEventListener('click', e => {
    qs('.start-menu').classList.toggle('show')
})
qs('.app').addEventListener('click', e => {
    qs('.start-menu').classList.remove('show')
})

document.addEventListener('click', e => {
    if(!e.target.closest('.start')){
        qs('.start-menu').classList.remove('show')
    }
})

