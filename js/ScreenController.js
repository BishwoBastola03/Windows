const landingTimeline = gsap.timeline()

$('document').ready(() => {
    setTimeout(() => {
        landingTimeline.to('.loading', { opacity: 0 })
        .to('.landing-container', {opacity: 1, visibility: 'visible'})
    }, 3000)

    $('.landing-container').click(() => {
        landingTimeline.to('.landing-container', {height: 0})
        .to('.container', { opacity: 1})
        $('.loading').css('display', 'none')
    })
})
