const page1Animation = () => {
    var tl = gsap.timeline()


    tl.from('nav h1', {
        y: -30,
        opacity: 0,
        delay: 1
    })
    tl.from('nav h4,nav button', {
        y: -30,
        opacity: 0,
        delay: 0.7,
        duration: 1,
        stagger: 0.15
    })
    tl.from('#section1 .center .centerpart1 h1', {
        x: -300,
        opacity: 0,
        duration: 0.7
    })
    tl.from('#section1 .center .centerpart1 p', {
        x: -100,
        opacity: 0,
        duration: 0.4
    })
    tl.from('#section1 .center .centerpart1 button', {
        opacity: 0,
        duration: 0.4
    })

    tl.from('#section1 .center .centerpart2 img ', {
        opacity: 0,
        duration: 0.5
    }, "-=0.5")

    tl.from('#section1 .section-bottom img ', {
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        y: 30
    }, "-=0.5")
}

const page2Animation = () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section2',
            scroller: 'body',

            start: 'top 50%',
            end: 'top 0',
            scrub: 2
        }
    })

    tl.from('#section2 #service', {
        y: -30,
        opacity: 0,
        duration: 0.5
    })

    tl.from('#section2 .container .elem.line1.left', {
        x: -300,
        opacity: 0,
        duration: 1
    }, 'line1')


    tl.from('#section2 .container .elem.line1.right', {
        x: 300,
        opacity: 0,
        duration: 1
    }, 'line1')

    tl.from('#section2 .container .elem.line2.left', {
        x: -300,
        opacity: 0,
        duration: 1
    }, 'line2')

    tl.from('#section2 .container .elem.line2.right', {
        x: 300,
        opacity: 0,
        duration: 1
    }, 'line2')

}

page1Animation()
page2Animation()




