gsap.registerPlugin(ScrollTrigger);
gsap.to("#page2 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scrub:2,
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        pin:true

    }

})