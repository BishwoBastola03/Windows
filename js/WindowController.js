$('.chrome').click((e) => {
    const name =  'Google Chrome'
    const src =  'https://www.google.com/webhp?igu=1'
    createWindow(name, 'fullScreen', src)
})
$('.vs-code').click((e) => {
    const name =  'Visual Studio Code'
    const src =  'https://github1s.com/anirudha4/todo-app-react'
    createWindow(name, 'fullScreen',src)
})

$('.linkedin').click(e => {
    const name =  'Visual Studio Code'
    const src =  'https://www.linkedin.com/in/anirudhagandhare/'
    createWindow(name, 'restore',src)
})

// handling creating window

function createWindow(name, windowState, src) {
    const windowElement =  ce('div')
    addClass(windowElement, 'window')
    addClass(windowElement, windowState)
    const titleBar = ce('div')
    addClass(titleBar, 'title-bar')

    // const searchBar = ce('div')
    // addClass(searchBar, 'searchbar')
    // const input = ce('input')
    // input.type = "text"
    // input.placeholder = "Type in or paste URL"
   
    // ac(searchBar, input)
    // ac(titleBar, searchBar)
    
    
    const title = ce('p')
    addClass(title, 'title')
    title.innerText = name;
    const options = ce('div')
    addClass(options, 'options')
    const option1 = ce('div')
    addClass(option1, 'option')


    const option2 = ce('div')
    addClass(option2, 'option')

    const option3 = ce('div')
    addClass(option3, 'option')
    addClass(option3, 'red')
    option3.addEventListener('click', e => {
        const windowToClose = getClosest(e.target, '.window')
        closeWindow(windowToClose)
    })

    // const minimize = ce('span')
    // addClass(minimize, 'fas')
    // addClass(minimize, 'fa-minus')

    const minimize = ce('img')
    minimize.src = './img/minimize.svg'

    // const restore = ce('span')
    // addClass(restore, 'fas')
    // addClass(restore, 'fa-window-maximize')
    // restore.addEventListener('click', e => {
    //     getClosest(e.target, '.window').classList.add('fullScreen')
    // })
    const restore = ce('img')
    restore.src = './img/restore.svg'
    option2.addEventListener('click', e => {
        const closest = getClosest(e.target, '.window');
        // getClosest(e.target, '.window').classList.add('fullScreen')
        restore.src = closest.classList.contains('restore') ? './img/restore.svg' : './img/maximize.svg'
        closest.className = closest.classList.contains('restore') ? 'window fullScreen' : 'window restore'
    })
    ac(option2, restore)

    const times = ce('img')
    times.src = './img/close.svg'

    ac(option1, minimize)
    // ac(option2, restore)
    ac(option3, times)

    ac(options, option1)
    ac(options, option2)
    ac(options, option3)

    ac(titleBar, title)

    ac(titleBar, options)

    ac(windowElement, titleBar)


    const iframe = document.createElement('iframe')
    iframe.src = src
    // input.addEventListener('keyup', e => {
    //     if(e.key === 'Enter'){
    //         iframe.src = 'https://' +  e.target.value
    //     }
    // })
    ac(windowElement, iframe)
    ac(qs('body'), windowElement)
}

function closeWindow(windowToClose) {
    gsap.to(windowToClose, .2,{opacity: 0})
        setTimeout(() => {
            windowToClose.style.display = 'none'
    }, 200)
}

// src="https://github1s.com/vivek9patel/vivek9patel.github.io/blob/HEAD/src/components/ubuntu.js"