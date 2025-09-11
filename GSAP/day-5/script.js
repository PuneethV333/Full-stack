const refMenu = document.getElementById('menu')
const refCross = document.getElementById('cross')


var tl = gsap.timeline()

tl.to("#full", {
    right: 0,
})
tl.from('#full h4', {
    x: 40,
    opacity: 0,
    stagger: 0.28,
    duration: 0.5
})
tl.from("#full i", {
    opacity: 0
})

tl.pause()
refMenu.addEventListener('click', () => {
    tl.play()
})
refCross.addEventListener('click', () => {
    tl.reverse()
})